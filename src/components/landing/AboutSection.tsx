import React from "react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Linkedin } from "lucide-react";

export const AboutSection = () => {
  const handleBokkeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Generate a random number to shuffle the starting video of the playlist
    const randomIndex = Math.floor(Math.random() * 20) + 1;
    // Always provide a video ID (v=...) before the list so YouTube's player initializes correctly
    window.open(`https://www.youtube.com/watch?v=eM40R5VToG0&list=PL6Mjs8vvOmNv9sHUtsEdNdgPAuHv1PxU1&index=${randomIndex}`, "_blank", "noopener,noreferrer");
  };

  const bokkeText = "Viva die Bokke!";

  return (
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
          <div className="flex flex-col lg:items-end lg:text-right">
            <FadeIn className="w-full flex lg:justify-end">
              <SectionLabel>About Me</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05} className="w-full">
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight tracking-[-0.02em] max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                Tech leader, Builder, and Systems Thinker.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="w-full">
              <div className="mt-10 relative group w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto lg:mx-0 lg:ml-auto">
                <div className="absolute inset-0 bg-accent rounded-3xl rotate-3 scale-[1.06] opacity-20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-[1.12]" />
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
              <div className="flex flex-wrap gap-2 mb-8">
                {["20+ years experience", "Ex-AWS Principal Engineer", "40+ teams served", "Global delivery"].map((label) => (
                  <span key={label} className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground font-medium border border-border/50">
                    {label}
                  </span>
                ))}
              </div>
              <p>
                With over 20 years of experience shaping global engineering teams across startups, AWS, and enterprise environments, my true passion lies in bridging business vision with technical execution to deliver real impact.
              </p>
              <p>
                My philosophy is rooted in the Amazon Leadership Principles—working backwards from the customer, earning trust, and delivering exceptional results. But equally, I believe that building lasting systems fundamentally relies on empowering people. Shaped by my South African roots and the concept of <em>Ubuntu</em> (we grow stronger together), I prioritise vibrant cultures built on trust, service, and wellness before hustle.
              </p>
              <p>
                Whether diving into autonomous technologies, renewable energy, or solving complex operational bottlenecks, my mission remains simple: leave things better than I found them, bring others along the way, and build with absolute integrity.
              </p>
              <p className="font-semibold text-foreground text-sm pt-4">
                And always remember...{" "}
                <a
                  href="https://www.youtube.com/watch?v=eM40R5VToG0&list=PL6Mjs8vvOmNv9sHUtsEdNdgPAuHv1PxU1"
                  onClick={handleBokkeClick}
                  className="italic hover:underline cursor-pointer tracking-wide text-xs"
                  title="Springboks Rugby — South Africa's national team"
                >
                  {bokkeText.split("").map((char, i) => {
                    if (char === " ") return <span key={i}> </span>;
                    // Slightly brighter versions of Green and Gold for dark-mode legibility
                    const color = i % 2 === 0 ? "#4ade80" : "#fbbf24";
                    return (
                      <span key={i} style={{ color }}>
                        {char}
                      </span>
                    );
                  })}
                </a>
              </p>

              <div className="pt-8">
                <a
                  href="https://www.linkedin.com/in/gilesparnell/"
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
};
