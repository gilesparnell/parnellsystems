import { Sun, Hammer, Dumbbell, Stethoscope, Scissors, Wrench, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NicheConfig {
  title: string;
  subtitle: string;
  blurb: string;
  phoneNumber: string | null;
  features: string[];
  widgetId: string;
  orbLabel: string;
  audioFile: string | null;
  audioTitle?: string;
  audioDesc?: string;
  icon: LucideIcon;
  color: string;
  accent: string;
}

export const NICHES: Record<string, NicheConfig> = {
  solar: {
    title: "AI Receptionist for Solar",
    subtitle: "Solar Installations & Energy Quotes",
    blurb: "Experience how AI handles solar panel inquiries, qualifies roof types, and books property assessments.",
    phoneNumber: null,
    features: ["Lead Qualification", "Property Assessments", "General Enquiries"],
    widgetId: "69b2e21d4d840e52e6d98441",
    orbLabel: "Solar AI Voice Demo",
    audioFile: null,
    icon: Sun,
    color: "from-yellow-500/20 to-orange-500/20",
    accent: "text-yellow-400",
  },
  gyms: {
    title: "AI Receptionist for Gyms",
    subtitle: "Fitness Centres, PTs & Studios",
    blurb: "See how AI books fitness classes, answers membership queries, and qualifies trial passes.",
    phoneNumber: null,
    features: ["Class Scheduling", "Membership Queries", "Trial Booking Automation"],
    widgetId: "69b2e37c6a7fad30792c5b39",
    orbLabel: "Gym AI Voice Demo",
    audioFile: "gymdemoV1.mp3",
    audioTitle: "Gyms",
    audioDesc: "Book trial classes and handle membership enquiries 24/7.",
    icon: Dumbbell,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
  tradies: {
    title: "AI Receptionist for Tradies",
    subtitle: "Plumbers, Electricians & Builders",
    blurb: "Test how AI handles after-hours overflow, urgent trade calls, quote requests, and callbacks.",
    phoneNumber: "0485 009 296",
    features: ["24/7 Call Answering", "Smart Job Qualification", "Direct Calendar Booking"],
    widgetId: "69b2dd4c6a7fad7efe2a936f",
    orbLabel: "Tradie AI Voice Demo",
    audioFile: "tradies.mp3",
    audioTitle: "Tradies",
    audioDesc: "Dispatch teams and capture job details while you're on tools.",
    icon: Hammer,
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
  },
  clinics: {
    title: "AI Receptionist for Clinics",
    subtitle: "Dental, Physio & Medical",
    blurb: "Experience polite patient scheduling, FAQ handling, and after-hours routing.",
    phoneNumber: null,
    features: ["Patient Scheduling", "FAQ Handling", "After-hours Routing"],
    widgetId: "69b2f4e90ec3008fc3ae2714",
    orbLabel: "Clinic AI Voice Demo",
    audioFile: null,
    icon: Stethoscope,
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
  salons: {
    title: "AI Receptionist for Salons & Spas",
    subtitle: "Hair, Beauty, Spas & Massage",
    blurb: "Check out how AI handles appointment adjustments, service questions, and massage bookings.",
    phoneNumber: null,
    features: ["Appointment Management", "Service Pricing Quotes", "Reminders & Follow-Ups"],
    widgetId: "69b2ee934d840e7823dd75f5",
    orbLabel: "Salon AI Voice Demo",
    audioFile: null,
    icon: Scissors,
    color: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
  },
  automotive: {
    title: "AI Receptionist for Automotive",
    subtitle: "Mechanics, Auto Body & Dealerships",
    blurb: "See how AI books maintenance services, handles repair status updates, and quotes.",
    phoneNumber: null,
    features: ["Repair Scheduling", "Status Updates", "General Inquiries"],
    widgetId: "69b2db806053f649e8d8eedb",
    orbLabel: "Automotive AI Voice Demo",
    audioFile: null,
    icon: Wrench,
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
  },
  pools: {
    title: "AI Receptionist for Pool Maintenance",
    subtitle: "Cleaning, Repair & Installation",
    blurb: "Check out how AI schedules pool cleanings, responds to repair needs, and quotes.",
    phoneNumber: null,
    features: ["Cleaning Schedules", "Repair Quotes", "Emergency Callouts"],
    widgetId: "69b2ecd40ec300037eabb501",
    orbLabel: "Pool Care AI Voice Demo",
    audioFile: null,
    icon: Droplets,
    color: "from-sky-500/20 to-blue-500/20",
    accent: "text-sky-400",
  },
};

export const NICHE_SLUGS = Object.keys(NICHES);
