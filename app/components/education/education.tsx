import styles from "./education.module.scss";
import EducationKart from "../../../assets/images/educationCart.png";
import School from "../../../assets/workHistory/School257.png";
import Bachelor from "../../../assets/workHistory/UnecBachelor.png";
import Master from "../../../assets/workHistory/UnecMaster.png";
import AzFin from "../../../assets/workHistory/Azfin.png";
import ElcPro from "../../../assets/workHistory/ElcPro.png";
import MobilElcPro from "../../../assets/workHistory/MobilElcPro.png";
import HonoursAcademy from "../../../assets/workHistory/honoursAcademy.jpeg";
import AlasAcademy from "../../../assets/workHistory/Alas.png";
import MobileAlasAcademy from "../../../assets/workHistory/AlasAcademy.png";
import DusunceAcademy from "../../../assets/workHistory/DusunceAcademy.png";
import MobileDusunceAcademy from "../../../assets/workHistory/MobileDusunceAcademy.png";
import AdasAcademy from "../../../assets/workHistory/AdasAcademy.png";
import MobileAdasAcademy from "../../../assets/workHistory/MobileAdasAcademy.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const educationElement = [
  {
    id: 1,
    courseName: "Adas Academy",
    educationName: "Full Stack Development",
    about:
      "Those selected as a result of the state examination have the right to receive a full-stack education at Adas Academy on the basis of a scholarship. I am one of the chosen ones.",
    educationDate: "15.03.2024 - 31.08.2024",
    siteName: "Adas.az",
    siteLink: "https://adas.az/",
    educationImage: AdasAcademy,
    mobileEducationImage: MobileAdasAcademy,
    educationImageAlt: "Adas Academy",
  },
  {
    id: 2,
    courseName: "Dusunce Academy",
    educationName: "Trading",
    about:
      "I attended a 1-month trading course to gain an understanding of worldwide interest trading and increase my income.",
    educationDate: "01.09.2023 - 01.10.2023",
    siteName: "Dusunce Academy",
    siteLink: "https://www.instagram.com/dusunce_academy/",
    educationImage: DusunceAcademy,
    mobileEducationImage: MobileDusunceAcademy,
    educationImageAlt: "Dusunce Academy",
  },
  {
    id: 3,
    courseName: "Alas Academy",
    educationName: "Front-end Development",
    about:
      "In 6 months of Front-end training, I acquired the necessary advanced knowledge and in addition gained experience by participating in a real project.",
    educationDate: "10.05.2023 - 10.11.2023",
    siteName: "Alas.edu.az",
    siteLink: "https://alas.edu.az/",
    educationImage: AlasAcademy,
    mobileEducationImage: MobileAlasAcademy,
    educationImageAlt: "Alas Academy",
  },
  {
    id: 4,
    courseName: "Honours Academy",
    educationName: "F3",
    about: "I studied international accounting knowledge (ACCA) in 3 months.",
    educationDate: "01.07.2022 - 30.09.2022",
    siteName: "Honours.academy",
    siteLink: "https://honours.academy/",
    educationImage: HonoursAcademy,
    mobileEducationImage: HonoursAcademy,
    educationImageAlt: "Honours Academy",
  },
  {
    id: 5,
    courseName: "Elc Pro",
    educationName: "English",
    about:
      "I completed 6 months of English language training at the intermediate level. Because I need normal communication in English, the intermediate level was enough for me.",
    educationDate: "01.11.2020 - 30.04.2021",
    siteName: "ElcPro.az",
    siteLink: "https://elcpro.az/",
    educationImage: ElcPro,
    mobileEducationImage: MobilElcPro,
    educationImageAlt: "ElcPro",
  },
  {
    id: 6,
    courseName: "AzFin Academy",
    educationName: "Accounting",
    about:
      "For 3 months, along with accounting knowledge, I learned how to use the 1C program and the BTP program, which are more widely used in the field of accounting in the Republic of Azerbaijan.",
    educationDate: "01.03.2019 - 31.05.2019",
    siteName: "AzFin Academy",
    siteLink: "https://www.facebook.com/AzFinAcademy/",
    educationImage: AzFin,
    mobileEducationImage: AzFin,
    educationImageAlt: "AzFin",
  },
  {
    id: 7,
    courseName: "Azerbaijan State Economic University",
    educationName: "Master Degree",
    about:
      "I got to know global business processes more closely by studying international business at the MBA business school for 2 years.",
    educationDate: "15.09.2017 - 31.03.2019",
    siteName: "Unec.edu.az",
    siteLink: "https://unec.edu.az/",
    educationImage: Master,
    mobileEducationImage: Master,
    educationImageAlt: "Master",
  },
  {
    id: 8,
    courseName: "Azerbaijan State Economic University",
    educationName: "Bachelor Degree",
    about:
      "I acquired irreplaceable knowledge in the field of marketing and expertise for 4 years.",
    educationDate: "15.09.2013 - 30.06.2017",
    siteName: "Unec.edu.az",
    siteLink: "https://unec.edu.az/",
    educationImage: Bachelor,
    mobileEducationImage: Bachelor,
    educationImageAlt: "Bachelor",
  },
  {
    id: 9,
    courseName: "Full Secondary School No. 257",
    educationName: "Secondary Education",
    about:
      "The first education is where I started my life and it has a very high moral value for me. Because, along with my first education, I spent most of my childhood years here.",
    educationDate: "01.09.2002 - 31.05.2013",
    siteName: "Bakimektebleri.edu.az",
    siteLink: "https://bakimektebleri.edu.az/257/",
    educationImage: School,
    mobileEducationImage: School,
    educationImageAlt: "School",
  },
];
const educationPart = [
  {
    header: "EDUCATION",
    educationText:
      "After completing 11 years of secondary education, 6 years of university (4 years of bachelor's and 2 years of master's), I started to receive the necessary training for my working life and I am still continuing.",
  },
];

export default function Education() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [mobileSize, setMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileSize(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const elements = educationPart.find((element) => element.header);
  return (
    <section className={styles.educationContainer}>
      {elements && (
        <div className={styles.leftSide}>
          <h2>{elements.header}</h2>
          <p>{elements.educationText}</p>
        </div>
      )}
      {/* -----------slider------------- */}
      <div className={styles.slider}>
        {educationElement.map((element, index) => (
          <div className={styles.sliderElement} key={index}>
            <div className={styles.educationImageElement}>
              {expandedCard !== element.id && (
                <>
                  <Image
                    className={styles.mobilEducationImage}
                    src={
                      mobileSize
                        ? element.mobileEducationImage
                        : element.educationImage
                    }
                    alt={element.educationImageAlt}
                    width={400}
                    height={400}
                    priority
                  />

                  <div className={styles.overElement}>
                    <h3>{element.courseName}</h3>
                    <p className={styles.cartUpEducationName}>
                      {element.educationName}
                    </p>
                  </div>
                </>
              )}
              <div className={styles.overlay}></div>
              <button
                className={styles.detail}
                onClick={() => handleCardClick(element.id)}
              >
                {expandedCard === element.id ? "Close" : "In Detail"}
              </button>
            </div>
            <div className={styles.halfCircle}>
              <Image
                className={styles.educationCart}
                src={EducationKart}
                alt="Education Kart"
                width={400}
                height={400}
                priority
              />
            </div>
            {expandedCard === element.id && (
              <div className={styles.mobilEducationText}>
                <p>{element.about}</p>
                <span>Baku, Azerbaijan</span>
                <span>{element.educationDate}</span>
                <a target="_blank" href={element.siteLink}>
                  {element.siteName}
                </a>
              </div>
            )}
            {expandedCard !== element.id && (
              <div className={styles.webEducationText}>
                <h2>{element.educationName}</h2>
                <span>{element.courseName}</span>
                <p>{element.about}</p>
                <span>Baku, Azerbaijan</span>
                <span>{element.educationDate}</span>
                <a target="_blank" href={element.siteLink}>
                  {element.siteName}
                </a>
              </div>
            )}
          </div>
        ))}
        <div className={styles.sliderTransparent}></div>
      </div>
    </section>
  );
}
