import { VoiceNavbar } from "@/components/voice/VoiceNavbar";
import { FadeIn } from "@/components/landing/FadeIn";
import { useSEO } from "@/hooks/use-seo";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy — Parnell Systems",
    description:
      "How Parnell Systems collects, uses, and protects your personal information.",
  });

  return (
    <div className="min-h-screen bg-background">
      <VoiceNavbar />

      <section className="pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] mb-8">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: 1 April 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-foreground [&_a]:text-accent [&_a]:underline">
              <p>
                Parnell Systems (ABN 39 171 610 698) ("we", "us", "our")
                operates AI voice agent services for Australian businesses. This
                policy explains how we collect, use, disclose, and protect your
                personal information in accordance with the Australian Privacy
                Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>

              <h2>1. Information We Collect</h2>
              <h3>Information you provide</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Name, email address, phone number, and business name when you
                  sign up, contact us, or book a demo
                </li>
                <li>
                  Payment information processed securely via Stripe (we do not
                  store card details)
                </li>
                <li>
                  Business configuration details for your AI voice agent (hours,
                  services, greetings)
                </li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Call data:</strong> Call recordings, transcripts, caller
                  phone numbers, call duration, and timestamps when your AI agent
                  handles calls
                </li>
                <li>
                  <strong>Website analytics:</strong> Pages visited, time on
                  site, referral source, device type, and IP address via Google
                  Analytics 4
                </li>
                <li>
                  <strong>Cookies:</strong> Essential cookies for site
                  functionality and analytics cookies for measuring performance
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide and improve our AI voice agent service</li>
                <li>To process payments and manage your subscription</li>
                <li>
                  To train and improve our AI models (using de-identified,
                  aggregated data only)
                </li>
                <li>
                  To communicate with you about your account, service updates,
                  and support
                </li>
                <li>
                  To measure website performance and improve user experience
                </li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2>3. Third Parties</h2>
              <p>
                We share personal information only with service providers who
                assist in delivering our service:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Stripe</strong> — payment processing
                </li>
                <li>
                  <strong>Google Analytics</strong> — website analytics
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting
                </li>
                <li>
                  <strong>Telephony providers</strong> — voice call routing and
                  recording
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>

              <h2>4. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account
                is active or as needed to provide our services. Call recordings
                and transcripts are retained for 12 months, after which they are
                automatically deleted. You may request earlier deletion at any
                time.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                Under the Australian Privacy Act, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your personal information (subject to legal
                  obligations)
                </li>
                <li>
                  Complain to the Office of the Australian Information
                  Commissioner (OAIC) if you believe we have breached the APPs
                </li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>
                We use Google Analytics 4 to understand how visitors use our
                website. This uses cookies that collect anonymous usage data. You
                can opt out by adjusting your browser settings or using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics opt-out browser add-on
                </a>
                .
              </p>

              <h2>7. Security</h2>
              <p>
                We take reasonable steps to protect your personal information
                from misuse, interference, loss, and unauthorised access. This
                includes encryption in transit (TLS), secure cloud
                infrastructure, and access controls.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. We will notify you
                of material changes by email or via a notice on our website.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or wish to
                exercise your rights, contact us at:
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
