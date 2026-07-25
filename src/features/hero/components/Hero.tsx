import { Button } from '../../../components/Button/Button';
import type { Translations } from '../../../i18n';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4.5 h-4.5" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"/>
  </svg>
);

interface HeroProps {
  isLoaded: boolean;
  t: Translations;
}

export function Hero({ isLoaded, t }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center relative py-24 md:py-32 pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase text-carbon-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-wine animate-pulse" />
              <span>{t.hero.location}</span>
            </div>
          </div>

          {/* Name */}
          <h1
            className={`font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-light leading-none tracking-tight mt-5 transition-all duration-1000 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block">Osiris M.</span>
            <span className="block pl-8 sm:pl-16 text-carbon-secondary">Corrales</span>
          </h1>

          {/* Meta */}
          <div
            className={`mt-8 transition-all duration-700 ease-out delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="w-12 h-[1px] bg-wine mb-4" />
            <p className="font-heading text-lg font-medium tracking-wide text-carbon-text">
              {t.hero.role}
            </p>
            <p className="text-sm text-carbon-muted mt-1 tracking-wide">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p
            className={`mt-6 text-base text-carbon-secondary leading-relaxed max-w-lg transition-all duration-700 ease-out delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {t.hero.description}
          </p>

          {/* Actions */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700 ease-out delay-[1100ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <Button
              label={t.hero.ctaProjects}
              href="#work"
              variant="primary"
              icon={<ArrowIcon />}
            />
            <Button
              label={t.hero.ctaContact}
              href="#contact"
              variant="secondary"
            />
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-5 mt-10 transition-opacity duration-700 ease-out delay-[1300ms] relative z-20 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a
              href="https://github.com/osirismcorrales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-carbon-muted hover:text-carbon-text transition-all duration-200 relative z-10 hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
