import { Button } from "@/components/ui/button";
import { HubNavbar } from "@/components/hub/HubNavbar";
import { FadeIn } from "@/components/landing/FadeIn";
import { AboutSection } from "@/components/landing/AboutSection";
import { Phone, GraduationCap, Cog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

const services = [
  {
    icon: Phone,
    title: "AI Voice & SMS",
    description:
      "Your AI receptionist answers calls 24/7, books appointments, sends SMS confirmations, and handles enquiries — so you never miss a customer.",
    cta: "Explore",
    href: "https://voice.parnellsystems.com",
    external: true,
  },
  {
    icon: GraduationCap,
    title: "AI Training",
    description:
      "Hands-on courses teaching you how to use Claude, AI coding tools, and automation to 10x your productivity.",
    cta: "View courses",
    href: "/training",
    external: false,
  },
  {
    icon: Cog,
    title: "Systems Consulting",
    description:
      "20+ years of engineering leadership at AWS and beyond. I audit your operations and build the infrastructure your team actually needs.",
    cta: "Learn more",
    href: "#about",
    external: false,
  },
];

const Hub = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HubNavbar />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--accent) / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--accent) / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.20) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-6">
              AI Solutions for Local Business
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-[-0.04em] text-balance">
              AI-Powered Voice & SMS
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
                for Local Business
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
              I help Australian businesses answer every call, book every
              appointment, and never lose a lead — using AI voice agents that
              sound human.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <a
                  href="https://voice.parnellsystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it in action
                  <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a free call
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services Cards ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent text-center mb-4">
              What I Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-center mb-16">
              Three ways I can help
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative group h-full rounded-2xl border border-border bg-card p-8 overflow-hidden"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-6">
                      <service.icon size={24} className="text-accent" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <a
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-foreground transition-colors duration-200 group/link"
                        {...(service.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                      >
                        {service.cta}
                        <ArrowRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 transition-transform duration-150"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <AboutSection />

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Parnell Systems. All rights reserved.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:text-foreground transition-colors duration-200"
          >
            Book a call &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hub;
