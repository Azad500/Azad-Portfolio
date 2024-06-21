import styles from "./menu.module.scss";
import AzerbaijanFlag from "../../../assets/images/azerbaijan.png";
import EnglishFlag from "../../../assets/images/english.png";
import Image from "next/image";

interface MenuListProps {
  openMenu: boolean;
  toggleMenu: () => void;
  handleHomeRef: () => void;
  handleAboutRef: () => void;
  handleSkillsRef: () => void;
  handleWorkHistoryRef: () => void;
  handleEducationRef: () => void;
  handleCertificationsRef: () => void;
}

export default function MenuList({
  openMenu,
  toggleMenu,
  handleHomeRef,
  handleAboutRef,
  handleSkillsRef,
  handleWorkHistoryRef,
  handleEducationRef,
  handleCertificationsRef,
}: MenuListProps) {
  return (
    <section className={styles.menuListContainer}>
      <div className={styles.xElement}>
        <ul className={styles.languagePart}>
          <li>
            <Image
              className={styles.langImage}
              src={AzerbaijanFlag}
              alt="Azerbaijan"
              width={20}
              height={20}
              priority
            />
            <p>AZE</p>
          </li>
          <li>
            <Image
              className={styles.langImage}
              src={EnglishFlag}
              alt="English"
              width={20}
              height={20}
              priority
            />
            <p>ENG</p>
          </li>
        </ul>
        <p className={styles.xIcon} onClick={toggleMenu}>
          ⓧ
        </p>
      </div>
      <div
        className={`${styles.menuElement} ${
          openMenu ? styles.active : styles.close
        }`}
      >
        <ul className={styles.listElement}>
          <li onClick={handleHomeRef}>
            <p>Home</p>
          </li>
          <li onClick={handleAboutRef}>
            <p>About</p>
          </li>
          <li onClick={handleSkillsRef}>
            <p>Skills</p>
          </li>
          <li onClick={handleWorkHistoryRef}>
            <p>Work History</p>
          </li>
          <li onClick={handleEducationRef}>
            <p>Education</p>
          </li>
          <li onClick={handleCertificationsRef}>
            <p>Certifications</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
          <li>
            <p>Languages</p>
          </li>
        </ul>
        <ul className={styles.sosialNetwork}>
          <li>
            <div>
              <a target="_blank" href="mailto:azad.mirzazada95@gmail.com">
                Email
              </a>
              <a target="_blank" href="https://wa.me/+994708424043">
                Whatsapp
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://github.com/Azad500?tab=repositories"
              >
                GitHub
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/azad-mirzazada-3ab200162/"
              >
                Linkedin
              </a>
            </div>
          </li>
          <li>
            <p>Evaluate</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
