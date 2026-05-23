export interface Artwork {
  src: string;
  caption?: string;
}

// Place images in public/art/ and list them here
export const artworks: Artwork[] = [
  { src: '/art/ceramic_whales.jpeg' },
  { src: '/art/kattekoppen.jpeg' },
];
