export type Language = 'en' | 'es' | 'de';

export interface Translations {
  nav: {
    about: string;
    work: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    location: string;
    role: string;
    subtitle: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    number: string;
    title: string;
    subtitle: string;
    lead: string;
    body1: string;
    body2: string;
    interestsLabel: string;
    interests: string[];
    stats: {
      degreeProgress: string;
      degreeLabel: string;
      degreeSublabel: string;
      analystProgress: string;
      analystLabel: string;
      analystSublabel: string;
      gpa: string;
      gpaLabel: string;
    };
  };
  timeline: {
    label: string;
    items: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  research: {
    badge: string;
    title: string;
    projectCode: string;
    director: string;
    institution: string;
    topic: string;
    description: string;
    tags: string[];
  };
  work: {
    number: string;
    title: string;
    subtitle: string;
  };
  projects: Record<string, {
    title: string;
    category: string;
    description: string;
    tabs?: string[];
  }>;
  skills: {
    number: string;
    title: string;
    subtitle: string;
    categories: Array<{
      title: string;
      items: string[];
    }>;
  };
  experience: {
    number: string;
    title: string;
    subtitle: string;
    badges: {
      research: string;
      project: string;
      education: string;
    };
    items: Array<{
      period: string;
      title: string;
      organization: string;
      description: string;
      type: 'education' | 'project' | 'research';
      tags?: string[];
    }>;
  };
  contact: {
    number: string;
    heading: string;
    headingLine2: string;
    subheading: string;
    emailLabel: string;
    githubLabel: string;
    footerName: string;
  };
}
