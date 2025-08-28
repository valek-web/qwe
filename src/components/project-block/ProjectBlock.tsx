import styles from "./project-block.module.css";

const ProjectBlock = () => {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.title}>
          <p>Ecobit</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.first}`}>
            <p>01</p>
            <div>
              <p>
                Разработка <span>приложения</span> для <span>P2P биржи</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Современное решение в сфере финансовых технологий. Приложение для
              трейдеров с социальной сетью внутри и P2P маркетом
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.project} ${styles.right}`}>
        <div className={styles.title}>
          <p>KingPay.me</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.second}`}>
            <p>02</p>
            <div>
              <p>
                Разработка <span>сайта</span> для{" "}
                <span>интернет эквайринга</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Новый сервис для приема платежей, который подойдет малому бизнесу
              или большим корпорациям
            </p>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.title}>
          <p>Troika-group</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.third}`}>
            <p>03</p>
            <div>
              <p>
                Разработка <span>сайта</span> для <span>инвесторов</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Сайт, на котором инвесторы могут удалённо проинвестировать
              определенный продукт, размещённый на сайте
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.project} ${styles.right}`}>
        <div className={styles.title}>
          <p>sudexpertiza.by</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.fourth}`}>
            <p>04</p>
            <div className={styles.project__wrap}>
              <p className={styles.project__name}>
                Разработка <span>сайта</span> для <span>института</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Обновление интерфейса сайта для института судебных экспертиз
              республики Беларусь
            </p>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.title}>
          <p>Игра золтана</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.fifth}`}>
            <p>05</p>
            <div>
              <p>
                Разработка <span>TMA</span> для <span>цифрового детектива</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Первый иммерсионный цифировой детектив, основанный на оффлайн
              квесте Игра золтана
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.project} ${styles.right}`}>
        <div className={styles.title}>
          <p>bal-kekina</p>
          <span></span>
        </div>
        <div className={styles.data}>
          <div className={`${styles.card} ${styles.six}`}>
            <p>06</p>
            <div>
              <p>
                Разработка <span>сайта</span> для
                <span> бального мероприятия</span>
              </p>
            </div>
          </div>
          <div className={styles.video__text}>
            <div className={styles.video}></div>
            <p className={styles.text}>
              Сайт, созданый для удобной записи на мероприятие посвящённое балу
              в честь А.Л. Кекина
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBlock;