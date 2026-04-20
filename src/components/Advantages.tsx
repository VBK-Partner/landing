import styles from "./Advantages.module.css";

const ADVANTAGES = [
  {
    num: "01",
    title: "Власне виробництво",
    desc: "Пиломатеріали виготовляються на власному виробництві з контролем якості на кожному етапі.",
  },
  {
    num: "02",
    title: "Чесна ціна від виробника",
    desc: "Працюємо напряму без посередників — ви отримуєте найкращу ціну на якісну продукцію.",
  },
  {
    num: "03",
    title: "Оперативна доставка",
    desc: "Вантаж виїжджає до вас моментально. Доставка по Києву та по всій Україні в найкоротші терміни.",
  },
  {
    num: "04",
    title: "Все завжди в наявності",
    desc: "Широкий асортимент пиломатеріалів та будматеріалів завжди на складі в Києві.",
  },
  {
    num: "05",
    title: "Офіційна діяльність",
    desc: "ТОВ із повним пакетом документації, ліцензій та допусків до виробництва та будівництва.",
  },
  {
    num: "06",
    title: "Комплексний підхід",
    desc: "Від постачання пиломатеріалів до повного циклу будівельних робіт — все в одному місці.",
  },
];

export default function Advantages() {
  return (
    <section className={styles.advantages} id="advantages">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.label}>Чому обирають нас</div>
          <h2 className={styles.title}>Наші конкурентні переваги</h2>
          <p className={styles.desc}>
            Ми не просто постачальник — ми виробник, який бере на себе
            відповідальність за якість кожного кубометра пиломатеріалів.
          </p>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 3L4 9v8c0 6.627 5.373 12 12 12s12-5.373 12-12V9L16 3Z"
                  fill="rgba(245,166,35,0.15)"
                  stroke="#f5a623"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 16l3 3 7-7"
                  stroke="#f5a623"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <strong>Ліцензований виробник</strong>
              <p>
                Вся продукція виготовляється відповідно до стандартів якості
                України
              </p>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {ADVANTAGES.map((adv) => (
            <div key={adv.num} className={styles.card}>
              <span className={styles.cardNum}>{adv.num}</span>
              <h3 className={styles.cardTitle}>{adv.title}</h3>
              <p className={styles.cardDesc}>{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
