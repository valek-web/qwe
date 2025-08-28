import ServicesBlock from "../services-block/ServicesBlock";
import Button from "../ui/button/Button";

import styles from "./services-page.module.css";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <ServicesBlock />
      <div className={styles.buy__banner}>
        <p className={styles.title}>Разработка веб-приложений</p>
        <p className={styles.text}>
          Современным бизнесам часто не хватает обычного сайта. Нужна система,
          которая действительно работает под их задачи. Мы предлагаем разработку
          современного веб-приложения с использованием самых последних
          технологий в веб-разработке. Приложение создаётся индивидуально — под
          ваш масштаб, цели и процессы <br />
          <br /> Что входит: <br /> — Разработка веб-платформы <br />— Установка
          платформы на хостинг <br /> — Дальнейшая поддержка (по согласованию){" "}
          <br /> В итоге бизнес получает инструмент, который упрощает процессы,
          экономит время и готов к масштабированию.
        </p>
        <div className={styles.bottom}>
          <div>
            <p>Цена: от 500.000 до 10.000.000 руб.</p>
            <p>Сроки: от 21 до 180 дней</p>
          </div>
          <Link href="https://t.me/fcoretech" className={styles.order}>
            <Button className={styles.order}>Заказать</Button>
          </Link>
        </div>
      </div>

      <div className={styles.buy__banner}>
        <p className={styles.title}>Разработка мобильных приложений</p>
        <p className={styles.text}>
          Мобильное приложение — это один из самых прямых способов
          взаимодействовать с клиентом. Если вы хотите, чтобы продукт был всегда
          под рукой у пользователя — приложение под iOS и Android решает эту
          задачу. <br />
          <br /> Разработка кросс-платформенного мобильного приложения включает:
          <br />
          — создание приложения под iOS и Android на React Native <br /> —
          единый дизайн и поведение на обеих платформах <br /> — установка на
          хостинг и публикация в App Store и Google Play <br /> — тестирование и
          отладка– по желанию <br />— сопровождение и обновления <br />
          <br />
          Результат: вы получаете единое приложение с понятным стеком, единым
          кодом и минимальной стоимостью поддержки. Без отдельных подрядчиков,
          расхождений между версиями и двойной работы.
        </p>
        <div className={styles.bottom}>
          <div>
            <p style={{ color: "#fff" }}>
              Цена: от 1.500.000 до 20.000.000 руб.
            </p>
            <p style={{ color: "#fff" }}>Сроки: от 90 до 365 дней</p>
          </div>
          <Link href="https://t.me/fcoretech" className={styles.order}>
            <Button className={styles.order}>Заказать</Button>
          </Link>
        </div>
      </div>

      <div className={styles.buy__banner}>
        <p className={styles.title}>Web design</p>
        <p className={styles.text}>
          Веб-дизайн – это процесс создания и разработки внешнего вида
          веб-сайтов или веб-приложений, включая их структуру, навигацию и
          визуальное оформление. Веб-дизайнер проектирует интерфейс, учитывая
          удобство использования и эстетическую привлекательность, чтобы
          обеспечить наилучший пользовательский опыт. 
        </p>
        <div className={styles.bottom}>
          <div>
            <p>Цена: от 90.000 до 1.000.000 руб.</p>
            <p>Сроки: от 7 до 21 дня</p>
          </div>
          <Link href="https://t.me/fcoretech" className={styles.order}>
            <Button className={styles.order}>Заказать</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
