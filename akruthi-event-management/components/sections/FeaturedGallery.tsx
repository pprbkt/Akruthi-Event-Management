"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const featuredImages = [
  {
    label: "White arched floral reception stage with pastel roses",
    src: "/Akruthi-events-photos/Floral (Reception).jpg",
    aspect: "portrait" as const,
    className: "lg:col-span-5",
  },
  {
    label: "Beach sunset destination wedding stage with floral arch",
    src: "/Akruthi-events-photos/Beach Wedding(Destination).jpg",
    aspect: "landscape" as const,
    className: "lg:col-span-7",
  },
  {
    label: "Modern geometric black and white reception stage",
    src: "/Akruthi-events-photos/Grand (Reception).jpg",
    aspect: "landscape" as const,
    className: "lg:col-span-7",
  },
  {
    label: "Intimate white and gold engagement stage setup",
    src: "/Akruthi-events-photos/Small event (Engagement).jpg",
    aspect: "portrait" as const,
    className: "lg:col-span-5",
    objectPosition: "center center",
  },
];

export function FeaturedGallery() {
  return (
    <section className="bg-[#1a120f] px-4 py-20 text-white md:px-6 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Visual storytelling</p>
            <h2 className="mt-5 max-w-3xl font-heading text-4xl leading-[1.02] text-white md:text-5xl lg:text-6xl">
              Atmosphere first. Details second. A final reveal that feels unforgettable.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-base leading-8 text-white/70">
              Every stage, every floral arrangement, every lighting design is composed to create an atmosphere that
              your guests will remember for years. These are moments from our recent celebrations.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
              className={image.className}
            >
              <div className="group relative overflow-hidden rounded-[2rem]">
                <ImagePlaceholder
                  label={image.label}
                  src={image.src}
                  aspect={image.aspect}
                  objectPosition={image.objectPosition}
                  className="w-full rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Akruthi Atelier</p>
                  <h3 className="mt-3 max-w-sm font-heading text-3xl leading-tight text-white">{image.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
            <Link href="/gallery">
              Enter the Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
