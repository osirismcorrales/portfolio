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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out py-5 ${
          isScrolled || isMenuOpen
            ? 'bg-warm-bg/95 backdrop-blur-md py-3 border-b border-warm-border'
            : ''
        } ${!isMenuOpen && isHidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <a
            href="#hero"
            className="font-heading text-lg font-semibold tracking-wider text-carbon-text hover:opacity-70 transition-opacity relative z-50"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            OC
          </a>

          {/* Links Desktop */}
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

          {/* Language Switcher Desktop */}
          <div className="hidden md:flex items-center gap-1 ml-6 pl-6 border-l border-warm-border">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`text-[10px] font-medium tracking-widest uppercase px-2 py-1 border transition-all ${
                  language === lang.code
                    ? 'text-carbon-text border-warm-border bg-warm-surface'
                    : 'text-carbon-subtle border-transparent hover:text-carbon-text'
                }`}
                onClick={() => setLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 z-50 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1px] bg-carbon-text transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1px] bg-carbon-text transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-warm-bg/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center px-6 transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center">
          {SECTION_KEYS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className={`text-xl font-heading font-normal tracking-wider uppercase transition-colors duration-200 ${
                  activeSection === key ? 'text-carbon-text font-medium' : 'text-carbon-muted'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(key);
                }}
              >
                {navLabels[key]}
              </a>
            </li>
          ))}

          {/* Language Switcher Mobile */}
          <li className="mt-8 pt-6 border-t border-warm-border w-full flex justify-center">
            <div className="flex items-center gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  className={`text-xs font-medium tracking-widest uppercase px-4 py-2 border transition-all ${
                    language === lang.code
                      ? 'text-carbon-text border-warm-border bg-warm-surface shadow-sm'
                      : 'text-carbon-subtle border-transparent hover:text-carbon-text'
                  }`}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
