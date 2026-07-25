import { SkillCategory } from './SkillCategory';

interface SkillsProps {
  categories: Array<{ title: string; items: string[] }>;
}

export function Skills({ categories }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          items={category.items}
          index={index}
        />
      ))}
    </div>
  );
}
