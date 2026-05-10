import { StaticImageData } from 'next/image';

// Import all images from src/img
import img1 from '@/img/WhatsApp Image 2026-05-10 at 12.54.41.jpeg';
import img2 from '@/img/WhatsApp Image 2026-05-10 at 12.54.42.jpeg';
import img3 from '@/img/WhatsApp Image 2026-05-10 at 12.54.44.jpeg';
import img4 from '@/img/WhatsApp Image 2026-05-10 at 12.54.44 (1).jpeg';
import img5 from '@/img/WhatsApp Image 2026-05-10 at 12.54.44 (2).jpeg';
import img6 from '@/img/WhatsApp Image 2026-05-10 at 12.54.45.jpeg';
import img7 from '@/img/WhatsApp Image 2026-05-10 at 12.54.45 (1).jpeg';
import img8 from '@/img/WhatsApp Image 2026-05-10 at 12.54.45 (2).jpeg';
import img9 from '@/img/WhatsApp Image 2026-05-10 at 12.54.46.jpeg';
import img10 from '@/img/WhatsApp Image 2026-05-10 at 12.54.46 (1).jpeg';
import img11 from '@/img/WhatsApp Image 2026-05-10 at 12.54.47.jpeg';
import img12 from '@/img/WhatsApp Image 2026-05-10 at 12.54.48.jpeg';
import img13 from '@/img/WhatsApp Image 2026-05-10 at 12.54.48 (1).jpeg';
import img14 from '@/img/WhatsApp Image 2026-05-10 at 12.54.49.jpeg';
import img15 from '@/img/WhatsApp Image 2026-05-10 at 12.54.50.jpeg';
import img16 from '@/img/WhatsApp Image 2026-05-10 at 12.54.50 (1).jpeg';
import img17 from '@/img/WhatsApp Image 2026-05-10 at 12.54.51.jpeg';
import img18 from '@/img/WhatsApp Image 2026-05-10 at 12.54.51 (1).jpeg';
import img19 from '@/img/WhatsApp Image 2026-05-10 at 12.54.52.jpeg';
import img20 from '@/img/WhatsApp Image 2026-05-10 at 12.54.54.jpeg';
import img21 from '@/img/WhatsApp Image 2026-05-10 at 12.54.54 (1).jpeg';
import img22 from '@/img/WhatsApp Image 2026-05-10 at 12.54.54 (2).jpeg';
import img23 from '@/img/WhatsApp Image 2026-05-10 at 12.54.57.jpeg';
import img24 from '@/img/WhatsApp Image 2026-05-10 at 12.54.57 (1).jpeg';
import img25 from '@/img/WhatsApp Image 2026-05-10 at 12.54.57 (2).jpeg';
import img26 from '@/img/WhatsApp Image 2026-05-10 at 12.54.58.jpeg';
import img27 from '@/img/WhatsApp Image 2026-05-10 at 12.54.58 (1).jpeg';
import img28 from '@/img/WhatsApp Image 2026-05-10 at 12.54.58 (2).jpeg';
import img29 from '@/img/WhatsApp Image 2026-05-10 at 12.54.59.jpeg';
import img30 from '@/img/WhatsApp Image 2026-05-10 at 12.54.59 (1).jpeg';
import img31 from '@/img/WhatsApp Image 2026-05-10 at 12.55.00.jpeg';
import img32 from '@/img/WhatsApp Image 2026-05-10 at 12.55.00 (1).jpeg';
import img33 from '@/img/WhatsApp Image 2026-05-10 at 12.55.01.jpeg';
import img34 from '@/img/WhatsApp Image 2026-05-10 at 12.55.02.jpeg';
import img35 from '@/img/WhatsApp Image 2026-05-10 at 12.55.02 (1).jpeg';
import img36 from '@/img/WhatsApp Image 2026-05-10 at 12.55.03.jpeg';
import img37 from '@/img/WhatsApp Image 2026-05-10 at 12.55.03 (1).jpeg';
import img38 from '@/img/WhatsApp Image 2026-05-10 at 12.55.04.jpeg';
import img39 from '@/img/WhatsApp Image 2026-05-10 at 12.55.04 (1).jpeg';
import img40 from '@/img/WhatsApp Image 2026-05-10 at 12.55.05.jpeg';
import img41 from '@/img/WhatsApp Image 2026-05-10 at 12.55.06.jpeg';
import img42 from '@/img/WhatsApp Image 2026-05-10 at 12.55.06 (1).jpeg';

// Array of all images
const allImages: StaticImageData[] = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42
];

// Categorize images for different sections
export const heroImages = [
  allImages[0], allImages[5], allImages[10], allImages[15], allImages[20]
];

export const portfolioImages = allImages.slice(0, 20);

export const teamImages = allImages.slice(20, 30);

export const galleryImages = allImages;

export const projectImages = allImages.slice(0, 36);

// Get random image from category
export function getRandomImage(category: 'hero' | 'portfolio' | 'team' | 'gallery' | 'project'): StaticImageData {
  let images: StaticImageData[];

  switch (category) {
    case 'hero':
      images = heroImages;
      break;
    case 'portfolio':
      images = portfolioImages;
      break;
    case 'team':
      images = teamImages;
      break;
    case 'gallery':
      images = galleryImages;
      break;
    case 'project':
    default:
      images = projectImages;
  }

  return images[Math.floor(Math.random() * images.length)];
}

// Get image by index
export function getImageByIndex(index: number): StaticImageData {
  return allImages[index % allImages.length];
}

// Get images for specific section with index mapping
export function getImagesForSection(startIndex: number, count: number): StaticImageData[] {
  return Array.from({ length: count }, (_, i) => allImages[(startIndex + i) % allImages.length]);
}

export default allImages;