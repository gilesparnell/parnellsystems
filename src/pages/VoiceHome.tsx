import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/landing/FadeIn";
import { NICHES } from "@/config/niches";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Clock,
  DollarSign,
  Settings,
  PhoneCall,
  CalendarCheck,
  ArrowRight,
  Mail,
  Quote,
} from "lucide-react";
import { VoiceNavbar } from "@/components/voice/VoiceNavbar";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

/* ---------- Contact Form Schema ---------- */
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  business: z.string().min(1, "Business name is required"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* ---------- How It Works Data ---------- */
const steps = [
  {
    icon: Settings,
    title: "We set you up",
    description:
      "Tell us about your business. We configure your AI agent with your services, hours, and booking rules.",
  },
  {
    icon: PhoneCall,
    title: "AI answers your calls",
    description:
      "Every inbound call is answered instantly. The AI greets callers by name, answers questions, and books appointments.",
  },
  {
    icon: CalendarCheck,
    title: "You get customers",
    description:
      "Appointments appear in your calendar. SMS confirmations go to your customers. You focus on the work.",
  },
];

/* ---------- Social Proof Data ---------- */
const testimonials = [
  {
    quote:
      "We were missing 40% of our calls. Now every single one gets answered.",
    name: "Rob",
    business: "Landscaping",
  },
  {
    quote:
      "Setup took 30 minutes. It was answering calls the same day.",
    name: "Sarah",
    business: "Dental Practice",
  },
  {
    quote:
      "My customers can't tell it's AI. They think I hired a receptionist.",
    name: "Marcus",
    business: "Auto Repair",
  },
];

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

/* ========================================================================== */
/*  VoiceHome Page                                                            */
/* ========================================================================== */

const VoiceHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Placeholder — will wire up GHL webhook later
    console.log("Contact form submitted:", data);
    try {
      await fetch("https://hooks.example.com/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // silent — placeholder endpoint
    }
    reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <VoiceNavbar />

      {/* ------------------------------------------------------------------ */}
      {/*  HERO                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Never miss a customer
              <br />
              call again
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              AI voice agents that answer your phone 24/7, book appointments,
              and send SMS confirmations — so every call becomes a customer.
            </p>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>
                  <span className="text-foreground font-semibold">62%</span> of
                  callers hang up rather than leave voicemail
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent" />
                <span className="text-foreground font-semibold">
                  24/7 coverage
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-accent" />
                <span>
                  From{" "}
                  <span className="text-foreground font-semibold">$199/mo</span>
                </span>
              </div>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="#demos">Try a live demo</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">See pricing</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  HOW IT WORKS                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="how-it-works" className="py-20 md:py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest text-center mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Live in three steps
            </h2>
          </FadeIn>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="relative bg-card border border-border rounded-xl p-8 text-center group hover:border-accent/30 transition-colors duration-300">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    <step.icon size={26} />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  INDUSTRY DEMOS                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section id="demos" className="py-20 md:py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest text-center mb-3">
              Demos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Hear it in action
            </h2>
            <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
              Try a live AI voice demo for your industry
            </p>
          </FadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ------------------------------------------------------------------ */}
      {/*  SOCIAL PROOF                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest text-center mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Trusted by Australian businesses
            </h2>
          </FadeIn>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-7 flex flex-col">
                  <Quote size={24} className="text-accent/30 mb-4" />
                  <p className="text-foreground leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <p className="mt-5 text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">
                      {t.name}
                    </span>{" "}
                    — {t.business}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA SECTION                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <motion.div
              className="relative rounded-2xl border border-border bg-card p-10 md:p-14 overflow-hidden"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

              <h2 className="relative text-3xl md:text-4xl font-bold mb-4">
                Stop losing customers to voicemail
              </h2>
              <p className="relative text-muted-foreground mb-8 max-w-md mx-auto">
                Get your AI voice agent live this week. No lock-in contracts.
              </p>
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a free demo call
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/pricing">See pricing</a>
                </Button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  CONTACT FORM                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="contact" className="py-20 md:py-28 border-t border-border/40">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest text-center mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Have a question or ready to get started? Send us a message.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 bg-card border border-border rounded-xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@business.com.au"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Business Name
                  </label>
                  <Input
                    placeholder="Your business"
                    {...register("business")}
                    className={errors.business ? "border-red-500" : ""}
                  />
                  {errors.business && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.business.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your business and what you need..."
                  rows={4}
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send enquiry"}
              </Button>
            </form>
          </FadeIn>

          {/* Contact details */}
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="tel:0401027141"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone size={15} className="text-accent" />
                0401 027 141
              </a>
              <a
                href="mailto:giles@parnellsystems.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={15} className="text-accent" />
                giles@parnellsystems.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t border-border/40 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <a
                href="https://parnellsystems.com"
                className="text-lg font-bold text-foreground tracking-tight"
              >
                Parnell Systems
              </a>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                AI voice agents for Australian SMBs. Never miss a call again.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="text-sm font-semibold mb-3">Product</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#demos" className="hover:text-foreground transition-colors">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-foreground transition-colors">
                    How it works
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-sm font-semibold mb-3">Company</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://parnellsystems.com"
                    className="hover:text-foreground transition-colors"
                  >
                    parnellsystems.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-sm font-semibold mb-3">Legal</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <p>&copy; 2026 Parnell Systems. All rights reserved.</p>
            <a
              href="https://parnellsystems.com"
              className="hover:text-foreground transition-colors"
            >
              Powered by Parnell Systems
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VoiceHome;
