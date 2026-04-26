import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqSections = [
  {
    title: "General",
    items: [
      {
        question: "What is LILI?",
        answer: (
          <>
            LILI stands for Library of Interventions on Loneliness &amp;
            Isolation. It is a continuously growing collection of studies that
            tested the effectiveness of psychological and social interventions in
            reducing feelings of loneliness and social isolation. You can explore
            the studies with the{" "}
            <Link
              href="/data-explorer"
              className="font-medium text-primary hover:underline"
            >
              Data Explorer tool
            </Link>{" "}
            or conduct custom analyses with the{" "}
            <Link
              href="/meta-analysis"
              className="font-medium text-primary hover:underline"
            >
              Meta-analysis tool
            </Link>
            . You can find out more about this project on the{" "}
            <Link
              href="/about"
              className="font-medium text-primary hover:underline"
            >
              About
            </Link>{" "}
            page.
          </>
        ),
      },
      {
        question: "Who created LILI?",
        answer: (
          <>
            LILI was created by Dr. Anneloes Kip (Postdoctoral Researcher at
            Tilburg University) and Dr. Dongning Ren (Associate Professor at
            Maastricht University). See the{" "}
            <Link
              href="/contributors"
              className="font-medium text-primary hover:underline"
            >
              Contributors
            </Link>{" "}
            page for more details.
          </>
        ),
      },
      {
        question: "Is LILI free to use?",
        answer:
          "Yes, LILI is completely free to use. All data in LILI is openly available and can be downloaded for research or other purposes.",
      },
      {
        question: "How can I contribute to LILI?",
        answer: (
          <>
            If you know of a study that should be included in LILI, please{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              contact us
            </Link>
            . We welcome contributions from researchers, clinicians, and anyone
            familiar with the loneliness intervention literature.
          </>
        ),
      },
    ],
  },
  {
    title: "The database",
    items: [
      {
        question: "What studies are included in LILI?",
        answer:
          "LILI includes experimental and quasi-experimental studies (e.g., randomized controlled trials) that tested the effectiveness of psychological or social interventions aimed at reducing loneliness and/or social isolation. Both published and unpublished studies are eligible for inclusion.",
      },
      {
        question: "What information is extracted for each study?",
        answer:
          "For each study, we extract information on the intervention type (e.g., cognitive behavioral therapy, social skills training), the delivery format (e.g., online, in-person, group-based), the outcome measure (e.g., UCLA Loneliness Scale), the participant sample (e.g., sample size, country, population), and effect sizes, among other variables.",
      },
      {
        question: "How often is the database updated?",
        answer: (
          <>
            We aim to update the database regularly as new studies are
            published. Because LILI is currently in beta, the database is still
            growing. If you find a study that is missing, please{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:underline"
            >
              let us know
            </Link>
            .
          </>
        ),
      },
      {
        question: "Can I download the data?",
        answer: (
          <>
            Yes. You can download the data via the{" "}
            <Link
              href="/data-explorer"
              className="font-medium text-primary hover:underline"
            >
              Data Explorer
            </Link>
            . The data is available as a CSV file.
          </>
        ),
      },
    ],
  },
  {
    title: "Data explorer",
    items: [
      {
        question: "What can I do with the Data Explorer?",
        answer: (
          <>
            The{" "}
            <Link
              href="/data-explorer"
              className="font-medium text-primary hover:underline"
            >
              Data Explorer
            </Link>{" "}
            allows you to browse, filter, and sort the studies in the LILI
            database. You can inspect study details, filter by intervention
            type, outcome measure, study design, and more, and download the
            filtered dataset.
          </>
        ),
      },
      {
        question: "How do I filter studies?",
        answer: (
          <>
            Use the filter options at the top of the{" "}
            <Link
              href="/data-explorer"
              className="font-medium text-primary hover:underline"
            >
              Data Explorer
            </Link>{" "}
            to narrow down studies by characteristics such as intervention type,
            delivery format, outcome measure, or study design. Multiple filters
            can be applied at the same time.
          </>
        ),
      },
    ],
  },
  {
    title: "Meta-analysis",
    items: [
      {
        question: "What can I do with the Meta-analysis tool?",
        answer: (
          <>
            The{" "}
            <Link
              href="/meta-analysis"
              className="font-medium text-primary hover:underline"
            >
              Meta-analysis tool
            </Link>{" "}
            allows you to synthesize evidence across studies. You can specify
            which studies to include using filters, estimate average effect
            sizes, and test for publication bias.
          </>
        ),
      },
      {
        question: "What effect size metric does LILI use?",
        answer: (
          <>
            LILI primarily uses standardized mean differences (Cohen&apos;s d /
            Hedges&apos; g) to express effect sizes. The{" "}
            <Link
              href="/meta-analysis"
              className="font-medium text-primary hover:underline"
            >
              Meta-analysis tool
            </Link>{" "}
            translates these into several alternative metrics to help you
            interpret the results.
          </>
        ),
      },
      {
        question: "What method is used for the meta-analysis?",
        answer:
          "LILI uses a random-effects meta-analysis model, which assumes that the true effect size varies across studies. This is the recommended approach when synthesizing a heterogeneous set of studies.",
      },
      {
        question: "How is publication bias assessed?",
        answer: (
          <>
            The{" "}
            <Link
              href="/meta-analysis"
              className="font-medium text-primary hover:underline"
            >
              Meta-analysis tool
            </Link>{" "}
            provides tools to assess publication bias, including funnel plots
            and statistical tests. These help you evaluate whether the results
            might be inflated due to selective reporting of positive findings.
          </>
        ),
      },
    ],
  },
]

const FAQ = () => {
  return (
    <main className="page-width page-container space-y-10">
      <h1 className="text-page-title text-center">FAQ</h1>
      <div className="space-y-10">
        {faqSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-section-title">{section.title}</h2>
            <Accordion type="multiple">
              {section.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`${section.title}-${index}`}
                >
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-description">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </main>
  )
}

export default FAQ
