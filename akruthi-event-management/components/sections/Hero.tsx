"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 md:px-6 md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-[6%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="royal-surface ornate-frame rounded-[2rem] p-8 md:p-10 lg:p-12">
              <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                <span className="h-px w-10 bg-gold/70" />
                Royal Event Atelier
              </span>

              <h1 className="mt-8 max-w-xl font-heading text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
                Weddings and celebrations with old-world grandeur.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
                Inspired by heirloom romance, crafted with South Indian warmth. Akruthi designs destination weddings,
                premium decor, and statement event experiences that feel deeply personal, cinematic, and refined.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="px-8">
                  <Link href="/contact">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Begin Your Story
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/gallery">
                    View Signature Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
                <div>
                  <p className="font-heading text-3xl text-foreground">15+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">Years of Craft</p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-foreground">1000+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">Events Curated</p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-foreground">Made in-house</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">Fabrication Studio</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:col-span-7 lg:grid-cols-12">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="ornate-frame overflow-hidden rounded-[2rem]">
                <ImagePlaceholder
                  label="Grand traditional Indian wedding stage"
                  src="/Akruthi-events-photos/1785672398048.jpg"
                  aspect="portrait"
                  priority
                  className="min-h-[28rem] w-full rounded-[2rem] object-cover md:min-h-[38rem]"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="space-y-6 lg:col-span-4"
            >
              <div className="royal-surface rounded-[1.75rem] p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Inspired by Europe, rooted in Mangaluru</p>
                <p className="mt-5 font-heading text-3xl leading-tight text-foreground">
                  Bespoke floral stages, regal palettes, and immersive guest experiences.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem]">
                <ImagePlaceholder
                  label="Modern floral reception stage with LED-lit petals"
                  src="/Akruthi-events-photos/Floral Decor(Reception).jpg"
                  aspect="square"
                  priority
                  className="w-full rounded-[1.75rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
