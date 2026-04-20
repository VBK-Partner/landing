import styles from "./About.module.css";

const VALUES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3L3 9v10l11 6 11-6V9L14 3Z"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v16M3 9l11 6M25 9l-11 6"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Якість",
    desc: "Власне виробництво з контролем якості на кожному етапі — від сировини до готового виробу.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#f5a623" strokeWidth="1.8" />
        <path
          d="M14 8v6l4 2.5"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Швидкість",
    desc: "Вантаж виїжджає до вас моментально — оперативна доставка по Києву та області.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M5 14s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8Z"
          stroke="#f5a623"
          strokeWidth="1.8"
        />
        <circle cx="14" cy="14" r="3" stroke="#f5a623" strokeWidth="1.8" />
      </svg>
    ),
    title: "Вигода",
    desc: "Чесна ціна напряму від виробника без посередників та націнок.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S4 19.523 4 14"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 14l3 3 6-6"
          stroke="#f5a623"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Надійність",
    desc: "Високий рівень сервісу, офіційні договори та гарантії на всю продукцію та роботи.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Про компанію</div>
          <h2 className={styles.title}>
            Виробник пиломатеріалів <br />
            та будівельний партнер
          </h2>
          <p className={styles.text}>
            <strong>ТОВ «Виробничо-будівельна компанія «Партнер»</strong> — це
            виробник якісних пиломатеріалів та команда досвідчених фахівців у
            сфері будівництва. Ми виробляємо брус, обрізну дошку, вагонку, дошку
            для підлоги, терасну дошку та іншу продукцію з деревини. Працюємо
            напряму без посередників, що гарантує чесну ціну та стабільну
            якість.
          </p>
          <p className={styles.text}>
            Окрім виробництва пиломатеріалів, ми також виконуємо будівельні
            роботи будь-якої складності: нове будівництво, реконструкцію та
            капітальний ремонт промислових, комерційних та житлових об'єктів у
            Києві та по всій Україні.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5C12.5 3.515 10.485 1.5 8 1.5ZM8 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
                  fill="#f5a623"
                />
              </svg>
              <span>м. Київ, пров. Куренівський, 19/5, оф. 3/21</span>
            </div>
            <div className={styles.detailItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="1.5"
                  y="3"
                  width="13"
                  height="10"
                  rx="1.5"
                  stroke="#f5a623"
                  strokeWidth="1.2"
                />
                <path
                  d="M1.5 5.5l6.5 4 6.5-4"
                  stroke="#f5a623"
                  strokeWidth="1.2"
                />
              </svg>
              <a href="mailto:vbkpartner@ukr.net">vbkpartner@ukr.net</a>
            </div>
            <div className={styles.detailItem}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="#f5a623"
                  strokeWidth="1.2"
                />
                <path
                  d="M5 8h6M5 10.5h4"
                  stroke="#f5a623"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span>Код ЄДРПОУ: 45715329</span>
            </div>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
