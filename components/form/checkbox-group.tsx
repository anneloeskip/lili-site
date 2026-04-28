"use client"

import { Control, FieldValues, Path } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"

type Option = {
  value: string
  label: string
  description?: string
}

type CheckboxGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  options: Option[]
}

export function CheckboxGroup<T extends FieldValues>({
  control,
  name,
  label,
  options,
}: CheckboxGroupProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-semibold">{label}</FormLabel>
          <div className="space-y-2 mt-1">
            {options.map((option) => (
              <FormItem
                key={option.value}
                className="flex flex-row items-start space-x-2 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    checked={
                      Array.isArray(field.value) &&
                      field.value.includes(option.value)
                    }
                    onCheckedChange={(checked) => {
                      const current = Array.isArray(field.value)
                        ? field.value
                        : []
                      if (checked) {
                        field.onChange([...current, option.value])
                      } else {
                        field.onChange(
                          current.filter((v: string) => v !== option.value)
                        )
                      }
                    }}
                  />
                </FormControl>
                <div className="leading-none">
                  <FormLabel className="text-sm font-normal cursor-pointer">
                    {option.label}
                  </FormLabel>
                  {option.description && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {option.description}
                    </p>
                  )}
                </div>
              </FormItem>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
