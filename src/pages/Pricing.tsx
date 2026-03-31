import { VoiceNavbar } from "@/components/voice/VoiceNavbar";
import { FadeIn } from "@/components/landing/FadeIn";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

/* ─── Data ──────────────────────────────────────────────────────── */

const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  stripeUrl: string;
}

// TODO: Replace with real Stripe Payment Link URLs once migrated
const STRIPE_STARTER = "https://buy.stripe.com/PLACEHOLDER_STARTER";
const STRIPE_BUSINESS = "https://buy.stripe.com/PLACEHOLDER_BUSINESS";
const STRIPE_PROFESSIONAL = "https://buy.stripe.com/PLACEHOLDER_PROFESSIONAL";

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$199/mo",
    description: "Perfect for solo operators and small teams",
    stripeUrl: STRIPE_STARTER,
    features: [
      "1 phone number",
      "AI voice agent",
      "SMS confirmations",
      "Up to 100 calls/month",
      "Appointment booking",
      "Business hours routing",
      "Email support",
    ],
  },
  {
    name: "Business",
    price: "$349/mo",
    description: "For growing businesses that never want to miss a call",
    popular: true,
    stripeUrl: STRIPE_BUSINESS,
    features: [
      "Everything in Starter, plus:",
      "2 phone numbers",
      "Unlimited calls",
      "After-hours handling",
      "Custom greeting",
      "Call transcripts",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    price: "$549/mo",
    description: "For multi-location businesses and teams",
    stripeUrl: STRIPE_PROFESSIONAL,
    features: [
      "Everything in Business, plus:",
      "5 phone numbers",
      "Custom AI voice",
      "Multi-location routing",
      "Dedicated account manager",
      "Monthly performance review",
    ],
  },
];

const faqs = [
  {
    q: "How quickly can I get set up?",
    a: "Most businesses are live within 48 hours.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, upgrade or downgrade anytime. No lock-in contracts.",
  },
  {
    q: "What happens if I go over 100 calls on Starter?",
    a: "We'll let you know and recommend upgrading to Business for unlimited calls. We won't charge you surprise fees.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. We handle everything — setup, configuration, and ongoing support.",
  },
  {
    q: "Can I keep my existing phone number?",
    a: "Yes. We can port your existing number or set up call forwarding.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <VoiceNavbar />

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-4">
              Pricing
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.04em]">
              Simple, transparent pricing
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              No per-minute charges. No surprise bills. Just flat-rate AI that
              works.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Pricing Cards ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <FadeIn key={tier.name} delay={0.08 * i} className="h-full">
                <div
                  className={`relative flex flex-col rounded-xl px-7 py-8 h-full transition-all duration-300 ${
                    tier.popular
                      ? "border-2 border-accent/60 bg-accent/[0.03] shadow-[0_0_60px_hsl(var(--accent)/0.08)] lg:-translate-y-2"
                      : "border border-border bg-card"
                  }`}
                  style={{ boxShadow: tier.popular ? undefined : "var(--shadow-card)" }}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground bg-accent px-4 py-1 rounded-full">
                        Most popular
                      </span>
                    </div>
                  )}

                  {/* Name + Price */}
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    <p className="mt-3">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {tier.price.split("/")[0]}
                      </span>
                      <span className="text-sm text-muted-foreground">/mo</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check
                          size={15}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={tier.popular ? "cta" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={tier.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get started
                    </a>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-12">
              Frequently asked questions
            </h2>
          </FadeIn>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={0.04 * i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left rounded-lg px-5 py-4 border border-border bg-card hover:bg-card/80 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-foreground">
                      {faq.q}
                    </p>
                    <span
                      className={`text-muted-foreground text-lg shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {openFaq === i && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  )}
                </button>
              </FadeIn>
            ))}
          </div>
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
