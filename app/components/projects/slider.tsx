import styles from "./slider.module.scss";
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
    link: "https://garantcompressor.com/",
  },
  {
    id: 2,
    image: Webrandy,
    alt: "Webrandy",
    link: "https://webrandy.com/",
  },
  {
    id: 3,
    image: AddressArch,
    alt: "AddressArch",
    link: "https://address-arch.vercel.app/",
  },
  {
    id: 4,
    image: AlasEva,
    alt: "AlasEva",
    link: "...",
  },
  {
    id: 5,
    image: AzSpeech,
    alt: "AzSpeech",
    link: "...",
  },
  {
    id: 6,
    image: MStock,
    alt: "MStock",
    link: "https://mstock.az/",
  },
  {
    id: 7,
    image: BestPrint,
    alt: "BestPrint",
    link: "...",
  },
  {
    id: 8,
    image: LosAngeles,
    alt: "LosAngeles",
    link: "https://los-angeles-zeta.vercel.app/",
  },
  {
    id: 9,
    image: AmoFresh,
    alt: "AmoFresh",
    link: "https://amofresh.az/",
  },
  {
    id: 10,
    image: StudentAll,
    alt: "StudentAll",
    link: "https://studentall.com/studentinfo/",
  },
  {
    id: 11,
    image: MayakCargo,
    alt: "MayakCargo",
    link: "https://cargo-pearl-chi.vercel.app/",
  },
  {
    id: 12,
    image: Minik,
    alt: "Minik",
    link: "...",
  },
  {
    id: 13,
    image: MayakMebel,
    alt: "MayakMebel",
    link: "https://mayak-mebel.vercel.app/",
  },
  {
    id: 14,
    image: PutaLogistik,
    alt: "PutaLogistik",
    link: "https://puta-logistik.vercel.app/",
  },
  {
    id: 15,
    image: Mico,
    alt: "Mico",
    link: "https://mico-theta.vercel.app/",
  },
  {
    id: 16,
    image: MenzilTap,
    alt: "MenzilTap",
    link: "...",
  },
  {
    id: 17,
    image: AzadPortfolio,
    alt: "AzadPortfolio",
    link: "...",
  },
];
const repeatedData = Array.from(
  { length: 30 },
  (_, index) => cardElements[index % cardElements.length]
);

// --------reverse------
const reverseData = Array.from(
  { length: 30 },
  (_, index) => cardElements[index % cardElements.length]
).reverse();
export default function Slider() {
  return (
    <>
      {/* --------------first-slider----------- */}
      <div className={styles.sliderContainer}>
        <div className={styles.firstSliderContainer}>
          {Array.from({ length: 30 }, (_, index) => (
            <div className={styles.firstSliderElement} key={index}>
              {repeatedData.map((element, elementIndex) => (
                <a target="_blank" href={element.link}>
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
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* --------------second-slider----------- */}
        <div className={styles.secondSliderContainer}>
          {Array.from({ length: 30 }, (_, index) => (
            <div className={styles.secondSliderElement} key={index}>
              {repeatedData.map((element, elementIndex) => (
                <a target="_blank" href={element.link}>
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
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* --------------third-slider----------- */}
        <div className={styles.firstSliderContainer}>
          {Array.from({ length: 30 }, (_, index) => (
            <div className={styles.firstSliderElement} key={index}>
              {reverseData.map((element, elementIndex) => (
                <a target="_blank" href={element.link}>
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
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
