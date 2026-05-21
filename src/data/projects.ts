export interface Project {
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: 'OASIS',
    description: 'Oil-spill Analysis in the Arctic using Satellites and Intelligent Simulation. Combines satellite remote sensing with intelligent simulation to detect and track oil spills across Arctic waters.',
    url: 'https://arcticphilab.no/news/oasis-advancing-oil-spill-analysis-in-the-arctic-with-satellites-and-intelligent-simulation/',
  },
  {
    name: 'FLAIT',
    description: 'A SINTEF-led initiative using artificial intelligence to improve safety in the most hazardous airport zones, in collaboration with NTNU, Avinor, and NORCE.',
    url: 'https://www.sintef.no/publikasjoner/publikasjon/0198cc964d41-54359239-6b1d-4bcf-847f-75a1098faa06/',
  },
  {
    name: 'EXAIGON',
    description: 'Explainable AI systems for gradual industry adoption. An NTNU-led research initiative (2020–2024) developing methods to make AI systems more transparent and trustworthy for safety-critical applications.',
    url: 'https://www.ntnu.edu/exaigon',
  },
];
