"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FilterCollapsible } from "@/components/data-explorer/filter-collapsible"
import { SliderField } from "@/components/form/slider-field"
import { InputField } from "@/components/form/input-field"
import { CheckboxGroup } from "@/components/form/checkbox-group"

import { DIRECTION_OPTIONS } from "@/constants/constants-filters"
import { Effects } from "@/lib/types"
import { FilteredData } from "@/lib/data-explorer-utils"
import { loadFormValues, usePersistedForm } from "@/hooks/use-persisted-form"

const STORAGE_KEY = "lili-data-explorer-effects"

const formSchemaEffects = z.object({
  effect_size: z.number().array(),
  sample_size: z.coerce.number().min(1, { message: "Must be a positive number." }) as z.ZodNumber,
  direction: z.string().array().nonempty({ message: "Must select at least one option." }),
})

type FilterEffectsProps = {
  data: Effects
  filteredData: FilteredData
  setFilteredData: Dispatch<SetStateAction<FilteredData>>
  filterOpen: boolean
  setFilterOpen: Dispatch<SetStateAction<boolean>>
}

export const FilterEffects = (props: FilterEffectsProps) => {
  const { data, setFilteredData, filterOpen, setFilterOpen } = props

  const effect_size_min = Math.min(...data.map((d) => d.effect_size))
  const effect_size_max = Math.max(...data.map((d) => d.effect_size))

  const defaults = {
    effect_size: [effect_size_min, effect_size_max],
    sample_size: 1,
    direction: DIRECTION_OPTIONS.map((o) => o.value),
  }

  const form = useForm<z.infer<typeof formSchemaEffects>>({
    resolver: zodResolver(formSchemaEffects),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: loadFormValues(STORAGE_KEY, defaults),
  })

  usePersistedForm(form, STORAGE_KEY)

  function onSubmit(values: z.infer<typeof formSchemaEffects>) {
    let subset = data

    subset = subset.filter(
      (d) => d.effect_size >= values.effect_size[0] && d.effect_size <= values.effect_size[1]
    )

    const minN = Number(values.sample_size)
    subset = subset.filter(
      (d) =>
        (d.effect_intervention_n == null || d.effect_intervention_n >= minN) &&
        (d.effect_control_n == null || d.effect_control_n >= minN)
    )

    subset = subset.filter((d) =>
      values.direction.some((v) => d.direction.includes(v))
    )

    setFilteredData((prev) => ({ ...prev, effects: subset }))
  }

  return (
    <FilterCollapsible title="Filter" open={filterOpen} onOpenChange={setFilterOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SliderField
              control={form.control}
              name="effect_size"
              label="Effect size (d)"
              min={effect_size_min}
              max={effect_size_max}
              step={0.01}
            />
            <InputField
              control={form.control}
              name="sample_size"
              label="Minimum sample size"
              description="Minimum per condition (intervention or control)"
              type="number"
              className="rounded-lg"
            />
            <CheckboxGroup
              control={form.control}
              name="direction"
              label="Direction"
              options={DIRECTION_OPTIONS}
            />
          </div>
          <Button type="submit" className="h-auto">Update table</Button>
        </form>
      </Form>
    </FilterCollapsible>
  )
}
