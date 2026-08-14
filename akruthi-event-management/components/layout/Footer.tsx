import Link from "next/link";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";
import { businessInfo, navLinks, services } from "@/data/site-data";
import { BrandLogo } from "@/components/ui/BrandLogo";

const footerServices = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="mt-10 bg-[#140f0d] text-white/75" role="contentinfo">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <BrandLogo className="h-16 w-16 md:h-20 md:w-20 bg-white" />
              <div>
                <span className="block font-heading text-2xl md:text-3xl leading-none text-white">Akruthi</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.34em] text-gold mt-1 block">Curated Celebrations</span>
              </div>
            </div>

            <p className="mt-8 max-w-md font-heading text-3xl leading-tight text-white md:text-4xl">
              Designing regal celebrations across Karnataka and beyond.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              Weddings, receptions, destination events, fabrication, and custom decor brought together with a more
              timeless, image-led, and atmospheric design language.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/62 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Signature Services</p>
            <ul className="mt-6 space-y-3">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="text-sm text-white/62 transition-colors hover:text-gold">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.34em] text-gold">Contact</p>

            <div className="flex items-start gap-3 text-sm text-white/62">
              <MapPin className="mt-1 h-4 w-4 text-gold" />
              <p className="leading-7">
                {businessInfo.address.line1}, {businessInfo.address.line2}, {businessInfo.address.line3},{" "}
                {businessInfo.address.area}, {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pin}
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-white/62">
              <Phone className="mt-1 h-4 w-4 text-gold" />
              <div className="space-y-1">
                <a href={`tel:${businessInfo.phone[0]}`} className="block transition-colors hover:text-gold">
                  {businessInfo.phone[0]}
                </a>
                <a href={`tel:${businessInfo.phone[1]}`} className="block transition-colors hover:text-gold">
                  {businessInfo.phone[1]}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-white/62">
              <Mail className="mt-1 h-4 w-4 text-gold" />
              <a href={`mailto:${businessInfo.email}`} className="transition-colors hover:text-gold">
                {businessInfo.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-white/62">
              <Clock className="mt-1 h-4 w-4 text-gold" />
              <div>
                <p>{businessInfo.hours.weekdays}</p>
                <p>{businessInfo.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="h-3 w-3 fill-crimson text-crimson" /> in Mangaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
