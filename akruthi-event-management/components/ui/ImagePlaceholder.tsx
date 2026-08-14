"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "landscape" | "hero";
  objectPosition?: string;
  priority?: boolean;
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  hero: "aspect-[16/9]",
};

export function ImagePlaceholder({
  label,
  src,
  className,
  aspect = "landscape",
  objectPosition = "center",
  priority = false,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (src && !failed) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl w-full bg-muted",
          aspectMap[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-cover transition-all duration-700",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          )}
          style={{ objectPosition }}
        />
        {/* Subtle shimmer while loading */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none animate-shimmer" />
        )}
      </div>
    );
  }

  // Fallback placeholder (same as before)
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl w-full flex items-center justify-center",
        aspectMap[aspect],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/80 via-crimson-dark/60 to-gold/50 dark:from-crimson/60 dark:via-charcoal/80 dark:to-gold-dark/40" />

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diag"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#D4AF37"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="mb-4 w-8 h-8 rotate-45 border-2 border-gold/60 flex items-center justify-center">
          <div className="w-3 h-3 bg-gold/80 rotate-0" />
        </div>

        <p className="font-heading text-sm md:text-base lg:text-lg text-white/90 tracking-wider uppercase">
          {label}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <div className="w-8 h-px bg-gold/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/80" />
          <div className="w-8 h-px bg-gold/60" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none animate-shimmer" />
    </div>
  );
}

