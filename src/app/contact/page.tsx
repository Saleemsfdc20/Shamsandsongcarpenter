import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Shams & Sons Co. - Interior Design in Mumbai',
  description: 'Contact Shams & Sons Co. for premium interior design services in Mumbai. Call 9819151908 or visit us at Shop No. 3, Imraan Apartment, Kurla West.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}