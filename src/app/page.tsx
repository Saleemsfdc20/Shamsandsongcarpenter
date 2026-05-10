import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutPreview from '@/components/AboutPreview';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Shams & Sons Co. | Premium Interior Design & Carpentry in Mumbai',
  description: 'Transform your space with luxury interior design, custom furniture, and expert carpentry services. 500+ projects completed across Mumbai.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <AboutPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}