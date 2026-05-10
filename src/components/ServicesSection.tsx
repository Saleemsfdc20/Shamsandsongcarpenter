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
import {
  kitchenImages,
  furnitureImages,
  interiorImages,
  ceilingImages,
  wardrobeImages,
  carpenterImages,
  bedroomImages,
  livingRoomImages,
  officeImages,
  renovationImages,
  tvUnitImages,
  woodenWorkImages
} from '@/lib/images';

// Smart image selection - pick from categorized images
function getServiceImage(category: string): any {
  const categoryMap: Record<string, any[]> = {
    'Modular Kitchen': kitchenImages,
    'Custom Furniture': furnitureImages,
    'Interior Designing': interiorImages,
    'False Ceiling': ceilingImages,
    'Wardrobe Design': wardrobeImages,
    'Carpenter Services': carpenterImages,
    'Bedroom Interior': bedroomImages,
    'Living Room Design': livingRoomImages,
    'Office Interior': officeImages,
    'Home Renovation': renovationImages,
    'TV Unit Design': tvUnitImages,
    'Wooden Work': woodenWorkImages,
  };

  const images = categoryMap[category] || kitchenImages;
  // Rotate based on service index for variety
  return images[category.length % images.length];
}

const services = [
  {
    icon: LayoutGrid,
    title: 'Modular Kitchen',
    description: 'Modern, functional kitchen designs with premium finishes and smart storage solutions.',
  },
  {
    icon: Armchair,
    title: 'Custom Furniture',
    description: 'Bespoke furniture crafted to perfection, tailored to your unique style and requirements.',
  },
  {
    icon: Pencil,
    title: 'Interior Designing',
    description: 'Complete interior design solutions that transform your space into a masterpiece.',
  },
  {
    icon: Lamp,
    title: 'False Ceiling',
    description: 'Elegant false ceiling designs with modern lighting to enhance your interiors.',
  },
  {
    icon: DoorOpen,
    title: 'Wardrobe Design',
    description: 'Stylish wardrobes with intelligent organization systems for your bedroom.',
  },
  {
    icon: Hammer,
    title: 'Carpenter Services',
    description: 'Expert carpentry work with precision craftsmanship for all your woodwork needs.',
  },
  {
    icon: Bed,
    title: 'Bedroom Interior',
    description: 'Transform your bedroom into a luxurious retreat with our premium interior designs.',
  },
  {
    icon: Sofa,
    title: 'Living Room Design',
    description: 'Create stunning living spaces that reflect your personality and lifestyle.',
  },
  {
    icon: Building2,
    title: 'Office Interior',
    description: 'Professional office interiors that boost productivity and create lasting impressions.',
  },
  {
    icon: Home,
    title: 'Home Renovation',
    description: 'Complete home renovation services to give your space a fresh, new look.',
  },
  {
    icon: Tv,
    title: 'TV Unit Design',
    description: 'Elegant TV units that become the focal point of your living room.',
  },
  {
    icon: TreePine,
    title: 'Wooden Work',
    description: 'Premium wooden installations and finishes for doors, panels, and decorative elements.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F6F2]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="w-16 h-0.5 bg-[#C8A97E] mx-auto mb-6" />
          <span className="inline-block px-4 py-2 bg-[#C8A97E]/10 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-outfit text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Comprehensive <span className="text-gradient-luxury">Interior Solutions</span>
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-6">
            From concept to completion, we offer end-to-end interior design and carpentry services tailored to your vision.
          </p>
        </div>

        {/* Services Grid - Improved layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const serviceImage = getServiceImage(service.title);
            return (
              <div
                key={service.title}
                className="animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link href="/services">
                  <div className="group bg-white h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                    {/* Image Container - Consistent sizing with premium hover */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={serviceImage}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-[#111827] flex items-center justify-center mb-4 group-hover:bg-[#C8A97E] transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-outfit font-semibold text-lg text-[#111827] mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Explore Link */}
                      <div className="flex items-center text-[#C8A97E] font-medium text-sm group-hover:gap-2 gap-0 transition-all duration-300">
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#111827] text-white px-10 py-5 font-semibold tracking-wide hover:bg-[#C8A97E] transition-all duration-300 hover:shadow-2xl"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}