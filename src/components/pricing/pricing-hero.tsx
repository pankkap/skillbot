"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-indigo-500 top-[-150px] right-[-100px] absolute" />
      <div className="orb w-[400px] h-[400px] bg-violet-500 bottom-[-100px] left-[-100px] absolute" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInWhenVisible>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Trusted by 50+ institutions
          </div>
        </FadeInWhenVisible>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight mb-6"
        >
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Flexible plans for institutions of all sizes. No hidden fees, no surprises — just powerful AI tools that transform campus outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-primary/20"
        >
          <span className="text-2xl font-extrabold font-heading gradient-text">₹100</span>
          <span className="text-muted-foreground text-sm">per student / year — that&apos;s all it takes</span>
        </motion.div>
      </div>
    </section>
  );
}
