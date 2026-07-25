import { useTranslation } from '../../i18n';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useState, useEffect } from 'react';
import type { Language } from '../../i18n';

const SECTION_KEYS = ['about', 'work', 'skills', 'experience', 'contact'] as const;
const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export function Navbar() {
  const { language, t, setLanguage } = useTranslation();
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 60);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 300);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    work: t.nav.work,
    skills: t.nav.skills,
    experience: t.nav.experience,
    contact: t.nav.contact,
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out py-5 ${
        isScrolled
          ? 'bg-warm-bg/95 backdrop-blur-md py-3 border-b border-warm-border'
          : ''
      } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-lg font-semibold tracking-wider text-carbon-text hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
        >
          OC
        </a>

        {/* Section Links — Hidden on mobile, visible on desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {SECTION_KEYS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={`relative text-xs font-medium tracking-widest uppercase transition-colors duration-200 hover:text-carbon-text py-1 ${
                  activeSection === key
                    ? 'text-carbon-text after:w-full'
                    : 'text-carbon-muted after:w-0'
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-wine after:transition-all after:duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(key);
                }}
              >
                {navLabels[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher — Always visible on both mobile and desktop */}
        <div className="flex items-center gap-1 md:ml-6 md:pl-6 md:border-l md:border-warm-border">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`text-[10px] font-medium tracking-widest uppercase px-2 py-1 border transition-all cursor-pointer ${
                language === lang.code
                  ? 'text-carbon-text border-warm-border bg-warm-surface shadow-xs'
                  : 'text-carbon-subtle border-transparent hover:text-carbon-text'
              }`}
              onClick={() => setLanguage(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
