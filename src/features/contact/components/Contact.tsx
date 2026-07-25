import { ScrollReveal } from '../../../components/ScrollReveal/ScrollReveal';
import type { Translations } from '../../../i18n';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ContactProps {
  t: Translations;
}

export function Contact({ t }: ContactProps) {
  const contactLinks = [
    {
      label: t.contact.emailLabel,
      value: 'misaelcorrales17@gmail.com',
      href: 'mailto:misaelcorrales17@gmail.com',
    },
    {
      label: t.contact.githubLabel,
      value: 'github.com/osirismcorrales',
      href: 'https://github.com/osirismcorrales',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-warm-border">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center flex flex-col items-center">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <span className="font-heading text-xs tracking-widest uppercase text-carbon-muted">
                {t.contact.number}
              </span>
              <div className="w-16 h-[1px] bg-warm-border" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-carbon-text">
              {t.contact.heading}<br />{t.contact.headingLine2}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-carbon-muted mt-5 italic font-light">
              {t.contact.subheading}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="w-full max-w-lg mt-16">
            <div className="flex flex-col w-full border-t border-warm-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex justify-between items-center py-5 border-b border-warm-border transition-colors duration-200 hover:bg-warm-surface/50 px-2 sm:px-4 relative z-10 overflow-visible"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="text-xs font-medium tracking-widest uppercase text-carbon-muted group-hover:text-carbon-text transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-3 text-sm text-carbon-secondary group-hover:text-carbon-text transition-colors duration-200">
                    <span>{link.value}</span>
                    <span className="inline-flex shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-wine">
                      <ArrowIcon />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <footer className="mt-24 pt-6 text-center text-xs text-carbon-subtle tracking-wide">
              <span>{t.contact.footerName}</span>
            </footer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
