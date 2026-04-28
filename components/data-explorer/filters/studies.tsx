"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FilterCollapsible } from "@/components/data-explorer/filter-collapsible"
import { CheckboxGroup } from "@/components/form/checkbox-group"
import { InputField } from "@/components/form/input-field"

import {
  STUDY_PREREGISTERED_OPTIONS,
  STUDY_DATA_AVAILABLE_OPTIONS,
  STUDY_DESIGN_OPTIONS,
  STUDY_CONDITION_ASSIGNMENT_OPTIONS,
  STUDY_RANDOMIZATION_OPTIONS,
} from "@/constants/constants-filters"

import { Studies } from "@/lib/types"
import { FilteredData } from "@/lib/data-explorer-utils"
import { studyFiltersFields } from "@/lib/filter-schemas"
import { loadFormValues, usePersistedForm } from "@/hooks/use-persisted-form"

const STORAGE_KEY = "lili-data-explorer-studies"

const formSchemaStudies = z.object({
  study_n: z.coerce.number().min(1, { message: "Must be a positive number." }) as z.ZodNumber,
  ...studyFiltersFields,
})

type FilterStudiesProps = {
  data: Studies
  filteredData: FilteredData
  setFilteredData: Dispatch<SetStateAction<FilteredData>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterStudies = (props: FilterStudiesProps) => {
  const { data, setFilteredData, filterOpen, setFilterOpen } = props

  const defaults = {
    study_n: 1,
    study_preregistered: STUDY_PREREGISTERED_OPTIONS.map((o) => o.value),
    study_data_available: STUDY_DATA_AVAILABLE_OPTIONS.map((o) => o.value),
    study_design: STUDY_DESIGN_OPTIONS.map((o) => o.value),
    study_condition_assignment: STUDY_CONDITION_ASSIGNMENT_OPTIONS.map((o) => o.value),
    study_randomization: STUDY_RANDOMIZATION_OPTIONS.map((o) => o.value),
  }

  const form = useForm<z.infer<typeof formSchemaStudies>>({
    resolver: zodResolver(formSchemaStudies),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: loadFormValues(STORAGE_KEY, defaults),
  })

  usePersistedForm(form, STORAGE_KEY)

  function onSubmit(values: z.infer<typeof formSchemaStudies>) {
    let subset = data

    subset = subset.filter((d) => d.study_n > values.study_n)
    subset = subset.filter((d) =>
      values.study_preregistered.some((v) => d.study_preregistered.includes(v))
    )
    subset = subset.filter((d) =>
      values.study_data_available.some((v) => d.study_data_available.includes(v))
    )
    subset = subset.filter((d) =>
      values.study_condition_assignment.some((v) => d.study_condition_assignment.includes(v))
    )
    subset = subset.filter((d) =>
      values.study_design.some((v) => d.study_design.includes(v))
    )
    subset = subset.filter((d) =>
      values.study_randomization.some((v) => d.study_randomization.includes(v))
    )

    setFilteredData((prev) => ({ ...prev, studies: subset }))
  }

  return (
    <FilterCollapsible title="Filter" open={filterOpen} onOpenChange={setFilterOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-6">
            <CheckboxGroup
              control={form.control}
              name="study_preregistered"
              label="Preregistration"
              options={STUDY_PREREGISTERED_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="study_data_available"
              label="Data availability"
              options={STUDY_DATA_AVAILABLE_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="study_randomization"
              label="Randomization"
              options={STUDY_RANDOMIZATION_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="study_design"
              label="Study design"
              options={STUDY_DESIGN_OPTIONS}
            />
            <CheckboxGroup
              control={form.control}
              name="study_condition_assignment"
              label="Condition assignment"
              options={STUDY_CONDITION_ASSIGNMENT_OPTIONS}
            />
            <InputField
              control={form.control}
              name="study_n"
              label="Minimum sample size"
              description="Total sample size across all conditions"
              type="number"
              className="rounded-lg w-60"
            />
          </div>
          <Button type="submit" className="h-auto">Update table</Button>
        </form>
      </Form>
    </FilterCollapsible>
  )
}
