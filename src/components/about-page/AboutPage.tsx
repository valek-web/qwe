import React from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./about-page.module.css";

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <div className={`${styles.we} ${styles.block}`}>
        <p>Кто мы и чем занимаемся</p>
        <p>Мы Fcore, молодая и амбициозная студия разработчиков IT решений.</p>
      </div>
      <div className={`${styles.roadmap} ${styles.block}`}>
        <p>Роудмап</p>
        <div className={styles.container}>
          <div className={styles.step}>
            <p>2018-2022</p>
            <p style={{ fontSize: 40 }}>Формирование</p>
            <p style={{ fontSize: 20 }}>
              Наша команда начинает свою работу, набирает опыт и знания. Создает
              небольшие сайты, работая на фрилансе
            </p>
          </div>
          <div className={styles.step}>
            <p>2023</p>
            <p style={{ fontSize: 40 }}>Наработка</p>
            <p style={{ fontSize: 20 }}>
              Углубляемся в направлении финансово-технических услуг
            </p>
          </div>
          <div className={styles.step}>
            <p>2024</p>
            <p style={{ fontSize: 40 }}>Процесс</p>
            <p style={{ fontSize: 20 }}>
              Выполняем заказ на разработку платёжной системы. Расширяемся
            </p>
          </div>
          <div className={styles.step}>
            <p>2025</p>
            <p style={{ fontSize: 40 }}>Результат</p>
            <p style={{ fontSize: 20 }}>
              Арендуем офис, набираем новых сотрудников. Опытные специалисты в
              сфере финтеха
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.contacts} ${styles.block}`}>
        <p>Наши контакты</p>
        <p className={styles.contact__text}>
          Телефон: <a href="tel:+7 (985) 070-80-57">+7 (985) 070-80-57</a>
        </p>
        <p className={styles.contact__text}>
          Email: <a href="mailto:fcoreteam@mail.ru">fcoreteam@mail.ru</a>
        </p>
        <p className={styles.contact__text}>
          Адрес офиса: г. Москва, Пресненская наб. 8с1.
        </p>
        <p style={{ fontSize: 20, marginTop: 10 }} className={styles.ceo}>
          <span style={{ color: "#367d6c" }}>Генеральный директор: </span>{" "}
          Николаев Андрей Кириллович
        </p>
        <div>
          <div className={styles.social__links}>
            <Link href="https://vk.com/fcoreteam">
              <Image src="/images/vk-icon.svg" alt="" width={24} height={24} />
            </Link>
            <Link href="https://t.me/fcoreteam">
              <Image src="/images/tg-icon.svg" alt="" width={24} height={24} />
            </Link>
          </div>
          <p>{'ООО "Фкор"'}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
