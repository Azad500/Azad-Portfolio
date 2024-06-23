import Image from "next/image";
import Slider from "./slider";
import styles from "./projects.module.scss";
import GarantCompressor from "../../../assets/projects/GarantCompressor.png";
import Webrandy from "../../../assets/projects/Webrandy.png";

const freelanceElement = [
  {
    image: GarantCompressor,
    alt: "Garant Compressor",
    link: "https://garantcompressor.com/",
    site: "garantcompressor.com",
  },
];

const webrandyStartuup = [
  {
    image: Webrandy,
    alt: "Webrandy Startup",
    link: "https://webrandy.com/",
    site: "webrandy.com",
  },
];

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
            {freelanceElement.map((element, index) => (
              <li key={index}>
                <div className={styles.imageElement}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <a target="_blank" href={element.link}>
                  {element.site}
                </a>
              </li>
            ))}
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Webrandy Startup</h3>
            </li>
            {webrandyStartuup.map((element, index) => (
              <li key={index}>
                <div className={styles.imageElement}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <a target="_blank" href={element.link}>
                  {element.site}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Slider />
    </section>
  );
}
