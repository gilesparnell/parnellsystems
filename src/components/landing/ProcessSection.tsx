import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { motion } from "framer-motion";

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
  <section id="process" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
            Process
          </span>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em] text-primary-foreground">
            Four phases. Zero ambiguity.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 relative">
        {/* Vertical line with gradient */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px hidden sm:block overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-accent via-accent/40 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
          />
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="flex gap-8 items-start">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground text-sm font-bold shadow-lg shadow-accent/20">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground">{step.title}</h3>
                  <p className="mt-2 text-primary-foreground/60 leading-relaxed max-w-lg text-pretty">
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
