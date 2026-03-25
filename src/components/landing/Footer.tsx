export const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="/" className="text-base font-bold text-foreground tracking-tight">
            Parnell.Systems
          </a>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs">
            Systems consulting and AI implementation for SMEs. No hype — just high-performance infrastructure that works.
          </p>
          <div className="mt-5">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Book a free audit →
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-4">Services</p>
          <ul className="space-y-2.5">
            {[
              { label: "Intelligence Layer", href: "/intelligence-layer", accent: true },
              { label: "AI Voice & SMS", href: "/voice-sms" },
              { label: "Systems Consulting", href: "/#services" },
              { label: "Live Demos", href: "https://allconvos.ai/demos", external: true },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`text-xs transition-colors duration-150 ${
                    item.accent
                      ? "text-accent hover:text-accent/80 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.accent && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1.5 mb-0.5" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Training */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-4">Training</p>
          <ul className="space-y-2.5">
            {[
              { label: "All Courses", href: "/training" },
              { label: "Claude 101", href: "/training#claude" },
              { label: "Claude 102", href: "/training#claude" },
              { label: "Claude 103", href: "/training#claude" },
              { label: "Antigravity (coming soon)", href: "/training#antigravity" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-4">Company</p>
          <ul className="space-y-2.5">
            {[
              { label: "About", href: "/#about" },
              { label: "Process", href: "/#process" },
              { label: "Book an audit", href: "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe", external: true },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border flex items-center justify-center">
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Parnell.Systems. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
);
