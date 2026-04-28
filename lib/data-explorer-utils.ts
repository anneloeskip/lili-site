import type {
  Papers,
  Studies,
  Samples,
  Interventions,
  Outcomes,
  Effects,
  Data,
} from "@/lib/types"

export type FilteredData = {
  papers: Papers
  studies: Studies
  samples: Samples
  interventions: Interventions
  outcomes: Outcomes
  effects: Effects
}

export function applyFiltersToData(
  _fullData: Data,
  filteredData: FilteredData
): FilteredData {
  const paperIds = new Set(filteredData.papers.map((p) => p.paper))
  const studyIds = new Set(filteredData.studies.map((s) => s.study))

  return {
    papers: filteredData.papers,
    studies: filteredData.studies.filter((s) => paperIds.has(s.paper)),
    samples: filteredData.samples.filter(
      (s) => paperIds.has(s.paper) && studyIds.has(s.study)
    ),
    interventions: filteredData.interventions.filter(
      (i) => paperIds.has(i.paper) && studyIds.has(i.study)
    ),
    outcomes: filteredData.outcomes.filter(
      (o) => paperIds.has(o.paper) && studyIds.has(o.study)
    ),
    effects: filteredData.effects.filter(
      (e) => paperIds.has(e.paper) && studyIds.has(e.study)
    ),
  }
}
