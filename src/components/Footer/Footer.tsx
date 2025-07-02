import './Footer.css';
import { useI18n } from '../../i18n';

const FooterLinks = [
  { href: '/', key: 'home' as const },
  { href: '/about', key: 'about' as const },
  { href: '/services', key: 'services' as const },
  { href: '/contact', key: 'contact' as const },
];

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">BPM – Body Power Mind</div>
        <div className="footer-links">
          {FooterLinks.map(link => (
            <a href={link.href} className="footer-link" key={link.key}>
              {t(link.key)}
            </a>
          ))}
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} BPM. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
