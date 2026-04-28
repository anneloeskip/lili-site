"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { CheckIcon, X, LinkIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { PaperDialog } from "@/components/data-explorer/paper-dialog"
import { CellBadges } from "@/components/data-explorer/table/cell-badges"
import { CellLongText } from "@/components/data-explorer/table/cell-long-text"
import { DataTableColumnHeader } from "@/components/data-explorer/table/column-header"

import { Effect, Intervention, Outcome, Paper, Sample, Study } from "@/lib/types"

export const ColumnsPapers: ColumnDef<Paper>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "paper_authors",
    accessorKey: "paper_authors",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Authors" />,
    cell: ({ row }) => <CellBadges value={row.getValue<string>("paper_authors")} />,
  },
  {
    id: "paper_title",
    accessorKey: "paper_title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
    cell: ({ row }) => <CellLongText value={row.getValue<string>("paper_title")} />,
  },
  {
    id: "paper_year",
    accessorKey: "paper_year",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Year" />,
  },
  {
    id: "paper_type",
    accessorKey: "paper_type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Type" />,
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("paper_type")}</span>
    ),
  },
  {
    id: "paper_source",
    accessorKey: "paper_source",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Journal" />,
    cell: ({ row }) => {
      const value = row.getValue<string>("paper_source")
      return <span className="whitespace-nowrap">{value || "-"}</span>
    },
  },
  {
    id: "paper_open_access",
    accessorKey: "paper_open_access",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Open access" />,
    cell: ({ row }) =>
      row.getValue("paper_open_access") === "open access" ? (
        <CheckIcon className="h-4 w-4" />
      ) : (
        <X className="h-4 w-4" />
      ),
  },
  {
    id: "paper_link",
    accessorKey: "paper_link",
    header: ({ column }) => <DataTableColumnHeader column={column} title="URL" />,
    cell: ({ row }) => {
      const value = row.getValue<string>("paper_link")
      return value ? (
        <Link href={value} target="_blank">
          <LinkIcon className="h-4 w-4" />
        </Link>
      ) : (
        "-"
      )
    },
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]

export const ColumnsStudies: ColumnDef<Study>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "study",
    accessorKey: "study",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Study" />,
  },
  {
    id: "study_n",
    accessorKey: "study_n",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Sample size" />,
  },
  {
    id: "study_design",
    accessorKey: "study_design",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Design" />,
  },
  {
    id: "study_randomization",
    accessorKey: "study_randomization",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Randomized" />,
    cell: ({ row }) =>
      row.getValue<string>("study_randomization") === "yes" ? (
        <CheckIcon className="h-4 w-4" strokeWidth={2} />
      ) : (
        <X className="h-4 w-4" />
      ),
  },
  {
    id: "study_preregistered",
    accessorKey: "study_preregistered",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Preregistered" />,
    cell: ({ row }) =>
      row.getValue<string>("study_preregistered") === "yes" ? (
        <CheckIcon className="h-4 w-4" strokeWidth={2} />
      ) : (
        <X className="h-4 w-4" />
      ),
  },
  {
    id: "study_preregistration_link",
    accessorKey: "study_preregistration_link",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Prereg URL" />,
    cell: ({ row }) => {
      const value = row.getValue<string | null>("study_preregistration_link")
      return value ? (
        <Link href={value} target="_blank">
          <LinkIcon className="h-4 w-4" />
        </Link>
      ) : (
        "-"
      )
    },
  },
  {
    id: "study_data_available",
    accessorKey: "study_data_available",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Data available" />,
    cell: ({ row }) =>
      row.getValue<string>("study_data_available") === "yes" ? (
        <CheckIcon className="h-4 w-4" strokeWidth={2} />
      ) : (
        <X className="h-4 w-4" />
      ),
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]

export const ColumnsSamples: ColumnDef<Sample>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "sample_country",
    accessorKey: "sample_country",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Country" />,
  },
  {
    id: "sample_type",
    accessorKey: "sample_type",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Population" />,
    cell: ({ row }) => (
      <Badge className="text-sm font-normal whitespace-nowrap bg-muted text-foreground">
        {row.getValue<string>("sample_type")}
      </Badge>
    ),
  },
  {
    id: "sample_n_total",
    accessorKey: "sample_n_total",
    header: ({ column }) => <DataTableColumnHeader column={column} title="N (total)" />,
  },
  {
    id: "sample_n_treatment",
    accessorKey: "sample_n_treatment",
    header: ({ column }) => <DataTableColumnHeader column={column} title="N (treatment)" />,
    cell: ({ row }) => row.getValue("sample_n_treatment") ?? "-",
  },
  {
    id: "sample_n_control",
    accessorKey: "sample_n_control",
    header: ({ column }) => <DataTableColumnHeader column={column} title="N (control)" />,
    cell: ({ row }) => row.getValue("sample_n_control") ?? "-",
  },
  {
    id: "sample_age_mean",
    accessorKey: "sample_age_mean",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mean age" />,
    cell: ({ row }) => row.getValue("sample_age_mean") ?? "-",
  },
  {
    id: "sample_description",
    accessorKey: "sample_description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <CellLongText value={row.getValue<string>("sample_description")} />,
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]

export const ColumnsInterventions: ColumnDef<Intervention>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "intervention_category",
    accessorKey: "intervention_category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
    cell: ({ row }) => (
      <Badge className="text-sm font-normal whitespace-nowrap bg-muted text-foreground">
        {row.getValue<string>("intervention_category")}
      </Badge>
    ),
  },
  {
    id: "intervention_name",
    accessorKey: "intervention_name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("intervention_name")}</span>
    ),
  },
  {
    id: "intervention_description",
    accessorKey: "intervention_description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => (
      <CellLongText value={row.getValue<string>("intervention_description")} />
    ),
  },
  {
    id: "control_condition",
    accessorKey: "control_condition",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Control" />,
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("control_condition")}</span>
    ),
  },
  {
    id: "delivery_format",
    accessorKey: "delivery_format",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Delivery" />,
  },
  {
    id: "duration_weeks",
    accessorKey: "duration_weeks",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Duration (wks)" />,
    cell: ({ row }) => row.getValue("duration_weeks") ?? "-",
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]

export const ColumnsOutcomes: ColumnDef<Outcome>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "outcome_label",
    accessorKey: "outcome_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Outcome" />,
  },
  {
    id: "outcome_measure",
    accessorKey: "outcome_measure",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Measure" />,
    cell: ({ row }) => (
      <Badge className="text-sm font-normal whitespace-nowrap bg-muted text-foreground">
        {row.getValue<string>("outcome_measure")}
      </Badge>
    ),
  },
  {
    id: "outcome_description",
    accessorKey: "outcome_description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => (
      <CellLongText value={row.getValue<string>("outcome_description")} />
    ),
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]

export const ColumnsEffects: ColumnDef<Effect>[] = [
  {
    id: "paper_label",
    accessorKey: "paper_label",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Paper" />,
  },
  {
    id: "effect_size",
    accessorKey: "effect_size",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Effect size (d)" />,
    cell: ({ row }) => row.getValue<number>("effect_size")?.toFixed(2),
  },
  {
    id: "ci_lower",
    accessorKey: "ci_lower",
    header: ({ column }) => <DataTableColumnHeader column={column} title="95% CI lower" />,
    cell: ({ row }) => row.getValue("ci_lower") ?? "-",
  },
  {
    id: "ci_upper",
    accessorKey: "ci_upper",
    header: ({ column }) => <DataTableColumnHeader column={column} title="95% CI upper" />,
    cell: ({ row }) => row.getValue("ci_upper") ?? "-",
  },
  {
    id: "direction",
    accessorKey: "direction",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Direction" />,
    cell: ({ row }) => {
      const d = row.getValue<string>("direction")
      const colors: Record<string, string> = {
        beneficial: "bg-primary text-primary-foreground",
        harmful: "bg-destructive text-white",
        mixed: "bg-muted text-foreground",
        null: "bg-muted text-foreground",
      }
      return (
        <Badge className={`text-sm font-normal whitespace-nowrap ${colors[d] ?? "bg-muted text-foreground"}`}>
          {d}
        </Badge>
      )
    },
  },
  {
    id: "effect_intervention_n",
    accessorKey: "effect_intervention_n",
    header: ({ column }) => <DataTableColumnHeader column={column} title="N (intervention)" />,
    cell: ({ row }) => row.getValue("effect_intervention_n") ?? "-",
  },
  {
    id: "effect_control_n",
    accessorKey: "effect_control_n",
    header: ({ column }) => <DataTableColumnHeader column={column} title="N (control)" />,
    cell: ({ row }) => row.getValue("effect_control_n") ?? "-",
  },
  {
    id: "risk_of_bias",
    accessorKey: "risk_of_bias",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Risk of bias" />,
    cell: ({ row }) => (
      <span className="whitespace-nowrap">{row.getValue("risk_of_bias")}</span>
    ),
  },
  {
    id: "paper_details",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Details" />,
    cell: ({ row }) => <PaperDialog row={row} variant="button" />,
    enableSorting: false,
  },
]
