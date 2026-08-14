import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { JsonLd } from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-agatho",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akruthi Event Solution | Wedding & Event Planner Mangalore",
    template: "%s | Akruthi Event Solution",
  },
  description:
    "Akruthi Event Solution is Mangaluru's premier luxury wedding planner, event management coordinator, and theme decorator since 2009. We specialize in custom fabrication, stage décor, and destination weddings across Karnataka.",
  keywords: [
    "Wedding Planner Mangalore",
    "Event Planner Mangalore",
    "Wedding Decor Mangalore",
    "Corporate Event Management Mangalore",
    "Destination Wedding Goa",
    "Destination Wedding Kerala",
    "Destination Wedding Coorg",
    "Wedding Planner Karnataka",
    "Akruthi Event Solution",
    "Event Decor Mangalore",
    "Stage Decoration Mangaluru",
    "Custom Fabrication Karnataka",
  ],
  authors: [{ name: "Akruthi Event Solution" }],
  creator: "Akruthi Event Solution",
  publisher: "Akruthi Event Solution",
  metadataBase: new URL("https://akruthievents.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akruthievents.com",
    title: "Akruthi Event Solution | Premium Wedding & Event Planner in Mangalore",
    description:
      "Mangaluru's luxury event planners and custom decorators since 2009. Crafting unforgettable celebrations across Karnataka, Goa, Coorg, and Kerala.",
    siteName: "Akruthi Event Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akruthi Event Solution | Wedding & Event Planner",
    description:
      "Mangaluru's luxury event planners and custom decorators since 2009. Crafting custom decoration setups across South India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full scroll-smooth ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground transition-colors duration-500">
        <ThemeProvider>
          {/* JSON-LD Schemas for SEO */}
          <JsonLd />
          
          <Navbar />
          <main className="flex-grow flex flex-col" id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
