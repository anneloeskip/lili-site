// starter-code/app_page.tsx
// -> copy this file to your Next.js project at:  app/page.tsx
//
// WHAT THIS FILE DOES
// This is your home page. It:
//   1. Loads studies from data/studies.csv (server-side)
//   2. Shows a header with the LILI title + description
//   3. Renders a table of all studies + a detail card per study

import { loadStudies } from "@/lib/loadStudies";
import { StudyTable } from "@/components/StudyTable";

export default async function HomePage() {
  const studies = await loadStudies();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          LILI
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Library of Interventions on Loneliness & Isolation
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          An open, continuously growing database of studies testing
          psychological and social interventions to reduce loneliness.
          Browse the studies below, or read the{" "}
          <a href="/about" className="underline">about page</a> to learn
          how studies are selected and coded.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {studies.length} {studies.length === 1 ? "study" : "studies"} currently indexed.
        </p>
      </header>

      <StudyTable studies={studies} />
    </main>
  );
}
