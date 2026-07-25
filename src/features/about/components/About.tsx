import { SectionHeader } from '../../../components/SectionHeader/SectionHeader';
import { ScrollReveal } from '../../../components/ScrollReveal/ScrollReveal';
import type { Translations } from '../../../i18n';

interface AboutProps {
  t: Translations;
}

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            number={t.about.number}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Main Narrative & Research */}
          <div className="flex flex-col">
            <ScrollReveal delay={100}>
              <p className="font-heading text-2xl sm:text-3xl font-light leading-snug text-carbon-text mb-6">
                {t.about.lead}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base text-carbon-secondary leading-relaxed mb-4 max-w-2xl">
                {t.about.body1}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-base text-carbon-secondary leading-relaxed mb-8 max-w-2xl">
                {t.about.body2}
              </p>
            </ScrollReveal>

            {/* Research Spotlight Block — Clean Minimal Accent */}
            <ScrollReveal delay={350}>
              <div className="my-4 pl-6 border-l-2 border-wine flex flex-col py-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-wine">
                    {t.research.badge}
                  </span>
                  <span className="text-xs text-carbon-muted font-mono">
                    · {t.research.projectCode}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-normal text-carbon-text leading-snug mb-2">
                  {t.research.title}
                </h3>
                <p className="text-xs text-carbon-muted mb-3">
                  {t.research.director} — {t.research.institution}
                </p>
                <p className="text-sm text-carbon-secondary leading-relaxed mb-4 max-w-xl">
                  {t.research.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.research.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-carbon-muted tracking-wide"
                    >
                      {i > 0 && <span className="mr-2 text-carbon-subtle">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Academic Progress & Focus Areas */}
          <div className="flex flex-col gap-10">
            {/* Academic Metrics */}
            <ScrollReveal delay={250}>
              <div className="border-t border-warm-border pt-6">
                <span className="text-xs font-medium tracking-widest uppercase text-carbon-muted block mb-6">
                  {t.about.stats.degreeLabel}
                </span>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="font-heading text-3xl sm:text-4xl font-light text-carbon-text block leading-none">
                      {t.about.stats.degreeProgress}
                    </span>
                    <span className="text-[11px] text-carbon-muted tracking-wider uppercase block mt-2">
                      Licenciatura
                    </span>
                  </div>
                  <div>
                    <span className="font-heading text-3xl sm:text-4xl font-light text-carbon-text block leading-none">
                      {t.about.stats.analystProgress}
                    </span>
                    <span className="text-[11px] text-carbon-muted tracking-wider uppercase block mt-2">
                      Analista
                    </span>
                  </div>
                  <div>
                    <span className="font-heading text-3xl sm:text-4xl font-light text-wine block leading-none">
                      {t.about.stats.gpa}
                    </span>
                    <span className="text-[11px] text-carbon-muted tracking-wider uppercase block mt-2">
                      {t.about.stats.gpaLabel}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Areas of Interest */}
            <ScrollReveal delay={350}>
              <div className="border-t border-warm-border pt-6">
                <span className="text-xs font-medium tracking-widest uppercase text-carbon-muted block mb-4">
                  {t.about.interestsLabel}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {t.about.interests.map((interest, i) => (
                    <li key={i} className="text-sm text-carbon-secondary flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-wine/60" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
