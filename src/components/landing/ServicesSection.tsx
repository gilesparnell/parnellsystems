import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const services = [
  "Systems audit & assessment",
  "Tool stack optimization",
  "Workflow automation design",
  "Data pipeline architecture",
  "Documentation systems",
  "Team onboarding infrastructure",
  "Operational dashboards",
  "Integration engineering",
];

export const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Everything you need to run a tight operation.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              Each engagement is scoped to your specific needs. We don't sell packages — we solve problems.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <FadeIn key={i} delay={0.03 * i}>
              <div className="flex items-center gap-3 rounded-lg px-4 py-3 bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);
