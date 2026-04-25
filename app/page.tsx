import Link from "next/link";
import { loadStudies } from "@/lib/loadStudies";

export default async function HomePage() {
  const studies = await loadStudies();

  return (
    <div className="mx-auto max-w-4xl px-6">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white">
          Currently in beta
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight leading-tight">
          Library of Interventions<br />on Loneliness &amp; Isolation
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          A library of intervention studies to reduce feelings of loneliness and social isolation.
        </p>

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-12">
          {[
            { value: studies.length, label: "Papers" },
            { value: "—", label: "Studies" },
            { value: "—", label: "Effects" },
            { value: "—", label: "Observations" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center" style={{ minWidth: "6rem" }}>
              <div className="text-3xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About LILI ───────────────────────────────────────── */}
      <section className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          <span className="text-primary">About </span>LILI
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl">
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

      {/* ── Explore Studies ──────────────────────────────────── */}
      <section className="py-16 border-t border-border text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="text-primary">Explore </span>Studies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground mx-auto max-w-xl">
          Browse our database of research papers testing interventions to reduce
          loneliness and isolation. Filter, sort, and explore study details,
          methods, and outcomes.
        </p>

        {/* Study cards */}
        <div className="mt-8 grid gap-4 text-left"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
          {studies.slice(0, 3).map((s) => (
            <div
              key={s.id}
              style={{
                height: "11rem",
                backgroundColor: "var(--color-muted)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span className="text-base font-semibold line-clamp-3">{s.title}</span>
              <span className="text-sm text-muted-foreground line-clamp-2">{s.authors}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/data-explorer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Begin exploring
          </Link>
        </div>
      </section>

      {/* ── Analyze Data ─────────────────────────────────────── */}
      <section className="py-16 border-t border-border text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="text-primary">Analyze </span>Data
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground mx-auto max-w-xl">
          Use our analysis tools to aggregate study results and find out how
          strong the evidence is.
        </p>

        {/* 3-column grid */}
        <div className="mt-10 text-left"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          <div>
            <h3 className="text-lg font-semibold mb-2">Summary statistics</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Get statistics on selected papers such as sample sizes and open
              science practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Meta-analysis</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Calculate meta-analytic effect sizes and see them translated into
              alternatives to help you understand the effectiveness of interventions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data visualization</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Inspect data visualizations of effect sizes and other descriptives
              about intervention studies in the database.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/meta-analysis"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Run a meta-analysis
          </Link>
        </div>
      </section>

    </div>
  );
}
