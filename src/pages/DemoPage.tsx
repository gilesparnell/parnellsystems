import { useParams, Link, Navigate } from "react-router-dom";
import { NICHES } from "@/config/niches";
import { VoiceNavbar } from "@/components/voice/VoiceNavbar";
import { VoiceOrb } from "@/components/voice/VoiceOrb";
import { FadeIn } from "@/components/landing/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

/* ─── Constants ─────────────────────────────────────────────────── */

const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

const DEMO_LIMITATIONS = [
  {
    label: "Limited Knowledge Base",
    desc: "The demo AI has a reduced knowledge set compared to a full deployment.",
  },
  {
    label: "No Live Calendar",
    desc: "Appointment slots are simulated — no real calendar is connected.",
  },
  {
    label: "No Live CRM",
    desc: "Lead data is not saved to a CRM in this demo environment.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function DemoPage() {
  const { niche } = useParams<{ niche: string }>();
  const nicheData = niche ? NICHES[niche] : undefined;

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* ── Audio controls ──────────────────────────────────────────── */
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  /* ── 404 guard ───────────────────────────────────────────────── */
  if (!nicheData) {
    return <Navigate to="/" replace />;
  }

  const NicheIcon = nicheData.icon;

  return (
    <div className="min-h-screen bg-background">
      <VoiceNavbar />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Niche-coloured gradient background */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none bg-gradient-to-br ${nicheData.color} opacity-40 blur-3xl`}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <FadeIn>
            <Link
              to="/demos"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All demos
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${nicheData.color}`}
              >
                <NicheIcon size={20} className={nicheData.accent} />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-[0.1em] ${nicheData.accent}`}
              >
                {nicheData.subtitle}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-[-0.04em]">
              {nicheData.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {nicheData.blurb}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Voice Orb Demo ──────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="w-full max-w-[320px]">
                <VoiceOrb
                  variant="compact"
                  widgetId={nicheData.widgetId}
                  titleLabel={nicheData.orbLabel}
                />
              </div>

              {nicheData.phoneNumber && (
                <a
                  href={`tel:${nicheData.phoneNumber.replace(/\s/g, "")}`}
                  className="group inline-flex w-full max-w-[320px] items-center justify-between gap-4 rounded-full border border-border bg-card/90 px-5 py-4 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_36px_hsl(var(--accent)/0.12)] transition-all duration-300 hover:border-accent/60 hover:bg-card"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-accent/80">
                      Live Mobile Demo
                    </p>
                    <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.16em] text-foreground">
                      Call {nicheData.phoneNumber}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Test from your phone
                    </p>
                  </div>
                  <ArrowLeft
                    size={16}
                    className="shrink-0 rotate-180 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Audio player ─────────────────────────────────────────────── */}
      {nicheData.audioFile && (
        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <FadeIn delay={0.25}>
              <div
                className={`relative rounded-xl border border-border bg-gradient-to-br ${nicheData.color} p-6 lg:p-8`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 ${nicheData.accent}`}
                  >
                    <NicheIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {nicheData.audioTitle}
                  </h3>
                </div>
                {nicheData.audioDesc && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {nicheData.audioDesc}
                  </p>
                )}

                <audio
                  ref={audioRef}
                  src={`/audio/${nicheData.audioFile}`}
                  onEnded={() => setIsPlaying(false)}
                />

                <motion.button
                  onClick={toggleAudio}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 border ${
                    isPlaying
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-border bg-background/80 text-foreground hover:bg-accent/5"
                  }`}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying
                    ? "Pause"
                    : `Listen to ${nicheData.audioTitle} Demo`}
                </motion.button>

                {isPlaying && (
                  <div className="absolute -inset-px rounded-xl border border-accent/30 animate-pulse pointer-events-none" />
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Features Grid ──────────────────────────────────────────── */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <h2 className="text-xl font-semibold tracking-[-0.02em] mb-6">
              What this AI handles
            </h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {nicheData.features.map((feature, i) => (
              <FadeIn key={feature} delay={0.06 * i}>
                <div
                  className={`rounded-xl border border-border bg-card p-5 text-center hover:-translate-y-0.5 transition-all duration-300`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${nicheData.color} mb-3`}
                  >
                    <NicheIcon size={18} className={nicheData.accent} />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Limitations ───────────────────────────────────────── */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <div className="rounded-xl border border-border bg-card/50 p-6 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground mb-5">
                Demo limitations
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {DEMO_LIMITATIONS.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <p className="text-sm font-medium text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border relative overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-gradient-to-br ${nicheData.color} opacity-30 blur-3xl`}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Want this for your business?
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We'll set up a custom AI receptionist tailored to your business —
              live within 48 hours. No technical knowledge required.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a free audit
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/demos">View all demos</Link>
              </Button>
            </div>
          </FadeIn>
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
