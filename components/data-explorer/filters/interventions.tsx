"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FilterCollapsible } from "@/components/data-explorer/filter-collapsible"
import { CheckboxGroup } from "@/components/form/checkbox-group"

import {
  INTERVENTION_CATEGORY_OPTIONS,
  DELIVERY_FORMAT_OPTIONS,
} from "@/constants/constants-filters"

import { Interventions } from "@/lib/types"
import { FilteredData } from "@/lib/data-explorer-utils"
import { interventionFiltersSchema } from "@/lib/filter-schemas"
import { loadFormValues, usePersistedForm } from "@/hooks/use-persisted-form"

const STORAGE_KEY = "lili-data-explorer-interventions"

type FilterInterventionsProps = {
  data: Interventions
  filteredData: FilteredData
  setFilteredData: Dispatch<SetStateAction<FilteredData>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterInterventions = (props: FilterInterventionsProps) => {
  const { data, setFilteredData, filterOpen, setFilterOpen } = props

  const defaults = {
    intervention_category: INTERVENTION_CATEGORY_OPTIONS.map((o) => o.value),
    delivery_format: DELIVERY_FORMAT_OPTIONS.map((o) => o.value),
  }

  const form = useForm<z.infer<typeof interventionFiltersSchema>>({
    resolver: zodResolver(interventionFiltersSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: loadFormValues(STORAGE_KEY, defaults),
  })

  usePersistedForm(form, STORAGE_KEY)

  function onSubmit(values: z.infer<typeof interventionFiltersSchema>) {
    let subset = data

    subset = subset.filter((d) =>
      values.intervention_category.some((v) => d.intervention_category.includes(v))
    )
    subset = subset.filter((d) =>
      values.delivery_format.some((v) => d.delivery_format.includes(v))
    )

    setFilteredData((prev) => ({ ...prev, interventions: subset }))
  }

  return (
    <FilterCollapsible title="Filter" open={filterOpen} onOpenChange={setFilterOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CheckboxGroup
              control={form.control}
              name="intervention_category"
              label="Intervention category"
              options={INTERVENTION_CATEGORY_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="delivery_format"
              label="Delivery format"
              options={DELIVERY_FORMAT_OPTIONS}
            />
          </div>
          <Button type="submit" className="h-auto">Update table</Button>
        </form>
      </Form>
    </FilterCollapsible>
  )
}
