'use client';

import { motion } from 'framer-motion';

const areas = [
  'Kurla West',
  'Kurla East',
  'Ghatkopar',
  'Andheri East',
  'Andheri West',
  'Vidyavihar',
  'Sakinaka',
  'Vikhroli',
  'Powai',
  'Chembur',
  'Santacruz',
  'Khar',
  'Bandra',
  'Jogeshwari',
  ' Goregaon',
];

export default function AboutAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold font-semibold rounded-full text-sm mb-4">
            Service Areas
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
            Serving All of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-gold">Mumbai</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Based in Kurla, we proudly serve residential and commercial clients across Mumbai. Not sure if we cover your area? Call us to confirm!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-off-white rounded-full text-primary-navy font-medium hover:bg-accent-blue hover:text-white transition-colors cursor-default"
            >
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}