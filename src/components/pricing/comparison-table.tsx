"use client";

import { Check, X, Minus } from "lucide-react";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";
import { cn } from "@/lib/utils";

type CellValue = true | false | "partial" | string;

const features: { category: string; items: { name: string; starter: CellValue; professional: CellValue; enterprise: CellValue }[] }[] = [
  {
    category: "Learning",
    items: [
      { name: "LMS & Course Management", starter: true, professional: true, enterprise: true },
      { name: "Certificate Generation", starter: true, professional: true, enterprise: true },
      { name: "Learning Paths", starter: false, professional: true, enterprise: true },
      { name: "Content Library (500+ courses)", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Coding & Practice",
    items: [
      { name: "Coding Platform (Judge0)", starter: false, professional: true, enterprise: true },
      { name: "40+ Programming Languages", starter: false, professional: true, enterprise: true },
      { name: "Contests & Leaderboards", starter: false, professional: true, enterprise: true },
      { name: "Problem Bank (2000+ problems)", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Assessment & AI",
    items: [
      { name: "Basic Assessments & Quizzes", starter: true, professional: true, enterprise: true },
      { name: "AI Mock Interview System", starter: false, professional: false, enterprise: true },
      { name: "AI-Powered Proctoring", starter: false, professional: false, enterprise: true },
      { name: "AI Question Generation", starter: false, professional: "partial", enterprise: true },
    ],
  },
  {
    category: "Placement & Career",
    items: [
      { name: "Placement Management", starter: false, professional: true, enterprise: true },
      { name: "Company Matching", starter: false, professional: true, enterprise: true },
      { name: "Student Tracking & Pipeline", starter: false, professional: true, enterprise: true },
      { name: "Offer Letter Management", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Analytics & Admin",
    items: [
      { name: "Basic Analytics", starter: true, professional: true, enterprise: true },
      { name: "Advanced Analytics & Reports", starter: false, professional: true, enterprise: true },
      { name: "Role-Based Portals", starter: true, professional: true, enterprise: true },
      { name: "Custom Branding / White-label", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Support & Infrastructure",
    items: [
      { name: "Email Support", starter: true, professional: true, enterprise: true },
      { name: "Priority Support", starter: false, professional: true, enterprise: true },
      { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
      { name: "On-Premise Deployment", starter: false, professional: false, enterprise: true },
      { name: "SLA Guarantee (99.9%)", starter: false, professional: false, enterprise: true },
      { name: "Custom API & Integrations", starter: false, professional: false, enterprise: true },
    ],
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-4 h-4 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-yellow-500 mx-auto" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Compare Plans
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              See exactly what&apos;s included in each plan — no guesswork.
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="glass rounded-2xl overflow-hidden">
            <div className="w-full">
              <table className="w-full min-w-[600px]">
                {/* Header */}
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-sm font-semibold p-4 w-[40%]">Feature</th>
                    <th className="text-center text-sm font-semibold p-4 w-[20%]">Starter</th>
                    <th className="text-center text-sm font-semibold p-4 w-[20%]">
                      <span className="inline-flex items-center gap-1">
                        Professional
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">Popular</span>
                      </span>
                    </th>
                    <th className="text-center text-sm font-semibold p-4 w-[20%]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((group) => (
                    <>
                      <tr key={`cat-${group.category}`}>
                        <td colSpan={4} className="px-4 pt-6 pb-2">
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">
                            {group.category}
                          </span>
                        </td>
                      </tr>
                      {group.items.map((item) => (
                        <tr key={item.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="p-4 text-sm">{item.name}</td>
                          <td className="p-4 text-center"><CellIcon value={item.starter} /></td>
                          <td className={cn("p-4 text-center", "bg-primary/[0.02]")}><CellIcon value={item.professional} /></td>
                          <td className="p-4 text-center"><CellIcon value={item.enterprise} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
                {/* Price footer row */}
                <tfoot>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="p-4 text-sm font-semibold">Annual Price</td>
                    <td className="p-4 text-center font-bold text-lg font-heading">₹1.5L</td>
                    <td className={cn("p-4 text-center font-bold text-lg font-heading gradient-text", "bg-primary/[0.02]")}>₹6L</td>
                    <td className="p-4 text-center font-bold text-lg font-heading">₹8L–10L</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <p className="text-center text-xs text-muted-foreground mt-4">
            <Minus className="w-3 h-3 text-yellow-500 inline mr-1" /> indicates limited / partial access
          </p>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
