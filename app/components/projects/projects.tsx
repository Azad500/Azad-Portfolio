import Image from "next/image";
import Slider from "./slider";
import styles from "./projects.module.scss";
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

const freelanceElement = [
  {
    image: GarantCompressor,
    alt: "Garant Compressor",
    link: "https://garantcompressor.com/",
    site: "garantcompressor.com",
  },
  {
    image: LosAngeles,
    alt: "Los Angeles",
    link: "https://los-angeles-zeta.vercel.app/",
    site: "losangeles.com",
  },
  {
    image: AmoFresh,
    alt: "AmoFresh",
    link: "https://amofresh.az/",
    site: "amoFresh.az",
  },
  {
    image: StudentAll,
    alt: "StudentAll",
    link: "https://studentall.com/studentinfo/",
    site: "studentall.com/studentinfo",
  },
  {
    image: Mico,
    alt: "Mico",
    link: "https://mico-theta.vercel.app/",
    site: "mico-cinema.com",
  },
  {
    image: AzadPortfolio,
    alt: "AzadPortfolio",
    link: "...",
    site: "AzadMirzazada.me",
  },
];

const webrandyStartuup = [
  {
    image: Webrandy,
    alt: "Webrandy Startup",
    link: "https://webrandy.com/",
    site: "webrandy.com",
  },
  {
    image: AddressArch,
    alt: "Address Arch",
    link: "https://address-arch.vercel.app/",
    site: "address-arch.com",
  },
  {
    image: BestPrint,
    alt: "Best Print",
    link: "...",
    site: "bestprint.az",
  },
];

const alasElement = [
  {
    image: AlasEva,
    alt: "Alas Eva",
    link: "...",
    site: "alasdevcenter.com",
  },
  {
    image: AzSpeech,
    alt: "AzSpeech",
    link: "...",
    site: "azspeech.az",
  },
];

const mstock = [
  {
    image: MStock,
    alt: "MStock",
    link: "https://mstock.az/",
    site: "mstock.az",
  },
  {
    image: MayakCargo,
    alt: "MayakCargo",
    link: "https://cargo-pearl-chi.vercel.app/",
    site: "mayakcargo.az",
  },
  {
    image: Minik,
    alt: "Minik",
    link: "...",
    site: "minik.az",
  },
  {
    image: MayakMebel,
    alt: "MayakMebel",
    link: "https://mayak-mebel.vercel.app/",
    site: "mayakMebel.az",
  },
  {
    image: PutaLogistik,
    alt: "PutaLogistik",
    link: "https://puta-logistik.vercel.app/",
    site: "puta-logistik.az",
  },
  {
    image: MenzilTap,
    alt: "MenzilTap",
    link: "...",
    site: "menzilTap.az",
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
            <li className={styles.elements}>
              {freelanceElement.map((element, index) => (
                <div className={styles.imageContainer} key={index}>
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
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Webrandy Startup</h3>
            </li>
            <li className={styles.elements}>
              {webrandyStartuup.map((element, index) => (
                <div className={styles.imageContainer} key={index}>
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
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Alas Development Center</h3>
            </li>
            <li className={styles.elements}>
              {alasElement.map((element, index) => (
                <div className={styles.imageContainer} key={index}>
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
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>MSTOCK Company</h3>
            </li>
            <li className={styles.elements}>
              {mstock.map((element, index) => (
                <div className={styles.imageContainer} key={index}>
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
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <Slider />
    </section>
  );
}
