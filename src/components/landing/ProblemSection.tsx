import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const problems = [
  "Your team spends more time managing tools than doing actual work.",
  "Information lives in ten different places — none of them connected.",
  "Onboarding takes weeks because nothing is documented or structured.",
  "Every process depends on one person who 'just knows how it works.'",
];

export const ProblemSection = () => (
  <section className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-3xl">
        <FadeIn>
          <SectionLabel>The Problem</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Growth creates complexity. Complexity creates drag.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Most teams don't have a systems problem — they have a systems debt problem. The tools are there, but they're disconnected, undocumented, and fragile.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {problems.map((problem, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div
              className="rounded-lg bg-card p-6 text-foreground/80 leading-relaxed"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-accent font-bold mr-2">→</span>
              {problem}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
