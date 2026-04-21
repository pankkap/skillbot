"use client";

import { Check, ArrowRight, Flame } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    subtitle: "For small colleges",
    price: "₹1.5L",
    note: "/ year",
    perStudent: "₹150/student",
    features: ["LMS & Courses", "Certificates", "Basic Analytics", "Role-based Access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    subtitle: "For growing institutions",
    price: "₹6L",
    note: "/ year",
    perStudent: "₹120/student",
    features: ["Everything in Starter", "Coding Platform", "Placement System", "Advanced Analytics", "All Portals"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "For universities at scale",
    price: "₹8L–10L",
    note: "/ year",
    perStudent: "₹100/student",
    features: ["Everything in Pro", "AI Interviews", "AI Proctoring", "White-label", "Dedicated Support"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const { openModal } = useDemoModal();

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              Starting at <span className="gradient-text">₹100 per student/year</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Flexible plans for institutions of all sizes. No hidden fees.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUpVariant}
              className={cn(
                "relative rounded-2xl p-8 glass flex flex-col",
                plan.popular && "ring-2 ring-primary shadow-xl shadow-primary/10 md:scale-[1.03]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-gradient text-xs font-semibold flex items-center gap-1.5">
                  <Flame className="w-3 h-3" /> Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold font-heading">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.subtitle}</p>

              <div className="mb-1">
                <span className="text-3xl font-extrabold font-heading">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.note}</span>
              </div>
              <p className="text-xs font-medium gradient-text mb-6">{plan.perStudent}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={cn(
                  "w-full py-3 rounded-full text-sm font-semibold transition-all",
                  plan.popular ? "btn-gradient" : "border border-border hover:bg-muted"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Link to full pricing page */}
        <FadeInWhenVisible delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
            >
              See full pricing, comparison & add-ons
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
