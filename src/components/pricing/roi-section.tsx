"use client";

import { TrendingUp, Clock, Target, IndianRupee } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const roiStats = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: "%",
    label: "Increase in Placement Rate",
    description: "Institutions using Skillbot see 30–40% higher placement rates within the first year.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Clock,
    value: 70,
    suffix: "%",
    label: "Reduction in Manual Work",
    description: "Automated assessments, proctoring, and placement drives free up admin and faculty hours.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Target,
    value: 60,
    suffix: "%",
    label: "Improvement in Student Performance",
    description: "AI-personalized learning paths and coding practice dramatically boost student outcomes.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];

export function ROISection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-green-500 top-[10%] left-[-200px] absolute" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Return on Investment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              The Math is <span className="gradient-text">Simple</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        {/* Hero ROI callout */}
        <FadeInWhenVisible delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="glass rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-8 h-8 text-primary" />
                    <span className="text-5xl md:text-6xl font-extrabold font-heading gradient-text">100</span>
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-semibold">per student / year</p>
                    <p className="text-sm text-muted-foreground">That&apos;s less than a single textbook.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-muted">₹100 / student</span>
                  <span className="text-primary font-bold">→</span>
                  <span className="px-3 py-1 rounded-full bg-muted">Better placements</span>
                  <span className="text-primary font-bold">→</span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-semibold">
                    10x ROI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roiStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUpVariant}>
              <div className="glass rounded-2xl p-8 text-center h-full">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4", stat.bgColor)}>
                  <stat.icon className={cn("w-7 h-7", stat.color)} />
                </div>
                <div className={cn("text-5xl font-extrabold font-heading mb-2", stat.color)}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-base font-bold font-heading mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeInWhenVisible delay={0.3}>
          <div className="text-center mt-12 glass rounded-xl px-6 py-4 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Real impact:</span> Our partner institutions report that Skillbot pays for itself within the first placement season through improved student outcomes and reduced administrative overhead.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
