"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  event: string;
  quote: string;
  rating: number;
  index?: number;
}

export function TestimonialCard({
  name,
  event,
  quote,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Gold quote icon */}
      <Quote className="w-10 h-10 text-gold/30 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-gold text-gold"
          />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-gold/40 mb-4" />

      {/* Client info */}
      <div>
        <p className="font-heading font-semibold text-foreground">{name}</p>
        <p className="text-sm text-gold">{event}</p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rotate-0" />
      </div>
    </motion.div>
  );
}
