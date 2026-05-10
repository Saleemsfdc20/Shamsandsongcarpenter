import { StaticImageData } from 'next/image';

// Image mapping for Shams & Sons Co.
// Auto-detects images from src/img directory

// Import all images from src/img
const imageFiles = {
  img1: require('@/img/WhatsApp Image 2026-05-10 at 12.54.41.jpeg'),
  img2: require('@/img/WhatsApp Image 2026-05-10 at 12.54.42.jpeg'),
  img3: require('@/img/WhatsApp Image 2026-05-10 at 12.54.44.jpeg'),
  img4: require('@/img/WhatsApp Image 2026-05-10 at 12.54.44 (1).jpeg'),
  img5: require('@/img/WhatsApp Image 2026-05-10 at 12.54.44 (2).jpeg'),
  img6: require('@/img/WhatsApp Image 2026-05-10 at 12.54.45.jpeg'),
  img7: require('@/img/WhatsApp Image 2026-05-10 at 12.54.45 (1).jpeg'),
  img8: require('@/img/WhatsApp Image 2026-05-10 at 12.54.45 (2).jpeg'),
  img9: require('@/img/WhatsApp Image 2026-05-10 at 12.54.46.jpeg'),
  img10: require('@/img/WhatsApp Image 2026-05-10 at 12.54.46 (1).jpeg'),
  img11: require('@/img/WhatsApp Image 2026-05-10 at 12.54.47.jpeg'),
  img12: require('@/img/WhatsApp Image 2026-05-10 at 12.54.48.jpeg'),
  img13: require('@/img/WhatsApp Image 2026-05-10 at 12.54.48 (1).jpeg'),
  img14: require('@/img/WhatsApp Image 2026-05-10 at 12.54.49.jpeg'),
  img15: require('@/img/WhatsApp Image 2026-05-10 at 12.54.50.jpeg'),
  img16: require('@/img/WhatsApp Image 2026-05-10 at 12.54.50 (1).jpeg'),
  img17: require('@/img/WhatsApp Image 2026-05-10 at 12.54.51.jpeg'),
  img18: require('@/img/WhatsApp Image 2026-05-10 at 12.54.51 (1).jpeg'),
  img19: require('@/img/WhatsApp Image 2026-05-10 at 12.54.52.jpeg'),
  img20: require('@/img/WhatsApp Image 2026-05-10 at 12.54.54.jpeg'),
  img21: require('@/img/WhatsApp Image 2026-05-10 at 12.54.54 (1).jpeg'),
  img22: require('@/img/WhatsApp Image 2026-05-10 at 12.54.54 (2).jpeg'),
  img23: require('@/img/WhatsApp Image 2026-05-10 at 12.54.57.jpeg'),
  img24: require('@/img/WhatsApp Image 2026-05-10 at 12.54.57 (1).jpeg'),
  img25: require('@/img/WhatsApp Image 2026-05-10 at 12.54.57 (2).jpeg'),
  img26: require('@/img/WhatsApp Image 2026-05-10 at 12.54.58.jpeg'),
  img27: require('@/img/WhatsApp Image 2026-05-10 at 12.54.58 (1).jpeg'),
  img28: require('@/img/WhatsApp Image 2026-05-10 at 12.54.58 (2).jpeg'),
  img29: require('@/img/WhatsApp Image 2026-05-10 at 12.54.59.jpeg'),
  img30: require('@/img/WhatsApp Image 2026-05-10 at 12.54.59 (1).jpeg'),
  img31: require('@/img/WhatsApp Image 2026-05-10 at 12.55.00.jpeg'),
  img32: require('@/img/WhatsApp Image 2026-05-10 at 12.55.00 (1).jpeg'),
  img33: require('@/img/WhatsApp Image 2026-05-10 at 12.55.01.jpeg'),
  img34: require('@/img/WhatsApp Image 2026-05-10 at 12.55.02.jpeg'),
  img35: require('@/img/WhatsApp Image 2026-05-10 at 12.55.02 (1).jpeg'),
  img36: require('@/img/WhatsApp Image 2026-05-10 at 12.55.03.jpeg'),
  img37: require('@/img/WhatsApp Image 2026-05-10 at 12.55.03 (1).jpeg'),
  img38: require('@/img/WhatsApp Image 2026-05-10 at 12.55.04.jpeg'),
  img39: require('@/img/WhatsApp Image 2026-05-10 at 12.55.04 (1).jpeg'),
  img40: require('@/img/WhatsApp Image 2026-05-10 at 12.55.05.jpeg'),
  img41: require('@/img/WhatsApp Image 2026-05-10 at 12.55.06.jpeg'),
  img42: require('@/img/WhatsApp Image 2026-05-10 at 12.55.06 (1).jpeg'),
};

// Convert to array for easier access
const allImages = Object.values(imageFiles);

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