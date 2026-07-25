interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-heading text-xs font-normal tracking-widest uppercase text-carbon-muted">
          {number}
        </span>
        <span className="block h-[1px] bg-warm-border w-24" />
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-carbon-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-carbon-muted mt-3 max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
