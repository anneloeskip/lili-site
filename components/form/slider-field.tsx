"use client"

import { Control, FieldValues, Path } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

type SliderFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  min: number
  max: number
  step?: number
  minStepsBetweenThumbs?: number
  className?: string
}

export function SliderField<T extends FieldValues>({
  control,
  name,
  label,
  min,
  max,
  step = 1,
  className,
}: SliderFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-semibold">{label}</FormLabel>
          <div className="text-sm text-muted-foreground">
            {Array.isArray(field.value)
              ? `${field.value[0]} – ${field.value[1]}`
              : field.value}
          </div>
          <FormControl>
            <Slider
              min={min}
              max={max}
              step={step}
              value={Array.isArray(field.value) ? field.value : [field.value]}
              onValueChange={field.onChange}
              className={cn("w-full", className)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
