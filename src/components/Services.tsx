import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="6"
          y="8"
          width="28"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6 16h28M6 24h28M14 8v24M26 8v24"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Брус обрізний та строганий",
    desc: "Брус різних розмірів: 200×200, 150×150, 100×100, 50×50, 40×40 мм. Свіжопил та сухий строганий брус від виробника.",
    features: [
      "Брус свіжопил",
      "Брус сухий строганий",
      "Імітація бруса",
      "Усі розміри в наявності",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M6 12h28v4H6zM6 20h28v4H6zM6 28h28v4H6z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Дошка обрізна та строганна",
    desc: "Дошка свіжопил та суха строганна всіх розмірів. Використовується для підлоги, обшивки стін, обрешітки та будівельних робіт.",
    features: [
      "Дошка свіжопил",
      "Дошка суха строганна",
      "Дошка обрізна",
      "Усі розміри",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M8 32V10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 14h16M12 20h16M12 26h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 32h28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Вагонка та оздоблювальні матеріали",
    desc: "Вагонка сосна відповідає європейським стандартам. Надійне пазо-коньковое кріплення, якісна обробка та точна геометрія.",
    features: [
      "Вагонка сосна",
      "Терасна дошка",
      "Дошка для підлоги",
      "Імітація бруса",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M20 10v10l6 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Сухостій та спеціальні матеріали",
    desc: "Сухостій усіх розмірів у наявності. Також пропонуємо фанеру, плити OSB, кирпич та інші будівельні матеріали.",
    features: [
      "Сухостій",
      "Фанера ламінована",
      "Плити OSB",
      "Кирпич будівельний",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M6 32V16l14-8 14 8v16H26V22H14v10H6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M16 32v-8h8v8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Будівництво та реконструкція",
    desc: "Зведення будівель будь-якого типу «під ключ», реконструкція та капітальний ремонт промислових, комерційних та житлових об'єктів.",
    features: [
      "Нове будівництво",
      "Реконструкція",
      "Капітальний ремонт",
      "Монтаж конструкцій",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M8 32h24M10 32V20l10-12 10 12v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24h8M16 28h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Покрівельні роботи",
    desc: "Виконуємо покрівельні роботи будь-якої складності. Постачаємо бітумну черепицю та металочерепицю різних кольорів.",
    features: [
      "Бітумна черепиця",
      "Металочерепиця",
      "Монтаж покрівлі",
      "Ремонт даху",
    ],
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Продукція та послуги</div>
          <h2 className={styles.title}>Каталог продукції та послуг</h2>
          <p className={styles.subtitle}>
            Пиломатеріали від виробника, будівельні матеріали та повний спектр
            будівельних послуг для реалізації вашого проєкту
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.cardFeatures}>
                {service.features.map((f) => (
                  <li key={f} className={styles.cardFeature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
