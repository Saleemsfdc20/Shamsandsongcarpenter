'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Award, Clock, Users } from 'lucide-react';
import teamImages from '@/lib/images';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only the finest materials and employ master craftsmen for every project.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timeline and deliver every project within the agreed schedule.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our skilled artisans bring decades of combined experience to every project.',
  },
];

export default function AboutPreview() {
  const aboutImage = teamImages[0];

  return (
    <section className="py-20 lg:py-32 bg-premium-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slideUp">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt="Shams & Sons Co. - Premium Interior Design in Mumbai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/30 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-8 -right-8 bg-luxury-gold text-white p-8 shadow-2xl animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <p className="font-outfit text-4xl font-bold">10+</p>
              <p className="text-sm tracking-wide uppercase">Years of Excellence</p>
            </div>

            <div className="absolute -top-8 -left-8 bg-white p-6 shadow-2xl animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-luxury-gold" />
                <div>
                  <p className="font-outfit font-bold text-luxury-dark">500+</p>
                  <p className="text-text-muted text-sm">Projects Done</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="gold-line mb-6" />
            <span className="inline-block text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-4">
              About Shams & Sons Co.
            </span>
            <h2 className="section-heading mb-6">
              Crafting Luxury Interiors with <span className="text-gradient-luxury">Passion & Precision</span>
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Founded in 2014, Shams & Sons Co. has been transforming ordinary spaces into extraordinary living environments. Our family-owned business combines traditional craftsmanship with modern design sensibilities to create interiors that stand the test of time.
            </p>
            <p className="text-text-muted text-lg mb-10 leading-relaxed">
              We believe that every space tells a story. Our mission is to help you tell yours through thoughtful design, premium materials, and impeccable execution. From conceptualization to completion, we work closely with our clients to bring their vision to life.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 stagger-children">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-4">
                  <div className="w-12 h-12 bg-luxury-dark flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <h3 className="font-outfit font-semibold text-luxury-dark mb-1">{feature.title}</h3>
                  <p className="text-text-muted text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-luxury-dark text-white px-8 py-4 font-semibold tracking-wide hover:bg-luxury-gold transition-all hover:shadow-xl"
            >
              Know More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}