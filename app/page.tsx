import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Counter } from "@/components/landing-page/counter"
import { Button } from "@/components/ui/button"
import { PaperCarousel } from "@/components/landing-page/paper-carousel"

import counts from "@/assets/data/counts.json"

export default function Home() {
  return (
    <main className="page-container space-y-landing">
      {/* Hero */}
      <section className="mx-auto max-w-4xl space-y-10 text-center md:space-y-12">
        <Badge variant="destructive">Currently in beta</Badge>
        <div className="space-y-4">
          <h1 className="text-page-title text-balance">
            Library of Interventions on Loneliness &amp; Isolation
          </h1>
          <p className="mx-auto text-center text-description-lg">
            A library of intervention studies to reduce feelings of loneliness
            and social isolation.
          </p>
        </div>
        <div className="mx-auto flex max-w-xs flex-wrap justify-center gap-6 text-center sm:max-w-lg sm:justify-between">
          <div className="flex flex-col gap-y-2">
            <span className="text-stat-number">
              <Counter duration={1000} target={counts.papers} />
            </span>
            <span className="text-stat-label">Papers</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-stat-number">
              <Counter duration={1250} target={counts.studies} />
            </span>
            <span className="text-stat-label">Studies</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-stat-number">
              <Counter duration={1500} target={counts.effects} />
            </span>
            <span className="text-stat-label">Effects</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-stat-number">
              <Counter duration={1750} target={counts.observations} />
            </span>
            <span className="text-stat-label">Observations</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-4">
          <h2 className="text-section-title">
            <span className="text-primary">About </span>
            LILI
          </h2>
          <p className="text-description">
            LILI is a continuously growing collection of studies examining
            psychological and social interventions to reduce loneliness and
            isolation. With LILI, you can explore individual studies, understand
            the current state of research, and evaluate which interventions have
            the strongest evidence behind them.
          </p>
        </div>
        <Button asChild>
          <Link href="/about">Learn more</Link>
        </Button>
      </section>

      {/* Data explorer */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-section-title">
            <span className="text-primary">Explore</span> Studies
          </h2>
          <p className="mx-auto text-description">
            Browse our database of research papers testing interventions to
            reduce feelings of loneliness and social isolation. Filter, sort,
            and explore study details, methods, and outcomes.
          </p>
        </div>
        <div className="breakout">
          <PaperCarousel />
        </div>
        <Button asChild>
          <Link href="/data-explorer">Begin exploring</Link>
        </Button>
      </section>

      {/* Meta-analysis */}
      <section className="mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-section-title">
          <span className="text-primary">Analyze</span> Data
        </h2>
        <p className="mx-auto text-description">
          Use our analysis tools to aggregate study results and find out how
          strong the evidence is.
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto max-w-80 space-y-2">
            <h3 className="text-feature-title">Summary statistics</h3>
            <p className="text-description">
              Get statistics on selected papers such as sample sizes and open
              science practices.
            </p>
          </div>
          <div className="mx-auto max-w-80 space-y-2">
            <h3 className="text-feature-title">Meta-analysis</h3>
            <p className="text-description">
              Calculate meta-analytic effect sizes and see them translated into
              several alternatives to help you better understand the
              effectiveness of interventions.
            </p>
          </div>
          <div className="mx-auto max-w-80 space-y-2">
            <h3 className="text-feature-title">Data visualization</h3>
            <p className="text-description">
              Inspect data visualizations of effect sizes and other descriptives
              about intervention studies included in the database.
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href="/meta-analysis">Run a meta-analysis</Link>
        </Button>
      </section>

      {/* Related projects */}
      <section className="mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-section-title">
          <span className="text-primary">Related</span> Projects
        </h2>
        <p className="mx-auto text-description">
          LILI is a sister database to LIME (Library of Interventions for Meat
          Elimination), the original open-source collection of intervention
          studies on reducing animal product consumption, created by
          Dr. Willem Sleegers, Dr. Bastian Jaeger, and Dr. Robbie van Aert.
        </p>
        <Button asChild>
          <Link href="https://meat-lime.vercel.app" target="_blank">
            Visit LIME
          </Link>
        </Button>
      </section>
    </main>
  )
}
