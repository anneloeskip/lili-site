import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

const About = () => {
  return (
    <main className="page-width page-container space-y-6">
      <h1 className="text-page-title text-center">About</h1>
      <Alert variant="destructive" className="bg-destructive/10">
        <AlertDescription>
          <p>
            LILI is currently in beta and you are viewing a prototype of the
            website. We are still in the process of building the database and
            website. Any feedback is welcome and can be given{" "}
            <Link href="/contact" className="font-medium">
              here
            </Link>
            .
          </p>
        </AlertDescription>
      </Alert>
      <p className="text-description">
        <strong>LILI</strong>{" "}stands for Library of Interventions on Loneliness
        &amp; Isolation. In short, LILI is a continuously growing collection of
        studies that tested the effectiveness of psychological and social
        interventions in reducing feelings of loneliness and social isolation.
        This website aims to make this literature more accessible to researchers,
        clinicians, advocates, and policy makers.
      </p>
      <p className="text-description">
        At the core of LILI is a machine-readable, continuously growing database
        of intervention studies. For each study, we extracted information on the
        intervention type (e.g., cognitive behavioral therapy, social skills
        training), the delivery format (e.g., online, in-person, group-based),
        the outcome measure (e.g., UCLA Loneliness Scale), the participant
        sample (e.g., sample size, country, population), and much more.
      </p>
      <p className="text-description">
        This database can be accessed with the{" "}
        <Link
          href="/data-explorer"
          className="font-medium text-primary hover:underline"
        >
          Data Explorer tool
        </Link>
        . You can explore the data with a customizable table that allows you to:
      </p>
      <ul className="text-description space-y-2 list-disc pl-6">
        <li>
          Include or exclude specific studies based on different criteria (e.g.,
          only randomized controlled trials or studies with a specific
          intervention type)
        </li>
        <li>Download the data</li>
      </ul>
      <p className="text-description">
        The{" "}
        <Link
          href="/meta-analysis"
          className="font-medium text-primary hover:underline"
        >
          Meta-analysis tool
        </Link>{" "}
        allows you to synthesize the evidence across many studies. It allows you
        to:
      </p>
      <ul className="text-description space-y-2 list-disc pl-6">
        <li>
          Specify which types of studies should be included in the analysis with
          the help of various filters
        </li>
        <li>Estimate the average effect sizes across the included studies</li>
        <li>Test for publication bias</li>
      </ul>
      <div className="space-y-2 pt-4 border-t border-border">
        <h2 className="text-section-title">Acknowledgements</h2>
        <p className="text-description">
          LILI was directly inspired by{" "}
          <Link
            href="https://meat-lime.vercel.app"
            target="_blank"
            className="font-medium text-primary hover:underline"
          >
            LIME
          </Link>{" "}
          (Library of Interventions for Meat Elimination), an open-source
          database of intervention studies created by Dr. Willem Sleegers,
          Dr. Bastian Jaeger, and Dr. Robbie van Aert. LILI adopts the same
          open-science approach and web framework as LIME, and we are grateful
          to the LIME team for making their work publicly available.
        </p>
      </div>
    </main>
  )
}

export default About
