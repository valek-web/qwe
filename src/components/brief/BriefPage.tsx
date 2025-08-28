import React from "react";
import { useState } from "react";
import styles from "./brief-page.module.css";
import Input from "../ui/button/input/Input";
import Image from "next/image";
import {
  DeadLine,
  FormTypes,
  Pricing,
  ProjectTypes,
} from "./../../utils/types/types";
import { types } from "./types-config";
import { pricing } from "./price-config";
import { deadlines } from "./deadline";

const BriefPage = () => {
  const [formState, setFormState] = useState<FormTypes>({
    name: "",
    email: "",
    project_type: ProjectTypes.MOBILE_DEV,
    description: "",
    deadline: DeadLine.FIRST,
    price: Pricing.FIRST,
  });

  const dataHandler = (
    key:
      | "name"
      | "email"
      | "description"
      | "project_type"
      | "deadline"
      | "price",
    value: string | ProjectTypes | Pricing | DeadLine
  ) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className={styles.brief}>
      <div className={styles.form}>
        <div className={`${styles.contacts} ${styles.block}`}>
          <p>Контакные данные</p>
          <div>
            <Input
              placeholder="Ваше имя*"
              value={formState.name}
              setValue={(e) => dataHandler("name", e)}
            />
            <Input
              placeholder="Email*"
              value={formState.email}
              setValue={(e) => dataHandler("email", e)}
            />
          </div>
        </div>
        <div className={`${styles.project} ${styles.block}`}>
          <p>Тип проекта</p>
          <div className={styles.checkboxes}>
            {types.map((item, index) => (
              <div
                key={index}
                className={`${styles.badge} ${
                  formState.project_type === item.label ? styles.active : ""
                }`}
                onClick={() => dataHandler("project_type", item.label)}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>

          <p>Ваши пожелания</p>
          <div className={styles.suggestion}>
            Изложите свои пожелания в тексте. Вы можете прикреплять ссылки и
            фото.
          </div>
          <textarea placeholder="Опишите свой проект"></textarea>
          <label htmlFor="file" className={styles.file}>
            <p>Загрузите техническое задание*</p>
            <Image
              src="/images/file-upload.svg"
              alt=""
              width={40}
              height={40}
            />
            <input id="file" type="file" />
          </label>
        </div>
        <div className={`${styles.deadlines} ${styles.block}`}>
          <p>Сроки</p>
          <div className={styles.checkboxes}>
            {deadlines.map((item, index) => (
              <div
                key={index}
                className={`${styles.badge} ${
                  formState.deadline === item.label ? styles.active : ""
                }`}
                onClick={() => dataHandler("deadline", item.label)}
              >
                <p>{item.deadline}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.deadlines} ${styles.budget} ${styles.block}`}>
          <p>Бюджет</p>
          <div className={styles.checkboxes}>
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`${styles.badge} ${
                  formState.price === item.label ? styles.active : ""
                }`}
                onClick={() => dataHandler("price", item.label)}
              >
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <button>Отправить</button>
      </div>
      <div className={styles.steps}>
        <div>
          <p>
            <span>01</span> Контакные данные
          </p>
          <p>
            <span>02</span> Тип проекта
          </p>
          <p>
            <span>03</span> Сроки
          </p>
          <p>
            <span>04</span> Бюджет
          </p>
        </div>
        <a href="">Пользовательское соглашение</a>
      </div>
    </div>
  );
};

export default BriefPage;