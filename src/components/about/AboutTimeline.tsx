'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    description: 'Started with a small team and a big vision to transform plumbing services in Mumbai.',
  },
  {
    year: '2016',
    title: 'First 100 Customers',
    description: 'Reached our first milestone of serving 100 satisfied customers in Kurla and nearby areas.',
  },
  {
    year: '2018',
    title: 'Expanded Services',
    description: 'Added emergency plumbing services and expanded our team to handle commercial projects.',
  },
  {
    year: '2020',
    title: 'Digital Presence',
    description: 'Launched online booking and WhatsApp support for convenient customer access.',
  },
  {
    year: '2022',
    title: '500+ Happy Customers',
    description: 'Celebrated serving over 500 residential and commercial customers across Mumbai.',
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Recognized as one of Mumbai\'s most trusted plumbing service providers.',
  },
];

export default function AboutTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-off-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-blue/10 text-accent-blue font-semibold rounded-full text-sm mb-4">
            Our Journey
          </span>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy">
            A Decade of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-gold">Excellence</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-gold to-primary-navy" />

          <div className="space-y-8 lg:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 bg-accent-blue/10 text-accent-blue font-bold rounded-full text-sm mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-outfit font-semibold text-xl text-primary-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-light">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:w-0 lg:justify-center">
                  <div className="w-4 h-4 bg-accent-blue rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Empty space for alignment */}
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}