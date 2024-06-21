import styles from "./PureCardFlip.module.scss";
import Certification1 from "../../../assets/certifications/certification1.png";
import Image from "next/image";

export default function PureCardFlip() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.front}>
          <div className={styles.images}>
            <Image
              src={Certification1}
              alt="Certification 1"
              width={250}
              height={300}
              priority
            />
          </div>
          <div className={styles.overlay}>
            <h2>Adas</h2>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className={styles.back}>
          <button>Install</button>
        </div>
      </div>
    </div>
  );
}
