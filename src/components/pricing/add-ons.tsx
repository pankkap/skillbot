"use client";

import { Brain, Code, Briefcase, Shield, BarChart3 } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { SpotlightCard } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const addOns = [
  {
    icon: Brain,
    name: "AI Interview System",
    price: "₹1.5L",
    period: "/ year",
    description: "AI-powered mock interviews with emotion detection, speech analysis, and personalized feedback reports.",
  },
  {
    icon: Code,
    name: "Coding Platform",
    price: "₹1L",
    period: "/ year",
    description: "Full Judge0-integrated coding environment with 40+ languages, problem bank, contests, and leaderboards.",
  },
  {
    icon: Briefcase,
    name: "Placement Module",
    price: "₹1L",
    period: "/ year",
    description: "End-to-end placement automation — company matching, pipeline tracking, and offer management.",
  },
  {
    icon: Shield,
    name: "Proctoring System",
    price: "₹50K",
    period: "/ year",
    description: "AI-powered exam proctoring with face detection, tab monitoring, and real-time violation alerts.",
  },
  {
    icon: BarChart3,
    name: "Advanced Analytics",
    price: "₹50K",
    period: "/ year",
    description: "Deep analytics on student performance, skill gaps, placement readiness scores, and ROI reports.",
  },
];

export function AddOns() {
  const { openModal } = useDemoModal();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Add-Ons
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              Customize Your <span className="gradient-text">Perfect Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Need specific modules? Add only what your institution needs — no package lock-in.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addOns.map((addon) => (
            <motion.div key={addon.name} variants={fadeUpVariant}>
              <SpotlightCard className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <addon.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold font-heading">{addon.price}</span>
                    <span className="text-xs text-muted-foreground">{addon.period}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold font-heading mb-2">{addon.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{addon.description}</p>
                <button
                  onClick={openModal}
                  className="mt-4 w-full py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Add to Plan
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
