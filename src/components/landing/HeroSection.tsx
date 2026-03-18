import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
    {/* Grid background */}
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(210 64% 12% / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(210 64% 12% / 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }}
    />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
          Systems Consulting
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
          Systems that scale without the noise
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
          We audit, architect, and implement the systems that allow your team to focus on the work that matters. No hype, just high-performance infrastructure.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="xl" asChild>
            <a href="#cta">
              Book a free system audit
              <ArrowRight className="ml-1" size={16} />
            </a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#services">Learn more</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);
