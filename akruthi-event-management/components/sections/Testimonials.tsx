"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/site-data";

export function Testimonials() {
  // Show first 3 on home page preview
  const homeTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-cream dark:bg-charcoal/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-crimson/5 rounded-full filter blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Words of Appreciation"
          subtitle="Read the heartwarming feedback from our couples, families, and corporate partners who trusted us to celebrate their pride."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeTestimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              event={item.event}
              quote={item.quote}
              rating={item.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
