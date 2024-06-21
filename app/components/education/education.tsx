import styles from "./education.module.scss";
import EducationKart from "../../../assets/images/educationCart.png";
import School from "../../../assets/workHistory/School257.png";
import Bachelor from "../../../assets/workHistory/UnecBachelor.png";
import Master from "../../../assets/workHistory/UnecMaster.png";
import AzFin from "../../../assets/workHistory/Azfin.png";
import HonoursAcademy from "../../../assets/workHistory/honoursAcademy.jpeg";
import Alas from "../../../assets/workHistory/Alas.png";
import AdasAcademy from "../../../assets/workHistory/AdasAcademy.png";
import Image from "next/image";
export default function Education() {
  return (
    <section className={styles.educationContainer}>
      <div className={styles.leftSide}>
        <h2>EDUCATION</h2>
        <p>
          After completing 11 years of secondary education, 6 years of
          university (4 years of bachelor's and 2 years of master's), I started
          to receive the necessary training for my working life and I am still
          continuing.
        </p>
      </div>
      {/* -----------slider------------- */}
      <div className={styles.slider}>
        {/* -----------first-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={AdasAcademy}
              alt="Adas Academy"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Full Stack Development</h2>
            <span>Adas Academy</span>
            <p>
              Those selected as a result of the state examination have the right
              to receive a full-stack education at Adas Academy on the basis of
              a scholarship. I am one of the chosen ones.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>15.03.2024 - 31.08.2024</span>
            <a target="_blank" href="https://adas.az/">
              Adas.az
            </a>
          </div>
        </div>
        {/* -----------first-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={Alas}
              alt="Alas Academy"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Front-end Development</h2>
            <span>Alas Academy</span>
            <p>
              In 6 months of Front-end training, I acquired the necessary
              advanced knowledge and in addition gained experience by
              participating in a real project.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>10.05.2023 - 10.11.2023</span>
            <a target="_blank" href="https://alas.edu.az/">
              Alas.edu.az
            </a>
          </div>
        </div>
        {/* -----------first-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={HonoursAcademy}
              alt="Honours Academy"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Institute of Finance</h2>
            <span>Honours Academy</span>
            <p>
              I studied international accounting knowledge (ACCA) in 3 months.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>01.07.2022 - 30.09.2022</span>
            <a target="_blank" href="https://honours.academy/">
              Honours.academy
            </a>
          </div>
        </div>
        {/* -----------first-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={AzFin}
              alt="AzFin"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Finance Course</h2>
            <span>AzFin Academy</span>
            <p>
              For 3 months, along with accounting knowledge, I learned how to
              use the 1C program and the BTP program, which are more widely used
              in the field of accounting in the Republic of Azerbaijan.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>01.03.2019 - 31.05.2019</span>
            <a target="_blank" href="https://www.facebook.com/AzFinAcademy/">
              AzFin Academy
            </a>
          </div>
        </div>
        {/* -----------second-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={Master}
              alt="Master"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Master Degree</h2>
            <span>Azerbaijan State Economic University</span>
            <p>
              I got to know global business processes more closely by studying
              international business at the MBA business school for 2 years.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>2017 - 2019</span>
            <a target="_blank" href="https://unec.edu.az/">
              Unec.edu.az
            </a>
          </div>
        </div>
        {/* -----------second-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={Bachelor}
              alt="Bachelor"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Bachelor Degree</h2>
            <span>Azerbaijan State Economic University</span>
            <p>
              I acquired irreplaceable knowledge in the field of marketing and
              expertise for 4 years.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>2013 - 2017</span>
            <a target="_blank" href="https://unec.edu.az/">
              Unec.edu.az
            </a>
          </div>
        </div>
        {/* -----------third-slider------- */}
        <div className={styles.sliderElement}>
          <div className={styles.educationImageElement}>
            <Image
              className={styles.educationImage}
              src={School}
              alt="School"
              width={400}
              height={400}
              priority
            />
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
          <div className={styles.educationText}>
            <h2>Secondary Education</h2>
            <span>Full Secondary School No. 257</span>
            <p>
              The first education is where I started my life and it has a very
              high moral value for me. Because, along with my first education, I
              spent most of my childhood years here.
            </p>
            <span>Baku, Azerbaijan</span>
            <span>2002 - 2013</span>
            <a target="_blank" href="https://bakimektebleri.edu.az/257/">
              Bakimektebleri.edu.az
            </a>
          </div>
        </div>
        {/* ----------------- */}
        <div className={styles.sliderTransparent}></div>
      </div>
    </section>
  );
}
