import styles from "./slider.module.scss";
import Image from "next/image";
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
    image: AdasDiploma,
    alt: "AdasDiploma",
  },
  {
    image: DusunceAcademy,
    alt: "DushunceDiploma",
  },
  {
    image: AlasDiploma,
    alt: "AlasDiploma",
  },
  {
    image: HonoursAcademy,
    alt: "HonoursDiploma",
  },
  {
    image: ElcPro,
    alt: "ElcProDiploma",
  },
  {
    image: AzFin,
    alt: "AzFinDiploma",
  },
  {
    image: MasterDegree,
    alt: "MasterDiploma",
  },
  {
    image: BachelorDegree,
    alt: "BachelorDiploma",
  },
  {
    image: School257,
    alt: "School257Diploma",
  },
];
const repeatedClientsData = Array.from(
  { length: 30 },
  (_, index) => cardElements[index % cardElements.length]
);
export default function Slider() {
  return (
    <>
      {/* --------------first-slider----------- */}
      <div className={styles.sliderContainer}>
        <div className={styles.firstSliderContainer}>
          {Array.from({ length: 20 }, (_, index) => (
            <div className={styles.firstSliderElement} key={index}>
              {repeatedClientsData.map((element, elementIndex) => (
                <div className={styles.slider} key={elementIndex}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* --------------second-slider----------- */}
        <div className={styles.secondSliderContainer}>
          {Array.from({ length: 20 }, (_, index) => (
            <div className={styles.secondSliderElement} key={index}>
              {repeatedClientsData.map((element, elementIndex) => (
                <div className={styles.slider} key={elementIndex}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* --------------third-slider----------- */}
        <div className={styles.firstSliderContainer}>
          {Array.from({ length: 20 }, (_, index) => (
            <div className={styles.firstSliderElement} key={index}>
              {repeatedClientsData.map((element, elementIndex) => (
                <div className={styles.slider} key={elementIndex}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
