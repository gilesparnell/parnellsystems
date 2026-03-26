import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { CTASection } from "@/components/landing/CTASection";
import { ContactFormSection } from "@/components/landing/ContactFormSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <ServicesSection />
    <SocialProofSection />
    <UseCasesSection />
    <ProcessSection />
    <FAQSection />
    <AboutSection />
    <CTASection />
    <ContactFormSection />
    <Footer />
  </div>
);

export default Index;
