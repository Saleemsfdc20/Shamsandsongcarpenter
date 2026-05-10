'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet to understand your vision, requirements, and budget constraints.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed 3D designs and material selections for your approval.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our skilled craftsmen bring the design to life with precision and care.',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'We conduct thorough inspections to ensure everything meets our high standards.',
  },
  {
    number: '05',
    title: 'Handover',
    description: 'Your transformed space is delivered with complete documentation and support.',
  },
];

export default function AboutProcess() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line-center mb-6" />
          <span className="inline-block px-4 py-2 bg-luxury-gold/10 text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="section-heading">
            From Concept to <span className="text-gradient-luxury">Completion</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 h-full">
                <span className="font-outfit text-5xl font-bold text-luxury-gold/20">{step.number}</span>
                <h3 className="font-outfit font-semibold text-lg text-luxury-dark mt-4 mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-luxury-gold" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}