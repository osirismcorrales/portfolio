interface ButtonProps {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function Button({
  label,
  href,
  variant = 'primary',
  icon,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-3 font-body text-xs font-medium tracking-widest uppercase py-3 transition-all duration-300 ease-out cursor-pointer relative whitespace-nowrap group z-10';

  const variants = {
    primary: 'bg-wine text-white border border-wine hover:bg-wine-hover hover:border-wine-hover px-6 overflow-hidden',
    secondary: 'bg-transparent text-carbon-text border border-warm-border hover:border-carbon-secondary hover:bg-warm-surface px-6 overflow-hidden',
    ghost: 'bg-transparent text-carbon-muted border border-transparent px-0 hover:text-carbon-text overflow-visible',
  };

  const className = `${baseClasses} ${variants[variant]}`;

  const content = (
    <>
      <span className="relative z-10">{label}</span>
      {icon && (
        <span className="relative z-10 inline-flex items-center shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {content}
    </button>
  );
}
