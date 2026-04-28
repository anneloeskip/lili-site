import fs from "node:fs/promises";
import path from "node:path";
import Papa from "papaparse";

export type Study = {
  // Paper-level
  id: string;
  paper_status: string;
  paper_type: string;
  paper_open_access: string;
  paper_coded_by: string;
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
  open_access_url: string;
  // Sample-level
  country: string;
  population: string;
  age_mean: string;
  age_sd: string;
  gender_f_pct: string;
  sample_size_total: string;
  sample_size_treatment: string;
  sample_size_control: string;
  // Study design
  study_design: string;
  study_randomization: string;
  study_preregistered: string;
  study_preregistration_link: string;
  study_data_available: string;
  // Intervention
  intervention_category: string;
  intervention_name: string;
  intervention_description: string;
  control_condition: string;
  delivery_format: string;
  duration_weeks: string;
  // Outcomes
  outcome_measure: string;
  effect_size_type: string;
  effect_size: string;
  ci_lower: string;
  ci_upper: string;
  p_value: string;
  follow_up_weeks: string;
  direction: string;
  // Synthesis
  key_finding: string;
  risk_of_bias: string;
  notes: string;
};

export async function loadStudies(): Promise<Study[]> {
  const csvPath = path.join(process.cwd(), "assets", "data", "studies.csv");
  const csvText = await fs.readFile(csvPath, "utf8");

  const parsed = Papa.parse<Study>(csvText, {
    header: true,        // use first row as column names
    skipEmptyLines: true // ignore blank lines at the end
  });

  return parsed.data;
}
