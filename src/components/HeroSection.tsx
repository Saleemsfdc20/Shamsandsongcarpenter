'use client';

import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import heroImages from '@/lib/images';

const trustItems = [
  'Premium Finish',
  'Custom Design',
  'Quality Materials',
  'On-Time Delivery',
];

export default function HeroSection() {
  const heroImage = heroImages[0];

  return (
    <section className="relative min-h-screen luxury-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-luxury-gold/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom pt-28 pb-16 lg:pt-36 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slideUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 mb-6 animate-fadeIn">
              <span className="w-2 h-2 bg-[#C8A97E] rounded-full" />
              <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Premium Interior Experts</span>
            </div>

            {/* Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6">
              Transforming Spaces
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] to-[#E5D4B8]">
                Into Luxury Living
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              We create elegant interiors, custom furniture, and timeless spaces tailored to your vision. Experience the art of fine living.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <a
                href="tel:9819151908"
                className="inline-flex items-center justify-center gap-3 bg-[#C8A97E] text-white px-8 py-4 font-semibold tracking-wide hover:bg-[#B8956A] transition-all hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-semibold tracking-wide hover:bg-white hover:text-luxury-dark transition-all"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C8A97E]" />
                  <span className="text-white/70 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt="Luxury interior design by Shams & Sons Co."
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 bg-white p-5 shadow-2xl animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#C8A97E]/10 flex items-center justify-center">
                  <span className="font-outfit text-2xl font-bold text-[#C8A97E]">500</span>
                </div>
                <div>
                  <p className="font-outfit font-semibold text-luxury-dark text-base">Projects</p>
                  <p className="text-text-muted text-sm">Completed</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#C8A97E] text-white px-5 py-2.5 animate-scaleIn" style={{ animationDelay: '0.5s' }}>
              <p className="font-outfit font-semibold text-sm">Since 2014</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 lg:h-20">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8F6F2" />
        </svg>
      </div>
    </section>
  );
}