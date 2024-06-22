import Image from "next/image";
import Slider from "./slider";
import styles from "./projects.module.scss";
import GarantCompressor from "../../../assets/projects/GarantCompressor.png";
import Webrandy from "../../../assets/projects/Webrandy.png";

export default function Projects() {
  return (
    <section className={styles.container}>
      <div className={styles.portfolioTexts}>
        <div className={styles.portfolioContainer}>
          <h2>MY PROJECTS</h2>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Freelance</h3>
            </li>
            <li>
              <div className={styles.imageElement}>
                <Image
                  className={styles.image}
                  src={GarantCompressor}
                  alt="Garant Compressor"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <a target="_blank" href="https://garantcompressor.com/">
                garantcompressor.com
              </a>
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Webrandy Startup</h3>
            </li>
            <li>
              <div className={styles.imageElement}>
                <Image
                  className={styles.image}
                  src={Webrandy}
                  alt="Webrandy"
                  width={400}
                  height={400}
                  priority
                />
              </div>
              <a target="_blank" href="https://webrandy.com/">
                webrandy.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Slider />
    </section>
  );
}
