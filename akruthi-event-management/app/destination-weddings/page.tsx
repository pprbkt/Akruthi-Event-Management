"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/site-data";
import Link from "next/link";
import { Check, MapPin, Building2, CalendarRange, ArrowRight } from "lucide-react";

export default function DestinationWeddingsPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Beach sunset destination wedding"
            src="/Akruthi-events-photos/Beach Wedding(Destination).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Destination Weddings
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Create memories in breathtaking scenery. We design, coordinate, and execute luxury weddings across South India.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold mb-4">Your Wedding, Anywhere</h2>
        <p className="text-muted-foreground font-sans leading-relaxed">
          From the golden coastal beaches of Goa and Mangaluru to the misty green coffee hills of Coorg and backwaters of Kerala. We bring our full-service planning team, custom fabrication setups, and vendor networks directly to your dream venue.
        </p>
      </section>

      {/* Destinations Sections */}
      <section className="pb-24 space-y-24">
        {destinations.map((dest, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={dest.id} className="border-t border-border/60 pt-20 first:border-t-0 first:pt-0">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-6 ${!isEven ? "lg:order-last" : ""}`}
                  >
                    <ImagePlaceholder
                      label={dest.placeholder}
                      src={dest.image}
                      aspect="landscape"
                      className="shadow-2xl"
                    />
                  </motion.div>

                  {/* Text Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span className="text-gold text-sm font-sans font-semibold tracking-wider uppercase">
                        {dest.tagline}
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      Celebrate in {dest.name}
                    </h3>

                    <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                      {dest.overview}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      {/* Why choose */}
                      <div>
                        <h4 className="font-heading text-base font-bold text-foreground mb-3 flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold" /> Why {dest.name}
                        </h4>
                        <ul className="space-y-2">
                          {dest.whyChoose.slice(0, 3).map((item, i) => (
                            <li key={i} className="text-xs md:text-sm font-sans text-muted-foreground leading-relaxed flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Venues */}
                      <div>
                        <h4 className="font-heading text-base font-bold text-foreground mb-3 flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gold" /> Popular Venues
                        </h4>
                        <ul className="space-y-2">
                          {dest.venues.map((venue, i) => (
                            <li key={i} className="text-xs md:text-sm font-sans text-muted-foreground leading-relaxed flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                              {venue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Planning Process */}
                    <div className="mb-8 p-4 rounded-xl bg-cream dark:bg-charcoal/20 border border-border/80">
                      <h4 className="font-heading text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                        <CalendarRange className="w-4 h-4 text-gold" /> Planning Process:
                      </h4>
                      <p className="text-xs md:text-sm font-sans text-muted-foreground leading-relaxed">
                        {dest.planning.join(" ➔ ")}
                      </p>
                    </div>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white rounded-xl px-6 py-5"
                    >
                      <Link href={`/contact?destination=${dest.name}`}>
                        Plan My Wedding in {dest.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
