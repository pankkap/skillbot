"use client";

import { Settings, Palette, GraduationCap, Rocket } from "lucide-react";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { motion } from "framer-motion";

const setupItems = [
  {
    icon: Rocket,
    title: "Deployment & Configuration",
    description: "Full platform setup on cloud or on-premise infrastructure with SSL, domains, and performance optimization.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your logo, colors, and domain. Make Skillbot look and feel like your own platform.",
  },
  {
    icon: GraduationCap,
    title: "Faculty & Admin Training",
    description: "Comprehensive training sessions for your team to get the most out of every feature.",
  },
  {
    icon: Settings,
    title: "Data Onboarding",
    description: "Migration of existing student data, courses, and organizational structure into Skillbot.",
  },
];

export function SetupSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              One-Time Setup
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              Get Up and Running <span className="gradient-text">Seamlessly</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A one-time investment to deploy, brand, and configure Skillbot for your institution.
            </p>
            <div className="mt-6 inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl glass">
              <span className="text-3xl font-extrabold font-heading gradient-text">₹3L – ₹8L</span>
              <span className="text-muted-foreground text-sm">one-time</span>
            </div>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {setupItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpVariant}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold font-heading mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInWhenVisible delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Setup cost varies based on customization level, student count, and deployment type.
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
