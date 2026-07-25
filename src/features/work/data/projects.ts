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

const baseUrl = import.meta.env.BASE_URL;

export const PROJECTS: ProjectData[] = [
  {
    id: 'biosacha',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'Computer Vision'],
    image: 'mobile',
    imageSrc: `${baseUrl}images/biosacha-1.png`,
    gallery: [
      `${baseUrl}images/biosacha-1.png`,
      `${baseUrl}images/biosacha-2.png`,
      `${baseUrl}images/biosacha-3.png`,
    ],
    links: {
      github: 'https://github.com/osirismcorrales',
    },
  },
  {
    id: 'pusicat',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL'],
    image: 'ecommerce',
    imageSrc: `${baseUrl}images/pusicat-1.png`,
    gallery: [
      `${baseUrl}images/pusicat-1.png`,
      `${baseUrl}images/pusicat-2.png`,
    ],
    links: {
      github: 'https://github.com/osirismcorrales',
    },
  },
];
