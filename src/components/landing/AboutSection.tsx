import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
    {/* Subtle decorative element */}
    <div
      className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, hsl(217 91% 60% / 0.04) 0%, transparent 60%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <FadeIn>
            <SectionLabel>About</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              We've been in your shoes.
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-pretty">
            <p>
              We're a small team of operators, engineers, and systems thinkers who spent years building internal infrastructure at high-growth companies. We saw the same problems repeat everywhere — fragmented tools, undocumented processes, and teams drowning in operational overhead.
            </p>
            <p>
              So we started helping other companies fix it. Not with slide decks or strategy sessions, but with hands-on implementation. We build the systems, document them, train your team, and move on.
            </p>
            <p>
              Our work is quiet by design. We don't chase headlines — we chase hours saved and errors prevented.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
