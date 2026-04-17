import styles from "./Advantages.module.css";

const ADVANTAGES = [
  {
    num: "01",
    title: "Власна матеріально-технічна база",
    desc: "Маємо власний парк будівельної техніки та обладнання, що дозволяє мінімізувати витрати та контролювати якість.",
  },
  {
    num: "02",
    title: "Досвідчена команда фахівців",
    desc: "Понад 50 кваліфікованих фахівців з досвідом роботи від 5 до 25 років у різних галузях будівництва.",
  },
  {
    num: "03",
    title: "Комплексний підхід",
    desc: "Надаємо повний цикл послуг: від проєктування до здачі об'єкту в експлуатацію та гарантійного обслуговування.",
  },
  {
    num: "04",
    title: "Гнучке ціноутворення",
    desc: "Прозорі кошториси без прихованих платежів. Розглядаємо різні форми оплати та умови фінансування.",
  },
  {
    num: "05",
    title: "Офіційна діяльність",
    desc: "ТОВ із повним пакетом дозвільної документації, ліцензій та допусків до виконання будівельних робіт.",
  },
  {
    num: "06",
    title: "Гарантія якості",
    desc: "Надаємо офіційну гарантію на всі виконані роботи та використані матеріали згідно з договором.",
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
            Ми не просто виконуємо будівельні роботи — ми беремо на себе
            відповідальність за результат і репутацію вашого об'єкту.
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
              <strong>Ліцензований підрядник</strong>
              <p>
                Всі роботи виконуються відповідно до ДБН та чинних стандартів
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
