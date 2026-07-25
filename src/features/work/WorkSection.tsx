import { PROJECTS } from './data/projects';
import { WorkGrid } from './components/WorkGrid';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import { useTranslation } from '../../i18n';

export function WorkSection() {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-24 md:py-32 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeader
            number={t.work.number}
            title={t.work.title}
            subtitle={t.work.subtitle}
          />
        </ScrollReveal>
        <WorkGrid projects={PROJECTS} projectTranslations={t.projects} />
      </div>
    </section>
  );
}
