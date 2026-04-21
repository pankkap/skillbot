"use client";

import { ArrowRight, Phone, Flame } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

export function PricingCTA() {
  const { openModal } = useDemoModal();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInWhenVisible>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-6">
            <Flame className="w-4 h-4 text-orange-300" />
            Limited onboarding slots for this quarter
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white mb-6">
            Transform Your Campus with AI
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50+ institutions already using Skillbot to achieve 90%+ placement rates. 
            See the platform in action — it takes just 30 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-base hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all group"
            >
              Book Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="mailto:sales@skillbot.ai"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Talk to Sales
            </a>
          </div>

          <p className="text-sm text-white/60 mt-6">
            Free 30-minute walkthrough · No commitment · Custom pricing available
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
