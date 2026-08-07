"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site-data";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="White arched floral reception stage"
            src="/Akruthi-events-photos/Floral (Reception).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Our Custom Services
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            From luxury wedding decorations to complete custom workshop fabrication and corporate events.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Complete Event Solutions"
            subtitle="We offer high-end decoration, staging, sounds, lights, entertainment, and custom setup designs customized to your events."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] ?? Icons.Sparkles;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="flex flex-col group bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden shrink-0">
                    <div className="group-hover:scale-105 transition-transform duration-700">
                      <ImagePlaceholder
                        label={service.placeholder}
                        src={service.image}
                        aspect="landscape"
                        className="rounded-none"
                      />
                    </div>
                    {/* Floating Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-card/90 dark:bg-charcoal/90 flex items-center justify-center border border-gold/30 shadow-md">
                      <IconComponent className="w-6 h-6 text-crimson dark:text-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-crimson dark:group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    <div className="w-full h-px bg-border/80 mb-6" />

                    {/* Benefits/Features */}
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Book / Request CTA */}
                    <Button
                      asChild
                      className="w-full py-5 rounded-xl font-semibold bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white shadow-md hover:shadow-crimson/20 transition-all duration-300"
                    >
                      <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                        Plan this Event
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
