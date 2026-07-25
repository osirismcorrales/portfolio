import { type ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1, triggerOnce: true });

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0';
      case 'down':
        return isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0';
      case 'left':
        return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0';
      case 'right':
        return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0';
      case 'none':
      default:
        return isVisible ? 'opacity-100' : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
