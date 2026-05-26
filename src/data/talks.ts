export interface Talk {
  title: string;
  event: string;
  location: string;
  year: number;
  month?: string;
  slides?: string;
  recording?: string;
  photo?: string;
}

export const talks: Talk[] = [
  {
    title: 'Introduction to AI',
    event: 'Helse Nord IKT',
    location: 'Tromsø, Norway',
    year: 2024,
    month: 'November',
  },
  {
    title: 'Hvorfor roboter med røde øyne ikke er det skumleste med AI',
    event: 'Arctic Frontiers',
    location: 'Tromsø, Norway',
    year: 2024,
    month: 'November',
  },
  {
    title: 'Introduction to AI',
    event: 'Kommunik Norge høstsamling',
    location: 'Stavanger, Norway',
    year: 2024,
    month: 'September',
  },
  {
    title: 'Introduction to AI',
    event: 'Grieg Invest seminar',
    location: 'Stavanger, Norway',
    year: 2024,
    month: 'May',
  },
  {
    title: 'Introduction to AI',
    event: 'IP-dagen, Patentstyret',
    location: 'Oslo, Norway',
    year: 2023,
    month: 'November',
  },
  {
    title: 'Hvorfor roboter med røde øyne ikke er det skumleste med AI',
    event: 'Arctic Frontiers',
    location: 'Tromsø, Norway',
    year: 2023,
    month: 'November',
  },
  {
    title: 'Introduction to AI / XAI',
    event: 'Kraft i Vest konferansen',
    location: 'Sandane, Norway',
    year: 2023,
    month: 'September',
  },
  {
    title: 'Hvorfor roboter med røde øyne ikke er det skumleste med AI',
    event: 'AI-dag, Edvard Munch VGS',
    location: 'Oslo, Norway',
    year: 2023,
    month: 'June',
  },
  {
    title: 'Introduction to AI',
    event: 'Quality Norway — Kunstig intelligens i næringslivet',
    location: 'Oslo, Norway',
    year: 2023,
    month: 'June',
  },
  {
    title: '5 gode grunner til å ta en Ph.D!',
    event: 'Better Balance in Informatics, UiT',
    location: 'Tromsø, Norway',
    year: 2022,
    month: 'September',
  },
];
