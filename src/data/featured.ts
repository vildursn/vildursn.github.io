export interface FeaturedPhoto {
  src: string;
  alt: string;
  caption?: string;
}

// Add photos here — they'll appear as a horizontal strip on the homepage.
// Example:
// { src: '/photos/phd-defence.jpg', alt: 'PhD defence at NTNU' },
export const featuredPhotos: FeaturedPhoto[] = [
  { src: '/images/ascend_reward.avif', alt: 'Ascend reward', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: '/images/drone_innovasjonsdagen.jpg', alt: 'Drone at Innovasjonsdagen', caption: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { src: '/images/ntnu_women_in_stem_interview.png', alt: 'NTNU Women in STEM interview', caption: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
];
