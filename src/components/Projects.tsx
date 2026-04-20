import styles from "./Projects.module.css";

const PROJECTS = [
  {
    category: "Пиломатеріали",
    title: "Поставка брусу для житлового комплексу",
    location: "Київ, Подільський р-н",
    area: "120 м³",
    year: "2024",
    color: "#1a3a6b",
  },
  {
    category: "Пиломатеріали",
    title: "Дошка та вагонка для заміського будинку",
    location: "Бровари, Київська обл.",
    area: "85 м³",
    year: "2024",
    color: "#2351a3",
  },
  {
    category: "Пиломатеріали",
    title: "Терасна дошка для ресторанного комплексу",
    location: "Київ, Оболонський р-н",
    area: "350 м²",
    year: "2023",
    color: "#0d4f8b",
  },
  {
    category: "Будівництво",
    title: "Складський комплекс",
    location: "Бровари, Київська обл.",
    area: "8 000 м²",
    year: "2022",
    color: "#1a3a6b",
  },
  {
    category: "Покрівля",
    title: "Монтаж покрівлі приватного будинку",
    location: "Вишгород, Київська обл.",
    area: "280 м²",
    year: "2023",
    color: "#2351a3",
  },
  {
    category: "Реконструкція",
    title: "Торговий павільйон",
    location: "Київ, Шевченківський р-н",
    area: "950 м²",
    year: "2024",
    color: "#0d4f8b",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Портфоліо</div>
          <h2 className={styles.title}>Завершені проєкти</h2>
          <p className={styles.subtitle}>
            Вибірка реалізованих поставок пиломатеріалів та будівельних
            об'єктів, які демонструють наш досвід та рівень якості
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ "--card-color": project.color }}
            >
              <div className={styles.cardVisual}>
                <div className={styles.cardBg} />
                <div className={styles.cardPattern}>
                  {/* SVG building illustration */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 280 200"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <rect
                      x="40"
                      y="60"
                      width="80"
                      height="120"
                      fill="rgba(255,255,255,0.06)"
                      rx="2"
                    />
                    <rect
                      x="50"
                      y="70"
                      width="20"
                      height="24"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="80"
                      y="70"
                      width="20"
                      height="24"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="50"
                      y="104"
                      width="20"
                      height="24"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="80"
                      y="104"
                      width="20"
                      height="24"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="60"
                      y="148"
                      width="20"
                      height="32"
                      fill="rgba(255,255,255,0.12)"
                      rx="1"
                    />
                    <rect
                      x="140"
                      y="90"
                      width="100"
                      height="90"
                      fill="rgba(255,255,255,0.06)"
                      rx="2"
                    />
                    <rect
                      x="152"
                      y="102"
                      width="18"
                      height="22"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="180"
                      y="102"
                      width="18"
                      height="22"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="208"
                      y="102"
                      width="18"
                      height="22"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="152"
                      y="134"
                      width="18"
                      height="22"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="180"
                      y="134"
                      width="18"
                      height="22"
                      fill="rgba(255,255,255,0.1)"
                      rx="1"
                    />
                    <rect
                      x="175"
                      y="160"
                      width="14"
                      height="20"
                      fill="rgba(255,255,255,0.12)"
                      rx="1"
                    />
                    <rect
                      x="0"
                      y="178"
                      width="280"
                      height="22"
                      fill="rgba(255,255,255,0.05)"
                      rx="0"
                    />
                    <circle
                      cx="230"
                      cy="40"
                      r="24"
                      fill="rgba(245,166,35,0.12)"
                    />
                    <circle
                      cx="230"
                      cy="40"
                      r="16"
                      fill="rgba(245,166,35,0.08)"
                    />
                  </svg>
                </div>
                <span className={styles.cardCategory}>{project.category}</span>
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardMeta}>
                  <div className={styles.metaItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4Zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="currentColor"
                      />
                    </svg>
                    {project.location}
                  </div>
                  <div className={styles.metaItem}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect
                        x="1.5"
                        y="1.5"
                        width="11"
                        height="11"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M1.5 5.5h11"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4.5 1.5v2M9.5 1.5v2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {project.year}
                  </div>
                </div>
                <div className={styles.cardArea}>
                  <span>Площа:</span>
                  <strong>{project.area}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Зацікавлені у співпраці? Розкажіть нам про ваш проєкт.</p>
          <button
            className={styles.ctaBtn}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Обговорити проєкт
          </button>
        </div>
      </div>
    </section>
  );
}
