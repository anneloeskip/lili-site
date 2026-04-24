// starter-code/components_StudyTable.tsx
// -> copy this file to your Next.js project at:  components/StudyTable.tsx
//
// WHAT THIS FILE DOES
// Renders a searchable table of studies using shadcn/ui components.
// The "use client" directive at the top is important: it tells Next.js
// this component runs in the browser, which lets us use useState for
// the search input.

"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { Study } from "@/lib/loadStudies";

export function StudyTable({ studies }: { studies: Study[] }) {
  const [query, setQuery] = useState("");

  // Filter studies based on the search box. We check a few likely fields;
  // add more here (or remove some) as you prefer.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studies;
    return studies.filter((s) => {
      const haystack = [
        s.authors,
        s.title,
        s.year,
        s.intervention_category,
        s.intervention_name,
        s.population,
        s.country,
        s.key_finding,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [studies, query]);

  return (
    <div>
      <div className="mb-4">
        <Input
          placeholder="Search by author, intervention, population…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <Table>
        <TableCaption>
          Showing {filtered.length} of {studies.length} studies.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Study</TableHead>
            <TableHead>Design</TableHead>
            <TableHead>Intervention</TableHead>
            <TableHead>Population</TableHead>
            <TableHead className="text-right">Effect (d)</TableHead>
            <TableHead>Direction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((s) => (
            <TableRow key={s.id}>
              <TableCell className="align-top">
                <div className="font-medium">
                  {firstAuthorEtAl(s.authors)} ({s.year})
                </div>
                <a
                  href={s.open_access_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted-foreground underline line-clamp-2"
                >
                  {s.title}
                </a>
              </TableCell>
              <TableCell className="align-top">
                <Badge variant="outline">{s.study_design}</Badge>
              </TableCell>
              <TableCell className="align-top">
                <div className="text-sm">{s.intervention_name}</div>
                <div className="text-xs text-muted-foreground">
                  {s.intervention_category}
                </div>
              </TableCell>
              <TableCell className="align-top text-sm">
                {s.population}
              </TableCell>
              <TableCell className="align-top text-right tabular-nums">
                {s.effect_size}
                {s.ci_lower && s.ci_upper && s.ci_lower !== "NA" ? (
                  <div className="text-xs text-muted-foreground">
                    [{s.ci_lower}, {s.ci_upper}]
                  </div>
                ) : null}
              </TableCell>
              <TableCell className="align-top">
                <DirectionBadge direction={s.direction} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// Helpers ---------------------------------------------------------

function firstAuthorEtAl(authors: string): string {
  // "Masi, C. M.; Chen, H. Y.; ..." -> "Masi et al."
  const first = authors.split(";")[0]?.trim() ?? authors;
  const lastName = first.split(",")[0]?.trim() ?? first;
  return authors.includes(";") ? `${lastName} et al.` : lastName;
}

function DirectionBadge({ direction }: { direction: string }) {
  const v = direction.toLowerCase();
  if (v === "beneficial") return <Badge className="bg-green-600">beneficial</Badge>;
  if (v === "harmful") return <Badge className="bg-red-600">harmful</Badge>;
  if (v === "mixed") return <Badge className="bg-yellow-600">mixed</Badge>;
  return <Badge variant="secondary">{direction || "null"}</Badge>;
}
