import Link from "next/link";
import { loadStudies } from "@/lib/loadStudies";

export default async function HomePage() {
  const studies = await loadStudies();

  return (
    <div className="mx-auto max-w-4xl px-6 space-y-24 py-20">

      {/* Hero */}
      <section className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white">
          Currently in beta
        </span>
        <h1 className="mt-8 text-page-title leading-tight">
          Library of Interventions<br />on Loneliness &amp; Isolation
        </h1>
        <p className="mt-6 text-description-lg max-w-xl">
          A library of intervention studies to reduce feelings of loneliness and social isolation.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3rem", marginTop: "3rem" }}>
          {[
            { value: studies.length, label: "Papers" },
            { value: "—", label: "Studies" },
            { value: "—", label: "Effects" },
            { value: "—", label: "Observations" },
          ].map(({ value, label }) => (
            <div key={label} style={{ width: "8rem", textAlign: "center" }}>
              <div className="text-stat-number">{value}</div>
              <div className="text-stat-label mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About LILI */}
      <section>
        <h2 className="text-section-title mb-4">
          <span className="text-primary">About </span>LILI
        </h2>
        <p className="text-description text-muted-foreground mb-6 max-w-2xl">
          LILI is a continuously growing collection of studies examining psychological
          and social interventions to reduce loneliness and isolation. With LILI, you
          can explore individual studies, understand the current state of research,
          and evaluate which interventions have the strongest evidence behind them.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Learn more
        </Link>
      </section>

      {/* Explore Studies */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-section-title">
            <span className="text-primary">Explore </span>Studies
          </h2>
          <p className="text-description text-muted-foreground mx-auto max-w-xl">
            Browse our database of research papers testing interventions to reduce
            loneliness and isolation. Filter, sort, and explore study details,
            methods, and outcomes.
          </p>
        </div>

        {/* Study cards preview */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {studies.slice(0, 3).map((s) => (
            <div key={s.id} className="flex h-44 flex-col gap-3 rounded-lg bg-muted p-6">
              <span className="line-clamp-3 text-base font-semibold">{s.title}</span>
              <span className="line-clamp-2 text-sm text-muted-foreground">{s.authors}</span>
            </div>
          ))}
        </div>

        <Link
          href="/data-explorer"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Begin exploring
        </Link>
      </section>

      {/* Analyze Data */}
      <section className="text-center space-y-6">
        <h2 className="text-section-title">
          <span className="text-primary">Analyze </span>Data
        </h2>
        <p className="text-description text-muted-foreground mx-auto max-w-xl">
          Use our analysis tools to aggregate study results and find out how
          strong the evidence is.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-left mt-8">
          <div className="space-y-2">
            <h3 className="text-feature-title">Summary statistics</h3>
            <p className="text-description text-muted-foreground">
              Get statistics on selected papers such as sample sizes and open
              science practices.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-feature-title">Meta-analysis</h3>
            <p className="text-description text-muted-foreground">
              Calculate meta-analytic effect sizes and see them translated into
              alternatives to help you understand the effectiveness of interventions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-feature-title">Data visualization</h3>
            <p className="text-description text-muted-foreground">
              Inspect data visualizations of effect sizes and other descriptives
              about intervention studies included in the database.
            </p>
          </div>
        </div>

        <Link
          href="/meta-analysis"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Run a meta-analysis
        </Link>
      </section>

    </div>
  );
}
