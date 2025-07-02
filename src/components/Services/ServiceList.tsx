import React from 'react';
import { useI18n } from '../../i18n';

const services = [
  {
    icon: '💪',
    label: 'functional' as const,
    desc: 'functionalDesc' as const,
    price: 'group' as const,
  },
  {
    icon: '🥋',
    label: 'martial' as const,
    desc: 'martialDesc' as const,
    price: 'individual' as const,
  },
  {
    icon: '🧒',
    label: 'kids' as const,
    desc: 'kidsDesc' as const,
    price: 'kidsPrice' as const,
  },
  {
    icon: '💻',
    label: 'online' as const,
    desc: 'onlineDesc' as const,
    price: 'onlinePrice' as const,
  },
];

const ServiceList: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="fade-in" style={{maxWidth: '900px', margin: '2rem auto', display:'flex', flexWrap:'wrap', gap:'2rem', justifyContent:'center'}}>
      {services.map(service => (
        <div className="card" style={{flex:'1 1 300px', minWidth:260}} key={service.label}>
          <span className="icon" role="img" aria-label={service.label}>{service.icon}</span>
          <h2 style={{color:'#7be495'}}>{t(service.label)}</h2>
          <p>{t(service.desc)}</p>
          <div style={{marginTop:'1rem',fontWeight:600}}>{t(service.price)}</div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
