'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Heart, Award, Users } from 'lucide-react';
import aboutImages from '@/lib/images';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To transform ordinary spaces into extraordinary living environments through innovative design and impeccable craftsmanship.',
  },
  {
    icon: Heart,
    title: 'Our Passion',
    description: 'Every project is an opportunity to create something beautiful. We pour our heart into every detail of your space.',
  },
  {
    icon: Award,
    title: 'Our Promise',
    description: 'Premium quality materials, expert craftsmanship, and complete satisfaction. We leave no stone unturned.',
  },
  {
    icon: Users,
    title: 'Our People',
    description: 'Our team of master craftsmen brings decades of combined experience and unwavering dedication to each project.',
  },
];

export default function AboutStory() {
  const aboutImage = aboutImages[5];

  return (
    <section className="py-20 lg:py-32 bg-premium-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] rounded-none overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt="Shams & Sons Co. workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-luxury-gold text-white p-8 shadow-2xl"
            >
              <p className="font-outfit text-4xl font-bold">10+</p>
              <p className="text-sm tracking-wide uppercase">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="gold-line mb-6" />
            <span className="inline-block text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Our Story
            </span>
            <h2 className="section-heading mb-6">
              The Art of <span className="text-gradient-luxury">Fine Living</span>
            </h2>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              Shams & Sons Co. began in 2014 with a simple vision: to bring world-class interior design to Mumbai at accessible prices. What started as a small carpentry workshop has grown into one of the city&apos;s most trusted interior design firms.
            </p>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Today, we take pride in having transformed over 500 homes, offices, and commercial spaces. Our commitment to quality, transparency, and customer satisfaction remains unwavering.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream p-5"
                >
                  <value.icon className="w-8 h-8 text-luxury-gold mb-3" />
                  <h3 className="font-outfit font-semibold text-luxury-dark mb-2">{value.title}</h3>
                  <p className="text-text-muted text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}