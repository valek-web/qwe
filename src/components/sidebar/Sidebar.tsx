"use client";

import NextLink from "next/link";
import Image from "next/image";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  const closeSidebar = () => {
    const headerWrapper = document.querySelector(".headerWrapper");

    headerWrapper?.classList.remove("sidebar__opened");
    headerWrapper?.classList.add("sidebar__closed");
  };

  return (
    <div className={`${styles.wrapper} sidebar`} onClick={closeSidebar}>
      <div className={styles.container}>
        <NextLink href={"/"} className={styles.logo}>
          <Image
            className={styles.footer__logo}
            src="/images/logo.png"
            width={500}
            height={250}
            alt="logo"
          />
        </NextLink>
        <NextLink href={"/projects"} passHref>
          Портфолио
        </NextLink>
        <NextLink href={"/services"} passHref>
          Наши услуги
        </NextLink>
        <NextLink href={"/about"} passHref>
          О нас
        </NextLink>
        {/* <NextLink href={"/brief"} passHref>
          Оставить заявку
        </NextLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
