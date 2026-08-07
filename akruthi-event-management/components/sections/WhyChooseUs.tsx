"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/site-data";
import * as Icons from "lucide-react";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-cream dark:bg-charcoal/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crimson/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Choose Akruthi"
          subtitle="Discover what sets us apart and why clients have trusted us with their most precious moments since 2009."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] ?? Icons.Star;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-crimson/10 to-crimson-light/5 dark:from-gold/10 dark:to-gold-dark/5 flex items-center justify-center border border-crimson/20 dark:border-gold/20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7 text-crimson dark:text-gold" />
                </div>

                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
