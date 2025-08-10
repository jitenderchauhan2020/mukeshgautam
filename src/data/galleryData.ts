// Gallery Images Data
// Add your images here and they will automatically appear in the gallery

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/image1.jpg',
    alt: 'Beautiful landscape with mountains and lake',
    description: 'A serene mountain landscape with crystal clear lake reflection'
  },
  {
    id: 2,
    src: '/images/gallery/image2.jpg',
    alt: 'Modern architecture building',
    description: 'Contemporary architectural design with clean lines and glass facade'
  },
  {
    id: 3,
    src: '/images/gallery/image3.jpg',
    alt: 'Nature photography of forest',
    description: 'Dense forest with sunlight filtering through the trees'
  },
  {
    id: 4,
    src: '/images/gallery/image4.jpg',
    alt: 'Urban cityscape at night',
    description: 'City skyline illuminated with vibrant lights at dusk'
  },
  {
    id: 5,
    src: '/images/gallery/image5.jpg',
    alt: 'Abstract art composition',
    description: 'Colorful abstract artwork with geometric patterns'
  },
  {
    id: 6,
    src: '/images/gallery/image6.jpg',
    alt: 'Portrait photography',
    description: 'Professional portrait with dramatic lighting and composition'
  },
  {
    id: 7,
    src: '/images/gallery/image7.jpg',
    alt: 'Wildlife photography',
    description: 'Majestic wildlife captured in their natural habitat'
  },
  {
    id: 8,
    src: '/images/gallery/image8.jpg',
    alt: 'Travel destination',
    description: 'Exotic travel destination with pristine beaches and clear waters'
  }
];

// To add more images:
// 1. Copy your image files to public/images/gallery/
// 2. Add a new object to the galleryImages array above
// 3. The gallery will automatically include the new image