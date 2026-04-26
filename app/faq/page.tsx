import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const FAQ = () => {
  return (
    <main className="page-width page-container space-y-8">
      <h1 className="text-page-title text-center">FAQ</h1>
      <div className="space-y-8">

        {/* General */}
        <div className="space-y-4">
          <h2 className="text-section-title">General</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="general-1">
              <AccordionTrigger className="text-base">
                What is LILI?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  In short, it is a library of psychological and social
                  intervention studies aimed at reducing feelings of loneliness
                  and social isolation. We are collecting information on all
                  studies on this topic to make it available via this website.
                  You can explore the studies with the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/data-explorer"
                  >
                    Data Explorer tool
                  </Link>{" "}
                  or conduct custom analyses with the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/meta-analysis"
                  >
                    Meta-analysis tool
                  </Link>
                  . You can find out more about this project on the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/about"
                  >
                    About
                  </Link>{" "}
                  page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="general-2">
              <AccordionTrigger className="text-base">
                Who is the target audience?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  LILI is primarily designed for researchers, clinicians,
                  advocates, and policy makers who are interested in the
                  loneliness and social isolation literature. In many ways, the
                  website is designed to make scientific results more accessible
                  for non-scientists. It facilitates the exploration and
                  analysis of scientific studies, especially for people who do
                  not regularly search for and read scientific publications.
                  However, some background knowledge in statistics and
                  scientific research is recommended, especially when using the
                  meta-analysis tool.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="general-3">
              <AccordionTrigger className="text-base">
                Who created LILI?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  LILI was created by Dr. Anneloes Kip and Dr. Dongning Ren.
                  You can find out more about who collaborated on LILI on the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/contributors"
                  >
                    Contributors
                  </Link>{" "}
                  page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="general-4">
              <AccordionTrigger className="text-base">
                Who has funded LILI?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  LILI is currently maintained by its contributors on a
                  voluntary basis and is not funded by an external grant or
                  institution. If you are interested in supporting LILI, please{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/contact"
                  >
                    contact us
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* The database */}
        <div className="space-y-4">
          <h2 className="text-section-title">The database</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="database-1">
              <AccordionTrigger className="text-base">
                What types of interventions are included?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  We include studies that tested whether an intervention reduces
                  feelings of loneliness and/or social isolation. These
                  interventions differ on various aspects:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Type: cognitive behavioral therapy, social skills training,
                    mindfulness, befriending, technology-based interventions,
                    etc.
                  </li>
                  <li>
                    Delivery format: individual, group-based, online, in-person,
                    etc.
                  </li>
                  <li>
                    Target group: older adults, adolescents, clinical
                    populations, general population, etc.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="database-2">
              <AccordionTrigger className="text-base">
                What types of outcomes are included?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  We include studies that measured various outcomes related to
                  loneliness and social isolation. We distinguish between
                  several types of measures:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Loneliness: self-reported feelings of loneliness (e.g., UCLA
                    Loneliness Scale, De Jong Gierveld Scale)
                  </li>
                  <li>
                    Social isolation: objective measures of social contact and
                    network size
                  </li>
                  <li>
                    Related outcomes: social anxiety, social connectedness,
                    quality of life, etc.
                  </li>
                </ul>
                <p>
                  These outcomes were measured at different time points, from
                  immediately after the intervention to months later.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="database-3">
              <AccordionTrigger className="text-base">
                What types of studies are included?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  The database includes data from different types of
                  publications, including peer-reviewed articles published in
                  scientific journals, unpublished scientific papers and theses,
                  and reports by other institutions. We include studies that
                  experimentally tested the effect of an intervention on a
                  relevant outcome. This includes between-subject designs, which
                  compare the scores of participants who received the
                  intervention to scores of a control group, and within-subject
                  designs, which compare participants&apos; scores before and
                  after an intervention.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="database-4">
              <AccordionTrigger className="text-base">
                How were the studies coded?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Every study was coded on various relevant dimensions related
                  to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The paper: title, authors, publication year, etc.</li>
                  <li>
                    The study: sample size, study design, accessibility of data,
                    preregistration, etc.
                  </li>
                  <li>
                    The intervention: type, delivery format, target group,
                    duration, etc.
                  </li>
                  <li>
                    The outcomes: type, measure used, time since intervention,
                    etc.
                  </li>
                </ul>
                <p>
                  A description of each variable that was recorded can be found
                  in the codebook, which you can download on the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/meta-analysis"
                  >
                    Meta-analysis
                  </Link>{" "}
                  page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="database-5">
              <AccordionTrigger className="text-base">
                Are all relevant studies included in the database?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  LILI is currently in beta. We are still in the process of
                  developing a fully functioning version of the website and
                  continuously adding studies to the database. On the landing
                  page, you can see how many papers, studies, and effect sizes
                  are currently included.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="database-6">
              <AccordionTrigger className="text-base">
                Can I suggest a paper for the database?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Eventually, we want to include all studies that fulfill our
                  inclusion criteria. If you know a study that has not been
                  included yet, you can let us know{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/contact"
                  >
                    here
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Data explorer */}
        <div className="space-y-4">
          <h2 className="text-section-title">Data explorer</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="explorer-1">
              <AccordionTrigger className="text-base">
                What is the Data Explorer?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  The{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/data-explorer"
                  >
                    Data Explorer
                  </Link>{" "}
                  helps you browse through research papers included in the
                  database. We have organized information about a paper into
                  different levels, as papers can be quite complex. They have
                  paper-level information like the authors and publication year,
                  but they can also consist of multiple studies, each possibly
                  with multiple interventions and outcomes. We&apos;ve organized
                  all this information into separate tabs so you can focus on
                  the specific details you need.
                </p>
                <p>
                  We&apos;ve also added several features to help you explore and
                  work with the data:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    You can decide which studies to include by using filters
                    (e.g., only randomized controlled trials, only studies with
                    a specific intervention type)
                  </li>
                  <li>
                    You can sort the data based on information from a specific
                    column (e.g., sorting by publication year or effect size)
                  </li>
                  <li>
                    You can click on a link at the end of each row to see more
                    information in a pop-up window, which also includes a link
                    to the paper.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="explorer-2">
              <AccordionTrigger className="text-base">
                What are the different data levels and how do they relate?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  The Data Explorer has multiple tabs, each showing different
                  information about the same research. Each tab represents a
                  different &apos;level&apos; of information:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Papers:</strong> Basic publication info like titles,
                    authors, and publication year. You can also see which papers
                    are open access and follow links to the original source.
                  </li>
                  <li>
                    <strong>Studies:</strong> Individual studies within papers.
                    Shows sample sizes, study design details, whether the study
                    was preregistered, and more.
                  </li>
                  <li>
                    <strong>Interventions:</strong> The specific techniques
                    researchers tested, such as cognitive behavioral therapy,
                    social skills training, or mindfulness. Includes details
                    about the delivery format and target group.
                  </li>
                  <li>
                    <strong>Outcomes:</strong> How researchers measured the
                    effects of the interventions, such as self-reported
                    loneliness, social isolation, or related outcomes.
                  </li>
                  <li>
                    <strong>Effects:</strong> The statistical results showing
                    how well the intervention worked (effect size) and each
                    effect&apos;s sample size.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="explorer-3">
              <AccordionTrigger className="text-base">
                How do I use filters?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Each tab has its own set of filters to help you narrow down
                  what you&apos;re looking at. For example, you might filter
                  papers by publication year, or studies by sample size or
                  study design. Multiple filters can be applied at the same
                  time, and the lock feature lets you maintain your filter
                  selection as you switch between tabs.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="explorer-4">
              <AccordionTrigger className="text-base">
                Can I download the data?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Yes. You can download any of the tables as CSV files to
                  analyze in Excel, R, or other tools. This is useful if you
                  want to run your own statistical analyses, perhaps on a more
                  fine-grained subset of the data.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Meta-analysis */}
        <div className="space-y-4">
          <h2 className="text-section-title">Meta-analysis</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="meta-1">
              <AccordionTrigger className="text-base">
                What is a meta-analysis?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Generally speaking, the goal of a meta-analysis is to combine
                  the results of many studies on a specific question in a
                  quantitative way. For example, we may want to know if a
                  specific type of intervention reduces loneliness. Researchers
                  run experiments to test the effect of such interventions, but
                  the effect size may depend on the specific population studied,
                  the intervention content, how soon after the intervention
                  loneliness was measured, and many other factors. By averaging
                  the results from all these studies, we get a better
                  understanding of how effective the intervention is in general.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meta-2">
              <AccordionTrigger className="text-base">
                How does the Meta-analysis tool work?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  The{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/meta-analysis"
                  >
                    Meta-analysis tool
                  </Link>{" "}
                  allows you to conduct customizable meta-analyses on specific
                  sets of studies. First, you can select which studies should be
                  included. You can filter by type of intervention, outcome
                  measure, country, and many other variables. The website then
                  displays various results for the selected set of studies:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    The meta-analytic effect size (Cohen&apos;s d) across all
                    studies, including the 95% confidence interval, the 95%
                    prediction interval, and other effect size measures
                  </li>
                  <li>
                    The results of a test for publication bias (including a
                    funnel plot showing the relation between effect size and
                    standard error)
                  </li>
                  <li>
                    A dot plot and forest plot that visualize the effect sizes
                    of all included studies
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meta-3">
              <AccordionTrigger className="text-base">
                How narrow or wide should my inclusion criteria be?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Meta-analyses provide the average effect across many studies.
                  This average is more meaningful if we compare studies that are
                  more similar to each other. Setting relatively narrow criteria
                  helps reduce variation between studies, making it easier to
                  compare results and draw more meaningful conclusions. However,
                  when widening the inclusion criteria, more studies are
                  included, which increases the statistical power and precision
                  of the meta-analysis. By adjusting your inclusion criteria,
                  you can navigate this tradeoff. Ultimately, your inclusion
                  criteria depend on which question you want to address.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meta-4">
              <AccordionTrigger className="text-base">
                How should I interpret the effect size estimates?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  Effect size measures such as Cohen&apos;s d can be used to
                  quantify differences between groups on some variable of
                  interest. For example, if an intervention leads to a larger
                  reduction in loneliness relative to a control group, this will
                  be reflected in a larger effect size. This{" "}
                  <Link
                    target="_blank"
                    href="https://rpsychologist.com/cohend/"
                    className="font-medium text-primary hover:underline"
                  >
                    website
                  </Link>{" "}
                  provides a visual explanation of how Cohen&apos;s d (and other
                  effect size measures that we include here) corresponds to
                  group differences of varying sizes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meta-5">
              <AccordionTrigger className="text-base">
                If I implement the same intervention as one of the studies, will
                it have the same effect?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  There are many reasons why you should not be too confident
                  that an intervention will be equally effective, or even
                  effective at all, in a different context. The effectiveness of
                  an intervention is not only influenced by the type of
                  intervention that was tested, but also by many other factors.
                  The participants in the original study may have been more open
                  to change (e.g., university students or a highly motivated
                  clinical sample). The original study may have only assessed
                  loneliness immediately after the intervention, which may not
                  reflect long-term effectiveness.
                </p>
                <p>
                  Even when we replicate a study design under very similar
                  conditions, results often look{" "}
                  <Link
                    target="_blank"
                    href="https://www.science.org/doi/10.1126/science.aac4716"
                    className="font-medium text-primary hover:underline"
                  >
                    different
                  </Link>
                  . Larger, statistically significant results are more likely to
                  be accepted for publication and some researchers engage in{" "}
                  <Link
                    target="_blank"
                    href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01832/full"
                    className="font-medium text-primary hover:underline"
                  >
                    questionable research practices
                  </Link>{" "}
                  that distort their results. This means that effect sizes in
                  the literature may overstate how large the true effect sizes
                  really are.
                </p>
                <p>
                  To address these difficulties, you can use LILI to find
                  studies that more closely match the sample and setting you
                  have in mind, or to assess the meta-analytic estimate of an
                  intervention type, which may be more robust than the result
                  from a single study.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meta-6">
              <AccordionTrigger className="text-base">
                Are some study results more informative and how can I tell?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-base">
                <p>
                  It is difficult to judge how reliable and generalizable the
                  results of a specific study are. But, all else being equal,
                  there are a few indicators you could pay attention to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Sample size:</strong> Studies with larger participant
                    samples will provide more reliable estimates of group
                    differences. Smaller studies will yield noisier effect
                    sizes. Meta-analyses are meant to address this problem by
                    averaging over many studies.
                  </li>
                  <li>
                    <strong>Outcome measure:</strong> If you are interested in
                    reducing loneliness specifically, you could focus on studies
                    that measured loneliness with a validated scale (e.g., the
                    UCLA Loneliness Scale). Some studies only assessed related
                    outcomes such as social anxiety or quality of life, which
                    may not capture the same construct.
                  </li>
                  <li>
                    <strong>Follow-up timing:</strong> Studies that measured
                    outcomes only immediately after the intervention may
                    overestimate long-term effectiveness. Studies with longer
                    follow-up periods provide more relevant evidence for
                    sustained effects.
                  </li>
                </ul>
                <p>
                  You can find these indicators using the{" "}
                  <Link
                    className="font-medium text-primary hover:underline"
                    href="/data-explorer"
                  >
                    Data Explorer
                  </Link>{" "}
                  and use them as inclusion criteria for a meta-analysis.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
    </main>
  )
}

export default FAQ
