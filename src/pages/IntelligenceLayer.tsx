import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FadeIn } from "@/components/landing/FadeIn";
import { SectionLabel } from "@/components/landing/SectionLabel";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/intelligence-layer/ArchitectureDiagram";
import {
  ArrowRight,
  Brain,
  Plug,
  Layers,
  BookOpen,
  Calendar,
  MessageSquare,
  FileText,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

const problems = [
  {
    text: "Every new client takes 3–4 hours to onboard — chasing paperwork, writing the same welcome emails, scheduling the same calls. Every. Single. Time.",
  },
  {
    text: "A lead fills out your form on Saturday. You call them Monday. Your competitor called in 5 minutes.",
  },
  {
    text: "Meetings happen, action items get agreed, and then… nothing. No system captures them. No one follows up.",
  },
  {
    text: "Your best employee leaves. Everything they knew about how the business runs walks out the door with them.",
  },
];

const deliverables = [
  {
    icon: BookOpen,
    label: "NOTHING FALLS THROUGH THE CRACKS",
    title: "Every decision, every meeting, every action — captured automatically.",
    desc: "Your business builds institutional memory as a side effect of working. Meeting notes write themselves. Action items get tracked. When someone asks 'why did we decide that?', you have the answer — not a vague memory. New hires get up to speed in days, not weeks, because the knowledge is searchable, not locked in someone's head.",
    items: ["Meeting notes & action items — captured automatically", "Decision records with full context and rationale", "Client & stakeholder history", "New hire onboarding that doesn't depend on one person"],
  },
  {
    icon: Plug,
    label: "YOUR TOOLS, TALKING TO EACH OTHER",
    title: "Stop switching between 11 tabs to start actual work.",
    desc: "Your email, calendar, CRM, project management, and messaging — connected into one system that works together. Say 'what's on my calendar tomorrow', 'send the onboarding pack to the new client', or 'post this update to the team' — and it happens. No tab switching. No copy-pasting between tools. No context lost.",
    items: ["Google Calendar & Gmail", "CRM & client management", "Slack, Teams & messaging", "Any tool your business already uses"],
  },
  {
    icon: Layers,
    label: "SYSTEMS THAT RUN WITHOUT YOU",
    title: "Client onboarding. Lead follow-up. Proposals. Running automatically.",
    desc: "Pre-built systems tailored to how your business actually works — not generic templates. Client onboarding that used to take 3–4 hours now runs in under 30 minutes. Leads get followed up within minutes, not days. Proposals get drafted from a single conversation. And every system gets smarter the longer it runs.",
    items: ["Automated client onboarding", "Lead follow-up that never misses", "Proposal & quote generation", "Custom systems built for your business"],
  },
];

const phases = [
  {
    number: "01",
    title: "Audit",
    desc: "Free 30-minute call. We map your biggest time sinks, your tools, and the 3 things costing you the most hours every week. You leave with a clear picture — even if you go no further.",
  },
  {
    number: "02",
    title: "Build",
    desc: "We connect your tools, set up your knowledge base, and build the automated systems specific to your business. Done for you — not DIY.",
  },
  {
    number: "03",
    title: "Deploy",
    desc: "We run it live alongside you for the first week — refining, tuning, and making sure it fits how you actually work. Not how we think you should work.",
  },
  {
    number: "04",
    title: "Handoff",
    desc: "You own it. We document everything, train you and your team, and provide 30 days of post-launch support. No lock-in. No ongoing dependency on us.",
  },
];

const useCases = [
  {
    icon: CheckCircle,
    text: "New client signs up → welcome email, questionnaire, intro call, and briefing doc all generated and sent. Automatically. In 30 minutes, not 3 hours.",
  },
  {
    icon: TrendingUp,
    text: "A lead fills out your form → they get a call within 5 minutes, qualified, and booked in. You didn't touch anything.",
  },
  {
    icon: FileText,
    text: "Paste a meeting transcript → notes, action items, and client context all updated. No one has to type it up.",
  },
  {
    icon: Calendar,
    text: '"Good morning" → full daily brief with your calendar, priorities, and what needs attention. In 30 seconds.',
  },
  {
    icon: Brain,
    text: '"Why did we decide to change suppliers last quarter?" → full decision record, not a vague memory.',
  },
  {
    icon: MessageSquare,
    text: '"Draft a proposal for the client I met yesterday" → done, using everything the system already knows about them.',
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function IntelligenceLayer() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--accent) / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--accent) / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.20) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
              Intelligence Layer
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
              Reclaim 10–30 hours
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                every single week.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
              We build a system around how your business actually runs — connecting your tools, capturing your knowledge, and automating the work that eats your week. Client onboarding. Lead follow-up. Meeting actions. Proposals. Running automatically, getting smarter every day. Done for you. Custom to your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Book a free 30-minute audit
                  <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#the-story">See how it works</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── The Story ────────────────────────────────────────────── */}
      <section id="the-story" className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <FadeIn>
                <SectionLabel>WHY THIS EXISTS</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  Every business owner we spoke to said the same thing.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    "I know AI can help. I just don't have time to figure it out." You've got a CRM, a calendar, a project tool, an email inbox, and a dozen spreadsheets. None of them talk to each other. And nobody has written down how the business actually runs.
                  </p>
                  <p>
                    You've probably tried ChatGPT. Maybe you've used it for emails or brainstorming. But it doesn't know your clients. It doesn't know your processes. It forgets everything the moment you close the tab.
                  </p>
                  <p>
                    The Intelligence Layer is different. We build a system <em>around</em> your business — connected to your tools, trained on how you work, capturing knowledge automatically. You don't have to maintain it. You just use it.
                  </p>
                  <p className="text-foreground font-medium">
                    The result: client onboarding that runs itself, leads that get followed up in minutes, meetings that produce real action items — and a system that gets smarter every week you use it.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Compounding value card */}
            <FadeIn delay={0.15}>
              <div
                className="rounded-2xl px-8 py-10 border relative overflow-hidden"
                style={{
                  background: "hsl(var(--accent) / 0.05)",
                  borderColor: "hsl(var(--accent) / 0.25)",
                  boxShadow: "0 0 60px hsl(var(--accent) / 0.08)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 70%)" }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
                  What changes — and when
                </p>
                <div className="space-y-6">
                  {[
                    {
                      period: "End of week one",
                      desc: "Your tools are connected. Client onboarding is automated. Your first meetings are being captured without you doing anything.",
                    },
                    {
                      period: "End of month one",
                      desc: "Leads are being followed up automatically. Proposals draft themselves. You've stopped switching between 11 tabs to start your day.",
                    },
                    {
                      period: "End of quarter one",
                      desc: "The system knows your business better than a new hire could in six months. 10–30 hours a week reclaimed. And it's still getting smarter.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                          style={{ background: `hsl(var(--accent) / ${0.4 + i * 0.3})` }}
                        />
                        {i < 2 && <div className="w-px flex-1 mt-1" style={{ background: "hsl(var(--accent) / 0.15)" }} />}
                      </div>
                      <div className="pb-4">
                        <p className="text-sm font-semibold text-foreground mb-1">{item.period}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 rounded-lg px-4 py-3 border text-xs text-muted-foreground leading-relaxed italic"
                  style={{ borderColor: "hsl(var(--accent) / 0.2)", background: "hsl(var(--accent) / 0.04)" }}
                >
                  Unlike DIY tools, you don't maintain this. We build it, deploy it, and hand it over. The value compounds automatically — every conversation makes it smarter.
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <FadeIn>
                <SectionLabel>SOUND FAMILIAR?</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  The things quietly costing you the most.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                  You don't have a "technology problem." You have processes that depend on someone remembering, someone chasing, someone manually doing the same thing for the hundredth time. Every one of these is fixable — and measurable.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <div className="flex items-start gap-4 rounded-lg px-5 py-4 bg-card border border-border">
                    <span className="mt-0.5 text-accent shrink-0 font-bold">→</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works (Architecture) ─────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(var(--accent) / 0.2) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <FadeIn>
              <SectionLabel>HOW IT WORKS</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Four layers. One system that runs your business.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                It's not a chatbot. It's not another SaaS subscription. It's a connected system built around your business — capturing knowledge, connecting your tools, and running the repeatable work so you don't have to.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <ArchitectureDiagram />
          </FadeIn>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────── */}
      <section id="what-you-get" className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <FadeIn>
              <SectionLabel>WHAT YOU GET</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Three things that change how your business runs.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Every business is different — so every build is custom. But the three foundations are always the same. They work together to replace the manual, repetitive, forgettable parts of running your business.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <FadeIn key={i} delay={0.08 * i} className="h-full">
                <div
                  className="flex flex-col gap-5 rounded-xl px-7 py-7 bg-card border border-border h-full hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">{d.label}</span>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 shrink-0">
                        <d.icon size={18} className="text-accent" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground leading-snug">{d.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  <ul className="mt-auto space-y-2">
                    {d.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── In Practice ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <FadeIn>
              <SectionLabel>IN PRACTICE</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                What changes on a typical day.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                The things you used to spend hours on — done automatically, or done in seconds. Here's what that actually looks like.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <FadeIn key={i} delay={0.04 * i}>
                <div className="flex items-start gap-4 rounded-lg px-5 py-5 bg-card border border-border h-full">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 shrink-0 mt-0.5">
                    <uc.icon size={15} className="text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Compound growth callout */}
          <FadeIn delay={0.3}>
            <div
              className="mt-12 rounded-xl px-8 py-7 border"
              style={{
                background: "hsl(var(--accent) / 0.04)",
                borderColor: "hsl(var(--accent) / 0.20)",
              }}
            >
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { value: "Week 1", desc: "System is live. Onboarding automated. First meetings captured." },
                  { value: "Month 1", desc: "10–15 hours reclaimed. Leads followed up in minutes. Proposals drafted automatically." },
                  { value: "Month 3", desc: "System knows your business better than any new hire. 20–30 hours/week back." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <p className="text-lg font-semibold text-accent">{item.value}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <SectionLabel>THE PROCESS</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Live in days. Compounding within weeks.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Most clients are live within the first week. You don't need to be technical. You don't need to learn new tools. We handle the build — you tell us how your business works.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <FadeIn key={i} delay={0.08 * i} className="h-full">
                <div className="flex flex-col gap-4 rounded-xl px-6 py-6 bg-card border border-border h-full">
                  <span
                    className="text-5xl font-bold tracking-tighter leading-none"
                    style={{ color: "hsl(var(--accent) / 0.20)" }}
                  >
                    {phase.number}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <FadeIn>
                <SectionLabel>WHO IT'S FOR</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  You know AI can help. You just don't have time to figure it out.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                  That's exactly who this is for. Business owners who are too busy running the business to spend weeks learning AI tools. We handle the technology. You tell us how your business works. The system does the rest.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mt-8">
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                      Book a free 30-minute audit
                      <ArrowRight className="ml-1" size={16} />
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {[
                {
                  role: "SME Owners & Directors",
                  desc: "Running the business, managing the team, handling clients — all at once. The system takes the repeatable work off your plate so you focus on what actually grows the business.",
                },
                {
                  role: "Service Business Operators",
                  desc: "Agencies, consultancies, trades, professional services. Client onboarding, proposals, and follow-up running automatically instead of manually.",
                },
                {
                  role: "Practice & Office Managers",
                  desc: "You keep the business running day to day. The system captures knowledge, tracks actions, and stops things falling through the cracks.",
                },
                {
                  role: "Scaling Teams (5–50 people)",
                  desc: "Growing fast but can't afford a full ops hire yet. The Intelligence Layer gives you operational leverage without the headcount.",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.05 * i}>
                  <div className="rounded-lg px-6 py-5 bg-card border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                      <h3 className="text-sm font-semibold text-foreground">{item.role}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(210 33% 96%) 0%, hsl(217 91% 60% / 0.06) 50%, hsl(210 33% 96%) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(210 64% 12% / 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(210 64% 12% / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-balance">
                Find out what's costing you
                <br />
                <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  the most time this week.
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Free 30-minute audit. We'll map your biggest time sinks, identify the 3 things that can be automated immediately, and give you a clear roadmap — even if you go no further. No pitch. No obligation.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                    Book your free audit
                    <ArrowRight className="ml-1" size={16} />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/">Back to Parnell.Systems</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
