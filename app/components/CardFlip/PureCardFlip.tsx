import Image from "next/image";
import styles from "./PureCardFlip.module.scss";
import AdasDiploma from "../../../assets/certifications/AdasDiploma.png";
import DusunceAcademy from "../../../assets/certifications/DusunceAcademy.png";
import AlasDiploma from "../../../assets/certifications/AlasDiploma.png";
import HonoursAcademy from "../../../assets/certifications/HonoursAcademy.png";
import ElcPro from "../../../assets/certifications/ElcPro.png";
import AzFin from "../../../assets/certifications/AzFin.png";
import MasterDegree from "../../../assets/certifications/MasterDegree.png";
import BachelorDegree from "../../../assets/certifications/BachelorDegree.png";
import School257 from "../../../assets/certifications/School257.png";

const cardElements = [
  {
    name: "Adas",
    image: AdasDiploma,
    alt: "AdasDiploma",
    job: "Full Stack Developer",
  },
  {
    name: "Dushunce",
    image: DusunceAcademy,
    alt: "DushunceDiploma",
    job: "Trading",
  },
  {
    name: "Alas",
    image: AlasDiploma,
    alt: "AlasDiploma",
    job: "Front-end Developer",
  },
  {
    name: "Honours",
    image: HonoursAcademy,
    alt: "HonoursDiploma",
    job: "F3",
  },
  {
    name: "ElcPro",
    image: ElcPro,
    alt: "ElcProDiploma",
    job: "English",
  },
  {
    name: "AzFin",
    image: AzFin,
    alt: "AzFinDiploma",
    job: "Accounting",
  },
  {
    name: "UNEC",
    image: MasterDegree,
    alt: "MasterDiploma",
    job: "Master Degree",
  },
  {
    name: "UNEC",
    image: BachelorDegree,
    alt: "BachelorDiploma",
    job: "Bachelor Degree",
  },
  {
    name: "School No. 257",
    image: School257,
    alt: "School257Diploma",
    job: "Secondary Education",
  },
];

export default function PureCardFlip() {
  return (
    <section className={styles.cardContainer}>
      {cardElements.map((cardElement, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.content}>
            <div className={styles.front}>
              <div className={styles.images}>
                <Image
                  src={cardElement.image}
                  alt={cardElement.alt}
                  width={250}
                  height={300}
                  priority
                />
              </div>
              <div className={styles.overlay}>
                <h2>{cardElement.name}</h2>
                <p>{cardElement.job}</p>
              </div>
            </div>
            <div className={styles.back}>
              <button>Install</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
