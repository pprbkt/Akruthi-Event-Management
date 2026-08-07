"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Menu, Sun, Moon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { navLinks, businessInfo } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Akruthi Event Solution - Home">
          <BrandLogo className="h-11 w-11 transition-all duration-500 group-hover:-translate-y-0.5" />
          <div className="hidden sm:block">
            <span className="font-heading text-xl text-foreground leading-none block">
              Akruthi
            </span>
            <span className="text-[10px] text-gold font-sans tracking-[0.35em] uppercase leading-none">
              Curated Celebrations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-[11px] font-semibold font-sans rounded-full tracking-[0.24em] uppercase transition-all duration-300 hover:bg-[rgba(185,146,67,0.08)]",
                pathname === link.href
                  ? "text-primary dark:text-gold"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full hover:bg-gold/10"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gold" />
              ) : (
                <Moon className="w-5 h-5 text-crimson" />
              )}
            </Button>
          )}

          {/* CTA Button */}
          <Button
            asChild
            className="px-7"
          >
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Plan My Event
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gold" />
              ) : (
                <Moon className="w-5 h-5 text-crimson" />
              )}
            </Button>
          )}

          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full">
                <Menu className="w-6 h-6" />
              </Button>
            } />
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-xl border-l border-border p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <BrandLogo className="h-8 w-8" />
                    <span className="font-heading font-bold">Akruthi</span>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                  {navLinks.map((link) => (
                    <SheetClose render={
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-full text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300",
                          pathname === link.href
                            ? "bg-primary/10 dark:bg-gold/10 text-primary dark:text-gold"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    } key={link.href} />
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-border space-y-3">
                  <Button
                    asChild
                    className="w-full"
                  >
                    <Link href="/contact">Plan My Event</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`tel:${businessInfo.phone[0]}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
