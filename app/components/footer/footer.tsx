import styles from "./footer.module.scss";
import Image from "next/image";
import GarantCompressor from "../../../assets/projects/GarantCompressor.png";
import Webrandy from "../../../assets/projects/Webrandy.png";
import AddressArch from "../../../assets/projects/AddressArch.png";
import AlasEva from "../../../assets/projects/AlasEva.png";
import AzSpeech from "../../../assets/projects/AzSpeech.png";
import MStock from "../../../assets/projects/MStock.png";
import BestPrint from "../../../assets/projects/BestPrint.png";
import LosAngeles from "../../../assets/projects/LosAngeles.png";
import AmoFresh from "../../../assets/projects/AmoFresh.png";
import StudentAll from "../../../assets/projects/StudentAll.png";
import MayakCargo from "../../../assets/projects/MayakCargo.png";
import Minik from "../../../assets/projects/Minik.png";
import MayakMebel from "../../../assets/projects/MayakMebel.png";
import PutaLogistik from "../../../assets/projects/PutaLogistik.png";
import Mico from "../../../assets/projects/Mico.png";
import MenzilTap from "../../../assets/projects/MenzilTap.png";
import AzadPortfolio from "../../../assets/projects/AzadPortfolio.png";

const cardElements = [
  {
    id: 1,
    image: GarantCompressor,
    alt: "GarantCompressor",
  },
  {
    id: 2,
    image: Webrandy,
    alt: "Webrandy",
  },
  {
    id: 3,
    image: AddressArch,
    alt: "AddressArch",
  },
  {
    id: 4,
    image: AlasEva,
    alt: "AlasEva",
  },
  {
    id: 5,
    image: AzSpeech,
    alt: "AzSpeech",
  },
  {
    id: 6,
    image: MStock,
    alt: "MStock",
  },
  {
    id: 7,
    image: BestPrint,
    alt: "BestPrint",
  },
  {
    id: 8,
    image: LosAngeles,
    alt: "LosAngeles",
  },
  {
    id: 9,
    image: AmoFresh,
    alt: "AmoFresh",
  },
  {
    id: 10,
    image: StudentAll,
    alt: "StudentAll",
  },
  {
    id: 11,
    image: MayakCargo,
    alt: "MayakCargo",
  },
  {
    id: 12,
    image: Minik,
    alt: "Minik",
  },
  {
    id: 13,
    image: MayakMebel,
    alt: "MayakMebel",
  },
  {
    id: 14,
    image: PutaLogistik,
    alt: "PutaLogistik",
  },
  {
    id: 15,
    image: Mico,
    alt: "Mico",
  },
  {
    id: 16,
    image: MenzilTap,
    alt: "MenzilTap",
  },
  {
    id: 17,
    image: AzadPortfolio,
    alt: "AzadPortfolio",
  },
];
const repeatedData = Array.from(
  { length: 30 },
  (_, index) => cardElements[index % cardElements.length]
);

const reversData = Array.from(
  { length: 30 },
  (_, index) => cardElements[index % cardElements.length]
).reverse();

export default function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.overlaY}></div>
      <div className={styles.footerText}>
        <h2>THANK YOU</h2>
        <p>for viewing my portfolio</p>
      </div>
      {/* -----------first--------- */}
      <div className={styles.downToUpSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.downToUpSliderElement} key={index1}>
            {repeatedData.map((element, elementIndex1) => (
              <div className={styles.slider} key={elementIndex1}>
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
      {/* -----------second--------- */}
      <div className={styles.UpToDownSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.UpToDownSliderElement} key={index1}>
            {repeatedData.map((element, elementIndex1) => (
              <div className={styles.slider} key={elementIndex1}>
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
      {/* -----------third--------- */}
      <div className={styles.downToUpSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.downToUpSliderElement} key={index1}>
            {reversData.map((element, elementIndex1) => (
              <div className={styles.slider} key={elementIndex1}>
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
      {/* -----------fourth--------- */}
      <div className={styles.UpToDownSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.UpToDownSliderElement} key={index1}>
            {reversData.map((element, elementIndex1) => (
              <div className={styles.slider} key={elementIndex1}>
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
    </section>
  );
}
