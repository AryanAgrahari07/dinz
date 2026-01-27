import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { ProductsSection } from '@/components/sections/products';
import { CaseStudiesSection } from '@/components/sections/case-studies';
import { TechStackSection } from '@/components/sections/tech-stack';
import { WhyDinzSection, ContactSection } from '@/components/sections/why-dinz-contact';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <CaseStudiesSection />
      <TechStackSection />
      <WhyDinzSection />
      <ContactSection />
    </main>
  );
}
