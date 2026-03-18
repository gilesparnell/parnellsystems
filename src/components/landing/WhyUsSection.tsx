import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Shield, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Target, title: "Outcome-focused", description: "We measure success by results — hours saved, errors reduced, throughput increased." },
  { icon: Zap, title: "Fast execution", description: "Most engagements show measurable impact within the first two weeks." },
  { icon: Shield, title: "No lock-in", description: "We build on tools you already use. No proprietary platforms, no vendor traps." },
  { icon: Users, title: "Knowledge transfer", description: "We don't just build — we document and train so your team owns the system." },
];

export const WhyUsSection = () => (
  <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
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

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <motion.div
              className="rounded-lg bg-background p-6 h-full group"
              style={{ boxShadow: "var(--shadow-card)" }}
              whileHover={{ y: -4, boxShadow: "0 0 0 1px rgba(11, 31, 51, 0.05), 0 10px 30px -10px rgba(11, 31, 51, 0.1)" }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-4">
                <item.icon size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
