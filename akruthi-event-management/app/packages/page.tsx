"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/site-data";
import Link from "next/link";
import { Check, CheckCircle2, ArrowRight } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Modern floral reception stage"
            src="/Akruthi-events-photos/Floral Decor(Reception).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Event Packages
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Transparent pricing, robust inclusions, and premium decoration features tailored to your budget.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold mb-4">Choose Your Level of Luxury</h2>
        <p className="text-muted-foreground font-sans leading-relaxed">
          We believe high-end decoration and flawless planning should be accessible. Explore our Silver, Gold, and Platinum pricing tiers, or request a fully customized event package built from scratch.
        </p>
      </section>

      {/* Packages Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col p-8 rounded-3xl bg-card border shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  pkg.highlighted
                    ? "border-gold ring-2 ring-gold/20 scale-100 md:scale-105 z-10 animate-gold-glow"
                    : "border-border"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold to-gold-dark text-black font-sans text-xs font-bold tracking-widest uppercase shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-muted-foreground text-xs font-sans mt-2">{pkg.description}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-heading text-3xl md:text-4xl font-extrabold text-crimson dark:text-gold">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-border my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5 border border-gold/30">
                        <Check className="w-3.5 h-3.5 text-gold-dark dark:text-gold" />
                      </div>
                      <span className="text-sm text-foreground/80 font-sans leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full py-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-black hover:shadow-gold/20"
                      : "bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white hover:shadow-crimson/20"
                  }`}
                >
                  <Link href={`/contact?package=${pkg.name}`}>
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Custom Quote Section */}
          <div className="mt-20 max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-cream dark:bg-charcoal/20 border border-border flex flex-col md:flex-row items-center gap-8 shadow-md">
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-2">Need a Custom Package?</h3>
              <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                Every event is unique. If our standard packages do not match your vision or scale, our designers will collaborate with you to create a completely custom setup and fabrication proposal.
              </p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white rounded-xl px-8 py-6 font-semibold"
            >
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
