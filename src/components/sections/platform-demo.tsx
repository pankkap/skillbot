"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, GraduationCap, Users } from "lucide-react";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "admin", label: "Admin Portal", icon: Monitor },
  { id: "student", label: "Student Portal", icon: GraduationCap },
  { id: "faculty", label: "Faculty Portal", icon: Users },
];

function AdminDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total Students", value: "2,847", change: "+12%", color: "text-green-500" },
          { label: "Active Courses", value: "156", change: "+8%", color: "text-green-500" },
          { label: "Placement Rate", value: "94%", change: "+3%", color: "text-green-500" },
          { label: "Hackathons Hosted", value: "18", change: "+5", color: "text-green-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-background/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-xl font-bold font-heading mt-1">{stat.value}</p>
            <p className={cn("text-xs mt-1", stat.color)}>{stat.change} this month</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Problem Solving Analytics</h4>
          <div className="space-y-2.5">
            {[
              { label: "Easy", solved: 1240, total: 1500, color: "bg-green-500" },
              { label: "Medium", solved: 870, total: 1200, color: "bg-yellow-500" },
              { label: "Hard", solved: 340, total: 800, color: "bg-red-500" },
            ].map((level) => (
              <div key={level.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{level.label}</span>
                  <span className="font-medium">{level.solved}/{level.total}</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className={cn("h-full rounded-full", level.color)} style={{ width: `${(level.solved / level.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Recent Activity</h4>
          <div className="space-y-2">
            {[
              { text: "Hackathon 'CodeStorm 2026' completed — 320 participants", time: "1h ago" },
              { text: "New batch of 120 students onboarded", time: "2h ago" },
              { text: "Placement drive scheduled with TCS", time: "3h ago" },
              { text: "AI Interview module updated to v3.2", time: "5h ago" },
              { text: "Monthly analytics report generated", time: "6h ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground text-xs">{activity.text}</span>
                <span className="text-[10px] text-muted-foreground/50 ml-auto whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Courses In Progress", value: "4" },
          { label: "Problems Solved", value: "187" },
          { label: "Mock Interviews", value: "12" },
          { label: "Hackathon Rank", value: "#24" },
        ].map((stat) => (
          <div key={stat.label} className="bg-background/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-xl font-bold font-heading mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Problem Solving</h4>
          <div className="flex items-center justify-around">
            {[
              { label: "Easy", count: 92, color: "text-green-500" },
              { label: "Medium", count: 68, color: "text-yellow-500" },
              { label: "Hard", count: 27, color: "text-red-500" },
            ].map((level) => (
              <div key={level.label} className="text-center">
                <p className={cn("text-xl font-bold font-heading", level.color)}>{level.count}</p>
                <p className="text-[10px] text-muted-foreground">{level.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Streak</span>
              <span className="font-semibold text-orange-500">🔥 14 days</span>
            </div>
          </div>
        </div>
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">My Courses</h4>
          {["Data Structures & Algo", "Web Development", "Machine Learning"].map((course, i) => (
            <div key={course} className="flex items-center justify-between py-2">
              <span className="text-xs text-muted-foreground">{course}</span>
              <div className="w-20 h-2 bg-muted rounded-full">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${[72, 45, 30][i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Upcoming</h4>
          {[
            { event: "Hackathon: CodeStorm", time: "Today, 6 PM", badge: "🏆" },
            { event: "DSA Assessment", time: "Tomorrow, 10 AM", badge: "📝" },
            { event: "Mock Interview", time: "Wed, 2 PM", badge: "🎤" },
            { event: "Infosys Drive", time: "Next Monday", badge: "💼" },
          ].map((item) => (
            <div key={item.event} className="flex items-center justify-between py-1.5">
              <span className="text-xs"><span className="mr-1">{item.badge}</span>{item.event}</span>
              <span className="text-[10px] text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FacultyDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "My Students", value: "342" },
          { label: "Avg. Score", value: "78%" },
          { label: "Submissions Today", value: "89" },
          { label: "Hackathons Created", value: "6" },
        ].map((stat) => (
          <div key={stat.label} className="bg-background/50 rounded-xl p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-xl font-bold font-heading mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Class Performance</h4>
          <div className="flex items-end gap-2 h-32">
            {[65, 72, 58, 80, 75, 88, 70, 92, 68, 85].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[8px] font-medium text-muted-foreground mb-0.5">{val}%</span>
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${val}%`,
                    background: `linear-gradient(to top, #4f46e5, #8b5cf6)`,
                  }}
                />
                <span className="text-[9px] text-muted-foreground">W{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Problem Solving Analytics</h4>
          <div className="space-y-2.5">
            {[
              { label: "Easy", solved: 420, total: 500, color: "bg-green-500" },
              { label: "Medium", solved: 280, total: 400, color: "bg-yellow-500" },
              { label: "Hard", solved: 95, total: 250, color: "bg-red-500" },
            ].map((level) => (
              <div key={level.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{level.label}</span>
                  <span className="font-medium">{level.solved}/{level.total}</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className={cn("h-full rounded-full", level.color)} style={{ width: `${(level.solved / level.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border flex justify-between text-xs">
            <span className="text-muted-foreground">Class Avg. Streak</span>
            <span className="font-semibold text-orange-500">🔥 8 days</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Hackathon Leaderboard</h4>
          {[
            { rank: 1, name: "Priya S.", score: 980, badge: "🥇" },
            { rank: 2, name: "Rahul K.", score: 945, badge: "🥈" },
            { rank: 3, name: "Ananya M.", score: 920, badge: "🥉" },
            { rank: 4, name: "Vikram T.", score: 890, badge: "" },
          ].map((student) => (
            <div key={student.name} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs w-5 text-center">{student.badge || `#${student.rank}`}</span>
                <span className="text-sm font-medium">{student.name}</span>
              </div>
              <span className="text-xs font-semibold text-primary">{student.score} pts</span>
            </div>
          ))}
        </div>
        <div className="bg-background/50 rounded-xl p-4">
          <h4 className="text-sm font-semibold mb-3">Pending Reviews</h4>
          {[
            { name: "Priya S.", task: "ML Assignment #3", status: "Needs Review" },
            { name: "Rahul K.", task: "Hackathon Submission", status: "Needs Review" },
            { name: "Ananya M.", task: "SQL Quiz", status: "Auto-graded" },
            { name: "Vikram T.", task: "React Project", status: "Needs Review" },
          ].map((item) => (
            <div key={item.name + item.task} className="flex items-center justify-between py-1.5">
              <div>
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{item.task}</span>
              </div>
              <span className={cn(
                "text-[10px] px-2 py-0.5 rounded-full",
                item.status === "Auto-graded"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
              )}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PlatformDemo() {
  const [activeTab, setActiveTab] = useState("admin");

  return (
    <section id="platform" className="py-24 relative">
      <div className="orb w-[400px] h-[400px] bg-cyan-400 top-[30%] right-[-200px] absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              See Skillbot <span className="gradient-text">in Action</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Role-based portals designed for every stakeholder — admin, student, and faculty.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="glass rounded-2xl p-2 sm:p-4 shadow-xl">
            {/* Tabs */}
            <div className="flex gap-1 mb-4 bg-muted/50 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                    activeTab === tab.id
                      ? "bg-background shadow-sm text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Dashboard content */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "admin" && <AdminDashboard />}
                  {activeTab === "student" && <StudentDashboard />}
                  {activeTab === "faculty" && <FacultyDashboard />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
