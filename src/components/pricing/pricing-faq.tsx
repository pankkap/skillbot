"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is included in AMC (Annual Maintenance Charges)?",
    answer:
      "AMC covers platform hosting, security updates, bug fixes, feature upgrades, and standard support. It's included in the annual plan pricing. Enterprise customers get dedicated support and SLA guarantees as part of their AMC.",
  },
  {
    question: "Can we customize the platform with our branding?",
    answer:
      "Yes! On the Enterprise plan, you get full white-label customization — your logo, colors, domain, and email branding. Professional plan customers can customize the logo and basic colors. Custom branding is also available as part of the one-time setup package.",
  },
  {
    question: "Is the AI Interview system included in all plans?",
    answer:
      "The AI Interview system with emotion detection and speech analysis is included in the Enterprise plan. For Starter and Professional plans, it's available as an add-on at ₹1.5L/year. Each AI interview provides a detailed feedback report with confidence scores, communication analysis, and improvement suggestions.",
  },
  {
    question: "How is pricing calculated? Is it per student?",
    answer:
      "Pricing is based on annual plans with student count tiers — Starter (≤1,000 students), Professional (1,000–5,000), and Enterprise (5,000+). The effective per-student cost ranges from ₹100–₹150/year depending on the plan. There's also a one-time setup fee of ₹3L–₹8L based on customization requirements.",
  },
  {
    question: "What happens if our student count exceeds the plan limit?",
    answer:
      "We'll work with you to seamlessly upgrade to the next tier. There's no disruption to your service — we'll simply adjust your billing at the next renewal. You can also upgrade mid-cycle with prorated pricing.",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer:
      "Yes, on-premise deployment is available on the Enterprise plan. We'll deploy Skillbot on your institution's infrastructure with full data residency. Cloud-hosted deployment is available on all plans and is managed by our team with 99.9% uptime.",
  },
  {
    question: "Is there a free trial or pilot program?",
    answer:
      "We offer a free personalized demo and a 30-day pilot program for qualified institutions. During the pilot, you get access to the full platform with up to 100 students so you can evaluate the impact before committing. Book a demo to get started.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Starter gets email support (48hr response). Professional gets priority email + chat support (12hr response). Enterprise gets a dedicated account manager, phone/video support, and same-day response SLA. All plans include access to our knowledge base and training videos.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm sm:text-base font-medium pr-4 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pb-5 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Everything you need to know about Skillbot pricing and plans.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="glass rounded-2xl px-6 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="mailto:sales@skillbot.ai" className="text-primary hover:underline font-medium">
                Talk to our sales team
              </a>
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
