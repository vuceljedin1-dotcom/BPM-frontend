import { useI18n } from '../../i18n';

const HeroSection = () => {
  const { t } = useI18n();
  return (
    <section
      className="hero fade-in"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '55vh',
        width: '100%',
        position: 'relative',
        borderRadius: 0,
      }}
    >
      <div
        className="hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 700,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1>BPM – Body Power Mind</h1>
        <h2>{t('heroSlogan')}</h2>
        <p
          style={{
            maxWidth: 420,
            margin: '0 auto 1.7rem auto',
            fontSize: '1.15rem',
            lineHeight: 1.6,
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {t('heroDesc')}
        </p>
        <a
          href="/contact"
          className="cta cta-main"
          style={{
            fontSize: '1.35rem',
            padding: '1.25rem 3.2rem',
            boxShadow: '0 6px 40px 0 #7be49566, 0 0 0 4px #7be49533',
            marginTop: '2rem',
            display: 'inline-block',
            letterSpacing: '1.5px',
            fontWeight: 800,
            border: '2.5px solid #7be495',
            position: 'relative',
            overflow: 'hidden',
            alignSelf: 'center',
            textDecoration: 'none',
          }}
        >
          <span className="cta-glow"></span>
          {t('joinNow')}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
