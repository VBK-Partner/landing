import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // In production this would send to a backend
    setSent(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.label}>Зворотній зв'язок</div>
          <h2 className={styles.title}>Зв'яжіться з нами</h2>
          <p className={styles.desc}>
            Готові обговорити ваш проєкт? Заповніть форму або зв'яжіться з нами
            зручним для вас способом. Відповідаємо протягом одного робочого дня.
          </p>

          <div className={styles.contacts}>
            <a href="mailto:vbkpartner@ukr.net" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="2"
                    y="4"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 7l8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Електронна пошта</span>
                <span className={styles.contactValue}>vbkpartner@ukr.net</span>
              </div>
            </a>

            <a href="tel:+380960412721" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 4.5C2.5 3.4 3.4 2.5 4.5 2.5h1.618c.45 0 .854.274 1.03.694l1.218 2.928a1.118 1.118 0 0 1-.254 1.222L7.11 8.345A11.042 11.042 0 0 0 11.655 12.89l1.001-.999a1.118 1.118 0 0 1 1.222-.254l2.928 1.218c.42.176.694.58.694 1.03V15.5a2 2 0 0 1-2 2C6.82 17.5 2.5 13.18 2.5 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Телефон</span>
                <span className={styles.contactValue}>+380960412721</span>
              </div>
            </a>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5Zm0 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Юридична адреса</span>
                <span className={styles.contactValue}>
                  04073, м. Київ, пров. Куренівський, 19/5, офіс 3/21
                </span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="2.5"
                    y="2.5"
                    width="15"
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2.5 7.5h15M7.5 2.5v2M12.5 2.5v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Код ЄДРПОУ</span>
                <span className={styles.contactValue}>45715329</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="rgba(34,197,94,0.12)"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13 20l5 5 9-9"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Дякуємо за звернення!</h3>
              <p>
                Ми отримали вашу заявку і зв'яжемося з вами найближчим часом.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Залишити заявку</h3>
              <div className={styles.formRow}>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Ваше ім'я *</span>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Іван Петренко"
                    required
                    autoComplete="name"
                  />
                </label>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>Телефон</span>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+38 (0XX) XXX-XX-XX"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email *</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Опис проєкту</span>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Розкажіть про ваш проєкт..."
                  rows={4}
                />
              </label>
              <button type="submit" className={styles.submitBtn}>
                Надіслати заявку
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9h12M10 5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className={styles.privacy}>
                Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
