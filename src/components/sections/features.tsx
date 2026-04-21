"use client";

import { Brain, Code, BookOpen, Briefcase, Shield, BarChart3 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight";
import { FadeInWhenVisible, StaggerContainer, fadeUpVariant } from "@/components/ui/motion-wrappers";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Mock Interviewer",
    description:
      "Real-time AI interviews with emotion detection, speech analysis, and personalized feedback to build confidence.",
    mock: "interviewer",
  },
  {
    icon: Code,
    title: "Coding Platform",
    description:
      "Judge0-powered compiler supporting 40+ languages with contests, leaderboards, and auto-grading.",
    mock: "coding",
  },
  {
    icon: BookOpen,
    title: "Learning Management",
    description:
      "Complete LMS with courses, assessments, certifications, and learning paths — all in one place.",
    mock: "lms",
  },
  {
    icon: Briefcase,
    title: "Placement Automation",
    description:
      "End-to-end placement drives with company matching, student tracking, and offer management.",
    mock: "placement",
  },
  {
    icon: Shield,
    title: "Proctoring System",
    description:
      "AI-powered exam proctoring with face detection, tab monitoring, and real-time alerts.",
    mock: "proctoring",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time insights on student progress, skill gaps, course completion, and placement outcomes.",
    mock: "analytics",
  },
];

function FeatureMock({ type }: { type: string }) {
  switch (type) {
    case "interviewer":
      return (
        <div className="bg-muted/50 rounded-lg p-3 mt-4 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center text-lg">
              👤
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex gap-1">
                {["😊 Confident", "🎯 Focused", "💬 Clear"].map((tag) => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-1.5 bg-indigo-500/30 rounded-full w-3/4" />
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground">
            &quot;Tell me about a project where you solved a complex problem...&quot;
          </div>
        </div>
      );
    case "coding":
      return (
        <div className="bg-zinc-900 text-zinc-300 rounded-lg p-3 mt-4 font-mono text-[10px] space-y-1">
          <div><span className="text-violet-400">function</span> <span className="text-cyan-300">twoSum</span><span className="text-yellow-300">(</span>nums, target<span className="text-yellow-300">)</span> <span className="text-yellow-300">{"{"}</span></div>
          <div className="pl-3"><span className="text-violet-400">const</span> map = <span className="text-violet-400">new</span> <span className="text-cyan-300">Map</span>();</div>
          <div className="pl-3"><span className="text-violet-400">for</span> (<span className="text-violet-400">let</span> i = <span className="text-orange-400">0</span>; i &lt; nums.length; i++) <span className="text-yellow-300">{"{"}</span></div>
          <div className="pl-6"><span className="text-violet-400">if</span> (map.<span className="text-cyan-300">has</span>(target - nums[i]))</div>
          <div className="pl-9"><span className="text-violet-400">return</span> [map.<span className="text-cyan-300">get</span>(target - nums[i]), i];</div>
          <div className="pl-3"><span className="text-yellow-300">{"}"}</span></div>
          <div><span className="text-yellow-300">{"}"}</span></div>
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-zinc-800">
            <span className="text-green-400">✓ All tests passed</span>
            <span className="text-zinc-500">Runtime: 4ms</span>
          </div>
        </div>
      );
    case "lms":
      return (
        <div className="bg-muted/50 rounded-lg p-3 mt-4 grid grid-cols-2 gap-2">
          {[
            { name: "Data Structures", progress: 72 },
            { name: "Web Dev", progress: 45 },
            { name: "ML Basics", progress: 88 },
            { name: "System Design", progress: 60 },
          ].map((course) => (
            <div key={course.name} className="bg-background/50 rounded-md p-2">
              <div className="h-6 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded mb-1.5" />
              <p className="text-[10px] font-medium truncate">{course.name}</p>
              <div className="h-1 bg-muted rounded-full mt-1">
                <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    case "placement":
      return (
        <div className="bg-muted/50 rounded-lg p-3 mt-4">
          <div className="flex gap-2">
            {["Applied", "Shortlisted", "Interview", "Placed"].map((stage, i) => (
              <div key={stage} className="flex-1 text-center">
                <div className={`text-lg font-bold ${i === 3 ? "text-green-500" : "gradient-text"}`}>
                  {[148, 89, 52, 34][i]}
                </div>
                <div className="text-[9px] text-muted-foreground">{stage}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "proctoring":
      return (
        <div className="bg-muted/50 rounded-lg p-3 mt-4 flex items-center gap-3">
          <div className="w-16 h-12 rounded-md bg-zinc-800 flex items-center justify-center text-xl border border-green-500/50">
            📹
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[10px] text-green-600 dark:text-green-400">Face detected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[10px] text-green-600 dark:text-green-400">No tab switches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="text-[10px] text-yellow-600 dark:text-yellow-400">Audio monitoring</span>
            </div>
          </div>
        </div>
      );
    case "analytics":
      return (
        <div className="bg-muted/50 rounded-lg p-3 mt-4">
          <div className="flex items-end gap-1 h-16">
            {[30, 50, 40, 70, 55, 80, 65, 90, 75, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[9px] text-muted-foreground">Jan</span>
            <span className="text-[9px] text-muted-foreground">Oct</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="orb w-[400px] h-[400px] bg-violet-500 top-[20%] left-[-200px] absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              Everything You Need to Transform{" "}
              <span className="gradient-text">Campus Outcomes</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Six powerful modules working together to deliver end-to-end training, assessment, and placement success.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeUpVariant}>
              <SpotlightCard className="p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <FeatureMock type={feature.mock} />
              </SpotlightCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
