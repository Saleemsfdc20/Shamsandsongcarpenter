'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-luxury-gold relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-bold text-white mb-6">
            Need Help Choosing a Service?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Our team is here to help you find the perfect interior solution for your space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9819151908"
              className="inline-flex items-center gap-3 bg-luxury-dark text-white px-10 py-5 font-semibold tracking-wide hover:bg-white hover:text-luxury-dark transition-all"
            >
              <Phone className="w-5 h-5" />
              Get Expert Advice
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 font-semibold tracking-wide hover:bg-white hover:text-luxury-gold transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}