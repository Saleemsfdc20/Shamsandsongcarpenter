import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ScrollProgress from '@/components/ScrollProgress';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shams & Sons Co. | Premium Interior Design & Carpentry in Mumbai',
  description: 'Transform your space with luxury interior design, custom furniture, and expert carpentry services in Mumbai. 500+ projects completed. Book your free consultation.',
  keywords: 'interior designer Kurla West, best carpenter Mumbai, custom furniture Mumbai, luxury interior design, home renovation, modular kitchen, wardrobe design, false ceiling, office interior, living room design, bedroom interior, TV unit, wooden work',
  authors: [{ name: 'Shams & Sons Co.' }],
  openGraph: {
    title: 'Shams & Sons Co. | Premium Interior Design & Carpentry in Mumbai',
    description: 'Transform your space with luxury interior design, custom furniture, and expert carpentry services.',
    url: 'https://shamsandsons.co',
    siteName: 'Shams & Sons Co.',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shamsandsons.co',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans text-text-dark bg-premium-white">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}