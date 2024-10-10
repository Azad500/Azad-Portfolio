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
import IndiTap from "../../../assets/projects/IndiTap.png";
import MyWork from "../../../assets/projects/MyWork.png";
import GlobalAptek from "../../../assets/projects/GlobalAptek.png";
import Souvenir from "../../../assets/projects/Souvenir.png";

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
    link: "https://web.alasdevcenter.com/",
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
    link: "https://main--minikk.netlify.app/",
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
    link: "https://main--menziltap.netlify.app/",
  },
  {
    id: 17,
    image: AzadPortfolio,
    alt: "AzadPortfolio",
    link: "https://www.azadmirzazada.com/",
  },
  {
    id: 18,
    image: IndiTap,
    alt: "IndiTap",
    link: "https://main--inditap.netlify.app/",
  },
  {
    id: 19,
    image: MyWork,
    alt: "MyWork",
    link: "https://main--mywork-az.netlify.app/",
  },
  {
    id: 20,
    image: GlobalAptek,
    alt: "Global Aptek",
    link: "https://main--globalaptek.netlify.app/",
  },
  {
    id: 21,
    image: Souvenir,
    alt: "Monaliza Suvenir",
    link: "",
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
          {Array.from({ length: 30 }, (_, index1) => (
            <div className={styles.firstSliderElement} key={index1}>
              {repeatedData.map((element, elementIndex1) => (
                <a target="_blank" href={element.link} key={elementIndex1}>
                  <div className={styles.slider}>
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
          {Array.from({ length: 30 }, (_, index2) => (
            <div className={styles.secondSliderElement} key={index2}>
              {repeatedData.map((element, elementIndex2) => (
                <a target="_blank" href={element.link} key={elementIndex2}>
                  <div className={styles.slider}>
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
        <div
          className={`${styles.firstSliderContainer} ${styles.thirdSliderContainer}`}
        >
          {Array.from({ length: 30 }, (_, index3) => (
            <div className={styles.firstSliderElement} key={index3}>
              {reverseData.map((element, elementIndex3) => (
                <a target="_blank" href={element.link} key={elementIndex3}>
                  <div className={styles.slider}>
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
