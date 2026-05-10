import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Services | Shams & Sons Co. - Premium Interior Design in Mumbai',
  description: 'Explore our comprehensive interior design services in Mumbai. Modular kitchen, custom furniture, bedroom interior, living room design, false ceiling, wardrobe, and home renovation.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}