// starter-code/lib_loadStudies.ts
// -> copy this file to your Next.js project at:  lib/loadStudies.ts
//
// WHAT THIS FILE DOES
// This reads your studies.csv file from disk and turns each row into
// a JavaScript object. It runs on the server (not in the browser),
// so it has access to the file system.

import fs from "node:fs/promises";
import path from "node:path";
import Papa from "papaparse";

// The shape of a single study row. This MUST match the columns in
// your CSV (see data/CODEBOOK.md for definitions of each field).
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
  // process.cwd() is the project root (where package.json lives).
  // We keep studies.csv in a top-level `data/` folder.
  const csvPath = path.join(process.cwd(), "data", "studies.csv");
  const csvText = await fs.readFile(csvPath, "utf8");

  const parsed = Papa.parse<Study>(csvText, {
    header: true,        // use first row as column names
    skipEmptyLines: true // ignore blank lines at the end
  });

  return parsed.data;
}
