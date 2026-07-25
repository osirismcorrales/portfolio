import type { ProjectData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface WorkGridProps {
  projects: ProjectData[];
  projectTranslations: Record<string, { title: string; category: string; description: string; tabs?: string[] }>;
}

export function WorkGrid({ projects, projectTranslations }: WorkGridProps) {
  return (
    <div className="work-grid">
      {projects.map((project, index) => {
        const pt = projectTranslations[project.id] || {
          title: project.id,
          category: '',
          description: '',
        };
        return (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            title={pt.title}
            category={pt.category}
            description={pt.description}
            tabs={pt.tabs}
          />
        );
      })}
    </div>
  );
}
