"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

const testimonials = [
  {
    quote:
      "Skillbot transformed our placement season. We went from 60% to 94% placement rate in just one year. The AI interview prep was a game-changer for our students.",
    name: "Dr. Priya Sharma",
    title: "Dean of Placements, JNTU Hyderabad",
  },
  {
    quote:
      "The coding platform is incredibly well-integrated. Students love the real-time contests, and we can track progress across the entire department from one dashboard.",
    name: "Prof. Rajesh Kumar",
    title: "HOD Computer Science, VIT University",
  },
  {
    quote:
      "I practiced 200+ problems and did 15 mock interviews on Skillbot. Got placed at Microsoft with a 42 LPA package. This platform is seriously underrated.",
    name: "Ananya Mehta",
    title: "CS Student, SRM Institute — Placed at Microsoft",
  },
  {
    quote:
      "The proctoring system saved us during remote exams. Zero cheating incidents, and the AI flagging is incredibly accurate. Our faculty trust it completely.",
    name: "Dr. Vikram Reddy",
    title: "VP Academics, Amity University",
  },
  {
    quote:
      "From course creation to placement tracking, everything is automated. We reduced administrative overhead by 70% and our team can now focus on what matters — student success.",
    name: "Sunita Patel",
    title: "Placement Officer, LPU Punjab",
  },
  {
    quote:
      "The emotion detection in AI interviews helped me understand my body language and nervousness pattern. After 10 practice rounds, I felt confident walking into my Amazon interview.",
    name: "Rahul Verma",
    title: "ECE Student, Manipal Institute — Placed at Amazon",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
              Loved by <span className="gradient-text">Students & Educators</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Hear from the institutions and students who&apos;ve transformed their outcomes with Skillbot.
            </p>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible delay={0.2}>
        <InfiniteMovingCards items={testimonials} speed="slow" />
      </FadeInWhenVisible>
    </section>
  );
}
