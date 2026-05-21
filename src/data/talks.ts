export interface Talk {
  title: string;
  event: string;
  location: string;
  year: number;
  month?: string;
  slides?: string;
  recording?: string;
}

// Add your talks here, newest first
export const talks: Talk[] = [
  // {
  //   title: 'Your Talk Title',
  //   event: 'Conference or Event Name',
  //   location: 'City, Country',
  //   year: 2024,
  //   month: 'June',
  //   slides: 'https://...',
  //   recording: 'https://...',
  // },
];
