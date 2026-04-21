"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FadeInWhenVisible } from "@/components/ui/motion-wrappers";

const testimonials = [
  {
    quote:
      "At ₹100 per student, Skillbot delivered 10x the value. Our placement rate jumped from 62% to 94% in just one year — the ROI is undeniable.",
    name: "Dr. Priya Sharma",
    title: "Dean of Placements, JNTU Hyderabad",
  },
  {
    quote:
      "We used to spend weeks coordinating placement drives manually. With Skillbot's automation, the entire process is streamlined — saving us 200+ admin hours per semester.",
    name: "Prof. Rajesh Kumar",
    title: "HOD Computer Science, VIT University",
  },
  {
    quote:
      "The AI interview prep module alone is worth the investment. Students who practiced 10+ mock interviews had a 3x higher offer conversion rate.",
    name: "Dr. Meera Nair",
    title: "Training & Placement Officer, SRM Institute",
  },
  {
    quote:
      "We evaluated 5 different platforms before choosing Skillbot. The combination of coding, LMS, and placement automation in one tool — at this price — was unbeatable.",
    name: "Sunita Patel",
    title: "Registrar, LPU Punjab",
  },
  {
    quote:
      "The proctoring system gave us the confidence to run fully remote exams without any integrity concerns. Zero incidents in 3 semesters.",
    name: "Dr. Vikram Reddy",
    title: "VP Academics, Amity University",
  },
];

export function PricingTestimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              What Institutions Say
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              Proven <span className="gradient-text">Placement Success</span>
            </h2>
          </div>
        </FadeInWhenVisible>
      </div>

      <FadeInWhenVisible delay={0.2}>
        <InfiniteMovingCards items={testimonials} speed="normal" />
      </FadeInWhenVisible>
    </section>
  );
}
