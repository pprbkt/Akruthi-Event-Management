"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  alt?: string;
}

export function BrandLogo({
  className,
  imageClassName,
  alt = "Akruthi Event Solution logo",
}: BrandLogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!imageFailed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-full bg-white/95 shadow-[0_14px_30px_rgba(185,146,67,0.18)]",
          className
        )}
      >
        <img
          src="/images/logo/akruthi-logo.png"
          alt={alt}
          className={cn("h-full w-full object-contain", imageClassName)}
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-gold/35 bg-gradient-to-br from-primary via-[#8a2d27] to-[#4f1411] text-white shadow-[0_12px_30px_rgba(110,31,28,0.22)]",
        className
      )}
      aria-label={alt}
    >
      <span className="font-heading text-sm tracking-[0.2em] uppercase">AES</span>
    </div>
  );
}
