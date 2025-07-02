import React from 'react';
import { useI18n } from '../../i18n';

const cards = [
  {
    icon: '💪',
    label: 'functional' as const,
    desc: 'functionalDesc' as const,
  },
  {
    icon: '🥋',
    label: 'martial' as const,
    desc: 'martialDesc' as const,
  },
  {
    icon: '🧒',
    label: 'kids' as const,
    desc: 'kidsDesc' as const,
  },
];

const CardList: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="card-list slide-up" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '2.5rem',
      margin: '3rem auto',
      maxWidth: 1200,
      width: '100%',
      boxSizing: 'border-box',
      padding: '0 2vw',
    }}>
      {cards.map(card => (
        <div className="card" key={card.label}>
          <span className="icon" role="img" aria-label={card.label}>
            {card.icon}
          </span>
          <h3 style={{ color: '#7be495', fontWeight: 700 }}>
            {t(card.label)}
          </h3>
          <p style={{ fontSize: '1.05rem' }}>
            {t(card.desc)}
          </p>
          <a href="/about" className="cta">
            {t('learnMore')}
          </a>
        </div>
      ))}
    </section>
  );
};

export default CardList;
