"use client";
import styles from "./about.module.scss";
import AboutMeImage from "../../../assets/images/about.png";
import BlackLogo from "../../../assets/images/blackLogo.png";
import Circle from "../../../assets/images/yellowCircle.png";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutElement}>
        <div>
          <h2>ABOUT ME</h2>
          <p>
            I am Azad Mirzazada, I am a person with analytical thinking ability,
            careful and precise, responsible and goal-oriented, researcher and
            innovator, able to work under stress, able to work with a team,
            management and organization and with various qualities. After
            receiving training, I have been working as a Front-end developer
            since 2023. Currently, I am improving my profession and expanding my
            experience by working on projects. My portfolio site will help you
            get to know me. Thank you very much.
          </p>
        </div>
        <div className={styles.logoElement}>
          <Image
            className={styles.logo}
            src={BlackLogo}
            alt="Black Logo"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className={styles.circle}>
          <Image
            className={styles.circleImage}
            src={Circle}
            alt="Circle"
            width={700}
            height={700}
            priority
          />
        </div>
        <div className={styles.justImage}>
          <Image
            className={styles.image}
            src={AboutMeImage}
            alt="About Me"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
