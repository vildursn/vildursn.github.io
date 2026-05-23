export interface FeaturedPhoto {
  src: string;
  alt: string;
  caption?: string;
}

// Add photos here — they'll appear as a horizontal strip on the homepage.
// Example:
// { src: '/photos/phd-defence.jpg', alt: 'PhD defence at NTNU' },
export const featuredPhotos: FeaturedPhoto[] = [
  { src: '/images/foredrag_BRAIN_ADA.jpeg', alt: 'Speaking at a Women in AI event', caption: 'I love making AI feel less scary. Any excuse to get on a stage.' },
  { src: '/images/defence.jpeg', alt: 'PhD defence', caption: 'PhD defence day. Three years of asking \'but why?\' finally paid off.' },
  { src: '/images/UIS_drone_course.jpeg', alt: 'Drone course on Svalbard', caption: 'A course on using drones for research purposes. Turns out Svalbard is a great classroom.' },
  { src: '/images/ascend_2017_team.jpg', alt: 'Ascend NTNU 2017 team', caption: 'Two great years building autonomous drones with Ascend NTNU.' },
];
