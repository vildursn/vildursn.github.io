export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url?: string;
}

// Add your publications here, newest first within each year
export const publications: Publication[] = [
  // {
  //   title: 'Your Paper Title',
  //   authors: ['Vilde Gjærum', 'Second Author'],
  //   venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
  //   year: 2024,
  //   url: 'https://doi.org/...',
  // },
];
