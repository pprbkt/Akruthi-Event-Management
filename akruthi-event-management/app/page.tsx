import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedGallery />
      <WhyChooseUs />
      <PackagesPreview />
      <Testimonials />
      <FaqPreview />
      <ContactCta />
    </div>
  );
}
