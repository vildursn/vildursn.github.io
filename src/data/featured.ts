export interface FeaturedPhoto {
  src: string;
  alt: string;
  caption?: string;
}

// Add photos here — they'll appear as a horizontal strip on the homepage.
// Example:
// { src: '/photos/phd-defence.jpg', alt: 'PhD defence at NTNU' },
export const featuredPhotos: FeaturedPhoto[] = [
  { src: 'https://picsum.photos/seed/a/400/300', alt: 'placeholder', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: 'https://picsum.photos/seed/b/500/300', alt: 'placeholder', caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { src: 'https://picsum.photos/seed/c/350/300', alt: 'placeholder', caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
  { src: 'https://picsum.photos/seed/d/450/300', alt: 'placeholder', caption: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { src: 'https://picsum.photos/seed/e/380/300', alt: 'placeholder', caption: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
];
