"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FilterCollapsible } from "@/components/data-explorer/filter-collapsible"
import { CheckboxGroup } from "@/components/form/checkbox-group"
import { SliderField } from "@/components/form/slider-field"
import { paperFiltersFields } from "@/lib/filter-schemas"

import { PAPER_TYPE_OPTIONS, PAPER_OPEN_ACCESS_OPTIONS } from "@/constants/constants-filters"
import { Papers } from "@/lib/types"
import { FilteredData } from "@/lib/data-explorer-utils"
import { loadFormValues, usePersistedForm } from "@/hooks/use-persisted-form"

const STORAGE_KEY = "lili-data-explorer-papers"
const formSchemaPapers = z.object(paperFiltersFields)

type FilterPapersProps = {
  data: Papers
  filteredData: FilteredData
  setFilteredData: Dispatch<SetStateAction<FilteredData>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterPapers = (props: FilterPapersProps) => {
  const { data, setFilteredData, filterOpen, setFilterOpen } = props

  const defaults = {
    paper_year: [
      Math.min(...data.map((d) => d.paper_year)),
      Math.max(...data.map((d) => d.paper_year)),
    ],
    paper_type: PAPER_TYPE_OPTIONS.map((o) => o.value),
    paper_open_access: PAPER_OPEN_ACCESS_OPTIONS.map((o) => o.value),
  }

  const form = useForm<z.infer<typeof formSchemaPapers>>({
    resolver: zodResolver(formSchemaPapers),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: loadFormValues(STORAGE_KEY, defaults),
  })

  usePersistedForm(form, STORAGE_KEY)

  function onSubmit(values: z.infer<typeof formSchemaPapers>) {
    let subset = data

    subset = subset.filter(
      (d) => d.paper_year >= values.paper_year[0] && d.paper_year <= values.paper_year[1]
    )
    subset = subset.filter((d) =>
      values.paper_type.some((v) => d.paper_type.includes(v))
    )
    subset = subset.filter((d) =>
      values.paper_open_access.some((v) => d.paper_open_access.includes(v))
    )

    setFilteredData((prev) => ({ ...prev, papers: subset }))
  }

  return (
    <FilterCollapsible title="Filter" open={filterOpen} onOpenChange={setFilterOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
            <SliderField
              control={form.control}
              name="paper_year"
              label="Publication year"
              min={Math.min(...data.map((d) => d.paper_year))}
              max={Math.max(...data.map((d) => d.paper_year))}
              minStepsBetweenThumbs={1}
            />
            <CheckboxGroup
              control={form.control}
              name="paper_type"
              label="Publication type"
              options={PAPER_TYPE_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="paper_open_access"
              label="Access type"
              options={PAPER_OPEN_ACCESS_OPTIONS}
            />
          </div>
          <Button type="submit" className="h-auto">Update table</Button>
        </form>
      </Form>
    </FilterCollapsible>
  )
}
