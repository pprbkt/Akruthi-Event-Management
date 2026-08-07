"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { businessInfo } from "@/data/site-data";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1b1310]">
          <div className="absolute inset-0 opacity-20">
            <ImagePlaceholder
              label="Elegant event backdrop"
              src="/Akruthi-events-photos/Reception.jpg"
              aspect="hero"
              className="h-full w-full rounded-none object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,11,9,0.92),rgba(17,11,9,0.62),rgba(17,11,9,0.78))]" />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl px-8 py-16 md:px-14 md:py-20"
          >
            <p className="text-[11px] uppercase tracking-[0.36em] text-gold">Begin the conversation</p>
            <h2 className="mt-6 font-heading text-4xl leading-[1.02] text-white md:text-5xl lg:text-6xl">
              Let’s design a celebration that feels opulent, immersive, and entirely your own.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              From weddings and receptions to destination experiences and fabrication-heavy reveals, we create event
              worlds with more texture, depth, and romance than a standard event template ever could.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:${businessInfo.phone[0]}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {businessInfo.phone[0]}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
