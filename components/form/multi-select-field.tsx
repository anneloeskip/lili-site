"use client"

import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { Check, ChevronsUpDown, X } from "lucide-react"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Option = { value: string; label: string }

type MultiSelectFieldProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  description?: string
  placeholder?: string
  searchPlaceholder?: string
  searchEmptyMessage?: string
  options: Option[] | { label: string; options: Option[] }[]
  className?: string
}

function flattenOptions(
  options: Option[] | { label: string; options: Option[] }[]
): Option[] {
  if (options.length === 0) return []
  if ("options" in options[0]) {
    return (options as { label: string; options: Option[] }[]).flatMap(
      (g) => g.options
    )
  }
  return options as Option[]
}

export function MultiSelectField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  placeholder = "Select...",
  options,
  className,
}: MultiSelectFieldProps<T>) {
  const [open, setOpen] = useState(false)
  const flat = flattenOptions(options)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selected: string[] = Array.isArray(field.value) ? field.value : []

        const toggle = (value: string) => {
          if (selected.includes(value)) {
            field.onChange(selected.filter((v) => v !== value))
          } else {
            field.onChange([...selected, value])
          }
        }

        return (
          <FormItem className={className}>
            <FormLabel className="text-sm font-semibold">{label}</FormLabel>
            {description && (
              <FormDescription className="text-xs">{description}</FormDescription>
            )}
            <FormControl>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-auto min-h-9 flex-wrap gap-1 font-normal"
                  >
                    {selected.length === 0 ? (
                      <span className="text-muted-foreground">{placeholder}</span>
                    ) : selected.length === flat.length ? (
                      <span className="text-muted-foreground">All selected</span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {selected.slice(0, 3).map((v) => (
                          <Badge
                            key={v}
                            className="bg-muted text-foreground font-normal"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggle(v)
                            }}
                          >
                            {flat.find((o) => o.value === v)?.label ?? v}
                            <X className="ml-1 h-3 w-3" />
                          </Badge>
                        ))}
                        {selected.length > 3 && (
                          <Badge className="bg-muted text-foreground font-normal">
                            +{selected.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 max-h-64 overflow-y-auto" align="start">
                  <div className="p-1">
                    <div
                      className="flex items-center px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded-sm text-muted-foreground"
                      onClick={() =>
                        field.onChange(
                          selected.length === flat.length
                            ? []
                            : flat.map((o) => o.value)
                        )
                      }
                    >
                      {selected.length === flat.length ? "Deselect all" : "Select all"}
                    </div>
                    {flat.map((option) => (
                      <div
                        key={option.value}
                        className={cn(
                          "flex items-center gap-2 px-2 py-1.5 text-sm cursor-pointer hover:bg-accent rounded-sm",
                          selected.includes(option.value) && "font-medium"
                        )}
                        onClick={() => toggle(option.value)}
                      >
                        <Check
                          className={cn(
                            "h-4 w-4",
                            selected.includes(option.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
