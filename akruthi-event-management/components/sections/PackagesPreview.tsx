"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packages } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function PackagesPreview() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Exclusive Packages"
          subtitle="Carefully curated event packages designed to suit different scales of celebration, featuring upfront pricing and luxury touches."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
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
                {pkg.features.slice(0, 7).map((feat, i) => (
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
                <Link href="/contact">
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="border-gold hover:bg-gold/10 text-foreground rounded-xl px-8 py-6 font-semibold"
          >
            <Link href="/packages">
              Compare Full Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
