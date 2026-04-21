"use client";

import { useState } from "react";
import { Check, Flame } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    emoji: "🟢",
    subtitle: "For small colleges",
    price: "₹1.5L",
    priceNote: "/ year (≤1,000 students)",
    perStudent: "₹150",
    perStudentNote: "per student / year",
    features: [
      "LMS with course management",
      "Certificate generation",
      "Basic analytics dashboard",
      "Role-based access (Admin, Faculty, Student)",
      "Email support",
      "Up to 1,000 students",
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
  },
  {
    name: "Professional",
    emoji: "🟡",
    subtitle: "For growing institutions",
    price: "₹6L",
    priceNote: "/ year (1,000–5,000 students)",
    perStudent: "₹120",
    perStudentNote: "per student / year",
    features: [
      "Everything in Starter",
      "Full coding platform (Judge0, 40+ languages)",
      "Placement management system",
      "Advanced analytics & reports",
      "All role-based portals",
      "Contest & leaderboard system",
      "Priority support",
      "Up to 5,000 students",
    ],
    cta: "Get Started",
    popular: true,
    highlight: true,
  },
  {
    name: "Enterprise",
    emoji: "🔴",
    subtitle: "For universities at scale",
    price: "₹8L–₹10L",
    priceNote: "/ year (5,000+ students)",
    perStudent: "₹100",
    perStudentNote: "per student / year",
    features: [
      "Everything in Professional",
      "AI mock interview system",
      "AI-powered proctoring",
      "Custom branding & white-label",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom integrations & API access",
      "99.9% SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
    highlight: false,
  },
];

export function PricingCards() {
  const { openModal } = useDemoModal();

  return (
    <section id="pricing-cards" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUpVariant}
              className={cn(
                "relative rounded-2xl p-8 glass flex flex-col",
                plan.highlight && "ring-2 ring-primary shadow-2xl shadow-primary/10 md:scale-[1.05] z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-gradient text-xs font-semibold flex items-center gap-1.5">
                  <Flame className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span>{plan.emoji}</span>
                  <h3 className="text-xl font-bold font-heading">{plan.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold font-heading">{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{plan.priceNote}</p>
              </div>

              {/* Per student */}
              <div className="mb-6 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 inline-flex items-baseline gap-1.5">
                <span className="text-lg font-bold gradient-text">{plan.perStudent}</span>
                <span className="text-xs text-muted-foreground">{plan.perStudentNote}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={cn(
                  "w-full py-3.5 rounded-full text-sm font-semibold transition-all",
                  plan.highlight
                    ? "btn-gradient"
                    : "border border-border hover:bg-muted"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Trust note */}
        <FadeInWhenVisible delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            All plans include free onboarding assistance · Annual billing · GST extra
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
