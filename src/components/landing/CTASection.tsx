import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section id="cta" className="py-24 lg:py-32 relative overflow-hidden">
    {/* Accent glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, hsl(var(--accent) / 0.12) 0%, transparent 60%)",
      }}
    />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--accent) / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--accent) / 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-balance">
            Ready to bring order
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent">
              to your operations?
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            Book a free 30-minute system audit. We'll map your current stack, identify the biggest bottlenecks, and outline a clear path forward. No pitch, no pressure.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <Button variant="cta" size="xl" asChild>
              <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                Book a free system audit
                <ArrowRight className="ml-1" size={16} />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
