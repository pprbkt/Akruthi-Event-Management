"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, HelpCircle, PhoneCall } from "lucide-react";

export default function FaqPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Traditional reception stage"
            src="/Akruthi-events-photos/Traditional (Reception).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know about our event solutions, booking processes, safety measures, and customization.
          </p>
        </div>
      </section>

      {/* Accordion list */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border rounded-3xl bg-card p-6 md:p-10 shadow-xl"
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/80 last:border-b-0 py-1"
                >
                  <AccordionTrigger className="font-heading text-base md:text-lg font-semibold hover:text-crimson dark:hover:text-gold hover:no-underline text-left py-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed pl-8 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Call CTA block */}
          <div className="mt-16 text-center p-8 md:p-12 rounded-3xl border border-border bg-cream dark:bg-charcoal/20 max-w-2xl mx-auto">
            <PhoneCall className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground font-sans text-sm md:text-base mb-6">
              Our specialists are always ready to address any queries regarding custom structures, decoration packages, and destination planning.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white rounded-xl px-6 py-5 font-semibold"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
