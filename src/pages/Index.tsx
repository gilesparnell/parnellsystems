import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { WhatWeDoSection } from "@/components/landing/WhatWeDoSection";
import { WhoItsForSection } from "@/components/landing/WhoItsForSection";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <WhatWeDoSection />
    <WhoItsForSection />
    <WhyUsSection />
    <UseCasesSection />
    <ProcessSection />
    <ServicesSection />
    <AboutSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
