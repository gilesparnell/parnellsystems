import { VoiceNavbar } from "@/components/voice/VoiceNavbar";
import { FadeIn } from "@/components/landing/FadeIn";
import { useSEO } from "@/hooks/use-seo";

export default function Terms() {
  useSEO({
    title: "Terms of Service — Parnell Systems",
    description:
      "Terms and conditions for using Parnell Systems AI voice agent services.",
  });

  return (
    <div className="min-h-screen bg-background">
      <VoiceNavbar />

      <section className="pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] mb-8">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: 1 April 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_a]:text-accent [&_a]:underline">
              <p>
                These terms govern your use of the AI voice agent services
                provided by Parnell Systems (ABN 39 171 610 698) ("we", "us",
                "our"). By using our services, you agree to these terms.
              </p>

              <h2>1. Service Description</h2>
              <p>
                Parnell Systems provides AI-powered voice agents that answer
                inbound phone calls on behalf of your business, book
                appointments, send SMS confirmations, and handle common customer
                enquiries. The service includes setup, configuration, ongoing
                hosting, and support.
              </p>

              <h2>2. Account and Billing</h2>
              <h3>Subscriptions</h3>
              <p>
                Our service is offered on a monthly or annual subscription basis.
                Prices are listed on our{" "}
                <a href="/pricing">pricing page</a> and are in Australian
                Dollars (AUD), exclusive of GST unless stated otherwise.
              </p>
              <h3>Setup Fee</h3>
              <p>
                A one-time setup fee covers onboarding, AI agent configuration,
                phone number provisioning, and integration with your booking
                system. The setup fee amount depends on your chosen plan and
                billing period.
              </p>
              <h3>Payment</h3>
              <p>
                Payments are processed securely via Stripe. By subscribing, you
                authorise us to charge your payment method on a recurring basis.
                You may cancel at any time — see Termination below.
              </p>

              <h2>3. Money-Back Guarantee</h2>
              <p>
                We offer a <strong>90-day pro-rata money-back guarantee</strong>{" "}
                on subscription fees. If you are not satisfied within the first
                90 days of your subscription, we will refund the unused portion
                of your subscription fee on a pro-rata basis.
              </p>
              <p>
                The setup fee is <strong>non-refundable</strong>, as it covers
                work already performed during onboarding and configuration.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use our service to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Make or facilitate unsolicited telemarketing or spam calls
                </li>
                <li>Impersonate individuals or misrepresent your business</li>
                <li>
                  Collect personal information in violation of privacy laws
                </li>
                <li>Engage in any illegal activity</li>
                <li>
                  Interfere with or disrupt the service or its infrastructure
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All technology, software, AI models, and content provided as part
                of our service remain the property of Parnell Systems. You retain
                ownership of your business data, call recordings, and customer
                information.
              </p>
              <p>
                You grant us a limited licence to use your business information
                (name, services, hours) solely to configure and operate your AI
                voice agent.
              </p>

              <h2>6. Service Availability</h2>
              <p>
                We aim for high availability but do not guarantee uninterrupted
                service. We are not liable for downtime caused by third-party
                telephony providers, internet outages, or circumstances beyond
                our reasonable control.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Australian law, our total
                liability for any claim arising from or related to our service is
                limited to the fees you have paid us in the 12 months preceding
                the claim.
              </p>
              <p>
                We are not liable for indirect, incidental, consequential, or
                punitive damages, including lost profits, lost business, or lost
                data, even if we have been advised of the possibility of such
                damages.
              </p>

              <h2>8. Termination</h2>
              <p>
                You may cancel your subscription at any time by contacting us.
                Upon cancellation:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Your AI agent will continue operating until the end of your
                  current billing period
                </li>
                <li>
                  No further charges will be made after the current period ends
                </li>
                <li>
                  You may request deletion of your data at any time (see our{" "}
                  <a href="/privacy">Privacy Policy</a>)
                </li>
              </ul>
              <p>
                We may terminate your account immediately if you breach these
                terms.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms are governed by the laws of New South Wales,
                Australia. Any disputes will be subject to the exclusive
                jurisdiction of the courts of New South Wales.
              </p>

              <h2>10. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. We will notify you
                of material changes by email or via a notice on our website at
                least 14 days before the changes take effect. Continued use of
                the service after changes take effect constitutes acceptance of
                the updated terms.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have questions about these terms, contact us at:
              </p>
              <ul className="list-none pl-0 space-y-1">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:giles@parnellsystems.com">
                    giles@parnellsystems.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:0401027141">0401 027 141</a>
                </li>
                <li>
                  <strong>ABN:</strong> 39 171 610 698
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Parnell Systems. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
