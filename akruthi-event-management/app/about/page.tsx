"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { timeline, teamMembers } from "@/data/site-data";
import { Sparkles, Target, Compass, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Grand traditional wedding stage"
            src="/Akruthi-events-photos/Grand Decor.jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Our Journey & Passion
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Crafting elegant moments, custom decorations, and memorable stories across Karnataka since 2009.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Established in 2009 with a Single Vision
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Akruthi Event Solution was born out of a desire to redefine how celebrations are planned and executed in Mangaluru. From humble beginnings managing small family gatherings, we have grown into a full-scale event management company trusted by thousands of clients.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Today, with our own dedicated fabrication workshop, a creative team of designers, and a robust network of premium vendors, we handle everything from luxury weddings and grand corporate events to high-quality set fabrications. We celebrate your pride with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <ImagePlaceholder
                label="Traditional mantap with ornate golden pillars"
                src="/Akruthi-events-photos/Traditional Mantap(1).jpg"
                aspect="landscape"
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-cream dark:bg-charcoal/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 dark:bg-gold/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-crimson dark:text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    To deliver bespoke, stress-free event management solutions by combining creativity, premium standards, and local heritage to celebrate every milestone with pride.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 dark:bg-gold/10 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-crimson dark:text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    To be the leading name in luxury and destination weddings in South India, continuously setting benchmarks in creative décor, structural fabrication, and flawless hospitality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 dark:bg-gold/10 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-crimson dark:text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">Our Values</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    Uncompromising quality, transparency in planning, respect for traditions, and an unwavering commitment to bringing distinct individuality to every client we serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Why Clients Trust Akruthi" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "100% Custom Designs", desc: "No copy-pasting. Every stage backdrop and theme layout is crafted specifically for you." },
              { icon: Heart, title: "Deep Care", desc: "We focus on emotions. We manage coordination so you can focus on enjoying the precious moment." },
              { icon: Users, title: "Expert Staff", desc: "Our coordinators have managed events of all scales, resolving complications beforehand." },
              { icon: Target, title: "Punctuality", desc: "Stages completed hours in advance. Timelines strictly maintained. Flawless execution guaranteed." },
            ].map((trust, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <trust.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-heading text-lg font-bold mb-2">{trust.title}</h4>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cream dark:bg-charcoal/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Our Timeline" subtitle="The milestones of Akruthi from establishment to present day." />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gold/50 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                    {/* Circle marker on line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10 hidden md:block" />

                    <div className="w-full md:w-[calc(50%-2rem)] flex">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card border border-border p-6 rounded-2xl shadow-md w-full"
                      >
                        <span className="font-heading text-2xl font-bold text-gold">{item.year}</span>
                        <h4 className="font-heading text-lg font-bold text-foreground mt-2">{item.title}</h4>
                        <p className="text-sm font-sans text-muted-foreground mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Meet Our Team" subtitle="The creative minds, meticulous coordinators, and master craftsmen who bring your events to life." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col text-center"
              >
                <div className="overflow-hidden rounded-2xl mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                  <ImagePlaceholder
                    label={member.placeholder}
                    src={member.image}
                    aspect="landscape"
                    objectPosition={member.objectPosition}
                  />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">{member.name}</h4>
                <span className="text-gold text-xs font-sans font-semibold uppercase tracking-wider mt-1">{member.role}</span>
                <p className="text-sm font-sans text-muted-foreground mt-2 leading-relaxed px-4">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
