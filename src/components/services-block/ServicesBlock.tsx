import styles from "./services-block.module.css";

const ServicesBlock = () => {
  return (
    <div className={styles.services}>
      <p>Наши услуги</p>
      <div className={styles.services__block}>
        <div className={styles.service__type}>Дизайн</div>
        <div className={styles.service__develop}>
          <div>UX/UI</div>
          <div>Веб-сайтов</div>
          <div>Мобильных приложений</div>
          <div>Редизайн сайтов</div>
        </div>
      </div>
      <div className={styles.services__block}>
        <div className={styles.service__type}>Разработка</div>
        <div className={styles.service__develop}>
          <div>Мобильных приложений</div>
          <div>Сайтов</div>
          <div>web-приложений</div>
          <div>Telegram Mini App</div>
          <div className={styles.last}>Разработка ботов</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
