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
          {/* ----------transparent----------- */}
          <div className={styles.transparent}></div>
          {/* -------------1-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>FRONT-END DEVELOPER</p>
              <p>MSTOCK</p>
              <p>I make websites remotely</p>
              <span>Baku, Azerbaijan</span>
              <span>January 2024 - Current</span>
              <a target="_blank" href="https://mstock.az/">
                MStock.az
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={MSTOCK}
                alt="MSTOCK"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------2-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>FRONT-END DEVELOPER</p>
              <p>WEBRANDY</p>
              <p>
                From October 2023, I started working as a Front-end developer at
                Webrandy Startup.
              </p>
              <span>Baku, Azerbaijan</span>
              <span>October 2023 - April 2024</span>
              <a target="_blank" href="https://webrandy.com/">
                Webrandy.com
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={WEBRANDY}
                alt="Webrandy"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------3-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>FRONT-END DEVELOPER</p>
              <p>ALAS Development Center</p>
              <p>
                After completing 6 months of Front-end training at Alas Academy,
                I started working as a Front-end developer at Alas Development
                Center.
              </p>
              <span>Baku, Azerbaijan</span>
              <span>May 2023 - May 2024</span>
              <a target="_blank" href="https://alas.edu.az/">
                Alas.edu.az
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={ALASACADEMY}
                alt="Alas Academy"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------4-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>PRODUCTION ACCOUNTANT</p>
              <p>BMS LLC</p>
              <p>
                All production areas created in the city of Lachin reporting and
                production by going to the city of Lachin carrying out
                inspections in the fields. I completed my career in accounting
                in November because I wanted to change my field.
              </p>
              <span>Baku-Lachin, Azerbaijan</span>
              <span>April 2023 - November 2023</span>
              <a target="_blank" href="https://bms.az/">
                BMS.az
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={BMS}
                alt="BMS"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------5-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>SENIOR ACCOUNTANT</p>
              <p>ARRIVER LLC</p>
              <p>
                Customs of products imported to Azerbaijan through the Bank
                making payments, making reports of all payments, external making
                payments to 1C software of imported products monthly for
                uploading and reporting to the tax authority preparation of
                reports, products through e-invoice to customers selling,
                attracting customers to the company, making bank payments
                conducting and controlling it, paying employees' salaries,
                Implementation of tax operations, problems occurring during work
                action on the execution of operations, etc... In addition, the
                skills: Accounting policies and controls, financial statements,
                Settlements, Processing of documents, Financial Information
                Systems, Audit of taxpayers' accounts, Account Reconciliation
                Processes, Payables and receivables, Calculation of liabilities,
                Fixed costs, Effective and Professional Communication,
                Nonconformity Assessment, Critical thinking and analysis, Tax
                obligations, Accounting of documents, Cash analysis
              </p>
              <span>Baku, Azerbaijan</span>
              <span>November 2019 - March 2023</span>
              <a target="_blank" href="https://arriver.az/">
                Arriver.az
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={ARRIVER}
                alt="ARRIVER"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------5-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>INTERN</p>
              <p>GILAN HOLDING</p>
              <p>
                In the internship program directed by the university in the 4th
                year of the bachelor's degree, my task was to carry out quality
                assessment and defect investigation in production.
              </p>
              <span>Baku, Azerbaijan</span>
              <span>March 2017 - June 2017</span>
              <a target="_blank" href="https://www.gilanholding.com/">
                GilanHolding.com
              </a>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={GilanHolding}
                alt="Old Baku"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
          {/* -------------6-------------- */}
          <li>
            <div className={styles.aboutWork}>
              <p>ENTREPRENEUR</p>
              <p>Old Baku Cafe</p>
              <p>
                During my university years, I rented a cafe for a short period
                of time in order to spend my summer holidays both efficiently
                and to gain experience in business life. I ran a cafe for 3
                months.
              </p>
              <span>Baku, Azerbaijan</span>
              <span>June 2015 - August 2015</span>
            </div>
            <div className={styles.workLogo}>
              <Image
                className={styles.workImage}
                src={OldBaku}
                alt="Old Baku"
                width={400}
                height={400}
                priority
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
