import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const leftFaqs = [
  {
    value: "faq-1",
    question: "How much does an engagement cost?",
    answer:
      "Every project is scoped after an initial audit, so pricing reflects your actual needs — not a generic package. Most engagements are project-based with clear deliverables and timelines. No retainers, no surprises.",
  },
  {
    value: "faq-2",
    question: "What does the free 30-minute audit involve?",
    answer:
      "It's a conversation, not a pitch. We'll map your current tools and workflows, identify the top 2\u20133 bottlenecks, and outline a clear path forward. You'll walk away with actionable insights whether you work with us or not.",
  },
  {
    value: "faq-3",
    question: "How quickly will I see results?",
    answer:
      "Most engagements show measurable impact within the first two weeks. A full implementation typically takes 4\u20138 weeks depending on complexity, but we prioritise quick wins early.",
  },
];

const rightFaqs = [
  {
    value: "faq-4",
    question: "Do I need to be technical?",
    answer:
      "Not at all. You know your business better than anyone — we translate that knowledge into system design. We handle the technical implementation and make sure your team can use everything we build.",
  },
  {
    value: "faq-5",
    question: "Do you make us use specific tools or platforms?",
    answer:
      "No. We work with the tools you already have and trust. No proprietary platforms, no vendor lock-in. If a better tool exists for your needs, we'll recommend it — but the choice is always yours.",
  },
  {
    value: "faq-6",
    question: "Who have you worked with?",
    answer:
      "We've worked with SaaS companies, service businesses, and operations teams across Australia and internationally. From 10-person startups to 500-person enterprises. References available on request.",
  },
];

export const FAQSection = () => (
  <section className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <FadeIn>
        <SectionLabel>Common questions</SectionLabel>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to know before we talk.
        </h2>
      </FadeIn>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <Accordion type="multiple">
            {leftFaqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-base font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="multiple">
            {rightFaqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-base font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </div>
  </section>
);
