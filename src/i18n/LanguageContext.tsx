import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { en } from './translations/en';
import { es } from './translations/es';
import { de } from './translations/de';

const TRANSLATIONS: Record<Language, Translations> = { en, es, de };

const STORAGE_KEY = 'portfolio-lang';

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === 'en' || stored === 'es' || stored === 'de')) {
      return stored;
    }
  } catch {
    // localStorage unavailable
  }

  // Detect browser language or fallback to Spanish
  const browserLang = navigator.language.slice(0, 2);
  if (browserLang === 'en') return 'en';
  if (browserLang === 'de') return 'de';
  return 'es';
}

interface LanguageContextValue {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable
    }
    document.documentElement.lang = lang;
  }, []);

  const value: LanguageContextValue = {
    language,
    t: TRANSLATIONS[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
