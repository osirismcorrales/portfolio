import { Experience } from './components/Experience';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import { useTranslation } from '../../i18n';

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            number={t.experience.number}
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Experience items={t.experience.items} badges={t.experience.badges} />
        </ScrollReveal>
      </div>
    </section>
  );
}
