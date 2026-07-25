import { useTranslation } from '../../i18n';
import { Contact } from './components/Contact';

export function ContactSection() {
  const { t } = useTranslation();
  return <Contact t={t} />;
}
