import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { SetupSection } from "@/components/pricing/setup-section";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { AddOns } from "@/components/pricing/add-ons";
import { ROISection } from "@/components/pricing/roi-section";
import { PricingTestimonials } from "@/components/pricing/pricing-testimonials";
import { PricingCTA } from "@/components/pricing/pricing-cta";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

export const metadata: Metadata = {
  title: "Pricing — Skillbot | AI-Powered Learning & Placement Platform",
  description:
    "Transparent pricing for institutions of all sizes. Starting at ₹100 per student/year. LMS, coding platform, AI interviews, proctoring, and placement automation.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingCards />
        <SetupSection />
        <ComparisonTable />
        <AddOns />
        <ROISection />
        <PricingTestimonials />
        <PricingCTA />
        <PricingFAQ />
      </main>
      <Footer />
    </>
  );
}
