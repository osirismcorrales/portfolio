import type { Translations } from '../types';

export const de: Translations = {
  nav: {
    about: 'Über mich',
    work: 'Projekte',
    skills: 'Fähigkeiten',
    experience: 'Erfahrung',
    contact: 'Kontakt',
  },
  hero: {
    location: 'Argentinien',
    role: 'Informationssysteme-Student & Entwickler',
    subtitle: 'B.S. in Informationssystemen — UNSE',
    description:
      'Ich bin Student der Informationssysteme und darauf fokussiert, reale Ideen und Anforderungen in solide Softwarelösungen zu verwandeln. Mein Studium vermittelt mir fundierte Kenntnisse in Programmierung sowie in Systemanalyse, Design und Softwareentwicklung.',
    ctaProjects: 'Projekte ansehen',
    ctaContact: 'Kontakt aufnehmen',
  },
  about: {
    number: '01',
    title: 'Über mich',
    subtitle: 'Eine kurze Einführung',
    lead: 'Student der Informationssysteme an der UNSE, fokussiert darauf, Ideen und Anforderungen in funktionale Softwarelösungen zu verwandeln.',
    body1: 'Mein akademischer Hintergrund vermittelt mir ein solides Fundament, das Programmierung sowie Systemanalyse, -design und Softwareentwicklung umfasst.',
    body2: 'Ich arbeite mit Technologien wie React, React Native und Spring Boot und wirke als Nachwuchsforscher an angewandten Forschungsprojekten zum computergestützten kollaborativen Lernen (CSCL) mit.',
    interestsLabel: 'Interessen',
    interests: ['Web & Mobile Entw.', 'Backend-Architektur', 'Algorithmen & KI', 'Computer Vision', 'CSCL-Forschung'],
    stats: {
      degreeProgress: '59%',
      degreeLabel: 'Licenciatura in Systemen',
      analystProgress: '76%',
      analystLabel: 'Universitätsanalyst',
      gpa: '7.54',
      gpaLabel: 'Notendurchschnitt (7.54/10)',
    },
  },
  research: {
    badge: 'Akademische Forschung',
    title: 'Technologische Entwicklungen zur Unterstützung des Lernens und Lehrens in kollaborativen Gruppen',
    projectCode: 'Projekt 23/C226-A-2026',
    director: 'Leitung: Dr. Rosanna Costaguta',
    institution: 'UNSE · Seit Mai 2026',
    topic: 'Plattform ColaborAR',
    description: 'Arbeit an der Plattform ColaborAR, die Studenten mithilfe genetischer Algorithmen basierend auf Lernstilen gruppiert. Teilnahme an Entwurf und Implementierung einer neuen automatischen Gruppierungsmethode unter Einbeziehung zusätzlicher Studentenprofilvariablen zur experimentellen Validierung.',
    tags: ['Genetische Algorithmen', 'CSCL', 'Automatische Gruppierung', 'UNSE Forschung'],
  },
  timeline: {
    label: 'Werdegang',
    items: [
      {
        year: 'Mai 2026 — Heute',
        title: 'Nachwuchsforscher',
        description: 'Projekt 23/C226-A-2026 auf ColaborAR-Plattform — UNSE',
      },
      {
        year: '2026 — Heute',
        title: 'BioSacha — Bildungs-App',
        description: 'React Native, Spring Boot & Computer Vision für Tierwelt-Erhaltung',
      },
      {
        year: '2025',
        title: 'E-Commerce-System',
        description: 'Entkoppelte Handelsplattform mit React & Spring Boot',
      },
      {
        year: '2022 — Heute',
        title: 'Informationssysteme Studium',
        description: 'UNSE — Notendurchschnitt: 7.54',
      },
    ],
  },
  work: {
    number: '02',
    title: 'Ausgewählte Arbeiten',
    subtitle: 'Projekte mit Absicht und technischer Präzision gebaut',
  },
  projects: {
    biosacha: {
      title: 'BioSacha — Bildungs-App für Tierwelt Argentiniens',
      category: 'Mobile App & KI / 2026 – Heute',
      description:
        'Kollaborative mobile Anwendung entwickelt mit React Native und Spring Boot für Umweltbildung und Erhaltung gefährdeter Arten in Argentinien. Entwickelt zur Integration von Computer-Vision-Modellen zur automatischen Artenerkennung aus Bildern.',
    },
    pusicat: {
      title: 'E-Commerce-System',
      category: 'Full Stack / 2025',
      description:
        'E-Commerce-Plattform mit entkoppelter Frontend/Backend-Architektur (React + Spring Boot) für Produktverwaltung, Benutzerauthentifizierung und Kaufabwicklung.',
    },
  },
  skills: {
    number: '03',
    title: 'Fähigkeiten',
    subtitle: 'Technologien & Arbeitsbereiche',
    categories: [
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs'] },
      { title: 'Datenbank', items: ['PostgreSQL', 'MySQL', 'JPA', 'Hibernate'] },
      { title: 'Mobile & Algorithmen', items: ['React Native', 'Expo', 'Genetische Algorithmen', 'Computer Vision', 'Git / GitHub'] },
      { title: 'Sprachen', items: ['Spanisch (Muttersprache)', 'Englisch (B2)', 'Deutsch (B1 in Bearbeitung)'] },
    ],
  },
  experience: {
    number: '04',
    title: 'Forschung & Erfahrung',
    subtitle: 'Akademische Projekte und angewandte Forschung',
    badges: {
      research: 'Forschung',
      project: 'Projekt',
      education: 'Ausbildung',
    },
    items: [
      {
        period: 'Mai 2026 — Heute',
        title: 'Nachwuchsforscher',
        organization: 'Projekt 23/C226-A-2026 · Dir. Dr. Rosanna Costaguta · UNSE',
        description:
          'Forschung an der ColaborAR-Plattform zur automatischen Gruppenbildung von Studierenden mittels genetischer Algorithmen für experimentelle CSCL-Sitzungen.',
        type: 'research',
        tags: ['Genetische Algorithmen', 'CSCL / ACSC', 'UNSE'],
      },
      {
        period: '2026 — Heute',
        title: 'BioSacha — Argentinische Fauna & KI',
        organization: 'Persönliches Projekt',
        description:
          'Mobile App in React Native und Spring Boot für den Umweltschutz und die automatische Artenidentifikation mit Computer-Vision-Modellen.',
        type: 'project',
        tags: ['React Native', 'Spring Boot', 'Computer Vision'],
      },
      {
        period: '2025',
        title: 'E-Commerce-System',
        organization: 'Persönliches Projekt',
        description:
          'Vollständige E-Commerce-Plattform mit entkoppelter Architektur in React und Spring Boot zur Verwaltung von Katalog, Bestellungen und Benutzern.',
        type: 'project',
        tags: ['React', 'Spring Boot', 'PostgreSQL'],
      },
      {
        period: '2022 — Heute',
        title: 'Bachelor in Informationssystemen',
        organization: 'UNSE (Nationale Universität von Santiago del Estero)',
        description:
          '59% Studiengang abgeschlossen · 76% Hochschulanalyst abgeschlossen · Notendurchschnitt: 7.54.',
        type: 'education',
        tags: ['Informationssysteme', 'UNSE', 'Durchschnitt: 7.54'],
      },
    ],
  },
  contact: {
    number: '05',
    heading: 'Haben Sie ein Projekt',
    headingLine2: 'oder ein Angebot im Sinn?',
    subheading: 'Lassen Sie uns etwas Bedeutungsvolles bauen.',
    emailLabel: 'E-Mail',
    githubLabel: 'GitHub',
    footerName: '© 2026 Osiris M. Corrales',
  },
};
