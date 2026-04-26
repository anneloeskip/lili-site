# LILI Codebook

This codebook defines every column in `studies.csv`. Use it as your coding rubric when you add new papers so your database stays consistent.

When in doubt, write `NA` (not available) for a field rather than leaving it blank or guessing. If a value needs a comma or a quote inside it, most spreadsheet programs (Google Sheets, Excel, Numbers) will handle the quoting automatically when you save as CSV.

## Identification

**id** — A short unique string you invent, usually `firstauthorYEAR` in lowercase, e.g., `masi2011`, `kall2020`. If two papers collide, add a letter: `smith2019a`, `smith2019b`. Keep it URL-safe (letters, numbers, no spaces).

**authors** — Author list. Format: `Last, F. M.; Last, F. M.; ...` (semicolon-separated, because commas inside a CSV cell are a pain). For more than six authors, write the first six then `et al.`.

**year** — Year of publication (four digits).

**title** — Full title of the paper, exactly as printed.

**journal** — Journal name (or "book chapter", "preprint", "gray literature" if applicable).

**doi** — Digital Object Identifier, *without* the `https://doi.org/` prefix. Just the bare identifier (e.g., `10.1016/j.beth.2019.05.001`).

## Study context

**country** — Country where the study was conducted. Use `mixed` for multi-country studies. For meta-analyses, note "authors: X; studies reviewed: mixed" if relevant.

**population** — Who participated, in plain English. Examples: "older adults in nursing homes", "university students", "adults with chronic illness", "adolescents (secondary school)", "community-dwelling adults reporting loneliness".

**age_mean** — Mean age of the sample. `NA` if not reported or not applicable (e.g., meta-analysis).

**sample_size_total** — Total number of participants. For meta-analyses, the summed N across included studies.

**sample_size_treatment** — Number in the intervention arm. `NA` if not applicable.

**sample_size_control** — Number in the control arm. `NA` if not applicable.

## Design and intervention

**study_design** — Pick one:
- `RCT` — randomized controlled trial
- `quasi-experimental` — comparison group but no randomization
- `pre-post` — single group, before/after
- `observational` — cross-sectional or cohort, no intervention
- `meta-analysis` — quantitative synthesis
- `systematic review` — narrative synthesis, no pooled effect

**intervention_category** — Masi et al. (2011) proposed four categories that are still widely used. Pick the best fit, or `mixed` if the intervention targets more than one:
- `social skills` — training in skills like conversation, assertiveness
- `social support` — providing or enhancing supportive relationships (e.g., befriending)
- `social interaction` — simply increasing opportunities for contact (e.g., group activities)
- `maladaptive cognition` — changing thoughts about self/others in relationships (e.g., CBT)
- `other` — anything that doesn't fit; describe in `notes`

**intervention_name** — A short label (3-8 words) you'll reuse. E.g., "iCBT for loneliness", "Befriending home visits", "Social skills group training".

**intervention_description** — One paragraph (1-4 sentences) describing what the intervention actually involved: format, components, duration, who delivered it.

**control_condition** — What the comparison arm received. Examples: "Waitlist", "Treatment-as-usual", "Active control: relaxation training", "No intervention".

**delivery_format** — One of: `in-person`, `online (self-guided)`, `online (guided)`, `phone`, `mixed`, `varied`.

**duration_weeks** — Length of the intervention in weeks. `NA` if one-shot or highly variable.

## Outcomes

**outcome_measure** — Name of the primary loneliness measure. Common ones:
- UCLA Loneliness Scale (versions 1, 2, 3, or short forms like ULS-8, ULS-3)
- De Jong Gierveld Loneliness Scale (11-item or 6-item)
- Social and Emotional Loneliness Scale for Adults (SELSA)
- Campaign to End Loneliness Measurement Tool

**effect_size_type** — What kind of effect size is reported. Examples: `Cohen's d`, `Hedges' g`, `standardized mean difference`, `odds ratio`, `correlation r`.

**effect_size** — The numeric value. *Direction convention for LILI:* positive = favors the intervention (i.e., reduction in loneliness in the treatment arm relative to control). If the original paper reports a negative d because loneliness scores went down, flip the sign and note it in `notes`.

**ci_lower / ci_upper** — 95% confidence interval bounds. `NA` if not reported.

**p_value** — Either the reported p-value (e.g., `0.03`) or a threshold (e.g., `<0.01`, `<0.05`, `ns`).

**follow_up_weeks** — Weeks from end-of-intervention to follow-up assessment. `NA` if no follow-up was measured beyond post-test.

**direction** — Plain-language summary: `beneficial`, `null`, `harmful`, or `mixed`.

## Synthesis fields

**key_finding** — One to two sentences summarizing the take-away, written for a non-specialist. This is what appears on the study card in the app.

**risk_of_bias** — Your assessment: `low`, `some concerns`, `high`, or `not assessed`. If you use the Cochrane ROB2 tool (recommended for RCTs), this maps directly.

**open_access_url** — A working link where readers can access (at least) the abstract. Prefer a DOI link or an open-access repository link.

**notes** — Anything else worth capturing: signing conventions, unusual design choices, whether it was preregistered, connections to other papers, your own commentary.

## A quick workflow for coding a new paper

1. Read the abstract and methods. Identify design, sample, intervention, outcome, effect.
2. Fill in the `coding_template.csv` row from top to bottom.
3. If a field is missing in the paper, write `NA` — don't guess.
4. Add a one-line `notes` entry if anything was ambiguous.
5. Paste the completed row into `studies.csv` and commit (or save) the file.
6. Refresh your local site — the new study appears.
