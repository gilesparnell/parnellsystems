import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Shield, Zap, Target, Users } from "lucide-react";

const reasons = [
  { icon: Target, title: "Outcome-focused", description: "We measure success by results — hours saved, errors reduced, throughput increased." },
  { icon: Zap, title: "Fast execution", description: "Most engagements show measurable impact within the first two weeks." },
  { icon: Shield, title: "No lock-in", description: "We build on tools you already use. No proprietary platforms, no vendor traps." },
  { icon: Users, title: "Knowledge transfer", description: "We don't just build — we document and train so your team owns the system." },
];

export const WhyUsSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>Why Us</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            We're not consultants who deliver slide decks.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            We're operators who build. Every recommendation comes with implementation.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div className="space-y-3">
              <item.icon size={20} className="text-accent" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
