import Image from "next/image";
import styles from "./workHistory.module.scss";
import WorkHistoryImage from "../../../assets/images/headerPhoto.jpeg";
import OldBaku from "../../../assets/workHistory/OldBakuCafe.png";
import GilanHolding from "../../../assets/workHistory/GilanHolding.png";
import MSTOCK from "../../../assets/workHistory/mstock.png";
import ALASACADEMY from "../../../assets/workHistory/AlasAcademy.png";
import WEBRANDY from "../../../assets/workHistory/Webrandy.png";
import BMS from "../../../assets/workHistory/BMSLLC.png";
import ARRIVER from "../../../assets/workHistory/ArriverLLC.png";

const workHistoryElements = [
  {
    id: 1,
    jobName: "FRONT-END DEVELOPER",
    company: "MSTOCK",
    aboutWork: "I make websites remotely",
    date: "January 2024 - Current",
    link: "https://mstock.az/",
    site: "MStock.az",
    companyImage: MSTOCK,
  },
  {
    id: 2,
    jobName: "FRONT-END DEVELOPER",
    company: "WEBRANDY",
    aboutWork:
      "From October 2023, I started working as a Front-end developer at Webrandy Startup.",
    date: "October 2023 - April 2024",
    link: "https://webrandy.com/",
    site: "Webrandy.com",
    companyImage: WEBRANDY,
  },
  {
    id: 3,
    jobName: "FRONT-END DEVELOPER",
    company: "ALAS Development Center",
    aboutWork:
      "After completing 6 months of Front-end training at Alas Academy, I started working as a Front-end developer at Alas Development Center.",
    date: "May 2023 - May 2024",
    link: "https://alas.edu.az/",
    site: "Alas.edu.az",
    companyImage: ALASACADEMY,
  },
  {
    id: 4,
    jobName: "PRODUCTION ACCOUNTANT",
    company: "BMS LLC",
    aboutWork:
      "All production areas created in the city of Lachin reporting and production by going to the city of Lachin carrying out inspections in the fields. I completed my career in accounting in November because I wanted to change my field.",
    date: "April 2023 - November 2023",
    link: "https://bms.az/",
    site: "BMS.az",
    companyImage: BMS,
  },
  {
    id: 5,
    jobName: "SENIOR ACCOUNTANT",
    company: "ARRIVER LLC",
    aboutWork:
      "Customs of products imported to Azerbaijan through the Bank making payments, making reports of all payments, external making payments to 1C software of imported products monthly for uploading and reporting to the tax authority preparation of reports, products through e-invoice to customers selling, attracting customers to the company, making bank payments conducting and controlling it, paying employees' salaries, Implementation of tax operations, problems occurring during work action on the execution of operations, etc... In addition, the skills: Accounting policies and controls, financial statements, Settlements, Processing of documents, Financial Information Systems, Audit of taxpayers' accounts, Account Reconciliation Processes, Payables and receivables, Calculation of liabilities, Fixed costs, Effective and Professional Communication, Nonconformity Assessment, Critical thinking and analysis, Tax obligations, Accounting of documents, Cash analysis",
    date: "November 2019 - March 2023",
    link: "https://arriver.az/",
    site: "Arriver.az",
    companyImage: ARRIVER,
  },
  {
    id: 6,
    jobName: "INTERN",
    company: "GILAN HOLDING",
    aboutWork:
      "In the internship program directed by the university in the 4th year of the bachelor's degree, my task was to carry out quality assessment and defect investigation in production.",
    date: "March 2017 - June 2017",
    link: "https://www.gilanholding.com/",
    site: "GilanHolding.com",
    companyImage: GilanHolding,
  },
  {
    id: 7,
    jobName: "ENTREPRENEUR",
    company: "Old Baku Cafe",
    aboutWork:
      " During my university years, I rented a cafe for a short period of time in order to spend my summer holidays both efficiently and to gain experience in business life. I ran a cafe for 3 months.",
    date: "June 2015 - August 2015",
    link: "",
    site: "",
    companyImage: OldBaku,
  },
];

export default function WorkHistory() {
  return (
    <section className={styles.workHistoryContainer}>
      <div className={styles.leftSide}>
        <div className={styles.upSideElement}>
          <div>
            <h3>MY</h3>
            <h2>WORK HISTORY</h2>
          </div>
          <div>
            <Image
              className={styles.image}
              src={WorkHistoryImage}
              alt="Work History Image"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <div className={styles.downSideElement}>
          <p>#forme</p>
          <h4>
            I am 29 years old and I love to constantly improve myself. Life is a
            marathon and if you stop you will lose, so you need to constantly
            learn new things.
          </h4>
        </div>
      </div>
      <div className={styles.rightSide}>
        <ul className={styles.workList}>
          <li className={styles.transparent}></li>
          {workHistoryElements.map((element) => (
            <li key={element.id}>
              <div className={styles.aboutWork}>
                <p>{element.jobName}</p>
                <p>{element.company}</p>
                <p>{element.aboutWork}</p>
                <span>Baku, Azerbaijan</span>
                <span>{element.date}</span>
                <a target="_blank" href={element.link}>
                  {element.site}
                </a>
              </div>
              <div className={styles.workLogo}>
                <Image
                  className={styles.workImage}
                  src={element.companyImage}
                  alt={element.company}
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </li>
          ))}
          ;
        </ul>
      </div>
    </section>
  );
}
