'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import portfolioImages from '@/lib/images';

const categories = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Office', 'Furniture', 'Woodwork'];

const projects = [
  {
    id: 1,
    title: 'Luxury Modular Kitchen',
    category: 'Kitchen',
    description: 'Complete modular kitchen with Italian marble countertop and premium cabinetry',
    image: portfolioImages[0],
  },
  {
    id: 2,
    title: 'Master Bedroom Suite',
    category: 'Bedroom',
    description: 'Elegant bedroom with custom wardrobes and ambient lighting design',
    image: portfolioImages[1],
  },
  {
    id: 3,
    title: 'Modern Living Room',
    category: 'Living Room',
    description: 'Sophisticated living space with designer furniture and feature wall',
    image: portfolioImages[2],
  },
  {
    id: 4,
    title: 'Corporate Office Interior',
    category: 'Office',
    description: 'Professional office space with ergonomic furniture and collaborative areas',
    image: portfolioImages[3],
  },
  {
    id: 5,
    title: 'Custom Dining Furniture',
    category: 'Furniture',
    description: 'Bespoke dining table and chairs with premium wood finish',
    image: portfolioImages[4],
  },
  {
    id: 6,
    title: 'Wooden Wall Paneling',
    category: 'Woodwork',
    description: 'Intricate wooden wall paneling with modern design patterns',
    image: portfolioImages[5],
  },
  {
    id: 7,
    title: 'Minimalist Kitchen Design',
    category: 'Kitchen',
    description: 'Sleek kitchen with handle-less cabinets and quartz countertops',
    image: portfolioImages[6],
  },
  {
    id: 8,
    title: 'Kids Bedroom Makeover',
    category: 'Bedroom',
    description: 'Colorful and creative bedroom design for children',
    image: portfolioImages[7],
  },
  {
    id: 9,
    title: 'TV Unit with Storage',
    category: 'Living Room',
    description: 'Designer TV unit with ample storage and ambient lighting',
    image: portfolioImages[8],
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="gold-line-center mb-6" />
          <span className="inline-block px-4 py-2 bg-[#C8A97E]/10 text-[#C8A97E] font-semibold text-sm tracking-wider uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="section-heading">
            Our <span className="text-gradient-luxury">Signature Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-6">
            Explore our curated collection of luxury interior projects that define elegance and craftsmanship.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#111827] text-white'
                  : 'bg-white text-[#111827] hover:bg-[#C8A97E] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-[#111827]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-[#C8A97E] text-sm font-medium tracking-wider uppercase">{project.category}</span>
                  <h3 className="font-outfit text-xl font-semibold mt-2">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#C8A97E] text-white px-10 py-5 font-semibold tracking-wide hover:bg-[#B8956A] transition-all hover:shadow-2xl"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#111827]/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-[#111827]" />
            </button>
            <div className="relative aspect-video">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-[#C8A97E] text-sm font-medium tracking-wider uppercase">{selectedProject.category}</span>
              <h3 className="font-outfit text-3xl font-bold text-[#111827] mt-2">{selectedProject.title}</h3>
              <p className="text-[#6B7280] mt-4">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}