"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface ServiceCardProps {
  title: string;
  description: string;
  placeholder: string;
  imageSrc?: string;
  href?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  placeholder,
  imageSrc,
  href = "/contact",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
      className="group royal-surface overflow-hidden rounded-[1.75rem]"
    >
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={placeholder}
          src={imageSrc}
          aspect="landscape"
          className="rounded-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-7 md:p-8">
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Curated Service</p>
        <h3 className="mt-4 font-heading text-3xl leading-tight text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>

        <Link
          href={href}
          className="mt-6 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.28em] text-primary transition-colors duration-300 hover:text-gold dark:text-gold"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
