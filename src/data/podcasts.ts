export interface PodcastAppearance {
  show: string;
  description: string;
  year: number;
  month?: string;
  link?: string;
}

export const podcasts: PodcastAppearance[] = [
  {
    show: 'Teknisk Ukeblad',
    description: 'Podcast episode on AI',
    year: 2022,
    month: 'December',
  },
  {
    show: 'Powertalk with Yrja Oftedahl',
    description: 'Live streamed podcast, Ada — NTNU',
    year: 2020,
    month: 'August',
  },
];
