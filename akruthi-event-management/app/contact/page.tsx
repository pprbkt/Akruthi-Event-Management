"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { businessInfo, eventTypes } from "@/data/site-data";
import { Phone, Mail, MapPin, Clock, MessageSquareCode } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  eventDate: z.string().min(1, { message: "Please select an event date." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal dark:bg-[#0A0A0A] overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 z-0">
          <ImagePlaceholder
            label="Elegant event reception setup"
            src="/Akruthi-events-photos/Reception(1).jpg"
            aspect="hero"
            className="w-full h-full object-cover rounded-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-charcoal/80 to-charcoal/40 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient">
            Connect With Us
          </h1>
          <p className="mt-4 font-sans text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Let us build an extraordinary celebration together. Get in touch for bookings, quotes, and consultations.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-card border border-border p-6 md:p-10 rounded-3xl shadow-xl"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Plan Your Event</h2>
              <p className="text-muted-foreground text-sm font-sans mb-8">
                Fill out the details below, and our planning coordinator will reach out to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-gold/10 border border-gold text-center">
                  <h3 className="font-heading text-xl font-bold text-gold-dark dark:text-gold mb-2">Thank You!</h3>
                  <p className="text-sm font-sans text-muted-foreground">
                    Your request has been received. Our event coordinator will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="rounded-xl"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="9964143968"
                        className="rounded-xl"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="rounded-xl"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="eventType" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                        Event Type
                      </label>
                      <Select onValueChange={(val: any) => setValue("eventType", (val ?? "") as string)}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select Event Type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl bg-card border-border">
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.eventType && (
                        <p className="text-xs text-destructive">{errors.eventType.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                      Event Date
                    </label>
                    <div className="relative">
                      <Input
                        id="eventDate"
                        type="date"
                        className="rounded-xl"
                        {...register("eventDate")}
                      />
                    </div>
                    {errors.eventDate && (
                      <p className="text-xs text-destructive">{errors.eventDate.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-sans font-semibold tracking-wider text-muted-foreground uppercase">
                      Your Requirements
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your venue, estimated guests, and decorative preferences..."
                      className="rounded-xl resize-none"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-xl font-semibold bg-gradient-to-r from-crimson to-crimson-dark hover:from-crimson-dark hover:to-crimson text-white shadow-lg"
                  >
                    {isSubmitting ? "Sending Request..." : "Request Free Consultation"}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Business Details Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Contact Cards */}
              <div className="bg-card border border-border p-8 rounded-3xl shadow-xl space-y-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">Contact Details</h3>

                <ul className="space-y-6">
                  {/* Address */}
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                      <MapPin className="w-5 h-5 text-gold-dark dark:text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase text-muted-foreground tracking-wider">Office Address</p>
                      <p className="text-sm font-sans text-foreground leading-relaxed mt-1">
                        {businessInfo.address.line1}, {businessInfo.address.line2}, <br />
                        {businessInfo.address.line3}, {businessInfo.address.area}, <br />
                        {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pin}
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                      <Phone className="w-5 h-5 text-gold-dark dark:text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase text-muted-foreground tracking-wider">Call Now</p>
                      <div className="mt-1">
                        <a href={`tel:${businessInfo.phone[0]}`} className="text-sm font-sans font-bold hover:text-crimson dark:hover:text-gold transition-colors block">
                          +91 {businessInfo.phone[0]}
                        </a>
                        <a href={`tel:${businessInfo.phone[1]}`} className="text-sm font-sans font-bold hover:text-crimson dark:hover:text-gold transition-colors block">
                          +91 {businessInfo.phone[1]}
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                      <Mail className="w-5 h-5 text-gold-dark dark:text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase text-muted-foreground tracking-wider">Email Us</p>
                      <a href={`mailto:${businessInfo.email}`} className="text-sm font-sans font-bold hover:text-crimson dark:hover:text-gold transition-colors mt-1 block">
                        {businessInfo.email}
                      </a>
                    </div>
                  </li>

                  {/* Business Hours */}
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                      <Clock className="w-5 h-5 text-gold-dark dark:text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase text-muted-foreground tracking-wider">Business Hours</p>
                      <p className="text-sm font-sans text-foreground/80 mt-1">
                        {businessInfo.hours.weekdays} <br />
                        {businessInfo.hours.weekend}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Instant Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl py-6 border-gold hover:bg-gold/10 font-semibold"
                >
                  <a href={`tel:${businessInfo.phone[0]}`}>
                    <Phone className="w-4 h-4 mr-2 text-gold-dark" />
                    Call Us
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl py-6 border-[#25D366] hover:bg-[#25D366]/10 font-semibold"
                >
                  <a
                    href={`https://wa.me/91${businessInfo.phone[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareCode className="w-4 h-4 mr-2 text-[#25D366]" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Google Map Placeholder */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
                <ImagePlaceholder label="Office Location Map Placeholder — Falnir / Balmatta, Mangaluru" aspect="landscape" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
