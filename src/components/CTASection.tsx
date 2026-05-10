'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-luxury-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fadeIn">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready To Transform Your Space?
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book your free consultation today and let us bring your dream interior to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9819151908"
              className="inline-flex items-center gap-3 bg-luxury-dark text-white px-10 py-5 font-semibold tracking-wide hover:bg-white hover:text-luxury-dark transition-all hover:shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
            <a
              href="https://wa.me/919819151908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-luxury-dark px-10 py-5 font-semibold tracking-wide hover:bg-luxury-dark hover:text-white transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>

          <p className="text-white/60 text-sm mt-8">
            Or fill out our contact form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}