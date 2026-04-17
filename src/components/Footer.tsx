import styles from "./Footer.module.css";

const LINKS = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Проєкти", href: "#projects" },
  { label: "Переваги", href: "#advantages" },
  { label: "Контакти", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#f5a623" />
                <path d="M8 27V14l10-6 10 6v13H22v-7h-8v7H8Z" fill="#1a3a6b" />
              </svg>
              <div>
                <span className={styles.logoMain}>ВБК Партнер</span>
                <span className={styles.logoSub}>Будівельна компанія</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              ТОВ «Виробничо-будівельна компанія «Партнер» — надійний партнер у
              сфері будівництва та реконструкції в Україні.
            </p>
          </div>

          <div className={styles.nav}>
            <h4 className={styles.navTitle}>Навігація</h4>
            <ul className={styles.navList}>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollTo(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.requisites}>
            <h4 className={styles.navTitle}>Реквізити</h4>
            <ul className={styles.reqList}>
              <li>
                <span>Повна назва:</span>
                <span>ТОВ «ВБК «Партнер»</span>
              </li>
              <li>
                <span>Код ЄДРПОУ:</span>
                <strong>45715329</strong>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:vbkpartner@ukr.net">vbkpartner@ukr.net</a>
              </li>
              <li>
                <span>Адреса:</span>
                <span>м. Київ, пров. Куренівський, 19/5, оф. 3/21</span>
              </li>
              <li>
                <span>Індекс:</span>
                <span>04073</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ТОВ «Виробничо-будівельна компанія
            «Партнер». Усі права захищено.
          </p>
          <p className={styles.legal}>
            Код ЄДРПОУ 45715329 · Україна, 04073, м. Київ, пров. Куренівський,
            19/5, офіс 3/21
          </p>
        </div>
      </div>
    </footer>
  );
}
