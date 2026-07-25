interface SkillCategoryProps {
  title: string;
  items: string[];
  index: number;
}

export function SkillCategory({ title, items, index }: SkillCategoryProps) {
  return (
    <div className="p-6 border border-warm-border bg-transparent transition-all duration-300 hover:bg-warm-surface hover:border-warm-border-light group">
      <div className="flex items-baseline gap-3 mb-5 pb-4 border-b border-warm-border">
        <span className="font-heading text-xs text-carbon-subtle tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-heading text-base font-medium tracking-wide text-carbon-text">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-carbon-secondary pl-4 relative transition-colors duration-200 group-hover:text-carbon-text before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1 before:h-[1px] before:bg-carbon-subtle group-hover:before:bg-wine"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
