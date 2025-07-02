import { useI18n } from '../../i18n';

const MissionVision = () => {
  const { t } = useI18n();
  return (
    <section className="about-mission-vision-row">
      <div className="about-mission-card">
        <h2>{t('missionTitle')}</h2>
        <p>{t('mission')}</p>
      </div>
      <div className="about-vision-card">
        <h2>{t('visionTitle')}</h2>
        <p>{t('vision')}</p>
      </div>
    </section>
  );
};

export default MissionVision;
