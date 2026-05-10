import { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';

export const metadata: Metadata = {
  title: 'Projects | Shams & Sons Co. - Interior Design Portfolio in Mumbai',
  description: 'Explore our stunning interior design projects across Mumbai. View our portfolio of modular kitchens, bedrooms, living rooms, offices, and custom furniture work.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
}