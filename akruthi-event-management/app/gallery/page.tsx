"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { galleryCategories, galleryItems } from "@/data/site-data";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Grand floral reception stage"
            src="/Akruthi-events-photos/Grand Floral (Reception).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Creation Gallery
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our curated portfolio of premium events, weddings, structural fabrications, and theme decorations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-4xl mx-auto">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs md:text-sm font-sans font-medium transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-gradient-to-r from-crimson to-crimson-dark text-white border-transparent shadow-lg shadow-crimson/15"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                let aspectVal: "portrait" | "landscape" | "square" = "landscape";
                if (item.aspect === "portrait") aspectVal = "portrait";
                if (item.aspect === "square") aspectVal = "square";

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-border bg-card"
                  >
                    <ImagePlaceholder
                      label={`${item.category} — ${item.placeholder}`}
                      src={item.image}
                      aspect={aspectVal}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Interactive hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="w-full">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 text-[10px] font-sans font-bold uppercase tracking-wider mb-2">
                          {item.category}
                        </span>
                        <h4 className="text-white font-heading text-base md:text-lg font-bold leading-snug">
                          {item.placeholder}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
