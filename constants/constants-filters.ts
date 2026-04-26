// Filter options for the Data Explorer and Meta-analysis tool.
// Values here should match the actual values used in assets/data/studies.csv.
// Expand these as more studies are added (Guide 03).

// Paper-level
export const PAPER_TYPE_OPTIONS = [
  {
    value: "peer reviewed paper",
    label: "Peer reviewed paper",
    description: "Journal articles and conference papers",
  },
  {
    value: "preprint",
    label: "Preprint",
    description: "Publications that are not yet peer-reviewed",
  },
  {
    value: "thesis",
    label: "Thesis",
    description: "Student research",
  },
  {
    value: "report",
    label: "Report",
    description: "Government and institutional publications",
  },
]

export const PAPER_OPEN_ACCESS_OPTIONS = [
  {
    value: "open access",
    label: "Open access",
    description: "Free to read",
  },
  {
    value: "paywalled",
    label: "Paywalled",
    description: "Paid access required",
  },
  {
    value: "inaccessible",
    label: "Inaccessible",
    description: "Could not be accessed",
  },
]

// Study-level
export const STUDY_DESIGN_OPTIONS = [
  {
    value: "between",
    label: "Between-subjects",
    description: "Different participants per condition",
  },
  {
    value: "within",
    label: "Within-subjects",
    description: "Same participants across conditions",
  },
  {
    value: "mixed",
    label: "Mixed design",
    description: "Combines between and within elements",
  },
]

export const STUDY_RANDOMIZATION_OPTIONS = [
  {
    value: "yes",
    label: "Randomized",
    description: "Participants randomly assigned to conditions",
  },
  {
    value: "no",
    label: "Non-randomized",
    description: "Potential for confounding",
  },
]

export const STUDY_PREREGISTERED_OPTIONS = [
  {
    value: "yes",
    label: "Preregistered",
    description: "Study design registered before data collection",
  },
  { value: "no", label: "Not preregistered" },
]

export const STUDY_DATA_AVAILABLE_OPTIONS = [
  {
    value: "yes",
    label: "Data available",
    description: "Study datasets can be downloaded",
  },
  { value: "no", label: "Data not available" },
]

// Intervention-level
// TODO: expand these as the database grows (Guide 03)
export const INTERVENTION_CATEGORY_OPTIONS = [
  { value: "cognitive behavioral therapy", label: "Cognitive behavioral therapy" },
  { value: "social skills training", label: "Social skills training" },
  { value: "mindfulness", label: "Mindfulness" },
  { value: "befriending", label: "Befriending" },
  { value: "technology-based", label: "Technology-based" },
  { value: "psychoeducation", label: "Psychoeducation" },
  { value: "other", label: "Other" },
]

export const DELIVERY_FORMAT_OPTIONS = [
  { value: "individual", label: "Individual" },
  { value: "group", label: "Group-based" },
  { value: "online", label: "Online" },
  { value: "in-person", label: "In-person" },
  { value: "mixed", label: "Mixed" },
]

// Sample-level
// TODO: expand country list as the database grows (Guide 03)
export const SAMPLE_POPULATION_OPTIONS = [
  { value: "older adults", label: "Older adults" },
  { value: "adolescents", label: "Adolescents" },
  { value: "general population", label: "General population" },
  { value: "clinical", label: "Clinical population" },
  { value: "university", label: "University students" },
  { value: "other", label: "Other" },
]

// Outcome-level
export const OUTCOME_MEASURE_OPTIONS = [
  { value: "UCLA Loneliness Scale", label: "UCLA Loneliness Scale" },
  { value: "De Jong Gierveld Scale", label: "De Jong Gierveld Scale" },
  { value: "social isolation", label: "Social isolation measure" },
  { value: "other", label: "Other" },
]

// Effect-level
export const DIRECTION_OPTIONS = [
  { value: "beneficial", label: "Beneficial" },
  { value: "harmful", label: "Harmful" },
  { value: "mixed", label: "Mixed" },
  { value: "null", label: "No effect" },
]
