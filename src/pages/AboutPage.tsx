import { useI18n } from '../i18n';
import MissionVision from '../components/About/MissionVision';
import TeamSection from '../components/About/TeamSection';
import './AboutSections.css';

const AboutPage = () => {
  const { t } = useI18n();
  return (
    <div className="fade-in about-page">
      {/* Hero/Intro Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">{t('about')}</h1>
          <p className="about-hero-desc">{t('aboutText')}</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Our Team Section - Modern Cards */}
      <TeamSection />
    </div>
  );
};

export default AboutPage;
