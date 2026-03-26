import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { ArrowRight, Brain, Mic, GraduationCap, Layers, Cog, BarChart3 } from "lucide-react";

const coreServices = [
  {
    title: "System Design & Automation",
    desc: "We design and build systems that remove manual work and streamline how your business operates.",
  },
  {
    title: "AI for Customer Handling",
    desc: "Never miss a lead again. We implement voice and SMS systems that respond instantly and consistently.",
  },
  {
    title: "Workflow & Tool Optimisation",
    desc: "We connect your tools and simplify your processes so everything works together — without duplication or confusion.",
  },
  {
    title: "Visibility & Reporting",
    desc: "Get a clear view of what's happening in your business — leads, jobs, and performance — without digging through multiple systems.",
  },
];

const pillars = [
  {
    title: "Built properly",
    desc: "Systems are designed to be reliable, scalable, and easy to maintain — not patched together.",
  },
  {
    title: "Delivered iteratively",
    desc: "We build in small steps, test quickly, and improve continuously — so you see value early.",
  },
  {
    title: "Designed for real teams",
    desc: "Your systems only work if your team uses them. We make sure they fit how people actually work day to day.",
  },
];

const capabilities = [
  {
    icon: Layers,
    title: "Systems Architecture",
    desc: "We design how your tools, data, and workflows connect.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    desc: "We eliminate manual bottlenecks with automated workflows.",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    desc: "We instrument your systems so you can measure what matters.",
  },
];

export const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      {/* Capabilities Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => (
          <FadeIn key={i} delay={0.05 * i}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center bg-accent/10 rounded-md h-8 w-8">
                <cap.icon size={16} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Services Grid */}
      <div className="mt-20 pt-16 border-t border-border grid gap-16 lg:grid-cols-2 items-start">
        {/* Left Column */}
        <div>
          <FadeIn>
            <SectionLabel>SERVICES</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Fix the way your business runs — properly.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
              Every business is different. We don't sell packages — we identify what's slowing you down and build systems that actually work.
            </p>
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreServices.map((service, i) => (
            <FadeIn key={i} delay={0.03 * i} className="h-full">
              <div
                className="flex flex-col gap-3 rounded-lg px-6 py-5 bg-card group hover:-translate-y-1 transition-all duration-300 h-full border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* New Subsection */}
      <div className="mt-32 pt-16 border-t border-border">
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          <FadeIn>
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.02em]">
              Not just tools — better ways of working
            </h3>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>Most automation projects fail because they focus on tools instead of how the business actually runs.</p>
              <p>We take a different approach.</p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center lg:text-left">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={0.1 + (0.05 * i)}>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <h4 className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/70 shrink-0" />
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center lg:text-left">
            <p className="inline-block px-4 py-2 rounded-full bg-muted/50 text-xs sm:text-sm text-muted-foreground font-medium italic border border-border/50">
              Built using the same principles used to design and scale systems at AWS — adapted for real-world businesses.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Three service teasers */}
      <div className="mt-16 grid gap-5 lg:grid-cols-3">

        {/* Intelligence Layer — featured */}
        <FadeIn delay={0.05} className="lg:col-span-1">
          <a
            href="/intelligence-layer"
            className="flex flex-col gap-4 rounded-xl px-7 py-7 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group h-full"
            style={{ boxShadow: "0 0 40px hsl(var(--accent) / 0.08)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/15 shrink-0">
                <Brain size={17} className="text-accent" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Intelligence Layer
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-[-0.02em] leading-snug">
                Your business, running on AI.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A bespoke AI operating system that knows your business, remembers everything, and acts on your behalf.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-accent group-hover:gap-2.5 transition-all duration-200">
              Learn more <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </a>
        </FadeIn>

        {/* Voice & SMS */}
        <FadeIn delay={0.1} className="lg:col-span-1">
          <a
            href="/voice-sms"
            className="flex flex-col gap-4 rounded-xl px-7 py-7 border border-border bg-card hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group h-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted shrink-0">
                <Mic size={17} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground group-hover:text-accent transition-colors duration-200">
                AI Voice & SMS
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-[-0.02em] leading-snug">
                Never miss a lead again.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                AI that answers calls, follows up by SMS, and books appointments — 24/7, without you.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-accent group-hover:gap-2.5 transition-all duration-200">
              See demos <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </a>
        </FadeIn>

        {/* Training */}
        <FadeIn delay={0.15} className="lg:col-span-1">
          <a
            href="/training"
            className="flex flex-col gap-4 rounded-xl px-7 py-7 border border-border bg-card hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group h-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted shrink-0">
                <GraduationCap size={17} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground group-hover:text-accent transition-colors duration-200">
                AI Training
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-[-0.02em] leading-snug">
                Learn AI before your competitors do.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Claude and Antigravity courses built for SME owners — no tech background needed.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-accent group-hover:gap-2.5 transition-all duration-200">
              View courses <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </a>
        </FadeIn>

      </div>

    </div>
  </section>
);
