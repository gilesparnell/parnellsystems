import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Demos", href: "/#demos" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe";

export const VoiceNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="https://parnellsystems.com"
          className="flex items-center gap-2 shrink-0"
        >
          <span className="text-lg font-bold text-foreground tracking-tight">
            Parnell Systems
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded px-1.5 py-0.5 leading-none">
            voice
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3">
            <Button variant="cta" size="sm" asChild>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                Get started
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
                Get started
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
