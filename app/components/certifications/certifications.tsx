import PureCardFlip from "../../../app/components/cardFlip/PureCardFlip";
import styles from "./certifications.module.scss";
export default function Certifications() {
  return (
    <section className={styles.certificationsContainer}>
      <div className={styles.overlay}></div>
      <PureCardFlip />
    </section>
  );
}
