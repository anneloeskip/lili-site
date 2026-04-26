import fs from "node:fs/promises";
import path from "node:path";
import Papa from "papaparse";

export type Study = {
  id: string;
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
  country: string;
  population: string;
  age_mean: string;
  sample_size_total: string;
  sample_size_treatment: string;
  sample_size_control: string;
  study_design: string;
  intervention_category: string;
  intervention_name: string;
  intervention_description: string;
  control_condition: string;
  delivery_format: string;
  duration_weeks: string;
  outcome_measure: string;
  effect_size_type: string;
  effect_size: string;
  ci_lower: string;
  ci_upper: string;
  p_value: string;
  follow_up_weeks: string;
  direction: string;
  key_finding: string;
  risk_of_bias: string;
  open_access_url: string;
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
