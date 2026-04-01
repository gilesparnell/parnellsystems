import { VoiceNavbar } from "@/components/voice/VoiceNavbar";
import { FadeIn } from "@/components/landing/FadeIn";
import { NICHES } from "@/config/niches";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

/* ---------- Niche descriptions for cards ---------- */
const nicheDescriptions: Record<string, string> = {
  solar: "Qualify leads and book property assessments around the clock.",
  gyms: "Book trial classes and handle membership enquiries 24/7.",
  tradies: "Capture job details and dispatch teams while you're on tools.",
  clinics: "Schedule patients and handle after-hours calls with care.",
  salons: "Manage bookings, cancellations, and service questions instantly.",
  automotive: "Book services, provide repair updates, and field enquiries.",
  pools: "Schedule cleanings, respond to repairs, and quote on the spot.",
};

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Demos() {
  useSEO({
    title: "Live AI Voice Demos — Parnell Systems",
    description:
      "Try a live AI voice demo for your industry. Hear how our AI handles calls for solar, gyms, tradies, clinics, salons, automotive, and pool maintenance.",
  });

  return (
    <div className="min-h-screen bg-background">
      <VoiceNavbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-4">
              Demos
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.04em]">
              Hear it in action
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Try a live AI voice demo for your industry — pick your niche and
              hear how our AI receptionist handles real calls.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Niche Grid ────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(NICHES).map(([slug, niche], i) => {
              const Icon = niche.icon;
              return (
                <FadeIn key={slug} delay={i * 0.05}>
                  <a
                    href={`/demos/${slug}`}
                    className="group block bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${niche.color}`}
                    >
                      <Icon size={22} className={niche.accent} />
                    </div>
                    <h3 className="text-base font-semibold mb-1">
                      {niche.title.replace("AI Receptionist for ", "")}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {nicheDescriptions[slug] ?? niche.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all duration-200">
                      Try demo <ArrowRight size={14} />
                    </span>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Parnell.Systems. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
