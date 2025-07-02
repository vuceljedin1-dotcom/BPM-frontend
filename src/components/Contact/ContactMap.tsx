import React from 'react';
import { useI18n } from '../../i18n';

const ContactMap: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="contact-map-section">
      <h2>{t('location')}</h2>
      <p>Hamdije Kreševljakovića 61 (Papagajka), Sarajevo</p>
      <iframe
        title="BPM Location"
        src="https://www.google.com/maps?q=Hamdije+Kreševljakovića+61,+Sarajevo&output=embed"
        width="100%"
        height="260"
        style={{ border: 0, borderRadius: 16 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;
