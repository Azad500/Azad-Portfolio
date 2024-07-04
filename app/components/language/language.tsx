import Image from "next/image";
import styles from "./language.module.scss";
import Azerbaijan from "../../../assets/images/azerbaijanLang.jpg";
import AzerbaijanImg from "../../../assets/images/azerbaijan.png";
import Turkey from "../../../assets/images/turkeyLang.jpg";
import TurkeyImg from "../../../assets/images/turkey.png";
import England from "../../../assets/images/englandLang.jpg";
import EnglandImg from "../../../assets/images/english.png";
import Russian from "../../../assets/images/russianLang.jpg";
import RussianImg from "../../../assets/images/russian.png";
import { useEffect, useState } from "react";

const languages = [
  {
    id: 1,
    langImage: Azerbaijan,
    langName: "Azerbaijani",
    langFlag: AzerbaijanImg,
    about: "Azerbaijani is my first language.",
  },
  {
    id: 2,
    langImage: Turkey,
    langName: "Turkish",
    langFlag: TurkeyImg,
    about:
      "I have the ability to speak, write and understand Turkish at a high level.",
  },
  {
    id: 3,
    langImage: England,
    langName: "English",
    langFlag: EnglandImg,
    about: "I have intermediate skills in English.",
  },
  {
    id: 4,
    langImage: Russian,
    langName: "Russian",
    langFlag: RussianImg,
    about:
      "I have reading and writing skills in Russian, but I can speak and understand with little development.",
  },
];

export default function Language() {
  const [selectedLangId, setSelectedLangId] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => setFade(false), 300);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  const handleChooseLang = (id: number) => {
    if (id !== selectedLangId) {
      setFade(true);
      setTimeout(() => {
        setSelectedLangId(id);
      }, 300);
    }
  };

  const selectedLanguage = languages.find(
    (language) => language.id === selectedLangId
  );

  return (
    <section className={styles.languageContainer}>
      <div className={styles.langElement}>
        <div className={styles.overlay}></div>
        <div
          className={`${styles.langImage} ${
            fade ? styles.fadeOut : styles.fadeIn
          }`}
        >
          {selectedLanguage && (
            <>
              <Image
                className={styles.images}
                src={selectedLanguage.langImage}
                alt={selectedLanguage.langName}
                width={1000}
                height={1000}
                priority
              />
              <span>{selectedLanguage.about}</span>
            </>
          )}
        </div>
      </div>
      <div className={styles.langHeader}>
        <h2>LANGUAGE</h2>
      </div>
      <ul className={styles.languages}>
        {languages.map((language, index) => (
          <div key={index}>
            <li
              className={selectedLangId === language.id ? styles.language : ""}
              onClick={() => handleChooseLang(language.id)}
            >
              <p>{language.langName}</p>
              <Image
                src={language.langFlag}
                alt={language.langName}
                width={35}
                height={35}
                priority
              />
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}
