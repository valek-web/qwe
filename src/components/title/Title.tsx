import styles from "./title.module.css";

interface Props {
  firstText: string;
  bgText: string;
  grayText: string;
}
const Title = ({ firstText, bgText, grayText }: Props) => {
  return (
    <p className={styles.p}>
      {firstText} <span>{bgText}</span> <span>{grayText}</span>
    </p>
  );
};

export default Title;
