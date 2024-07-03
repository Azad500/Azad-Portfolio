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
import { useState } from "react";

interface Project {
  image: StaticImageData;
  alt: string;
  link: string;
  site: string;
  description: string;
}
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type SelectedProject = Project | null;

const freelanceElement: Project[] = [
  {
    image: GarantCompressor,
    alt: "Garant Compressor",
    link: "https://garantcompressor.com/",
    site: "garantcompressor.com",
    description: "Description for Garant Compressor project.",
  },
  {
    image: LosAngeles,
    alt: "Los Angeles",
    link: "https://los-angeles-zeta.vercel.app/",
    site: "losangeles.com",
    description: "Description for Los Angeles project.",
  },
  {
    image: AmoFresh,
    alt: "AmoFresh",
    link: "https://amofresh.az/",
    site: "amoFresh.az",
    description: "Description for AmoFresh project.",
  },
  {
    image: StudentAll,
    alt: "StudentAll",
    link: "https://studentall.com/studentinfo/",
    site: "studentall.com/studentinfo",
    description: "Description for StudentAll project.",
  },
  {
    image: Mico,
    alt: "Mico",
    link: "https://mico-theta.vercel.app/",
    site: "mico-cinema.com",
    description: "Description for Mico project.",
  },
  {
    image: AzadPortfolio,
    alt: "AzadPortfolio",
    link: "...",
    site: "azadmirzazada.com",
    description: "Description for Azad Portfolio project.",
  },
];

const webrandyStartuup: Project[] = [
  {
    image: Webrandy,
    alt: "Webrandy Startup",
    link: "https://webrandy.com/",
    site: "webrandy.com",
    description: "Description for Webrandy Startup project.",
  },
  {
    image: AddressArch,
    alt: "Address Arch",
    link: "https://address-arch.vercel.app/",
    site: "address-arch.com",
    description: "Description for Address Arch project.",
  },
  {
    image: BestPrint,
    alt: "Best Print",
    link: "...",
    site: "bestprint.az",
    description: "Description for Best Print project.",
  },
];

const alasElement: Project[] = [
  {
    image: AlasEva,
    alt: "Alas Eva",
    link: "https://web.alasdevcenter.com/",
    site: "alasdevcenter.com",
    description: "Description for Alas Eva project.",
  },
  {
    image: AzSpeech,
    alt: "AzSpeech",
    link: "...",
    site: "azspeech.az",
    description: "Description for AzSpeech project.",
  },
];

const mstock: Project[] = [
  {
    image: MStock,
    alt: "MStock",
    link: "https://mstock.az/",
    site: "mstock.az",
    description: "Description for MStock project.",
  },
  {
    image: MayakCargo,
    alt: "MayakCargo",
    link: "https://cargo-pearl-chi.vercel.app/",
    site: "mayakcargo.az",
    description: "Description for Mayak Cargo project.",
  },
  {
    image: Minik,
    alt: "Minik",
    link: "...",
    site: "minik.az",
    description: "Description for Minik project.",
  },
  {
    image: MayakMebel,
    alt: "MayakMebel",
    link: "https://mayak-mebel.vercel.app/",
    site: "mayakMebel.az",
    description: "Description for Mayak Mebel project.",
  },
  {
    image: PutaLogistik,
    alt: "PutaLogistik",
    link: "https://puta-logistik.vercel.app/",
    site: "puta-logistik.az",
    description: "Description for Puta Logistik project.",
  },
  {
    image: MenzilTap,
    alt: "MenzilTap",
    link: "...",
    site: "menzilTap.az",
    description: "Description for Menzil Tap project.",
  },
];
const repeatedData = Array.from(
  { length: 30 },
  (_, index) => freelanceElement[index % freelanceElement.length]
);
// ----------------all-projects----------------
const allProjects = [
  ...freelanceElement,
  ...webrandyStartuup,
  ...alasElement,
  ...mstock,
];
const allProjectsData = Array.from(
  { length: 30 },
  (_, index) => allProjects[index % allProjects.length]
);

export default function Projects() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SelectedProject>(null);

  const handlePopUp = (project: Project) => {
    setSelectedProject(project);
    setOpenPopUp(true);
  };

  const closePopUp = () => {
    setOpenPopUp(false);
    setSelectedProject(null);
  };

  return (
    <section className={styles.container}>
      {/* -------------Pop-Up----------- */}
      {openPopUp && selectedProject && (
        <div className={styles.popUpContainer}>
          <div className={styles.popUpElement}>
            <h2>{selectedProject.alt}</h2>
            <div className={styles.imageCon}>
              <Image
                className={styles.images}
                src={selectedProject.image}
                alt={selectedProject.alt}
                width={400}
                height={400}
                priority
              />
            </div>
            <div className={styles.popUpTexts}>
              <p>{selectedProject.description}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={closePopUp}>Back</button>
              <button
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                Visit Link
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ------------------------------- */}
      <div className={styles.portfolioTexts}>
        <div className={styles.projectsHeaderText}>
          <h2>MY PROJECTS</h2>
          <p>17</p>
        </div>
        <div className={styles.portfolioContainer}>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Freelance</h3>
              <p>ⓘ</p>
            </li>
            <li className={styles.elements}>
              {freelanceElement.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
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
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Webrandy Startup</h3>
              <p>ⓘ</p>
            </li>
            <li className={styles.elements}>
              {webrandyStartuup.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
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
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>Alas Development Center</h3>
              <p>ⓘ</p>
            </li>
            <li className={styles.elements}>
              {alasElement.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
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
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            <li>
              <h3>MSTOCK Company</h3>
              <p>ⓘ</p>
            </li>
            <li className={styles.elements}>
              {mstock.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
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
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------slider------------ */}
      <div className={styles.firstSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.firstSliderElement} key={index1}>
            {allProjectsData.map((element, elementIndex1) => (
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
      {/* ---------------------------------- */}
      <Slider />
    </section>
  );
}
