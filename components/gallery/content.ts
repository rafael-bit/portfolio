export const galleryHeading = {
  prefix: '.../',
  label: 'GALLERY',
  suffix: '/...',
} as const;

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  { id: '1', src: '/gallery/gallery2.jpeg', alt: 'Galeria' },
  { id: '2', src: '/gallery/gallery3.jpg', alt: 'Galeria' },
  { id: '3', src: '/gallery/gallery4.jpg', alt: 'Galeria' },
  { id: '4', src: '/gallery/gallery5.jpg', alt: 'Galeria' },
  { id: '5', src: '/gallery/gallery6.jpg', alt: 'Galeria' },
  { id: '6', src: '/gallery/gallery7.jpg', alt: 'Galeria' },
];
