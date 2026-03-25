import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FadeIn } from "@/components/landing/FadeIn";
import { SectionLabel } from "@/components/landing/SectionLabel";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, Clock, Users, CheckCircle } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

const claudeCourses = [
  {
    level: "101",
    color: "375A34",
    bgLight: "E8F5E9",
    badge: "🟢",
    title: "Your First AI Employee",
    tagline: "Walk in curious. Walk out using Claude in your business — the same day.",
    duration: "~2 hours",
    level_label: "Beginner",
    format: "Live workshop",
    description: "Zero assumed knowledge required. Every exercise uses your own business — real emails, real documents, real meetings — so the value is immediate and undeniable. Most participants cut their email drafting time from 15+ minutes to under 2 by end of session. You'll leave with 5 repeatable use cases already working, and a 7-Day Challenge to lock in the habit.",
    modules: [
      "What is Claude and why SMEs are winning with it",
      "Getting set up: account, plan, first real conversation",
      "Talking to Claude: the basics of clear prompting",
      "The Quick Wins Framework: 5 use cases you can run today",
      "  → Write any professional email in 60 seconds",
      "  → Summarise any document instantly",
      "  → Prep for any meeting in 5 minutes",
      "  → Generate a week of social content from bullet points",
      "  → Answer customer questions & handle objections",
      "Building your daily Claude habit — the 7-Day Challenge",
    ],
  },
  {
    level: "102",
    color: "7F6000",
    bgLight: "FFF9E6",
    badge: "🟡",
    title: "Making Claude Work Your Way",
    tagline: "Teach Claude your business. Build systems that save hours every week.",
    duration: "~3 hours",
    level_label: "Intermediate",
    format: "Live workshop",
    description: "You've used Claude. Now make it work specifically for your business. You'll write a business context document Claude can reference in every conversation, build a reusable prompt library, and work through the SME Value Framework — 5 high-impact use cases built to increase revenue, cut costs, and give back time. Proposals that used to take an afternoon. Marketing content that used to need a freelancer. You leave with working systems, not just knowledge.",
    modules: [
      "Teaching Claude about your business",
      "Advanced prompting: role, chain-of-thought, iteration",
      "Building reusable prompt templates",
      "Handling documents and data",
      "The SME Value Framework: 5 use cases that move the needle",
      "  → Proposal & quote generation (↑ revenue)",
      "  → Customer email & communications (⏱ time)",
      "  → Meeting prep & follow-up (⏱ time + ↓ cost)",
      "  → Marketing & content creation (↑ revenue + ↓ cost)",
      "  → Process documentation & staff training (↓ cost)",
      "Introduction to the Intelligence Layer concept",
    ],
  },
  {
    level: "103",
    color: "7B1818",
    bgLight: "FDECEA",
    badge: "🔴",
    title: "Building Your Intelligence Layer",
    tagline: "Stop running your business manually. Build the AI systems that run it for you.",
    duration: "Full day (6–7 hrs)",
    level_label: "Advanced",
    format: "Small cohort · max 12",
    description: "For Claude 101 + 102 graduates ready to go beyond prompting. This full-day workshop is where Claude stops being a productivity tool and becomes the operational backbone of your business. You'll design and build 5 live systems — including an automated client onboarding flow that cuts a 3–4 hour process to under 30 minutes, and a daily AI intelligence brief that runs without you. Bring your laptop and access to your CRM. You leave with a personalised Intelligence Layer Blueprint and a 90-day implementation roadmap.",
    modules: [
      "Recap and readiness: from daily user to system designer",
      "The Intelligence Layer Framework: Input → Memory → Processing → Output → Action",
      "The Intelligence Layer Blueprint: 5 systems that transform how your business runs",
      "  → Automated client onboarding system",
      "  → AI business intelligence & daily brief",
      "  → Autonomous lead follow-up system",
      "  → Living knowledge base & institutional memory",
      "  → Intelligence Layer design session (capstone)",
      "Your 90-day implementation roadmap",
      "Peer review, accountability, and the group follow-up",
    ],
  },
];

const antigravityCourses = [
  {
    level: "101",
    badge: "🟢",
    title: "Getting Started with Antigravity",
    tagline: "Your first steps with one of the most powerful AI tools available.",
    duration: "~2 hours",
    level_label: "Beginner",
    description: "A practical introduction to Antigravity for non-technical SME owners. No prior experience needed. You'll understand what Antigravity is, how it differs from other AI tools, and how to start using it to save time and improve your business operations immediately.",
    modules: [
      "What is Antigravity and how does it fit with Claude?",
      "Setup and your first workflow",
      "Core capabilities: what you can do out of the box",
      "Your first 3 business use cases",
      "Building an Antigravity habit",
    ],
    comingSoon: true,
  },
  {
    level: "102",
    badge: "🟡",
    title: "Antigravity in Your Workflow",
    tagline: "Deeper integration — connecting Antigravity to how your business actually runs.",
    duration: "~3 hours",
    level_label: "Intermediate",
    description: "Take Antigravity beyond the basics. This course focuses on integrating it into existing business processes and building repeatable, automated workflows that run without constant manual input.",
    modules: [
      "Integrating Antigravity with your existing tools",
      "Building multi-step automated workflows",
      "Managing and storing outputs effectively",
      "Using Antigravity alongside Claude",
      "Your first fully automated business process",
    ],
    comingSoon: true,
  },
  {
    level: "103",
    badge: "🔴",
    title: "Antigravity at Scale",
    tagline: "Advanced deployment — Antigravity as a core part of your AI operating system.",
    duration: "4–5 hours",
    level_label: "Advanced",
    description: "The most advanced course in the Antigravity series. Designed for business owners who want to deploy Antigravity as a core component of their wider Intelligence Layer — running alongside Claude and OpenClaw as part of a unified AI OS.",
    modules: [
      "Antigravity architecture — how it works under the hood",
      "Advanced automation and orchestration",
      "Connecting Antigravity to your Intelligence Layer",
      "Custom configurations for your business vertical",
      "Scaling: multiple users, teams, and processes",
      "Maintenance, security, and governance",
    ],
    comingSoon: true,
  },
];

/* ─── Components ─────────────────────────────────────────────────── */

interface CourseCardProps {
  course: typeof claudeCourses[0] & { comingSoon?: boolean; format?: string };
  tool: "claude" | "antigravity";
}

const CourseCard = ({ course, tool }: CourseCardProps) => (
  <FadeIn className="h-full">
    <div
      className="flex flex-col gap-5 rounded-xl border h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Header bar */}
      <div
        className="px-6 pt-6 pb-4 border-b border-border/50"
        style={{ background: `#${course.bgLight}18` }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{course.badge}</span>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: `#${course.color}` }}
            >
              {tool === "claude" ? "Claude" : "Antigravity"} {course.level}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{course.level_label}</span>
            {course.comingSoon && (
              <span className="text-xs text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                Coming soon
              </span>
            )}
          </div>
        </div>
        <h3 className="text-base font-semibold text-foreground leading-snug">{course.title}</h3>
        <p className="text-xs text-muted-foreground mt-1 italic">{course.tagline}</p>
      </div>

      {/* Body */}
      <div className="px-6 pb-6 flex flex-col gap-4 flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">What you'll cover</p>
          <ul className="space-y-1.5">
            {course.modules.map((mod, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-accent/50 shrink-0 mt-1.5" />
                {mod}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-3 border-t border-border/50">
          {course.format && (
            <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wide font-medium">{course.format}</p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={12} />
              {course.duration}
            </div>
            <Button
              variant={course.comingSoon ? "outline" : "cta"}
              size="sm"
              asChild={!course.comingSoon}
              disabled={course.comingSoon}
              className={course.comingSoon ? "opacity-50 cursor-not-allowed" : ""}
            >
              {course.comingSoon ? (
                <span>Notify me</span>
              ) : (
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Book your spot
                  <ArrowRight size={13} className="ml-1" />
                </a>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </FadeIn>
);

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Training() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16">
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
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
              AI Training
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
              Learn AI before your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                competitors do.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
              Practical, hands-on AI training for SME owners — no IT department, no coding, no jargon. Real exercises, real business scenarios, real results. From your first prompt to a fully automated AI operating system.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a href="#claude">
                  Start with Claude 101
                  <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Book a consultation
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why train ────────────────────────────────────────────── */}
      <section className="py-20 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, title: "Built for non-technical owners", desc: "No IT background assumed. Every course is designed around how SME owners actually work — with real examples from real businesses." },
              { icon: BookOpen, title: "Real results from session one", desc: "Every exercise uses your own business. Most participants cut email drafting time by 80% before they leave the room." },
              { icon: CheckCircle, title: "The path to your Intelligence Layer", desc: "These courses are the foundation. 103-level mastery is how you start building your AI operating system." },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.06 * i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Claude Courses ───────────────────────────────────────── */}
      <section id="claude" className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <SectionLabel>CLAUDE TRAINING</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Claude 101 → 102 → 103
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Three courses that take you from your very first conversation with Claude all the way to building an automated AI operating system for your business. Each builds on the last. Start at 101 and progress at your own pace.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {claudeCourses.map((course, i) => (
              <CourseCard key={i} course={course} tool="claude" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Antigravity Courses ──────────────────────────────────── */}
      <section id="antigravity" className="py-24 lg:py-32 border-t border-border bg-card relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <SectionLabel>ANTIGRAVITY TRAINING</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
                Antigravity 101 → 102 → 103
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                Antigravity is a powerful AI tool that complements Claude within your wider AI stack. These courses are in development — register your interest to be notified when they launch and get early access pricing.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs text-muted-foreground font-medium"
                style={{ borderColor: "hsl(var(--accent) / 0.3)", background: "hsl(var(--accent) / 0.05)" }}
              >
                <Zap size={11} className="text-accent" />
                Courses in development — launching soon
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {antigravityCourses.map((course, i) => (
              <CourseCard key={i} course={course} tool="antigravity" />
            ))}
          </div>

          {/* Notify CTA */}
          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-xl px-8 py-7 border border-accent/20 bg-accent/4 text-center">
              <p className="text-sm font-medium text-foreground mb-2">Want early access to Antigravity training?</p>
              <p className="text-xs text-muted-foreground mb-5">Register your interest and we'll contact you when courses are ready — including early-bird pricing.</p>
              <Button variant="cta" size="sm" asChild>
                <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                  Register interest
                  <ArrowRight size={13} className="ml-1" />
                </a>
              </Button>
            </div>
          </FadeIn>
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
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-accent flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  The destination
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-[-0.02em]">
                  Training is the starting point. The Intelligence Layer is where it leads.
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Once you've completed 103, you'll have the knowledge to implement your own AI OS. We can help you build it — or build it for you.
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
