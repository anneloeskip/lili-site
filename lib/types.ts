export type Paper = {
  paper: number
  paper_label: string
  paper_status: string
  paper_type: string
  paper_open_access: string
  paper_coded_by: string
  paper_authors: string
  paper_year: number
  paper_title: string
  paper_source: string
  paper_link: string
  paper_notes: string
}

export type Study = {
  study: number
  paper: number
  paper_label: string
  study_n: number
  study_design: string
  study_condition_assignment: string
  study_randomization: string
  study_preregistered: string
  study_preregistration_link: string | null
  study_data_available: string
  study_notes: string
}

export type Sample = {
  sample: number
  study: number
  paper: number
  paper_label: string
  sample_country: string
  sample_population: string
  sample_type: string
  sample_age_mean: number | null
  sample_age_sd: number | null
  sample_gender_f_pct: number | null
  sample_n_total: number
  sample_n_treatment: number | null
  sample_n_control: number | null
  sample_representative: string
  sample_description: string
  sample_notes: string
}

export type Intervention = {
  intervention: number
  study: number
  paper: number
  paper_label: string
  intervention_category: string
  intervention_name: string
  intervention_description: string
  control_condition: string
  delivery_format: string
  duration_weeks: number | null
  intervention_notes: string
}

export type Outcome = {
  outcome: number
  study: number
  paper: number
  paper_label: string
  outcome_measure: string
  outcome_label: string
  outcome_description: string
  outcome_notes: string
}

export type Effect = {
  effect: number
  study: number
  outcome: number
  paper: number
  paper_label: string
  effect_size_type: string
  effect_size: number
  effect_size_var: number | null
  ci_lower: number | null
  ci_upper: number | null
  p_value: string
  effect_intervention_n: number | null
  effect_control_n: number | null
  follow_up_weeks: number | null
  direction: string
  key_finding: string
  risk_of_bias: string
  effect_notes: string
}

export type Papers = Paper[]
export type Studies = Study[]
export type Samples = Sample[]
export type Interventions = Intervention[]
export type Outcomes = Outcome[]
export type Effects = Effect[]

export type Data = Record<string, unknown>[]
