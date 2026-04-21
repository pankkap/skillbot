"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

const stats = [
  { target: 10000, suffix: "+", label: "Students Trained" },
  { target: 500, suffix: "+", label: "Placements Facilitated" },
  { target: 95, suffix: "%", label: "Success Rate" },
];

const universities = [
  "JNTU Hyderabad",
  "VIT University",
  "SRM Institute",
  "Amity University",
  "LPU Punjab",
  "Manipal Institute",
  "KIIT University",
  "Chandigarh University",
];

export function TrustedBy() {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
            Trusted by Leading Institutions
          </p>
        </FadeInWhenVisible>

        {/* University logos */}
        <FadeInWhenVisible delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-16">
            {universities.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <FadeInWhenVisible key={stat.label} delay={0.2}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold font-heading gradient-text">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
