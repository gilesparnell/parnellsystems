import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FadeIn } from "@/components/landing/FadeIn";
import { SectionLabel } from "@/components/landing/SectionLabel";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Calendar,
  PhoneCall,
  Star,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

const problems = [
  {
    stat: "62%",
    label: "of callers won't leave a voicemail",
    desc: "They'll just call your competitor instead.",
  },
  {
    stat: "78%",
    label: "of customers buy from the first responder",
    desc: "Speed of response is your biggest competitive advantage.",
  },
  {
    stat: "5 min",
    label: "is the optimal lead response window",
    desc: "After 5 minutes, conversion rates drop by 80%.",
  },
];

const capabilities = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    desc: "A natural-sounding AI that answers every call — after hours, during busy periods, or 24/7. It qualifies leads, answers questions, and books appointments without you lifting a finger.",
    items: ["Handles missed and overflow calls", "Qualifies leads with natural conversation", "Books appointments directly into your calendar", "Escalates urgent calls to the right person"],
  },
  {
    icon: MessageSquare,
    title: "AI SMS Follow-Up",
    desc: "Instant, intelligent SMS responses to inbound leads. Whether they filled in a form, clicked an ad, or dropped out mid-call — your AI follows up immediately and keeps them warm.",
    items: ["Instant response to web leads and form fills", "Reactivation sequences for cold leads", "Two-way conversations that feel human", "Seamless handoff when the lead is ready"],
  },
  {
    icon: Calendar,
    title: "Appointment Automation",
    desc: "Your AI doesn't just qualify leads — it books them. Integrated directly with your calendar, it finds available slots and confirms appointments without any back-and-forth.",
    items: ["Real-time calendar integration", "Automated confirmation and reminders", "Rescheduling handled automatically", "CRM updated with every interaction"],
  },
];

const useCases = [
  {
    icon: Clock,
    scenario: "After-hours caller",
    outcome: "Answered, qualified, and booked — before your competitor even opens in the morning.",
  },
  {
    icon: Zap,
    scenario: "New web form submission",
    outcome: "SMS sent within 30 seconds. Conversation started. Lead warmed. Appointment booked.",
  },
  {
    icon: Users,
    scenario: "Peak-time overflow",
    outcome: "Every caller handled professionally while your team focuses on existing customers.",
  },
  {
    icon: TrendingUp,
    scenario: "Cold lead reactivation",
    outcome: "Old leads contacted automatically. Dormant pipeline converted without manual effort.",
  },
  {
    icon: Star,
    scenario: "Post-job follow-up",
    outcome: "Review requests, satisfaction checks, and upsell conversations — all on autopilot.",
  },
  {
    icon: CheckCircle,
    scenario: "No-show recovery",
    outcome: "Missed appointment? Your AI is already sending a reschedule message.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function VoiceSMS() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Grid */}
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
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
              AI Voice & SMS
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
              Every lead answered.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                Every opportunity captured.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
              AI-powered voice agents and SMS automation that respond instantly, qualify leads, and book appointments — whether it's 2pm or 2am. Built for SMEs who are tired of losing business to missed calls and slow follow-up.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://allconvos.ai/demos" target="_blank" rel="noopener noreferrer">
                  See live demos
                  <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Book a free audit
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Powered by */}
          <FadeIn delay={0.2}>
            <p className="mt-8 text-xs text-muted-foreground/60">
              Powered by{" "}
              <a href="https://allconvos.ai" target="_blank" rel="noopener noreferrer" className="text-accent/70 hover:text-accent transition-colors">
                allconvos.ai
              </a>
              {" "}— our dedicated AI conversation platform
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <SectionLabel>THE PROBLEM</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                You're losing revenue to missed calls and slow follow-up.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Every unanswered call and every delayed response is a lead handed to someone else. In most service businesses, the first company to respond wins the job — not the best one, not the cheapest one. The fastest one.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={0.08 * i}>
                <div
                  className="rounded-xl px-7 py-7 border border-border bg-card flex flex-col gap-3"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p
                    className="text-5xl font-bold tracking-tighter"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {p.stat}
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug">{p.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border bg-card relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(var(--accent) / 0.2) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <SectionLabel>WHAT IT DOES</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Three systems. One seamless experience.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                We don't sell a chatbot widget. We implement a complete AI-powered lead handling system — voice, SMS, and scheduling — that works together to make sure nothing falls through the cracks.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeIn key={i} delay={0.08 * i} className="h-full">
                <div
                  className="flex flex-col gap-5 rounded-xl px-7 py-7 bg-background border border-border h-full hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 shrink-0">
                      <cap.icon size={18} className="text-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  <ul className="mt-auto space-y-2.5">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0 mt-1" />
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

      {/* ── Use Cases ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <FadeIn>
              <SectionLabel>IN PRACTICE</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                What it looks like in your business.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Every scenario your team dreads — missed calls, slow responses, no-shows, cold leads — handled automatically, before anyone has to think about it.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <FadeIn key={i} delay={0.04 * i}>
                <div className="flex flex-col gap-3 rounded-lg px-5 py-5 bg-card border border-border h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 shrink-0">
                      <uc.icon size={15} className="text-accent" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{uc.scenario}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-11">{uc.outcome}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo CTA ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, hsl(var(--accent) / 0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <FadeIn>
                <SectionLabel>HEAR IT FOR YOURSELF</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                  Don't take our word for it — listen to the demos.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                  We've built live demos across a range of industries. Call a number. Text an AI. See exactly how it handles a real enquiry. No slides. No sales pitch. Just the product in action.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://allconvos.ai/demos" target="_blank" rel="noopener noreferrer">
                      Explore live demos
                      <ArrowRight className="ml-1" size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                      Book a free audit
                    </a>
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-5 text-xs text-muted-foreground/60">
                  Demos hosted on{" "}
                  <a href="https://allconvos.ai" target="_blank" rel="noopener noreferrer" className="text-accent/70 hover:text-accent transition-colors">
                    allconvos.ai
                  </a>
                  {" "}— our dedicated AI conversation platform
                </p>
              </FadeIn>
            </div>

            {/* Demo card */}
            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl px-8 py-10 border relative overflow-hidden"
                style={{
                  background: "hsl(var(--accent) / 0.04)",
                  borderColor: "hsl(var(--accent) / 0.25)",
                  boxShadow: "0 0 60px hsl(var(--accent) / 0.06)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)" }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">What the demos show</p>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Live voice call", desc: "Call a real number and speak to an AI handling an inbound enquiry — naturally." },
                    { icon: MessageSquare, label: "SMS conversation", desc: "See a two-way SMS exchange from first contact to booked appointment." },
                    { icon: Calendar, label: "Appointment booking", desc: "Watch the AI check availability and confirm a slot in real time." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 shrink-0 mt-0.5">
                        <item.icon size={15} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="https://allconvos.ai/demos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    View all demos
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Intelligence Layer link ───────────────────────────────── */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <a
              href="/intelligence-layer"
              className="flex items-center justify-between rounded-xl px-8 py-7 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 group"
              style={{ boxShadow: "0 0 40px hsl(var(--accent) / 0.05)" }}
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent">Go deeper</span>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-[-0.02em]">
                  Looking for the full AI operating system?
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Voice & SMS is one layer. The Intelligence Layer connects everything — knowledge, decisions, tools, and automation — into a single AI OS for your business.
                </p>
              </div>
              <ArrowRight size={20} className="text-accent shrink-0 ml-6 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
