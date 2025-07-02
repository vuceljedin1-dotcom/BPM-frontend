import { useI18n } from '../../i18n';

const team = [
  {
    name: 'Elvira Subašić',
    role: 'BPM president, instructor, educator',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Edin Vučelj',
    role: 'WAKO world kickboxing champion, main instructor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Maša Čengić',
    role: 'Visual Identity Artist',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const TeamSection = () => {
  const { t } = useI18n();
  return (
    <section className="about-team-section">
      <h2 className="about-team-title">{t('ourTeam')}</h2>
      <div className="about-team-cards">
        {team.map((member) => (
          <div className="about-team-card" key={member.name}>
            <div className="about-team-avatar" style={{ backgroundImage: `url(${member.avatar})` }}></div>
            <div className="about-team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
