import ProjectBlock from "./../../components/project-block/ProjectBlock";
import Title from "./../../components/title/Title";

import styles from "./../../components/project-block/project-block.module.css"
import Footer from "@/components/footer/Footer";

export default function Projects() {
  return (
    <>
      <div className={styles.block}>
        <Title firstText="Наши" bgText="проекты." grayText="Сделано с любовью." />
        <ProjectBlock />
        <Footer />
      </div>
    </>
  );
}
