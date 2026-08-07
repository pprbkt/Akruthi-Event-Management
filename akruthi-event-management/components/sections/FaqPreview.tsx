"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export function FaqPreview() {
  // Show first 5 FAQs in preview
  const previewFaqs = faqs.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Clear, direct answers to help you navigate our services, booking process, and customizations."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="border border-border rounded-2xl bg-card p-6 md:p-8 shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {previewFaqs.map((faq, index) => (
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

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-crimson text-crimson hover:bg-crimson/10 dark:border-gold dark:text-gold dark:hover:bg-gold/10 rounded-xl px-8 py-6 font-semibold"
          >
            <Link href="/faq">
              View All FAQs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
