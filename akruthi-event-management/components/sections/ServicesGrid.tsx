"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredServices } from "@/data/site-data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Services with presence</p>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[1.02] text-foreground md:text-5xl lg:text-6xl">
              From intimate rituals to large-format productions, every event is composed with a luxury eye.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <p className="text-base leading-8 text-muted-foreground">
              Each service is designed with premium materials, creative vision, and meticulous attention —
              ensuring your celebration reflects your personality and exceeds every expectation.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8 px-8">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              placeholder={service.placeholder}
              imageSrc={service.image}
              href={`/services#${service.id}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
