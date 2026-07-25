import type { Translations } from '../types';

export const en: Translations = {
  nav: {
    about: 'About',
    work: 'Work',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    location: 'Argentina',
    role: 'Information Systems Student & Developer',
    subtitle: 'B.S. in Information Systems — UNSE',
    description:
      'I am an Information Systems student focused on turning real-world ideas and needs into solid software solutions. My academic background has equipped me with knowledge in programming as well as systems analysis, design, and software development.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
  },
  about: {
    number: '01',
    title: 'About',
    subtitle: 'A brief introduction',
    lead: 'Information Systems student at UNSE, focused on turning ideas and needs into functional software solutions.',
    body1: 'My university education has provided me with a solid foundation covering programming, systems analysis, design, and software development.',
    body2: 'I work with technologies like React, React Native, and Spring Boot, and participate as a trainee researcher in applied research projects on computer-supported collaborative learning (CSCL).',
    interestsLabel: 'Interests',
    interests: ['Web & Mobile Dev', 'Backend Architecture', 'Algorithms & AI', 'Computer Vision', 'CSCL Research'],
    stats: {
      degreeProgress: '59%',
      degreeLabel: 'B.S. Information Systems',
      analystProgress: '76%',
      analystLabel: 'University Analyst Degree',
      gpa: '7.54',
      gpaLabel: 'Academic GPA (7.54/10)',
    },
  },
  research: {
    badge: 'Academic Research',
    title: 'Technological developments to support learning and teaching in collaborative groups',
    projectCode: 'Project 23/C226-A-2026',
    director: 'Dir. Dr. Rosanna Costaguta',
    institution: 'UNSE · Since May 2026',
    topic: 'ColaborAR Platform',
    description: 'Working on the ColaborAR platform, which groups students using genetic algorithms based on learning styles. Currently participating in the design and implementation of a new automated grouping method incorporating additional student profile variables for experimental validation in CSCL sessions.',
    tags: ['Genetic Algorithms', 'CSCL', 'Automated Grouping', 'UNSE Research'],
  },
  timeline: {
    label: 'Path',
    items: [
      {
        year: 'May 2026 — Present',
        title: 'Trainee Researcher',
        description: 'Project 23/C226-A-2026 on ColaborAR platform — UNSE',
      },
      {
        year: '2026 — Present',
        title: 'BioSacha — Educational Mobile App',
        description: 'React Native, Spring Boot & Computer Vision for fauna conservation',
      },
      {
        year: '2025',
        title: 'E-commerce System',
        description: 'Decoupled commercial platform with React & Spring Boot',
      },
      {
        year: '2022 — Present',
        title: 'Information Systems Degree',
        description: 'UNSE — GPA: 7.54',
      },
    ],
  },
  work: {
    number: '02',
    title: 'Selected Work',
    subtitle: 'Projects built with intention and technical rigor',
  },
  projects: {
    biosacha: {
      title: 'BioSacha — Argentine Wildlife Educational App',
      category: 'Mobile App & AI / 2026 – Present',
      description:
        'Collaborative mobile application built with React Native and Spring Boot for environmental education and fauna conservation in Argentina. Designed to incorporate computer vision models for automatic species identification from images.',
    },
    pusicat: {
      title: 'E-commerce System',
      category: 'Full Stack / 2025',
      description:
        'E-commerce platform developed with a decoupled frontend/backend architecture (React + Spring Boot), designed for product management, user authentication, and shopping workflows.',
    },
  },
  skills: {
    number: '03',
    title: 'Skills',
    subtitle: 'Technologies & working domains',
    categories: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs'] },
      { title: 'Database', items: ['PostgreSQL', 'MySQL', 'JPA', 'Hibernate'] },
      { title: 'Mobile & Tools', items: ['React Native', 'Expo', 'Genetic Algorithms', 'Computer Vision', 'Git / GitHub'] },
      { title: 'Languages', items: ['Spanish (Native)', 'English (B2)', 'German (B1 in progress)'] },
    ],
  },
  experience: {
    number: '04',
    title: 'Research & Experience',
    subtitle: 'Academic projects and applied research',
    badges: {
      research: 'Research',
      project: 'Project',
      education: 'Education',
    },
    items: [
      {
        period: 'May 2026 — Present',
        title: 'Trainee Researcher',
        organization: 'Project 23/C226-A-2026 · Dir. Dr. Rosanna Costaguta · UNSE',
        description:
          'Research on the ColaborAR platform regarding automatic student grouping using genetic algorithms and academic profile variables for experimental CSCL sessions.',
        type: 'research',
        tags: ['Genetic Algorithms', 'CSCL / ACSC', 'UNSE'],
      },
      {
        period: '2026 — Present',
        title: 'BioSacha — Argentine Wildlife & AI',
        organization: 'Personal Project',
        description:
          'Mobile app in React Native and Spring Boot for environmental conservation and automatic species identification using computer vision models.',
        type: 'project',
        tags: ['React Native', 'Spring Boot', 'Computer Vision'],
      },
      {
        period: '2025',
        title: 'E-commerce System',
        organization: 'Personal Project',
        description:
          'Full e-commerce platform with decoupled architecture in React and Spring Boot for managing catalog, orders, and users.',
        type: 'project',
        tags: ['React', 'Spring Boot', 'PostgreSQL'],
      },
      {
        period: '2022 — Present',
        title: 'Bachelor in Information Systems',
        organization: 'UNSE (National University of Santiago del Estero)',
        description:
          '59% Degree completed · 76% University Analyst completed · GPA: 7.54.',
        type: 'education',
        tags: ['Information Systems', 'UNSE', 'GPA: 7.54'],
      },
    ],
  },
  contact: {
    number: '05',
    heading: 'Have a project',
    headingLine2: 'or proposal in mind?',
    subheading: "Let's build something meaningful.",
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    footerName: '© 2026 Osiris M. Corrales',
  },
};
