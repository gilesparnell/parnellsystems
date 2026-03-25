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
    text: "Decisions made last month live in someone's head — not documented, not searchable, not transferable.",
  },
  {
    text: "Your team spends hours context-switching between tools before they can do the actual work.",
  },
  {
    text: "Every meeting produces actions that fall through the cracks because no system captures them.",
  },
  {
    text: "Onboarding a new operator takes weeks because institutional knowledge isn't written down anywhere.",
  },
];

const deliverables = [
  {
    icon: BookOpen,
    label: "KNOWLEDGE BASE",
    title: "Your institutional memory, automated.",
    desc: "Every meeting note, decision log, team update, and action item — automatically captured, organised, and searchable. Your AI knows what happened last month, last quarter, and why decisions were made. When someone asks 'why did we choose X over Y?', you have the full rationale — not a vague memory.",
    items: ["Meeting notes & transcripts", "Decision records with full context", "Team & stakeholder profiles", "Action item tracking"],
  },
  {
    icon: Plug,
    label: "TOOL CONNECTIONS",
    title: "Connected to where work actually happens.",
    desc: "Your AI is wired directly into your existing tools via MCP — the same protocol that powers the most advanced AI agents in the world. Say 'post this to Slack', 'what's on my calendar tomorrow', or 'schedule a 1:1 with the team' — and it just happens. No tab switching. No context loss.",
    items: ["Google Calendar & Gmail", "Slack & team messaging", "ClickUp & project management", "Any tool via MCP integration"],
  },
  {
    icon: Layers,
    label: "SKILLS LIBRARY",
    title: "Pre-built for your role and vertical.",
    desc: "A curated library of AI capabilities tailored to how you actually work — not generic chatbot templates. Your AI knows how to prep a 1:1, draft a client proposal, summarise a pipeline, log a strategic decision, or onboard a new hire. And it learns the nuances of your business over time.",
    items: ["Role-specific workflow skills", "Document generation (reports, proposals)", "Communication & outreach", "Custom skills built for your business"],
  },
];

const phases = [
  {
    number: "01",
    title: "Discover",
    desc: "We map your day — the tools you use, decisions you make, meetings you run, and the institutional knowledge that currently lives only in your head.",
  },
  {
    number: "02",
    title: "Configure",
    desc: "We connect your tools, seed your initial knowledge base, and configure a skills library tailored to your exact role and business context.",
  },
  {
    number: "03",
    title: "Deploy",
    desc: "We run the system live alongside you for the first week — refining, tuning, and making sure it fits how you actually work day to day.",
  },
  {
    number: "04",
    title: "Handoff",
    desc: "You own it. We document everything, train you and your team, and provide 30 days of post-launch support as the system grows with your business.",
  },
];

const useCases = [
  {
    icon: Calendar,
    text: '"Good morning" → full daily brief, priorities, and calendar context in 30 seconds.',
  },
  {
    icon: FileText,
    text: "Paste a meeting transcript → notes, action items, and team context updated automatically.",
  },
  {
    icon: MessageSquare,
    text: '"Post an update to Slack" → done, without leaving your flow.',
  },
  {
    icon: Brain,
    text: '"Why did we choose X over Y last quarter?" → full decision record surfaced instantly.',
  },
  {
    icon: TrendingUp,
    text: '"What are the top blockers right now?" → grounded in actual data, not hunches.',
  },
  {
    icon: CheckCircle,
    text: '"Prep for my 1:1 with Sam" → full history, past notes, and suggested topics ready.',
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
              Your business,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                running on AI.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
              A bespoke AI operating system, built around how you actually work. Not a chatbot. Not another SaaS subscription. An AI that knows your business, remembers everything, and acts on your behalf — like having a world-class executive assistant who never sleeps.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Book a setup call
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
                <SectionLabel>THE ORIGIN</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  The moment you stop managing the system.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    We've spent years building operational infrastructure for businesses. The tools were never the bottleneck. The bottleneck was always the same thing: someone has to maintain them.
                  </p>
                  <p>
                    Notion works until you're spending more time deciding where to put something than doing the actual work. Slack is fast until the context you need is buried months back. Every knowledge management system fails the same way — it becomes a second job.
                  </p>
                  <p>
                    So we asked a different question. What if the system maintained itself? What if capturing context was a side effect of natural conversation, not a deliberate act?
                  </p>
                  <p>
                    We built the first version for ourselves. A connected AI, an empty directory, one instruction: <em>"Learn how this business works and help us run it better."</em> No templates. No folder structure to decide. The AI figured it out.
                  </p>
                  <p className="text-foreground font-medium">
                    What emerged wasn't a tool. It was an operating layer — one that knows your decisions, preps your meetings, acts on your behalf, and gets smarter every single week.
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
                  What the system accumulates over time
                </p>
                <div className="space-y-6">
                  {[
                    {
                      period: "End of week one",
                      desc: "Your tools are connected. Your first meetings are captured. The AI knows your priorities, your team, and how you like to work.",
                    },
                    {
                      period: "End of month one",
                      desc: "Every decision you've made is logged with full context. Every 1:1 has a history. Action items don't fall through the cracks.",
                    },
                    {
                      period: "End of quarter one",
                      desc: "The system knows your business better than any new hire could in six months. Patterns surface. Strategic context compounds. You operate at a level that simply wasn't possible before.",
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
                  Unlike every other tool, the intelligence layer requires nothing from you except conversation. The value compounds automatically.
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
                <SectionLabel>THE PROBLEM</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  Your best operators are drowning in context.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                  Knowledge workers don't have a productivity problem — they have a context problem. The information exists. It's just scattered, undocumented, and inaccessible at the exact moment it's needed.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">
                  Most tools make this worse — not better. Every new app is another place to check, another thing to maintain, another system that depends on a human remembering to update it. The intelligence layer takes the opposite approach: it captures context as a side effect of natural conversation. You just talk to it. It handles everything else.
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
                Four layers. One coherent system.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                The intelligence layer isn't a single tool — it's an architecture. Each layer does one job, and together they create something that feels like having a senior operator who knows your entire business and can act on your behalf.
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
                Three foundations. Every engagement delivers all three.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Every Intelligence Layer engagement is different — tailored to your role, your tools, and your business. But the three foundations are always the same. They're what make the system work as a whole rather than as a set of disconnected parts.
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
                What a day actually looks like.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                You don't use the intelligence layer — you just talk to it. Like a senior operator who knows every corner of your business and can act immediately. No forms. No templates. No context switching.
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
                  { value: "Week 1", desc: "System is live. Day one context is captured." },
                  { value: "Week 3", desc: "You're operating at a level that wasn't possible before." },
                  { value: "Month 6", desc: "The system knows your business better than any new hire could." },
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
                Four phases. Running in days, not months.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We follow the same four-phase process we use across all our systems engagements — adapted for the intelligence layer. Most clients are live within the first week. By week three, the compounding effect starts to kick in.
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
                  Built for operators who can't afford to lose context.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                  If you're running a team, managing clients, and shipping work simultaneously — this gives you the operational leverage that used to require a full executive assistant. And it compounds. Every conversation adds context. Every decision creates a reference point. Every week, the system gets more useful.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mt-8">
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                      Book a setup call
                      <ArrowRight className="ml-1" size={16} />
                    </a>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {[
                {
                  role: "Founders & CEOs",
                  desc: "Managing growth, team, investors, and product simultaneously. The intelligence layer keeps you centred and informed without adding to your cognitive load.",
                },
                {
                  role: "Operations Leaders",
                  desc: "You've inherited a fragmented stack and need to get on top of it fast. The AI builds your operational memory from day one.",
                },
                {
                  role: "Technical Leaders",
                  desc: "Shipping code while running a team. The system handles the context management so you stay in flow.",
                },
                {
                  role: "Consultants & Advisors",
                  desc: "Managing multiple client relationships and workstreams. Never lose thread across engagements again.",
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
                Ready to add the
                <br />
                <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  intelligence layer?
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Book a free 30-minute setup call. We'll understand how you work, map what needs to be connected, and give you a clear picture of what your intelligence layer looks like — and what it will take to get there. No pitch, no pressure.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                    Book a free setup call
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
