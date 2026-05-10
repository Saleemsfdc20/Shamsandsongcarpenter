'use client';

import { Phone, ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
  return (
    <section className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A97E]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fadeIn">
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your interior design requirements and create something beautiful together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9819151908"
              className="inline-flex items-center gap-3 bg-[#C8A97E] text-white px-10 py-5 font-semibold tracking-wide hover:bg-[#B8956A] transition-all hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-5 font-semibold tracking-wide hover:bg-white hover:text-[#111827] transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}