'use client';

import { motion } from 'framer-motion';
import {
  LayoutGrid, Armchair, Pencil, Lamp, DoorOpen, Hammer,
  Bed, Sofa, Building2, Home, Tv, TreePine, Clock, CheckCircle, Star
} from 'lucide-react';
import serviceImages from '@/lib/images';

const services = [
  {
    icon: LayoutGrid,
    title: 'Modular Kitchen',
    description: 'Modern, functional kitchen designs with premium finishes and smart storage solutions.',
    benefits: [
      'Premium hardware & soft-close hinges',
      'Custom layouts for your space',
      'Italian marble & quartz countertops',
      '3D visualization before execution',
    ],
    timing: '3-4 weeks for complete installation',
  },
  {
    icon: Armchair,
    title: 'Custom Furniture',
    description: 'Bespoke furniture crafted to perfection, tailored to your unique style and requirements.',
    benefits: [
      'Solid wood & engineered wood options',
      'Premium fabric & leather selection',
      'Custom dimensions & designs',
      '10-year warranty on structure',
    ],
    timing: '2-3 weeks per custom furniture piece',
  },
  {
    icon: Pencil,
    title: 'Interior Designing',
    description: 'Complete interior design solutions that transform your space into a masterpiece.',
    benefits: [
      'Expert design consultation',
      '3D renderings & visualizations',
      'Material selection guidance',
      'Project management included',
    ],
    timing: 'Based on project scope',
  },
  {
    icon: Lamp,
    title: 'False Ceiling',
    description: 'Elegant false ceiling designs with modern lighting to enhance your interiors.',
    benefits: [
      'Gypsum, POP, and wood options',
      'Integrated LED lighting design',
      'Acoustic & thermal solutions',
      'Modern & classic patterns',
    ],
    timing: '1-2 weeks for standard room',
  },
  {
    icon: DoorOpen,
    title: 'Wardrobe Design',
    description: 'Stylish wardrobes with intelligent organization systems for your bedroom.',
    benefits: [
      'Modular & walk-in options',
      'Premium hardware & lighting',
      'Custom internal layouts',
      'Mirror & mirror doors available',
    ],
    timing: '2-3 weeks for installation',
  },
  {
    icon: Hammer,
    title: 'Carpenter Services',
    description: 'Expert carpentry work with precision craftsmanship for all your woodwork needs.',
    benefits: [
      'Skilled master carpenters',
      'Modern & traditional designs',
      'Premium wood selection',
      'Finishing: polish, paint, laminate',
    ],
    timing: 'Based on project complexity',
  },
  {
    icon: Bed,
    title: 'Bedroom Interior',
    description: 'Transform your bedroom into a luxurious retreat with premium interior designs.',
    benefits: [
      'Complete bedroom makeovers',
      'Bed, wardrobe & decor design',
      'Ambient lighting solutions',
      'Color psychology consultation',
    ],
    timing: '2-4 weeks for complete bedroom',
  },
  {
    icon: Sofa,
    title: 'Living Room Design',
    description: 'Create stunning living spaces that reflect your personality and lifestyle.',
    benefits: [
      'TV unit & entertainment design',
      'Sofa & seating arrangements',
      'Feature wall & decor design',
      'Complete living room makeover',
    ],
    timing: '2-3 weeks for complete living room',
  },
  {
    icon: Building2,
    title: 'Office Interior',
    description: 'Professional office interiors that boost productivity and create lasting impressions.',
    benefits: [
      'Office cabins & workstations',
      'Reception & meeting areas',
      'Ergonomic furniture solutions',
      'Branding & signage integration',
    ],
    timing: 'Based on office size',
  },
  {
    icon: Home,
    title: 'Home Renovation',
    description: 'Complete home renovation services to give your space a fresh, new look.',
    benefits: [
      'Complete home transformation',
      'Structural modifications',
      'Modernization & upgrades',
      'End-to-end project management',
    ],
    timing: 'Based on renovation scope',
  },
  {
    icon: Tv,
    title: 'TV Unit Design',
    description: 'Elegant TV units that become the focal point of your living room.',
    benefits: [
      'Custom designs & sizes',
      'Storage & display solutions',
      'Integrated lighting options',
      'Wall-mounted & floor units',
    ],
    timing: '1-2 weeks for installation',
  },
  {
    icon: TreePine,
    title: 'Wooden Work',
    description: 'Premium wooden installations and finishes for a timeless appeal.',
    benefits: [
      'Doors & door frames',
      'Wall paneling & cladding',
      'Decorative elements',
      'Flooring & skirting',
    ],
    timing: 'Based on project scope',
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-premium-white">
      <div className="container-custom">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-cream p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left - Icon & Info */}
                <div>
                  <div className="w-20 h-20 bg-luxury-dark flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-luxury-gold" />
                  </div>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-luxury-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-luxury-gold font-medium">
                    <Clock className="w-5 h-5" />
                    <span>Est. Time: {service.timing}</span>
                  </div>
                </div>

                {/* Right - Benefits */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-outfit font-semibold text-lg text-luxury-dark mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-luxury-gold" />
                      Why Choose Us
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                          <span className="text-text-muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}