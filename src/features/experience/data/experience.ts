export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'project';
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2022 — Present',
    title: 'Licenciatura en Sistemas de Información',
    organization: 'Universidad Nacional de Santiago del Estero (UNSE)',
    description:
      'Pursuing a degree in Information Systems. Coursework includes software engineering, data structures, databases, operating systems, and computer networks.',
    type: 'education',
  },
  {
    period: '2024',
    title: 'BioSacha — Educational Mobile App',
    organization: 'Personal Project',
    description:
      'Designed and developed a mobile application with React Native and Expo focused on environmental education, native Argentine fauna exploration, and collaborative participation in natural reserves.',
    type: 'project',
  },
  {
    period: '2024',
    title: 'Pusicat — E-commerce Platform',
    organization: 'Personal Project',
    description:
      'Built a full-stack e-commerce application from scratch, handling everything from database architecture to the user-facing storefront. Features product management, shopping cart, and user authentication.',
    type: 'project',
  },
];
