"use client"
import { useRef } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const openSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.remove("sidebar__closed");
      sidebarRef.current.classList.add("sidebar__opened");
    }
  };
  console.log(pathname);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.header__wrapper} headerWrapper`}
    >
      <Link href={"/"} className={styles.header__logo}>
        <Image
          src="/images/logo.png"
          width={500}
          height={250}
          alt="logo"
          className={styles.header__logo}
        />
      </Link>
      <div className={styles.header__links}>
        <Link
          href={"/projects"}
          className={`${styles.link} ${
            pathname === "/projects" ? styles.active : ""
          }`}
        >
          Портфолио
        </Link>
        <Link
          href={"/services"}
          className={`${styles.link} ${
            pathname === "/services" ? styles.active : ""
          }`}
        >
          Наши услуги
        </Link>
        <Link
          href={"/about"}
          className={`${styles.link} ${
            pathname === "/about" ? styles.active : ""
          }`}
        >
          О нас
        </Link>
        {/* <Link
          href={"/brief"}
          className={`${styles.link} ${
            pathname === "/brief" ? styles.active : ""
          }`}
        >
          Оставить заявку
        </Link> */}
        <div className={styles.sidebar__button} onClick={openSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}