"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useDemoModal } from "@/components/demo-modal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function Hero() {
  const { openModal } = useDemoModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="orb w-[600px] h-[600px] bg-indigo-500 top-[-200px] left-[-200px] absolute" />
      <div className="orb w-[500px] h-[500px] bg-cyan-400 bottom-[-150px] right-[-150px] absolute" />
      <div className="orb w-[300px] h-[300px] bg-violet-500 top-[30%] right-[10%] absolute animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now onboarding institutions for 2026
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] mb-6">
            <TextGenerateEffect words="AI-Powered Learning & Placement Platform" />
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            One platform for training, coding, assessment, and campus hiring — 
            powered by AI. Transform how your institution prepares students for the real world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={openModal}
              className="btn-gradient px-8 py-3.5 rounded-full text-base font-semibold flex items-center gap-2 group"
            >
              Book Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#platform"
              className="px-8 py-3.5 rounded-full border border-border text-base font-semibold hover:bg-muted transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Explore Platform
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview Mock */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="glass rounded-2xl p-2 shadow-2xl shadow-indigo-500/10">
            <div className="bg-muted rounded-xl overflow-hidden">
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                    app.skillbot.ai/dashboard
                  </div>
                </div>
              </div>
              {/* Mock dashboard content */}
              <div className="p-6 grid grid-cols-4 gap-4 min-h-[300px]">
                {/* Sidebar mock */}
                <div className="hidden md:flex flex-col gap-3">
                  {["Dashboard", "Courses", "Coding Lab", "Interviews", "Analytics"].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-xs font-medium ${
                        i === 0
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="col-span-4 md:col-span-3 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Students", value: "2,847" },
                      { label: "Courses", value: "156" },
                      { label: "Placements", value: "432" },
                      { label: "Success Rate", value: "94%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-background/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-lg font-bold font-heading">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  {/* Chart mock */}
                  <div className="bg-background/50 rounded-lg p-4 h-40 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 1.5 + i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-indigo-500 to-violet-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 md:right-8 glass rounded-xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                <span className="text-green-500 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold">New Placement</p>
                <p className="text-[10px] text-muted-foreground">Just now</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 md:left-12 glass rounded-xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-400/20 flex items-center justify-center">
                <span className="text-indigo-500 text-sm">🤖</span>
              </div>
              <div>
                <p className="text-xs font-semibold">AI Interview Complete</p>
                <p className="text-[10px] text-muted-foreground">Score: 92/100</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
