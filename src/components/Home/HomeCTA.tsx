import React from 'react';
import { useI18n } from '../../i18n';

const HomeCTA: React.FC = () => {
  const { t } = useI18n();
  return (
    <section
      style={{ textAlign: 'center', margin: '3.5rem 0 0 0' }}
      className="fade-in"
    >
      <h3
        style={{
          fontSize: '2.1rem',
          fontWeight: 700,
          marginBottom: '2.2rem',
          color: '#7be495',
          letterSpacing: '1.2px',
          lineHeight: 1.18,
        }}
      >
        {t('ready')}
      </h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="/contact"
          className="cta cta-main"
          style={{
            marginTop: 0,
            marginBottom: 0,
            position: 'relative',
            zIndex: 1,
            textDecoration: 'none',
          }}
        >
          {t('joinNow')}
        </a>
      </div>
    </section>
  );
};

export default HomeCTA;
