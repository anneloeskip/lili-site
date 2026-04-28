// Filter options for the Data Explorer and Meta-analysis tool.
// Values must match the actual values used in assets/data/*.json.
// Expand as more studies are added.

// Paper-level
export const PAPER_TYPE_OPTIONS = [
  { value: "peer reviewed paper", label: "Peer reviewed paper" },
  { value: "preprint", label: "Preprint" },
  { value: "thesis", label: "Thesis" },
  { value: "report", label: "Report" },
  { value: "conference paper", label: "Conference paper" },
]

export const PAPER_OPEN_ACCESS_OPTIONS = [
  { value: "open access", label: "Open access" },
  { value: "paywalled", label: "Paywalled" },
  { value: "inaccessible", label: "Inaccessible" },
]

// Study-level
export const STUDY_DESIGN_OPTIONS = [
  { value: "RCT", label: "RCT" },
  { value: "quasi-experimental", label: "Quasi-experimental" },
  { value: "pre-post", label: "Pre-post (single group)" },
  { value: "meta-analysis", label: "Meta-analysis" },
  { value: "systematic review", label: "Systematic review" },
  { value: "observational", label: "Observational" },
]

export const STUDY_CONDITION_ASSIGNMENT_OPTIONS = [
  { value: "individual", label: "Individual" },
  { value: "cluster", label: "Cluster (e.g. schools, care homes)" },
  { value: "time point", label: "Time point" },
]

export const STUDY_RANDOMIZATION_OPTIONS = [
  { value: "yes", label: "Randomized" },
  { value: "no", label: "Non-randomized" },
]

export const STUDY_PREREGISTERED_OPTIONS = [
  { value: "yes", label: "Preregistered" },
  { value: "no", label: "Not preregistered" },
]

export const STUDY_DATA_AVAILABLE_OPTIONS = [
  { value: "yes", label: "Data available" },
  { value: "no", label: "Data not available" },
]

// Sample-level — expand country list as the database grows
export const SAMPLE_COUNTRY_OPTIONS = [
  "Australia",
  "Belgium",
  "Canada",
  "China",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Israel",
  "Italy",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Spain",
  "Sweden",
  "Switzerland",
  "United Kingdom",
  "United States",
  "mixed",
  "other",
]

export const SAMPLE_TYPE_OPTIONS = [
  { value: "older adults", label: "Older adults" },
  { value: "adolescents", label: "Adolescents / children" },
  { value: "general population", label: "General population" },
  { value: "clinical", label: "Clinical population" },
  { value: "university", label: "University students" },
  { value: "mixed", label: "Mixed" },
  { value: "other", label: "Other" },
]

export const SAMPLE_REPRESENTATIVE_OPTIONS = [
  { value: "yes", label: "Representative" },
  { value: "no", label: "Not representative" },
]

// Intervention-level — uses Masi et al. (2011) 4-category taxonomy
export const INTERVENTION_CATEGORY_OPTIONS = [
  { value: "social skills", label: "Social skills training" },
  { value: "social support", label: "Social support" },
  { value: "social interaction", label: "Social interaction" },
  { value: "maladaptive cognition", label: "Maladaptive cognition (CBT)" },
  { value: "mixed", label: "Mixed / multicomponent" },
  { value: "other", label: "Other" },
]

export const DELIVERY_FORMAT_OPTIONS = [
  { value: "in-person", label: "In-person" },
  { value: "online (self-guided)", label: "Online (self-guided)" },
  { value: "online (guided)", label: "Online (guided)" },
  { value: "phone", label: "Phone" },
  { value: "mixed", label: "Mixed" },
  { value: "varied", label: "Varied (meta-analysis)" },
]

// Outcome-level
export const OUTCOME_MEASURE_OPTIONS = [
  { value: "UCLA Loneliness Scale", label: "UCLA Loneliness Scale" },
  { value: "De Jong Gierveld Scale", label: "De Jong Gierveld Scale" },
  { value: "SELSA", label: "SELSA" },
  { value: "social isolation", label: "Social isolation measure" },
  { value: "other", label: "Other" },
]

// Effect-level
export const DIRECTION_OPTIONS = [
  { value: "beneficial", label: "Beneficial" },
  { value: "null", label: "No effect" },
  { value: "harmful", label: "Harmful" },
  { value: "mixed", label: "Mixed" },
]
