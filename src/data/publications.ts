export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: 'Reducing Manual Workload in SAR-Based Oil Spill Detection Through Uncertainty-Aware Deep Learning',
    authors: ['Dina Svendsen Solskinnsbakk', 'Sigurd Almli Hanssen', 'Harald Lykke Joakimsen', 'Vilde B Gjærum', 'Elisabeth Wetzer', 'Kristoffer Knutsen Wickstrøm'],
    venue: 'Northern Lights Deep Learning Conference',
    year: 2026,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=no&user=PA7SBcUAAAAJ&sortby=pubdate&citation_for_view=PA7SBcUAAAAJ:W7OEmFMy1HYC',
  },
  {
    title: 'Model tree methods for explaining deep reinforcement learning agents in real-time robotic applications',
    authors: ['Vilde B Gjærum', 'Inga Strømke', 'Jakob Løver', 'Timothy Miller', 'Anastasios M Lekkas'],
    venue: 'Neurocomputing',
    year: 2023,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=no&user=PA7SBcUAAAAJ&sortby=pubdate&citation_for_view=PA7SBcUAAAAJ:zYLM7Y9cAGgC',
  },
  {
    title: 'Safe learning for control using control Lyapunov functions and control barrier functions: A review',
    authors: ['Akhil Anand', 'Katrine Seel', 'Vilde Gjærum', 'Anne Håkansson', 'Haakon Robinson', 'Aya Saad'],
    venue: 'Procedia Computer Science',
    year: 2021,
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=no&user=PA7SBcUAAAAJ&sortby=pubdate&citation_for_view=PA7SBcUAAAAJ:9yKSN-GCB0IC',
  },
];
