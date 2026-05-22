export interface FeaturedPhoto {
  src: string;
  alt: string;
  caption?: string;
}

// Add photos here — they'll appear as a horizontal strip on the homepage.
// Example:
// { src: '/photos/phd-defence.jpg', alt: 'PhD defence at NTNU' },
export const featuredPhotos: FeaturedPhoto[] = [
  { src: '/images/ascend_reward.avif', alt: 'Ascend reward', caption: 'IARC 2017 with Ascend NTNU — celebrating a competition award with two lovely teammates.' },
  { src: '/images/drone_innovasjonsdagen.jpg', alt: 'Drone at Innovasjonsdagen', caption: 'Talking drones and use cases at Innovasjonsdagen, Petroleumstilsynet.' },
  { src: '/images/ntnu_women_in_stem_interview.png', alt: 'NTNU Women in STEM interview', caption: 'Being interviewed for a documentary about women in STEM.' },
  { src: '/images/FLAIT.jpeg', alt: 'FLAIT', caption: 'Field work at the airport for the FLAIT project.' },
  { src: '/images/UIS_drone_course.jpeg', alt: 'UIS drone course', caption: 'A course on using drones for research at UNIS, Svalbard.' },
  { src: '/images/defence.jpeg', alt: 'Defence', caption: 'The big day — my PhD defence.' },
  { src: '/images/thesis.jpeg', alt: 'Thesis', caption: 'My printed thesis, with a little gift from a friend.' },
];
