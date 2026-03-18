import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-card">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="max-w-3xl">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
            We've been in your shoes.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-pretty">
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
