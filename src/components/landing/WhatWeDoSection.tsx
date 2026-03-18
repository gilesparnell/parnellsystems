import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Layers, Cog, BarChart3 } from "lucide-react";

const offerings = [
  {
    icon: Layers,
    title: "Systems Architecture",
    description: "We design the blueprint for how your tools, data, and workflows connect — creating a unified operating layer.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "We eliminate manual bottlenecks by building automated workflows that save your team hours every week.",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    description: "We instrument your systems so you can measure what matters — from team velocity to process efficiency.",
  },
];

export const WhatWeDoSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>What We Do</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Operational excellence, engineered.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {offerings.map((item, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div className="space-y-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
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
