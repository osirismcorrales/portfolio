import './App.css';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './features/hero';
import { AboutSection } from './features/about';
import { WorkSection } from './features/work';
import { SkillsSection } from './features/skills';
import { ExperienceSection } from './features/experience';
import { ContactSection } from './features/contact';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </LanguageProvider>
  );
}

export default App;
