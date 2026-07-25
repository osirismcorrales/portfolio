import { useTranslation } from '../../i18n';
import { About } from './components/About';

export function AboutSection() {
  const { t } = useTranslation();
  return <About t={t} />;
}
