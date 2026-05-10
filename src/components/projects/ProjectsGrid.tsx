'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import portfolioImages from '@/lib/images';

const categories = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Office', 'Furniture', 'Woodwork'];

const projects = [
  {
    id: 1,
    title: 'Luxury Modular Kitchen',
    category: 'Kitchen',
    location: 'Kurla West, Mumbai',
    description: 'Complete modular kitchen with Italian marble countertop, premium cabinetry, and integrated appliances.',
    image: portfolioImages[0],
  },
  {
    id: 2,
    title: 'Master Bedroom Suite',
    category: 'Bedroom',
    location: 'Andheri East, Mumbai',
    description: 'Elegant bedroom with custom wardrobes, ambient lighting, and designer furniture.',
    image: portfolioImages[1],
  },
  {
    id: 3,
    title: 'Modern Living Room',
    category: 'Living Room',
    location: 'Powai, Mumbai',
    description: 'Sophisticated living space with designer furniture, feature wall, and smart lighting.',
    image: portfolioImages[2],
  },
  {
    id: 4,
    title: 'Corporate Office Interior',
    category: 'Office',
    location: 'Bandra, Mumbai',
    description: 'Professional office space with ergonomic furniture, collaborative areas, and branding.',
    image: portfolioImages[3],
  },
  {
    id: 5,
    title: 'Custom Dining Furniture',
    category: 'Furniture',
    location: 'Juhu, Mumbai',
    description: 'Bespoke dining table and chairs with premium wood finish and modern design.',
    image: portfolioImages[4],
  },
  {
    id: 6,
    title: 'Wooden Wall Paneling',
    category: 'Woodwork',
    location: 'Ghatkopar, Mumbai',
    description: 'Intricate wooden wall paneling with modern design patterns and premium finish.',
    image: portfolioImages[5],
  },
  {
    id: 7,
    title: 'Minimalist Kitchen',
    category: 'Kitchen',
    location: 'Santacruz, Mumbai',
    description: 'Sleek kitchen with handle-less cabinets, quartz countertops, and pull-out storage.',
    image: portfolioImages[6],
  },
  {
    id: 8,
    title: 'Kids Bedroom',
    category: 'Bedroom',
    location: 'Vidyavihar, Mumbai',
    description: 'Colorful and creative bedroom design with custom beds and storage solutions.',
    image: portfolioImages[7],
  },
  {
    id: 9,
    title: 'Designer TV Unit',
    category: 'Living Room',
    location: 'Khar, Mumbai',
    description: 'Elegant TV unit with ambient lighting, storage, and floating shelf design.',
    image: portfolioImages[8],
  },
  {
    id: 10,
    title: 'Startup Office',
    category: 'Office',
    location: 'Andheri West, Mumbai',
    description: 'Modern startup office with open workstations, meeting pods, and breakout areas.',
    image: portfolioImages[9],
  },
  {
    id: 11,
    title: 'Wardrobe Design',
    category: 'Furniture',
    location: 'Sakinaka, Mumbai',
    description: 'Premium wardrobes with mirror doors, internal lighting, and organizational systems.',
    image: portfolioImages[10],
  },
  {
    id: 12,
    title: 'False Ceiling',
    category: 'Woodwork',
    location: 'Chembur, Mumbai',
    description: 'Designer false ceiling with recessed lighting and geometric patterns.',
    image: portfolioImages[11],
  },
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-32 bg-premium-white">
      <div className="container-custom">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-medium transition-all ${
                activeCategory === category
                  ? 'bg-luxury-dark text-white'
                  : 'bg-cream text-luxury-dark hover:bg-luxury-gold hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-luxury-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ArrowUpRight className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-luxury-gold text-sm font-medium tracking-wider uppercase">{project.category}</span>
                <h3 className="font-outfit font-semibold text-lg text-luxury-dark mt-1">{project.title}</h3>
                <p className="text-text-muted text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-dark/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-luxury-dark" />
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
                <span className="text-luxury-gold text-sm font-medium tracking-wider uppercase">{selectedProject.category}</span>
                <h3 className="font-outfit text-3xl font-bold text-luxury-dark mt-2">{selectedProject.title}</h3>
                <p className="text-text-muted text-sm mt-1">{selectedProject.location}</p>
                <p className="text-text-muted mt-4">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}