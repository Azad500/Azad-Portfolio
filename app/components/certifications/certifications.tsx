import PureCardFlip from "../cardFlip/pureCardFlip";
import styles from "./certifications.module.scss";
export default function Certifications() {
  return (
    <section className={styles.certificationsContainer}>
      <div className={styles.overlay}></div>
      <PureCardFlip />
    </section>
  );
}
