import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Brain, Mic, GraduationCap, Cog, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const servicesItems = [
  {
    icon: Brain,
    label: "Intelligence Layer",
    desc: "Your AI operating system",
    href: "/intelligence-layer",
    featured: true,
  },
  {
    icon: Mic,
    label: "AI Voice & SMS",
    desc: "Never miss a lead again",
    href: "/voice-sms",
    featured: false,
  },
  {
    icon: Cog,
    label: "Systems Consulting",
    desc: "Audit, architect, implement",
    href: "/#services",
    featured: false,
  },
];

const trainingItems = [
  {
    label: "Claude",
    desc: "101 · 102 · 103",
    href: "/training#claude",
  },
  {
    label: "Antigravity",
    desc: "101 · 102 · 103",
    href: "/training#antigravity",
  },
  {
    label: "View all courses",
    desc: "Full training catalogue",
    href: "/training",
  },
];

type DropdownKey = "services" | "training" | null;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const openDropdown = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const linkBase = "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="text-lg font-bold text-foreground tracking-tight shrink-0">
          Parnell.Systems
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("services")}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-md ${linkBase} hover:bg-accent/5`}
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "services" && (
              <div
                className="absolute top-full left-0 mt-1 w-72 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-xl overflow-hidden"
                onMouseEnter={() => openDropdown("services")}
                onMouseLeave={scheduleClose}
              >
                <div className="p-2">
                  {servicesItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 group ${
                        item.featured
                          ? "hover:bg-accent/10"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${item.featured ? "bg-accent/15" : "bg-muted"}`}>
                        <item.icon size={14} className={item.featured ? "text-accent" : "text-muted-foreground"} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium leading-none mb-1 ${item.featured ? "text-accent" : "text-foreground"}`}>
                          {item.featured && <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1.5 mb-0.5" />}
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Training dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown("training")}
            onMouseLeave={scheduleClose}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-md ${linkBase} hover:bg-accent/5`}
              onClick={() => setActiveDropdown(activeDropdown === "training" ? null : "training")}
            >
              Training
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === "training" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "training" && (
              <div
                className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-xl overflow-hidden"
                onMouseEnter={() => openDropdown("training")}
                onMouseLeave={scheduleClose}
              >
                <div className="px-3 pt-3 pb-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground px-1 mb-2">AI Training Courses</p>
                </div>
                <div className="p-2 pt-0">
                  {trainingItems.map((item, i) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-muted/50 group ${i === trainingItems.length - 1 ? "border-t border-border/50 mt-1 pt-3" : ""}`}
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <ArrowRight size={13} className="text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <a
            href={location.pathname === "/" ? "#about" : "/#about"}
            className={`px-3 py-2 rounded-md ${linkBase} hover:bg-accent/5`}
          >
            About
          </a>

          {/* CTA */}
          <div className="ml-3">
            <Button variant="cta" size="sm" asChild>
              <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                Book an audit
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

          {/* Services */}
          <div>
            <button
              className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {servicesItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm py-1.5 ${item.featured ? "text-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {item.featured && <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-2" />}
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Training */}
          <div>
            <button
              className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
            >
              Training
              <ChevronDown size={14} className={`transition-transform ${mobileTrainingOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileTrainingOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {trainingItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <a
            href={location.pathname === "/" ? "#about" : "/#about"}
            onClick={() => setMobileOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground py-2"
          >
            About
          </a>

          <div className="pt-2">
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a href="https://api.leadconnectorhq.com/widget/booking/m8K2i912qEb19UyxsSGe" target="_blank" rel="noopener noreferrer">
                Book an audit
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
