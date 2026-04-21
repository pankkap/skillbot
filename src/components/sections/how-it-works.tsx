"use client";

import { Building2, BookOpen, ClipboardCheck, Trophy } from "lucide-react";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Building2,
    title: "Onboard Institution",
    description: "Quick setup with role-based access for admin, faculty, and students. Import existing data seamlessly.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Train Students",
    description: "Deploy AI-powered courses, coding labs, and mock interviews. Personalized learning paths for every student.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: ClipboardCheck,
    title: "Assess & Practice",
    description: "Proctored exams, coding contests, and skill assessments. AI-generated questions with instant feedback.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Trophy,
    title: "Get Placed",
    description: "Automated placement drives with company matching, student tracking, and analytics-driven outcomes.",
    color: "from-cyan-500 to-cyan-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              Get Started in <span className="gradient-text">4 Simple Steps</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              From onboarding to placements — Skillbot streamlines the entire journey.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeInWhenVisible key={step.title} delay={index * 0.15}>
                <div className="relative text-center lg:text-center">
                  {/* Step number + icon */}
                  <div className="relative inline-flex items-center justify-center mx-auto mb-6">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                      step.color
                    )}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
