import Card from "../card/card";
import styles from "./certifications.module.scss";
import AdasDiploma from "../../../assets/certifications/AdasDiploma.png";
import DusunceAcademy from "../../../assets/certifications/DusunceAcademy.png";
import AlasDiploma from "../../../assets/certifications/AlasDiploma.png";
import HonoursAcademy from "../../../assets/certifications/HonoursAcademy.png";
import ElcPro from "../../../assets/certifications/ElcPro.png";
import AzFin from "../../../assets/certifications/AzFin.png";
import MasterDegree from "../../../assets/certifications/MasterDegree.png";
import BachelorDegree from "../../../assets/certifications/BachelorDegree.png";
import School2 from "../../../assets/certifications/School2.png";
import { useState, ChangeEvent } from "react";
import api from "../../axios/axios";

const cardElements = [
  {
    id: 1,
    name: "Adas",
    image: AdasDiploma,
    alt: "AdasDiploma",
    job: "Full Stack Developer",
    pdf: "",
  },
  {
    id: 2,
    name: "Dushunce",
    image: DusunceAcademy,
    alt: "DushunceDiploma",
    job: "Trading",
    pdf: "/assets/pdf/DusunceAcademy.pdf",
  },
  {
    id: 3,
    name: "Alas",
    image: AlasDiploma,
    alt: "AlasDiploma",
    job: "Front-end Developer",
    pdf: "/assets/pdf/AlasDiploma.pdf",
  },
  {
    id: 4,
    name: "Honours",
    image: HonoursAcademy,
    alt: "HonoursDiploma",
    job: "F3",
    pdf: "/assets/pdf/HonoursAcademy.pdf",
  },
  {
    id: 5,
    name: "ElcPro",
    image: ElcPro,
    alt: "ElcProDiploma",
    job: "English",
    pdf: "/assets/pdf/ElcPro.pdf",
  },
  {
    id: 6,
    name: "AzFin",
    image: AzFin,
    alt: "AzFinDiploma",
    job: "Accounting",
    pdf: "/assets/pdf/AzFin.pdf",
  },
  {
    id: 7,
    name: "UNEC",
    image: MasterDegree,
    alt: "MasterDiploma",
    job: "Master Degree",
    pdf: "/assets/pdf/Master.pdf",
  },
  {
    id: 8,
    name: "UNEC",
    image: BachelorDegree,
    alt: "BachelorDiploma",
    job: "Bachelor Degree",
    pdf: "/assets/pdf/Bachelor.pdf",
  },
  {
    id: 9,
    name: "School No. 2",
    image: School2,
    alt: "School2Diploma",
    job: "Secondary Education",
    pdf: "/assets/pdf/School.pdf",
  },
];

export default function Certifications() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentCardId, setCurrentCardId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handlePopUp = (id: number) => {
    setCurrentCardId(id);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
    setCurrentCardId(null);
  };

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCardId !== null) {
      const card = cardElements.find((card) => card.id === currentCardId);
      if (card) {
        try {
          const response = await api.post("uploaded", formData);
          if (response.status < 200 || response.status >= 300) {
            throw new Error("Network response was not ok");
          }
          handleDownload(card.pdf);
          handleClosePopUp();
        } catch (error) {
          console.error("Error posting data:", error);
        }
      }
    }
  };

  return (
    <section className={styles.certificationsContainer}>
      <div className={styles.overlay}></div>
      <Card cardElements={cardElements} handlePopUp={handlePopUp} />
      {showPopUp && (
        <div className={styles.popUpContainer}>
          <form onSubmit={handleFormSubmit}>
            <h2>Download the Certificate</h2>
            <p>
              If you want to download the certificate, please fill out the form
              below.
            </p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname"
              required
              value={formData.surname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input type="submit" name="download" id="submit" value="Download" />
            <input
              type="button"
              name="back"
              id="submit"
              value="Back"
              onClick={handleClosePopUp}
            />
          </form>
        </div>
      )}
    </section>
  );
}
