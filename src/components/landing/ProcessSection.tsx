import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your current tools, workflows, and pain points through stakeholder interviews and system audits.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "We design a target-state systems architecture with clear migration paths and priority rankings.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We build, configure, and connect your systems — working alongside your team, not in isolation.",
  },
  {
    number: "04",
    title: "Handoff",
    description: "We document everything, train your team, and provide 30 days of post-launch support.",
  },
];

export const ProcessSection = () => (
  <section id="process" className="py-24 lg:py-32 bg-card">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>Process</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Four phases. Zero ambiguity.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-secondary hidden sm:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div className="flex gap-8 items-start">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-lg text-pretty">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);
