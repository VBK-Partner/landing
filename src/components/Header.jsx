import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Проєкти", href: "#projects" },
  { label: "Переваги", href: "#advantages" },
  { label: "Контакти", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a
          className={styles.logo}
          href="#hero"
          onClick={() => handleNav("#hero")}
        >
          <div className={styles.logoMark}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#f5a623" />
              <path d="M8 27V14l10-6 10 6v13H22v-7h-8v7H8Z" fill="#1a3a6b" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>ВБК Партнер</span>
            <span className={styles.logoSub}>Будівельна компанія</span>
          </div>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            className={styles.ctaBtn}
            onClick={() => handleNav("#contact")}
          >
            Зв'язатися
          </button>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
