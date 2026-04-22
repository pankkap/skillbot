"use client";

import { ArrowRight, Flame } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

export function CTABanner() {
  const { openModal } = useDemoModal();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInWhenVisible>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 mb-6">
            <Flame className="w-4 h-4 text-orange-300" />
            Only 5 onboarding slots remaining this month
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white mb-6">
            Transform Your Campus with AI
          </h2>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50+ institutions already using Skillbot to achieve 90%+ placement rates. 
            Book a personalized demo and see the difference AI makes.
          </p>

          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-base hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all group"
          >
            Book Your Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Contact & Booking Info */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="text-white/90 text-base font-medium">Or connect directly for a demo</span>
            <span className="text-white/80 text-sm">Pankaj Kapoor</span>
            <a href="https://wa.me/919729280731" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline text-sm">WhatsApp: 9729280731</a>
            <a href="mailto:betalabsindia@gmail.com" className="text-blue-200 hover:underline text-sm">Email: betalabsindia@gmail.com</a>

          </div>
          <p className="text-sm text-white/60 mt-4">
            Free 30-minute walkthrough · No commitment required
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
