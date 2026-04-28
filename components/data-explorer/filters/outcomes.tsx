"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FilterCollapsible } from "@/components/data-explorer/filter-collapsible"
import { CheckboxGroup } from "@/components/form/checkbox-group"

import { OUTCOME_MEASURE_OPTIONS } from "@/constants/constants-filters"
import { Outcomes } from "@/lib/types"
import { FilteredData } from "@/lib/data-explorer-utils"
import { outcomeFiltersFields } from "@/lib/filter-schemas"
import { loadFormValues, usePersistedForm } from "@/hooks/use-persisted-form"

const STORAGE_KEY = "lili-data-explorer-outcomes"
const formSchemaOutcomes = z.object(outcomeFiltersFields)

type FilterOutcomesProps = {
  data: Outcomes
  filteredData: FilteredData
  setFilteredData: Dispatch<SetStateAction<FilteredData>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterOutcomes = (props: FilterOutcomesProps) => {
  const { data, setFilteredData, filterOpen, setFilterOpen } = props

  const defaults = {
    outcome_measure: OUTCOME_MEASURE_OPTIONS.map((o) => o.value),
  }

  const form = useForm<z.infer<typeof formSchemaOutcomes>>({
    resolver: zodResolver(formSchemaOutcomes),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: loadFormValues(STORAGE_KEY, defaults),
  })

  usePersistedForm(form, STORAGE_KEY)

  function onSubmit(values: z.infer<typeof formSchemaOutcomes>) {
    let subset = data

    subset = subset.filter((d) =>
      values.outcome_measure.some((v) => d.outcome_measure.includes(v))
    )

    setFilteredData((prev) => ({ ...prev, outcomes: subset }))
  }

  return (
    <FilterCollapsible title="Filter" open={filterOpen} onOpenChange={setFilterOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-3">
          <CheckboxGroup
            control={form.control}
            name="outcome_measure"
            label="Outcome measure"
            options={OUTCOME_MEASURE_OPTIONS}
          />
          <Button type="submit" className="h-auto">Update table</Button>
        </form>
      </Form>
    </FilterCollapsible>
  )
}
