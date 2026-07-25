export interface SkillCategoryData {
  title: string;
  items: string[];
}

export const SKILLS: SkillCategoryData[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'JPA', 'Hibernate'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vite'],
  },
];
