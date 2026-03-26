import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Target, Zap, Shield, Users } from "lucide-react";

// TODO: Replace with real testimonial
const testimonials = [
  {
    quote:
      "Parnell.Systems transformed our operations from chaos to clarity. Within two weeks, we had automated workflows that saved our team 20+ hours a week.",
    name: "Sarah Chen",
    title: "COO",
    company: "Meridian SaaS",
    featured: true,
  },
  // TODO: Replace with real testimonial
  {
    quote:
      "The audit alone was worth it. They mapped our entire tech stack and showed us exactly where the bottlenecks were.",
    name: "James Whitford",
    title: "Founder",
    company: "Atlas Operations",
    featured: false,
  },
  // TODO: Replace with real testimonial
  {
    quote:
      "No jargon, no fluff — just real systems that our team actually uses every day.",
    name: "Priya Naidoo",
    title: "Head of Ops",
    company: "Vantage Group",
    featured: false,
  },
];

const credentials = [
  "20+ years experience",
  "Ex-AWS Principal Engineer",
  "40+ teams served",
  "Results in 2 weeks",
];

const differentiators = [
  {
    icon: Target,
    title: "Outcome-focused",
    description:
      "We measure success by results — hours saved, errors reduced, throughput increased.",
  },
  {
    icon: Zap,
    title: "Fast execution",
    description:
      "Most engagements show measurable impact within the first two weeks.",
  },
  {
    icon: Shield,
    title: "No lock-in",
    description:
      "We build on tools you already use. No proprietary platforms, no vendor traps.",
  },
  {
    icon: Users,
    title: "Knowledge transfer",
    description:
      "We don't just build — we document and train so your team owns the system.",
  },
];

export const SocialProofSection = () => (
  <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl">
        <FadeIn>
          <SectionLabel>Social Proof</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            Trusted by teams that take operations seriously.
          </h2>
        </FadeIn>
      </div>

      {/* Testimonials */}
      <div className="mt-16 grid gap-6 lg:grid-cols-[1.5fr_1fr_1fr]">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={0.1 + 0.05 * i}>
            <div className="rounded-xl bg-card border border-border p-8 h-full">
              <span className="text-accent text-4xl font-serif leading-none mb-3 block">
                &ldquo;
              </span>
              <p
                className={`text-muted-foreground leading-relaxed ${
                  t.featured ? "text-lg" : ""
                }`}
              >
                {t.quote}
              </p>
              <p className="font-semibold text-foreground text-sm mt-4">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.title}, {t.company}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Credential strip */}
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {credentials.map((cred) => (
            <span
              key={cred}
              className="inline-flex items-center px-3 py-1 rounded-full bg-muted/30 text-xs text-muted-foreground font-medium border border-border/50"
            >
              {cred}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Differentiators */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiators.map((item, i) => (
          <FadeIn key={i} delay={0.35 + 0.05 * i}>
            <div>
              <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <item.icon size={16} className="text-accent" />
              </div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
