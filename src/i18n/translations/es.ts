import type { Translations } from '../types';

export const es: Translations = {
  nav: {
    about: 'Sobre mí',
    work: 'Proyectos',
    skills: 'Habilidades',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    location: 'Argentina',
    role: 'Estudiante de Sistemas & Desarrollador',
    subtitle: 'Licenciatura en Sistemas de Información — UNSE',
    description:
      'Soy estudiante de la Licenciatura en Sistemas de Información. Me interesa transformar ideas y necesidades reales en soluciones de software bien construidas. Mi formación universitaria me ha permitido adquirir conocimientos tanto de programación como de análisis, diseño y desarrollo de sistemas.',
    ctaProjects: 'Ver Proyectos',
    ctaContact: 'Contactarme',
  },
  about: {
    number: '01',
    title: 'Sobre mí',
    subtitle: 'Una breve introducción',
    lead: 'Estudiante de la Licenciatura en Sistemas de Información en la UNSE, enfocado en transformar ideas y necesidades en soluciones de software.',
    body1: 'Mi formación universitaria me ha permitido adquirir una base sólida que abarca tanto la programación como el análisis, diseño y desarrollo de sistemas.',
    body2: 'Trabajo con tecnologías como React, React Native y Spring Boot, y participo como integrante en formación en proyectos de investigación aplicada sobre entornos colaborativos soportados por computadora (CSCL).',
    interestsLabel: 'Intereses',
    interests: ['Desarrollo Web & Móvil', 'Arquitectura Backend', 'Algoritmos & IA', 'Computer Vision', 'Investigación CSCL'],
    stats: {
      degreeProgress: '59%',
      degreeLabel: 'Licenciatura en Sistemas',
      analystProgress: '76%',
      analystLabel: 'Analista Universitario',
      gpa: '7.54',
      gpaLabel: 'Promedio Académico',
    },
  },
  research: {
    badge: 'Investigación Académica',
    title: 'Desarrollos tecnológicos para apoyar el aprendizaje y la enseñanza en grupos colaborativos',
    projectCode: 'Proyecto 23/C226-A-2026',
    director: 'Dir. Dra. Rosanna Costaguta',
    institution: 'UNSE · Desde Mayo 2026',
    topic: 'Plataforma ColaborAR',
    description: 'Trabajo sobre la plataforma ColaborAR, que implementa agrupamiento de estudiantes mediante algoritmos genéticos según estilos de aprendizaje. Participo en el diseño e implementación de un nuevo método de agrupamiento automático considerando variables adicionales del perfil del estudiante para su validación en sesiones experimentales de Aprendizaje Colaborativo Soportado por Computadora (ACSC).',
    tags: ['Algoritmos Genéticos', 'CSCL / ACSC', 'Agrupamiento Automático', 'UNSE'],
  },
  timeline: {
    label: 'Trayectoria',
    items: [
      {
        year: 'Mayo 2026 — Presente',
        title: 'Integrante en Formación — Investigación',
        description: 'Proyecto 23/C226-A-2026 sobre la plataforma ColaborAR — UNSE',
      },
      {
        year: '2026 — Presente',
        title: 'BioSacha — App Educativa Móvil',
        description: 'React Native, Spring Boot & Visión por Computadora',
      },
      {
        year: '2025',
        title: 'Sistema de E-commerce',
        description: 'Plataforma comercial desacoplada con React y Spring Boot',
      },
      {
        year: '2022 — Presente',
        title: 'Licenciatura en Sistemas de Información',
        description: 'UNSE — Promedio Académico: 7.54',
      },
    ],
  },
  work: {
    number: '02',
    title: 'Proyectos Destacados',
    subtitle: 'Proyectos construidos con intención y rigor técnico',
  },
  projects: {
    biosacha: {
      title: 'BioSacha — App Educativa sobre Fauna Argentina',
      category: 'App Móvil & IA / 2026 – Actualidad',
      description:
        'Aplicación móvil colaborativa desarrollada con React Native y Spring Boot, orientada a la educación ambiental y la conservación de especies en riesgo en Argentina. Diseñada para incorporar modelos de visión por computadora para la identificación automática de especies mediante imágenes.',
    },
    pusicat: {
      title: 'Sistema de E-commerce',
      category: 'Full Stack / 2025',
      description:
        'Plataforma de comercio electrónico desarrollada con una arquitectura frontend/backend desacoplada (React + Spring Boot), orientada a la gestión integral de productos, usuarios y procesos de compra.',
    },
  },
  skills: {
    number: '03',
    title: 'Habilidades',
    subtitle: 'Tecnologías y dominios de trabajo',
    categories: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs'] },
      { title: 'Base de Datos', items: ['PostgreSQL', 'MySQL', 'JPA', 'Hibernate'] },
      { title: 'Móvil & Herramientas', items: ['React Native', 'Expo', 'Algoritmos Genéticos', 'Visión por Computadora', 'Git / GitHub'] },
      { title: 'Idiomas', items: ['Español (Nativo)', 'Inglés (B2)', 'Alemán (B1 en progreso)'] },
    ],
  },
  experience: {
    number: '04',
    title: 'Investigación & Trayectoria',
    subtitle: 'Proyectos académicos e investigación aplicada',
    badges: {
      research: 'Investigación',
      project: 'Proyecto',
      education: 'Educación',
    },
    items: [
      {
        period: 'Mayo 2026 — Presente',
        title: 'Integrante en Formación — Investigación',
        organization: 'Proyecto 23/C226-A-2026 · Dir. Dra. Rosanna Costaguta · UNSE',
        description:
          'Investigación en la plataforma ColaborAR sobre agrupamiento automático de estudiantes mediante algoritmos genéticos y variables del perfil académico para sesiones experimentales de ACSC.',
        type: 'research',
        tags: ['Algoritmos Genéticos', 'CSCL / ACSC', 'UNSE'],
      },
      {
        period: '2026 — Presente',
        title: 'BioSacha — Fauna Argentina & IA',
        organization: 'Proyecto Personal',
        description:
          'App móvil en React Native y Spring Boot para conservación ambiental e identificación automática de especies autóctonas usando modelos de visión por computadora.',
        type: 'project',
        tags: ['React Native', 'Spring Boot', 'Computer Vision'],
      },
      {
        period: '2025',
        title: 'Sistema de E-commerce',
        organization: 'Proyecto Personal',
        description:
          'Plataforma e-commerce completa con arquitectura desacoplada en React y Spring Boot para gestión de catálogo, órdenes y usuarios.',
        type: 'project',
        tags: ['React', 'Spring Boot', 'PostgreSQL'],
      },
      {
        period: '2022 — Presente',
        title: 'Licenciatura en Sistemas de Información',
        organization: 'UNSE (Universidad Nacional de Santiago del Estero)',
        description:
          '59% Licenciatura completada · 76% Analista Universitario completado · Promedio Académico: 7.54.',
        type: 'education',
        tags: ['Sistemas de Información', 'UNSE', 'Promedio: 7.54'],
      },
    ],
  },
  contact: {
    number: '05',
    heading: '¿Tenés un proyecto',
    headingLine2: 'o propuesta en mente?',
    subheading: 'Construyamos algo significativo.',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    footerName: '© 2026 Osiris M. Corrales',
  },
};
