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
import { Phone, Mail, MapPin, Clock, MessageSquareCode, CheckCircle, AlertCircle } from "lucide-react";
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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 8000);
    } catch (error: any) {
      setSubmitError(error.message || "Failed to submit. Please try again or call us directly.");
    }
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
                <div className="p-8 rounded-2xl bg-gold/10 border border-gold text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-gold-dark dark:text-gold mx-auto" />
                  <h3 className="font-heading text-xl font-bold text-gold-dark dark:text-gold">Thank You!</h3>
                  <p className="text-sm font-sans text-muted-foreground">
                    Your consultation request has been received successfully. A confirmation has been sent to your email.
                  </p>
                  <p className="text-sm font-sans text-muted-foreground">
                    Our event coordinator will call you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Error State */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive">{submitError}</p>
                    </div>
                  )}

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
                    {isSubmitting ? "Sending Request..." : "Book a Consultation"}
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
                    href={`https://wa.me/91${businessInfo.phone[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareCode className="w-4 h-4 mr-2 text-[#25D366]" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.5!2d74.8476!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzEyLjAiTiA3NMKwNTAnNTEuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akruthi Event Solution Office Location — Falnir / Balmatta, Mangaluru"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
