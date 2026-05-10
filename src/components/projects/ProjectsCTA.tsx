'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
  return (
    <section className="py-20 bg-luxury-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your interior design requirements and create something beautiful together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9819151908"
              className="inline-flex items-center gap-3 bg-luxury-gold text-white px-10 py-5 font-semibold tracking-wide hover:bg-luxury-gold-dark transition-all hover:shadow-2xl hover:shadow-luxury-gold/20"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-10 py-5 font-semibold tracking-wide hover:bg-white hover:text-luxury-dark transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}