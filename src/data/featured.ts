export interface FeaturedPhoto {
  src: string;
  alt: string;
}

// Add photos here — they'll appear as a horizontal strip on the homepage.
// Example:
// { src: '/photos/phd-defence.jpg', alt: 'PhD defence at NTNU' },
export const featuredPhotos: FeaturedPhoto[] = [
  { src: 'https://picsum.photos/seed/a/400/300', alt: 'placeholder' },
  { src: 'https://picsum.photos/seed/b/500/300', alt: 'placeholder' },
  { src: 'https://picsum.photos/seed/c/350/300', alt: 'placeholder' },
  { src: 'https://picsum.photos/seed/d/450/300', alt: 'placeholder' },
  { src: 'https://picsum.photos/seed/e/380/300', alt: 'placeholder' },
];
