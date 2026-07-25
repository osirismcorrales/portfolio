import { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n';
import { Hero } from './components/Hero';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return <Hero isLoaded={isLoaded} t={t} />;
}
