"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/site-data";

export function StatsBar() {
  return (
    <section className="px-4 py-6 md:px-6 md:py-10">
      <div className="container mx-auto">
        <div className="royal-surface rounded-[2rem] px-6 py-8 md:px-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
