"use client"

import { useState } from "react"
import Link from "next/link"
import { exportToCSV } from "@/lib/csv-utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  ColumnsPapers,
  ColumnsStudies,
  ColumnsSamples,
  ColumnsInterventions,
  ColumnsOutcomes,
  ColumnsEffects,
} from "@/components/data-explorer/table/columns"
import { DataTable } from "@/components/data-explorer/table/data-table"

import papers from "@/assets/data/papers.json"
import studies from "@/assets/data/studies.json"
import samples from "@/assets/data/samples.json"
import interventions from "@/assets/data/interventions.json"
import outcomes from "@/assets/data/outcomes.json"
import effects from "@/assets/data/effects.json"
import all from "@/assets/data/data.json"

import { FilterPapers } from "@/components/data-explorer/filters/papers"
import { FilterStudies } from "@/components/data-explorer/filters/studies"
import { FilterSamples } from "@/components/data-explorer/filters/samples"
import { FilterInterventions } from "@/components/data-explorer/filters/interventions"
import { FilterOutcomes } from "@/components/data-explorer/filters/outcomes"
import { FilterEffects } from "@/components/data-explorer/filters/effects"

import { useDataExplorerState } from "@/hooks/use-data-explorer-state"
import { clearFormValues } from "@/hooks/use-persisted-form"

const STORAGE_KEYS = [
  "lili-data-explorer-papers",
  "lili-data-explorer-studies",
  "lili-data-explorer-samples",
  "lili-data-explorer-interventions",
  "lili-data-explorer-outcomes",
  "lili-data-explorer-effects",
]

export default function DataExplorer() {
  const [level, setLevel] = useState("paper")
  const [filterOpen, setFilterOpen] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  const { displayData, filteredData, setFilteredData } = useDataExplorerState(
    { papers, studies, samples, interventions, outcomes, effects },
    all
  )

  const handleDownload = (data: Record<string, unknown>[], fileName: string) => {
    exportToCSV(data, fileName)
  }

  const DownloadButton = () => (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Download</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Individual tables</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleDownload(papers, "lili-papers.csv")}>Papers</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload(studies, "lili-studies.csv")}>Studies</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload(samples, "lili-samples.csv")}>Samples</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload(interventions, "lili-interventions.csv")}>Interventions</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload(outcomes, "lili-outcomes.csv")}>Outcomes</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload(effects, "lili-effects.csv")}>Effects</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Complete dataset</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleDownload(all, "lili-data.csv")}>All (joined)</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )

  const handleResetFilters = () => {
    STORAGE_KEYS.forEach(clearFormValues)
    setFilteredData({ papers, studies, samples, interventions, outcomes, effects })
    setResetKey((prev) => prev + 1)
  }

  const activeFiltersPerLevel = {
    papers: papers.length !== filteredData.papers.length,
    studies: studies.length !== filteredData.studies.length,
    samples: samples.length !== filteredData.samples.length,
    interventions: interventions.length !== filteredData.interventions.length,
    outcomes: outcomes.length !== filteredData.outcomes.length,
    effects: effects.length !== filteredData.effects.length,
  }

  const hasActiveFilters = Object.values(activeFiltersPerLevel).some(Boolean)
  const totalActiveFilters = Object.values(activeFiltersPerLevel).filter(Boolean).length

  const tabClass =
    "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"

  return (
    <main className="page-container space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-page-title">Data Explorer</h1>
        <p className="max-w-2xl mx-auto text-description">
          Browse intervention studies using the tabs below. Filter by design, population, or
          outcome, and download tables for your own analysis. Need help? See our{" "}
          <Link href="/faq" className="font-medium text-primary hover:underline">
            FAQ
          </Link>
          .
        </p>
      </div>

      <Tabs defaultValue={level} className="space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="overflow-x-auto">
            <TabsList className="w-auto justify-start">
              <TabsTrigger value="paper" onClick={() => setLevel("paper")} className={tabClass}>Papers</TabsTrigger>
              <TabsTrigger value="study" onClick={() => setLevel("study")} className={tabClass}>Studies</TabsTrigger>
              <TabsTrigger value="sample" onClick={() => setLevel("sample")} className={tabClass}>Samples</TabsTrigger>
              <TabsTrigger value="intervention" onClick={() => setLevel("intervention")} className={tabClass}>Interventions</TabsTrigger>
              <TabsTrigger value="outcome" onClick={() => setLevel("outcome")} className={tabClass}>Outcomes</TabsTrigger>
              <TabsTrigger value="effect" onClick={() => setLevel("effect")} className={tabClass}>Effects</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleResetFilters}>Reset filters</Button>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 px-3 py-2 rounded-md transition-colors">
                  {hasActiveFilters ? `Active filters (${totalActiveFilters})` : "No active filters"}
                </button>
              </PopoverTrigger>
              {hasActiveFilters && (
                <PopoverContent className="w-auto">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Filtered levels:</p>
                    <div className="space-y-1 text-sm">
                      {activeFiltersPerLevel.papers && <div>Papers: {filteredData.papers.length} of {papers.length}</div>}
                      {activeFiltersPerLevel.studies && <div>Studies: {filteredData.studies.length} of {studies.length}</div>}
                      {activeFiltersPerLevel.samples && <div>Samples: {filteredData.samples.length} of {samples.length}</div>}
                      {activeFiltersPerLevel.interventions && <div>Interventions: {filteredData.interventions.length} of {interventions.length}</div>}
                      {activeFiltersPerLevel.outcomes && <div>Outcomes: {filteredData.outcomes.length} of {outcomes.length}</div>}
                      {activeFiltersPerLevel.effects && <div>Effects: {filteredData.effects.length} of {effects.length}</div>}
                    </div>
                  </div>
                </PopoverContent>
              )}
            </Popover>
          </div>
        </div>

        <TabsContent value="paper" className="space-y-4">
          <FilterPapers key={`papers-${resetKey}`} data={papers} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsPapers} data={displayData.papers} totalRows={papers.length} />
          <DownloadButton />
        </TabsContent>
        <TabsContent value="study" className="space-y-4">
          <FilterStudies key={`studies-${resetKey}`} data={studies} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsStudies} data={displayData.studies} totalRows={studies.length} />
          <DownloadButton />
        </TabsContent>
        <TabsContent value="sample" className="space-y-4">
          <FilterSamples key={`samples-${resetKey}`} data={samples} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsSamples} data={displayData.samples} totalRows={samples.length} />
          <DownloadButton />
        </TabsContent>
        <TabsContent value="intervention" className="space-y-4">
          <FilterInterventions key={`interventions-${resetKey}`} data={interventions} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsInterventions} data={displayData.interventions} totalRows={interventions.length} />
          <DownloadButton />
        </TabsContent>
        <TabsContent value="outcome" className="space-y-4">
          <FilterOutcomes key={`outcomes-${resetKey}`} data={outcomes} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsOutcomes} data={displayData.outcomes} totalRows={outcomes.length} />
          <DownloadButton />
        </TabsContent>
        <TabsContent value="effect" className="space-y-4">
          <FilterEffects key={`effects-${resetKey}`} data={effects} filteredData={filteredData} setFilteredData={setFilteredData} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
          <DataTable columns={ColumnsEffects} data={displayData.effects} totalRows={effects.length} />
          <DownloadButton />
        </TabsContent>
      </Tabs>
    </main>
  )
}
