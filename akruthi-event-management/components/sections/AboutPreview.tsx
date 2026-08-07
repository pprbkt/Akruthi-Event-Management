"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function AboutPreview() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:col-span-5"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-gold">The Akruthi Signature</p>
              <h2 className="mt-5 max-w-xl font-heading text-4xl leading-[1.02] text-foreground md:text-5xl lg:text-6xl">
                A more intimate, more regal way to plan a celebration.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                We do not assemble events from a formula. We shape them with architectural detail, cultural sensitivity,
                and a cinematic sense of atmosphere so each celebration feels unmistakably yours.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="royal-surface rounded-[1.5rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-gold/10 dark:text-gold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground">Heritage-level detail</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      From stage symmetry to guest flow, every layer is designed for elegance rather than excess.
                    </p>
                  </div>
                </div>
              </div>

              <div className="royal-surface rounded-[1.5rem] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-gold/10 dark:text-gold">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-foreground">In-house fabrication</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Our workshop lets us build custom gates, mandaps, stages, and installations that feel one of one.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid gap-6 lg:col-span-7 lg:grid-cols-12"
          >
            <div className="ornate-frame lg:col-span-7">
              <ImagePlaceholder
                label="Elegant white and gold reception with floral draping"
                src="/Akruthi-events-photos/Reception(1).jpg"
                aspect="portrait"
                className="w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="space-y-6 lg:col-span-5 lg:pt-14">
              <div className="royal-surface rounded-[1.75rem] p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Since 2009</p>
                <p className="mt-4 font-heading text-3xl leading-tight text-foreground">
                  Luxury should feel effortless, not loud.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  That philosophy guides our planning, decor language, and guest experience from first concept to final reveal.
                </p>
              </div>

              <ImagePlaceholder
                label="Ornate golden mantap with Ganesha and pink floral canopy"
                src="/Akruthi-events-photos/Traditional Mantap(1).jpg"
                aspect="landscape"
                className="w-full rounded-[1.75rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
