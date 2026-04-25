import { loadStudies } from "@/lib/loadStudies";
import { StudyTable } from "@/components/StudyTable";

export default async function DataExplorerPage() {
  const studies = await loadStudies();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-section-title">
          <span className="text-primary">Explore </span>Studies
        </h1>
        <p className="text-description-lg mt-2">
          Browse, filter, and search all intervention studies in the LILI database.
        </p>
      </header>
      <StudyTable studies={studies} />
    </div>
  );
}
