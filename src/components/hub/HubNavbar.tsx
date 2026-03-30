import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

const navLinks = [
  { label: "Voice AI", href: "https://voice.parnellsystems.com" },
  { label: "Training", href: "/training" },
  { label: "About", href: "#about" },
];

export const HubNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClasses =
    "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-md hover:bg-accent/5";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold text-foreground tracking-tight shrink-0"
        >
          Parnell Systems
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                className={linkClasses}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            );
          })}

          <div className="ml-3">
            <Button variant="cta" size="sm" asChild>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground py-2"
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-2">
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
