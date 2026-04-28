import * as z from "zod"

export const paperFiltersFields = {
  paper_year: z.number().array(),
  paper_type: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  paper_open_access: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
}

export const studyFiltersFields = {
  study_preregistered: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  study_data_available: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  study_design: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  study_condition_assignment: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  study_randomization: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
}

export const sampleFiltersFields = {
  sample_country: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  sample_type: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  sample_representative: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
}

export const interventionFiltersSchema = z.object({
  intervention_category: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
  delivery_format: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
})

export const outcomeFiltersFields = {
  outcome_measure: z
    .string()
    .array()
    .nonempty({ message: "Must select at least one option." }),
}
