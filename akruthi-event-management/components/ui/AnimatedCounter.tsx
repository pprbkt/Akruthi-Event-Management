"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold-gradient">
        {count}
        {suffix}
      </div>
      <p className="mt-3 text-[11px] md:text-xs text-muted-foreground font-sans tracking-[0.28em] uppercase">
        {label}
      </p>
    </motion.div>
  );
}
