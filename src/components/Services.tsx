import styles from "./Services.module.css";

const SERVICES = [
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
    title: "Нове будівництво",
    desc: "Зведення будівель і споруд будь-якого типу та призначення «під ключ» з нуля — від фундаменту до здачі в експлуатацію.",
    features: [
      "Житлові будинки",
      "Комерційні об'єкти",
      "Промислові споруди",
      "Адміністративні будівлі",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="6"
          y="20"
          width="28"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 20V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6 26h28M14 26v8M26 26v8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Реконструкція",
    desc: "Повне або часткове оновлення будівель зі зміною конструктивних рішень, перепланування та технічного переоснащення.",
    features: [
      "Перепланування",
      "Зміцнення конструкцій",
      "Модернізація фасадів",
      "Розширення площ",
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
        <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M14 32v-4h4v4M22 32v-4h4v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Капітальний ремонт",
    desc: "Комплексний ремонт з повною заміною або відновленням зношених конструктивних елементів та інженерних систем.",
    features: [
      "Покрівельні роботи",
      "Інженерні мережі",
      "Фасадні роботи",
      "Оздоблення приміщень",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M34 20a14 14 0 1 1-28 0 14 14 0 0 1 28 0Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M20 12v8l5 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8l4 4M32 8l-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Будівельний контроль",
    desc: "Технічний нагляд і незалежний контроль якості будівельних робіт на вашому об'єкті від сторонніх підрядників.",
    features: [
      "Технічний нагляд",
      "Перевірка матеріалів",
      "Контроль технологій",
      "Здача об'єкту",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M10 28L6 34h28l-4-6M14 22l-4 6M26 22l4 6M20 8v14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 22h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Монтаж конструкцій",
    desc: "Монтаж металевих, залізобетонних та дерев'яних несучих і огороджувальних конструкцій будь-якої складності.",
    features: [
      "Металоконструкції",
      "Залізобетон",
      "Ферми і перекриття",
      "Зварювальні роботи",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect
          x="6"
          y="6"
          width="28"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6 14h28M14 6v28"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 20h6M22 25h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="11" cy="22" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Проєктування",
    desc: "Розробка проєктно-кошторисної документації, архітектурних та конструктивних рішень для об'єктів будівництва.",
    features: [
      "Архітектурні рішення",
      "Конструктивні схеми",
      "Кошторисна документація",
      "Узгодження проєктів",
    ],
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Що ми робимо</div>
          <h2 className={styles.title}>Наші послуги</h2>
          <p className={styles.subtitle}>
            Повний спектр будівельних та проєктних послуг для реалізації вашого
            проєкту будь-якої складності
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
