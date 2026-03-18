import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const cases = [
  {
    metric: "60%",
    label: "reduction in onboarding time",
    description: "Structured documentation and automated provisioning for a 200-person SaaS company.",
  },
  {
    metric: "15hrs",
    label: "saved per week",
    description: "Automated reporting workflows for an operations team spending half their time in spreadsheets.",
  },
  {
    metric: "3x",
    label: "faster incident response",
    description: "Unified alerting and runbook system for an infrastructure team managing 40+ services.",
  },
];

export const UseCasesSection = () => (
  <section className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>Use Cases</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Real results from real engagements.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {cases.map((item, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div
              className="rounded-lg bg-card p-8 h-full"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-3xl font-bold text-accent">{item.metric}</div>
              <div className="mt-1 text-sm font-semibold text-foreground">{item.label}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
