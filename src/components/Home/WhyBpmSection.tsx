import { useI18n } from '../../i18n';

type WhyBpmKey = 'personalized' | 'personalizedDesc' | 'community' | 'communityDesc' | 'mindbody' | 'mindbodyDesc';

const whyBpmRows: {
  img: string;
  alt: string;
  titleKey: WhyBpmKey;
  descKey: WhyBpmKey;
  imgLeft: boolean;
}[] = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Personalized training',
    titleKey: 'personalized',
    descKey: 'personalizedDesc',
    imgLeft: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
    alt: 'Community support',
    titleKey: 'community',
    descKey: 'communityDesc',
    imgLeft: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mind and body wellness',
    titleKey: 'mindbody',
    descKey: 'mindbodyDesc',
    imgLeft: false,
  },
];

const WhyBpmSection = () => {
  const { t } = useI18n();
  return (
    <section className="fade-in why-bpm-section" style={{ margin: '2.5rem 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#7be495', fontWeight: 800, marginBottom: '2.5rem', fontSize: '2.3rem', letterSpacing: '1.2px', textAlign: 'center' }}>
        {t('whyChoose')}
      </h2>
      <div className="why-bpm-points">
        {whyBpmRows.map((row, i) => (
          <div className="why-bpm-row" key={i}>
            {row.imgLeft && (
              <div className="why-bpm-img why-bpm-left">
                <img src={row.img} alt={row.alt} />
              </div>
            )}
            <div className={`why-bpm-text ${row.imgLeft ? 'why-bpm-right' : 'why-bpm-left'}`}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, color: '#7be495' }}>
                {t(row.titleKey)}
              </div>
              <div style={{ fontSize: '1.08rem', color: '#e6f4ea' }}>
                {t(row.descKey)}
              </div>
            </div>
            {!row.imgLeft && (
              <div className="why-bpm-img why-bpm-right">
                <img src={row.img} alt={row.alt} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBpmSection;
