import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { ProductsSection } from '@/components/sections/products';
import { CaseStudiesSection } from '@/components/sections/case-studies';
import { TechStackSection } from '@/components/sections/tech-stack';
import { WhyDinzSection, ContactSection } from '@/components/sections/why-dinz-contact';
import { Footer } from '@/components/sections/footer';
import { ScrollObserver } from '@/components/scroll-observer';

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <CaseStudiesSection />
        <TechStackSection />
        <WhyDinzSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
