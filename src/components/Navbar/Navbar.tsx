import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useI18n();
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const lastScroll = useRef(window.scrollY);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Scroll-triggered navbar visibility (mobile)
  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      if (window.innerWidth <= 900) {
        const currentScroll = window.scrollY;
        if (currentScroll < lastScroll.current || currentScroll < 10) {
          nav.style.top = '0';
        } else {
          nav.style.top = '-80px';
        }
        lastScroll.current = currentScroll;
      } else {
        nav.style.top = '0';
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logo}>BPM</div>
      <div className={styles.hamburger} onClick={toggleMenu} aria-label="Menu" aria-expanded={menuOpen} aria-controls="navLinks">
        <div className={menuOpen ? styles.barOpen : styles.bar}></div>
        <div className={menuOpen ? styles.barOpen : styles.bar}></div>
        <div className={menuOpen ? styles.barOpen : styles.bar}></div>
      </div>
      <ul
        id="navLinks"
        ref={menuRef}
        className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}
        style={menuOpen ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }}
      >
        <li>
          <Link
            to="/"
            className={isActive('/') ? styles.activeLink : styles.link}
            onClick={closeMenu}
          >
            {t('home').toUpperCase()}
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={isActive('/services') ? styles.activeLink : styles.link}
            onClick={closeMenu}
          >
            {t('services').toUpperCase()}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive('/about') ? styles.activeLink : styles.link}
            onClick={closeMenu}
          >
            {t('about').toUpperCase()}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? styles.activeLink : styles.link}
            onClick={closeMenu}
          >
            {t('contact').toUpperCase()}
          </Link>
        </li>
        <li>
          <button
            onClick={() => setLang(lang === 'en' ? 'bs' : 'en')}
            className={styles.flagButton}
            aria-label={lang === 'en' ? 'Switch to Bosnian' : 'Switch to English'}
          >
            {lang === 'en' ? (
              <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="UK flag" className={styles.flagIcon} />
            ) : (
              <img src="https://hatscripts.github.io/circle-flags/flags/ba.svg" alt="Bosnian flag" className={styles.flagIcon} />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
