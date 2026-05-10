import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutProcess from '@/components/about/AboutProcess';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Shams & Sons Co. - Premium Interior Design in Mumbai',
  description: 'Learn about Shams & Sons Co., Mumbai\'s premier interior design and carpentry experts with 10+ years experience. Our mission is to create luxury spaces that transform how you live.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutProcess />
      <AboutCTA />
    </>
  );
}