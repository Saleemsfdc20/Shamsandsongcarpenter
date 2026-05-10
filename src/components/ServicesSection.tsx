'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutGrid,
  Armchair,
  Pencil,
  Lamp,
  DoorOpen,
  Hammer,
  Bed,
  Sofa,
  Building2,
  Home,
  Tv,
  TreePine,
  ArrowRight,
} from 'lucide-react';
import serviceImages from '@/lib/images';

const services = [
  {
    icon: LayoutGrid,
    title: 'Modular Kitchen',
    description: 'Modern, functional kitchen designs with premium finishes and smart storage solutions.',
    image: serviceImages[0],
  },
  {
    icon: Armchair,
    title: 'Custom Furniture',
    description: 'Bespoke furniture crafted to perfection, tailored to your unique style and requirements.',
    image: serviceImages[1],
  },
  {
    icon: Pencil,
    title: 'Interior Designing',
    description: 'Complete interior design solutions that transform your space into a masterpiece.',
    image: serviceImages[2],
  },
  {
    icon: Lamp,
    title: 'False Ceiling',
    description: 'Elegant false ceiling designs with modern lighting to enhance your interiors.',
    image: serviceImages[3],
  },
  {
    icon: DoorOpen,
    title: 'Wardrobe Design',
    description: 'Stylish wardrobes with intelligent organization systems for your bedroom.',
    image: serviceImages[4],
  },
  {
    icon: Hammer,
    title: 'Carpenter Services',
    description: 'Expert carpentry work with precision craftsmanship for all your woodwork needs.',
    image: serviceImages[5],
  },
  {
    icon: Bed,
    title: 'Bedroom Interior',
    description: 'Transform your bedroom into a luxurious retreat with our premium interior designs.',
    image: serviceImages[6],
  },
  {
    icon: Sofa,
    title: 'Living Room Design',
    description: 'Create stunning living spaces that reflect your personality and lifestyle.',
    image: serviceImages[7],
  },
  {
    icon: Building2,
    title: 'Office Interior',
    description: 'Professional office interiors that boost productivity and create lasting impressions.',
    image: serviceImages[8],
  },
  {
    icon: Home,
    title: 'Home Renovation',
    description: 'Complete home renovation services to give your space a fresh, new look.',
    image: serviceImages[9],
  },
  {
    icon: Tv,
    title: 'TV Unit Design',
    description: 'Elegant TV units that become the focal point of your living room.',
    image: serviceImages[10],
  },
  {
    icon: TreePine,
    title: 'Wooden Work',
    description: 'Premium wooden installations and finishes for doors, panels, and decorative elements.',
    image: serviceImages[11],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-premium-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="gold-line-center mb-6" />
          <span className="inline-block px-4 py-2 bg-luxury-gold/10 text-luxury-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="section-heading">
            Comprehensive <span className="text-gradient-luxury">Interior Solutions</span>
          </h2>
          <p className="section-subheading mx-auto mt-6">
            From concept to completion, we offer end-to-end interior design and carpentry services tailored to your vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {services.map((service) => (
            <div key={service.title}>
              <Link href="/services">
                <div className="group premium-card p-6 h-full">
                  {/* Image */}
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-luxury-dark/20 group-hover:bg-luxury-dark/0 transition-colors" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-luxury-dark flex items-center justify-center mb-4 group-hover:bg-luxury-gold transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-outfit font-semibold text-lg text-luxury-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center text-luxury-gold font-medium text-sm group-hover:gap-2 gap-0 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-luxury-dark text-white px-10 py-5 font-semibold tracking-wide hover:bg-luxury-gold transition-all hover:shadow-2xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}