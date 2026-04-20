import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="hero">
      {/* Animated background */}
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Виробництво та будівництво
        </div>

        <h1 className={styles.title}>
          Пиломатеріали <br />
          <span className={styles.accent}>від виробника</span>
        </h1>

        <p className={styles.subtitle}>
          ТОВ «Виробничо-будівельна компанія «Партнер» — виробник якісних
          пиломатеріалів та надійний партнер у будівництві. Брус, дошка, вагонка
          та інші пиломатеріали напряму від виробника за чесною ціною з
          доставкою по Києву та всій Україні.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.btnPrimary}
            onClick={() => scrollTo("#contact")}
          >
            Замовити пиломатеріали
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => scrollTo("#services")}
          >
            Каталог продукції
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              10<span className={styles.statPlus}>+</span>
            </span>
            <span className={styles.statLabel}>Років на ринку</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>
              1000<span className={styles.statPlus}>+</span>
            </span>
            <span className={styles.statLabel}>м³ пиломатеріалів на рік</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>
              200<span className={styles.statPlus}>+</span>
            </span>
            <span className={styles.statLabel}>Задоволених клієнтів</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>
              100<span className={styles.statPlus}>%</span>
            </span>
            <span className={styles.statLabel}>Якість продукції</span>
          </div>
        </div>
      </div>

      <button
        className={styles.scrollDown}
        onClick={() => scrollTo("#about")}
        aria-label="Прокрутити вниз"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
