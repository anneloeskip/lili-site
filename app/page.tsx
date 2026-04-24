import Link from "next/link";
import { loadStudies } from "@/lib/loadStudies";
import { StudyTable } from "@/components/StudyTable";

export default async function HomePage() {
  const studies = await loadStudies();

  return (
    <div className="mx-auto max-w-5xl px-6">

      {/* Hero — centered column */}
      <section className="py-20 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white">
          Currently in beta
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight leading-tight">
          Library of Interventions<br />on Loneliness &amp; Isolation
        </h1>

        <p className="mt-6 text-lg text-muted-foreground whitespace-nowrap">
          A library of intervention studies to reduce feelings of loneliness and social isolation.
        </p>

        {/* Stats */}
        <div style={{display:"flex", gap:"3rem", marginTop:"3rem"}}>
          {[
            { value: studies.length, label: "Papers" },
            { value: "—", label: "Studies" },
            { value: "—", label: "Effects" },
            { value: "—", label: "Observations" },
          ].map(({ value, label }) => (
            <div key={label} style={{width:"8rem", textAlign:"center"}}>
              <div className="text-4xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About section — left aligned like LIME */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-primary">About </span>LILI
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
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

      {/* Data explorer */}
      <section className="py-10">
        <StudyTable studies={studies} />
      </section>

    </div>
  );
}
