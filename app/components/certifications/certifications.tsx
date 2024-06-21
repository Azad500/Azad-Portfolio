import PureCardFlip from "../CardFlip/PureCardFlip";
import styles from "./certifications.module.scss";
export default function Certifications() {
  return (
    <section className={styles.certificationsContainer}>
      <PureCardFlip />
    </section>
  );
}
