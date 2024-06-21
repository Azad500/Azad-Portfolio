import Image from "next/image";
import styles from "./header.module.scss";
import HeaderPhoto from "../../../assets/images/headerPhoto.jpeg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerPhoto}>
        <div className={styles.overlay}></div>
        <Image
          className={styles.image}
          src={HeaderPhoto}
          alt="Header Photo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.headerText}>
        <h2>Hello,</h2>
        <h2>
          I am <span>Front end Developer</span>
        </h2>
      </div>
      <div className={styles.borderBottom}>
        <p></p>
      </div>
    </header>
  );
}
