"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {/* Small label */}
      <div
        className={cn(
          "flex items-center gap-3 mb-5",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
        <span className="text-gold text-[11px] md:text-xs font-sans font-semibold tracking-[0.35em] uppercase">
          Akruthi
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
      </div>

      {/* Title */}
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg max-w-2xl font-sans leading-8",
            align === "center" ? "mx-auto" : "",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Ornamental divider */}
      <div
        className={cn(
          "mt-8 flex items-center gap-3",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
        <div className="w-2 h-2 rotate-45 border border-gold/80 bg-gold/60" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
      </div>
    </div>
  );
}
