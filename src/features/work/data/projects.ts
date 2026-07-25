export interface ProjectData {
  id: string;
  technologies: string[];
  image: 'mobile' | 'ecommerce';
  imageSrc?: string;
  gallery?: string[];
  links: {
    live?: string;
    github?: string;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'biosacha',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'Computer Vision'],
    image: 'mobile',
    imageSrc: '/images/biosacha-1.png',
    gallery: [
      '/images/biosacha-1.png',
      '/images/biosacha-2.png',
      '/images/biosacha-3.png',
    ],
    links: {
      github: 'https://github.com/osirismcorrales',
    },
  },
  {
    id: 'pusicat',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL'],
    image: 'ecommerce',
    imageSrc: '/images/pusicat-1.png',
    gallery: [
      '/images/pusicat-1.png',
      '/images/pusicat-2.png',
    ],
    links: {
      github: 'https://github.com/osirismcorrales',
    },
  },
];
