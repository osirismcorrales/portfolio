import { Skills } from './components/Skills';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import { useTranslation } from '../../i18n';

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            number={t.skills.number}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Skills categories={t.skills.categories} />
        </ScrollReveal>
      </div>
    </section>
  );
}
