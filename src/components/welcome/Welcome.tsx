"use client";

import Image from "next/image";
import Button from "../ui/button/Button";
import styles from "./welcome.module.css";
import ServicesBlock from "../services-block/ServicesBlock";
import { projects } from "./projects";
import Link from "next/link";

export default function Welcome() {

  return (
    <div className={styles.welcome__wrapper}>
      <div className={styles.welcome__container}>
        <div className={styles.welcome__top}>
          <p>
            <span>{"</>"}</span> Создаём Ваш новый{" "}
            <span>
              облик
              <Image
                src="/images/arrow-spec.svg"
                alt=""
                width={550}
                height={550}
                style={{ top: 60 }}
                className={styles.welcome__arrow}
              />
            </span>
          </p>
          <p style={{ fontSize: 50 }} className={styles.subtitle}>
            Разработка сайтов и приложений
          </p>
          <Link href="https://t.me/fcoreteam" className={styles.intro__btn}>
            <Button className={styles.intro__btn}>Оставить заявку</Button>
          </Link>
        </div>
        <div className={styles.projects}>
          <p>Наши проекты</p>
          <div className={styles.projects__cards}>
            {projects.map((item, index) => (
              <div key={index} className={styles.project__card}>
                <div className={styles.card__top}>
                  <p
                    className={styles.card__index}
                    style={
                      index === 3
                        ? {
                            color: "#000",
                          }
                        : {}
                    }
                  >
                    0{index + 1}
                  </p>
                </div>
                <Image
                  src={item.image}
                  width={2000}
                  height={1000}
                  alt="image"
                  className={styles.item__image}
                />
                <div className={styles.card__bottom}>
                  <p className={styles.card__title}>{item.name}</p>
                  <p className={styles.card__description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/projects">
            <Button>Смотреть все</Button>
          </Link>
        </div>
        <ServicesBlock />
      </div>
    </div>
  );
}
