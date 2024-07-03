import styles from "./cards.module.scss";
import School from "../../../assets/workHistory/School257.png";
import Bachelor from "../../../assets/workHistory/UnecBachelor.png";
import Master from "../../../assets/workHistory/UnecMaster.png";
import AzFin from "../../../assets/workHistory/Azfin.png";
import ElcPro from "../../../assets/workHistory/ElcPro.png";
import HonoursAcademy from "../../../assets/workHistory/honoursAcademy.jpeg";
import AlasAcademy from "../../../assets/workHistory/Alas.png";
import DusunceAcademy from "../../../assets/workHistory/DusunceAcademy.png";
import AdasAcademy from "../../../assets/workHistory/AdasAcademy.png";
import Image from "next/image";

const educationElement = [
  {
    courseName: "Adas Academy",
    educationName: "Full Stack Development",
    about:
      "Those selected as a result of the state examination have the right to receive a full-stack education at Adas Academy on the basis of a scholarship. I am one of the chosen ones.",
    educationDate: "15.03.2024 - 31.08.2024",
    siteName: "Adas.az",
    siteLink: "https://adas.az/",
    educationImage: AdasAcademy,
    educationImageAlt: "Adas Academy",
  },
  {
    courseName: "Dusunce Academy",
    educationName: "Trading",
    about:
      "I attended a 1-month trading course to gain an understanding of worldwide interest trading and increase my income.",
    educationDate: "01.09.2023 - 01.10.2023",
    siteName: "Dusunce Academy",
    siteLink: "https://www.instagram.com/dusunce_academy/",
    educationImage: DusunceAcademy,
    educationImageAlt: "Dusunce Academy",
  },
  {
    courseName: "Alas Academy",
    educationName: "Front-end Development",
    about:
      "In 6 months of Front-end training, I acquired the necessary advanced knowledge and in addition gained experience by participating in a real project.",
    educationDate: "10.05.2023 - 10.11.2023",
    siteName: "Alas.edu.az",
    siteLink: "https://alas.edu.az/",
    educationImage: AlasAcademy,
    educationImageAlt: "Alas Academy",
  },
  {
    courseName: "Honours Academy",
    educationName: "F3",
    about: "I studied international accounting knowledge (ACCA) in 3 months.",
    educationDate: "01.07.2022 - 30.09.2022",
    siteName: "Honours.academy",
    siteLink: "https://honours.academy/",
    educationImage: HonoursAcademy,
    educationImageAlt: "Honours Academy",
  },
  {
    courseName: "Elc Pro",
    educationName: "English",
    about:
      "I completed 6 months of English language training at the intermediate level. Because I need normal communication in English, the intermediate level was enough for me.",
    educationDate: "01.11.2020 - 30.04.2021",
    siteName: "ElcPro.az",
    siteLink: "https://elcpro.az/",
    educationImage: ElcPro,
    educationImageAlt: "ElcPro",
  },
  {
    courseName: "AzFin Academy",
    educationName: "Accounting",
    about:
      "For 3 months, along with accounting knowledge, I learned how to use the 1C program and the BTP program, which are more widely used in the field of accounting in the Republic of Azerbaijan.",
    educationDate: "01.03.2019 - 31.05.2019",
    siteName: "AzFin Academy",
    siteLink: "https://www.facebook.com/AzFinAcademy/",
    educationImage: AzFin,
    educationImageAlt: "AzFin",
  },
  {
    courseName: "Azerbaijan State Economic University",
    educationName: "Master Degree",
    about:
      "I got to know global business processes more closely by studying international business at the MBA business school for 2 years.",
    educationDate: "15.09.2017 - 31.03.2019",
    siteName: "Unec.edu.az",
    siteLink: "https://unec.edu.az/",
    educationImage: Master,
    educationImageAlt: "Master",
  },
  {
    courseName: "Azerbaijan State Economic University",
    educationName: "Bachelor Degree",
    about:
      "I acquired irreplaceable knowledge in the field of marketing and expertise for 4 years.",
    educationDate: "15.09.2013 - 30.06.2017",
    siteName: "Unec.edu.az",
    siteLink: "https://unec.edu.az/",
    educationImage: Bachelor,
    educationImageAlt: "Bachelor",
  },
  {
    courseName: "Full Secondary School No. 257",
    educationName: "Secondary Education",
    about:
      "The first education is where I started my life and it has a very high moral value for me. Because, along with my first education, I spent most of my childhood years here.",
    educationDate: "01.09.2002 - 31.05.2013",
    siteName: "Bakimektebleri.edu.az",
    siteLink: "https://bakimektebleri.edu.az/257/",
    educationImage: School,
    educationImageAlt: "School",
  },
];

export default function Cards() {
  return (
    <div className={styles.wrapper}>
      {educationElement.map((element, index) => (
        <div className={styles.cardCountry} key={index}>
          <input
            type="checkbox"
            id={`card-${index}`}
            className={styles.more1}
            aria-hidden="true"
          />
          <div className={styles.content1}>
            <div className={styles.overlay}>
              <div className={styles.inner}>
                <h3 className={styles.text1}>{element.courseName}</h3>
                <p className={styles.text2}>{element.educationName}</p>
                <Image
                  className={styles.imageFront}
                  src={element.educationImage}
                  alt={element.educationImageAlt}
                  width={400}
                  height={400}
                  priority
                />
                <label
                  htmlFor={`card-${index}`}
                  className={`${styles.button} ${styles.cardButton}`}
                  aria-hidden="true"
                >
                  In Detail
                </label>
              </div>
            </div>
            <div className={styles.backInfo}>
              <div className={styles.inner}>
                <div className={styles.onlyTextInBack}>
                  <a
                    href={element.siteLink}
                    className={styles.azerbaijanOffice}
                  >
                    Site - {element.siteName}
                  </a>
                  <p className={styles.azerbaijanAddress}>
                    {element.educationDate}
                  </p>
                  <p>{element.about}</p>
                </div>
                <label
                  htmlFor={`card-${index}`}
                  className={`${styles.button} ${styles.return}`}
                  aria-hidden="true"
                >
                  Back
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
