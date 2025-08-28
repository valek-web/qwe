
import styles from "./../../components/project-block/project-block.module.css"
import Title from "./../../components/title/Title";
import ServicesPage from "./../../components/services/ServicesPage";
import Footer from "@/components/footer/Footer";

export default function Services() {
  return (
    <>
      <div className={styles.block}>
        <Title firstText="Наши" bgText="услуги." grayText="Всегда готовы." />
        <ServicesPage />
        <Footer />
      </div>
    </>
  );
}