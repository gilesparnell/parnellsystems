import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const audiences = [
  {
    title: "Founders scaling past 20 people",
    description: "You've outgrown spreadsheets and ad-hoc processes. You need systems that match your ambition.",
  },
  {
    title: "Ops leaders inheriting chaos",
    description: "You've been handed a stack of disconnected tools and asked to 'make it work.' We help you rebuild with intention.",
  },
  {
    title: "Teams preparing for investment",
    description: "Investors look for operational maturity. We help you build the infrastructure that signals readiness.",
  },
];

export const WhoItsForSection = () => (
  <section className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>Who It's For</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Built for teams that take operations seriously.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {audiences.map((item, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div
              className="rounded-lg bg-card p-8 h-full"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
