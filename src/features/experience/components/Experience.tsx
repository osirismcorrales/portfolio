import type { Translations } from '../../../i18n';

interface ExperienceItemData {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'project' | 'research';
  tags?: string[];
}

interface ExperienceProps {
  items: ExperienceItemData[];
  badges: Translations['experience']['badges'];
}

export function Experience({ items, badges }: ExperienceProps) {
  const getBadgeStyle = (type: ExperienceItemData['type']) => {
    switch (type) {
      case 'education':
        return 'text-wine border-wine/20 bg-wine/10';
      case 'research':
        return 'text-carbon-text border-warm-border-light bg-warm-border/50';
      case 'project':
      default:
        return 'text-carbon-muted border-warm-border bg-transparent';
    }
  };

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr] md:grid-cols-[180px_40px_1fr] gap-0 min-h-[130px]"
        >
          {/* Left Period & Badge (Desktop) */}
          <div className="hidden md:flex flex-col gap-2 pt-1.5 text-right pr-4 items-end">
            <span className="text-xs tracking-widest uppercase text-carbon-muted font-mono">
              {item.period}
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 border rounded-sm ${getBadgeStyle(
                item.type
              )}`}
            >
              {badges[item.type] || item.type}
            </span>
          </div>

          {/* Timeline Connector */}
          <div className="hidden md:flex flex-col items-center pt-1.5">
            <span
              className={`w-2 h-2 rounded-full border shrink-0 z-10 ${
                index === 0
                  ? 'border-wine bg-wine'
                  : 'border-warm-border-light bg-warm-bg'
              }`}
            />
            {index < items.length - 1 && (
              <span className="w-[1px] grow bg-warm-border my-1" />
            )}
          </div>

          {/* Right Content */}
          <div className="pl-0 md:pl-4 pb-10">
            {/* Period & Badge Header for Mobile */}
            <div className="flex md:hidden items-center justify-between gap-2 mb-2">
              <span className="text-xs text-carbon-muted tracking-widest uppercase font-mono">
                {item.period}
              </span>
              <span
                className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 border rounded-sm ${getBadgeStyle(
                  item.type
                )}`}
              >
                {badges[item.type] || item.type}
              </span>
            </div>

            <h3 className="font-heading text-base font-medium text-carbon-text leading-snug">
              {item.title}
            </h3>
            <span className="text-xs font-medium text-carbon-muted block mt-1">
              {item.organization}
            </span>
            <p className="text-sm text-carbon-secondary leading-relaxed mt-3 max-w-xl">
              {item.description}
            </p>

            {/* Tags Pills */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-medium tracking-wide text-carbon-muted px-2.5 py-0.5 border border-warm-border bg-warm-surface/60 rounded-sm transition-colors duration-200 hover:border-wine/40 hover:text-carbon-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
