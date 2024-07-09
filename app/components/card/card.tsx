import Image from "next/image";
import styles from "./card.module.scss";
import AdasDiploma from "../../../assets/certifications/AdasDiploma.png";
import DusunceAcademy from "../../../assets/certifications/DusunceAcademy.png";
import AlasDiploma from "../../../assets/certifications/AlasDiploma.png";
import HonoursAcademy from "../../../assets/certifications/HonoursAcademy.png";
import ElcPro from "../../../assets/certifications/ElcPro.png";
import AzFin from "../../../assets/certifications/AzFin.png";
import MasterDegree from "../../../assets/certifications/MasterDegree.png";
import BachelorDegree from "../../../assets/certifications/BachelorDegree.png";
import School2 from "../../../assets/certifications/School2.png";

const cardElements = [
  {
    name: "Adas",
    image: AdasDiploma,
    alt: "AdasDiploma",
    job: "Full Stack Developer",
    pdf: "",
  },
  {
    name: "Dushunce",
    image: DusunceAcademy,
    alt: "DushunceDiploma",
    job: "Trading",
    pdf: "/assets/pdf/DusunceAcademy.pdf",
  },
  {
    name: "Alas",
    image: AlasDiploma,
    alt: "AlasDiploma",
    job: "Front-end Developer",
    pdf: "/assets/pdf/AlasDiploma.pdf",
  },
  {
    name: "Honours",
    image: HonoursAcademy,
    alt: "HonoursDiploma",
    job: "F3",
    pdf: "/assets/pdf/HonoursAcademy.pdf",
  },
  {
    name: "ElcPro",
    image: ElcPro,
    alt: "ElcProDiploma",
    job: "English",
    pdf: "/assets/pdf/ElcPro.pdf",
  },
  {
    name: "AzFin",
    image: AzFin,
    alt: "AzFinDiploma",
    job: "Accounting",
    pdf: "/assets/pdf/AzFin.pdf",
  },
  {
    name: "UNEC",
    image: MasterDegree,
    alt: "MasterDiploma",
    job: "Master Degree",
    pdf: "/assets/pdf/Master.pdf",
  },
  {
    name: "UNEC",
    image: BachelorDegree,
    alt: "BachelorDiploma",
    job: "Bachelor Degree",
    pdf: "/assets/pdf/Bachelor.pdf",
  },
  {
    name: "School No. 2",
    image: School2,
    alt: "School2Diploma",
    job: "Secondary Education",
    pdf: "/assets/pdf/School.pdf",
  },
];

export default function Card() {
  const handleDownload = (pdfPath: string) => {
    if (pdfPath) {
      const link = document.createElement("a");
      link.href = pdfPath;
      const filename = pdfPath.split("/").pop();
      link.download = filename || "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No PDF available for download.");
    }
  };
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
              <button onClick={() => handleDownload(cardElement.pdf)}>
                Install
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
