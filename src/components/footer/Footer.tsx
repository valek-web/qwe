import Button from "../ui/button/Button";
import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__top}>
        <div className={styles.social__links}>
          <Link href="https://vk.com/fcoreteam">
            <Image src="/images/vk-icon.svg" alt="" width={24} height={24} />
          </Link>
          <Link href="https://t.me/fcoreteam">
            <Image src="/images/tg-icon.svg" alt="" width={24} height={24} />
          </Link>
        </div>
        <div className={styles.contacts}>
          <a href="tel:+7 (985) 070-80-57">+7(985) 070-80-57</a>
          <a href="mailto:fcoreteam@mail.ru">fcoreteam@mail.ru</a>
          <p>Москва. Пресненская наб. 8с1</p>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <Image
          className={styles.footer__logo}
          src="/images/logo.png"
          width={500}
          height={250}
          alt="logo"
        />
        <p style={{ color: "#ffffff73" }}>{'ООО "Фкор" ИНН 772608290050'}</p>
      </div>
    </div>
  );
};

export default Footer;
