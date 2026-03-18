import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Linkedin } from "lucide-react";

export const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
    {/* Subtle decorative element */}
    <div
      className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, hsl(var(--accent) / 0.10) 0%, transparent 60%)",
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-center">
        {/* Profile Image & Title */}
        <div>
          <FadeIn>
            <SectionLabel>About Me</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em]">
              Tech leader, Builder, and Systems Thinker.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 relative group w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
              <img
                src="/profile.jpg"
                alt="Giles Parnell"
                className="relative z-10 w-full h-full object-cover object-top rounded-3xl shadow-xl border border-border"
              />
            </div>
          </FadeIn>
        </div>

        {/* Biography Content */}
        <FadeIn delay={0.15}>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-pretty text-lg">
            <p>
              With over 20 years of experience shaping global engineering teams across startups, AWS, and enterprise environments, my true passion lies in bridging business vision with technical execution to deliver real impact.
            </p>
            <p>
              My philosophy is rooted in the Amazon Leadership Principles—working backwards from the customer. But equally, I believe that building lasting systems fundamentally relies on empowering people. Shaped by my South African roots and the concept of <em>Ubuntu</em> (we grow stronger together), I prioritise vibrant cultures built on trust, service, and wellness before hustle.
            </p>
            <p>
               Whether diving into autonomous technologies, renewable energy, or solving complex operational bottlenecks, my mission remains simple: leave things better than I found them, bring others along the way, and build with absolute integrity.
            </p>
            <p className="font-semibold text-foreground text-xl pt-2">
              And always... <span className="text-accent italic">Viva die Bokke!</span>
            </p>

            <div className="pt-8">
              <a
                href="https://www.linkedin.com/in/giles-parnell-85a7bb14/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
