import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export const CTASection = () => (
  <section id="cta" className="py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-balance">
            Ready to bring order to your operations?
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            Book a free 30-minute system audit. We'll map your current stack, identify the biggest bottlenecks, and outline a clear path forward. No pitch, no pressure.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <Button variant="cta" size="xl">
              Book a free system audit
              <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
