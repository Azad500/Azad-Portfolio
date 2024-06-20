import Image from "next/image";
import styles from "./skills.module.scss";
import HTML5 from "../../../assets/images/html5.svg";
import CSS from "../../../assets/images/css.svg";
import SCSS from "../../../assets/images/scss.svg";
import JS from "../../../assets/images/js.svg";
import REACT from "../../../assets/images/react.svg";
import REDUX from "../../../assets/images/redux.svg";
import NEXT from "../../../assets/images/next.svg";
import TYPESCRIPT from "../../../assets/images/typescript.svg";
import GITHUB from "../../../assets/images/github.svg";
import PHP from "../../../assets/images/php.svg";
import LARAVEL from "../../../assets/images/laravel.svg";
import MYSQL from "../../../assets/images/mysql.svg";
import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML5,", src: HTML5, alt: "HTML5" },
    { name: "CSS,", src: CSS, alt: "CSS" },
    { name: "SCSS,", src: SCSS, alt: "SCSS" },
    { name: "JS,", src: JS, alt: "JS" },
    { name: "REACT,", src: REACT, alt: "REACT" },
    { name: "REDUX,", src: REDUX, alt: "REDUX" },
    { name: "NEXT.JS,", src: NEXT, alt: "NEXT" },
    { name: "TYPESCRIPT,", src: TYPESCRIPT, alt: "TYPESCRIPT" },
    { name: "GITHUB,", src: GITHUB, alt: "GITHUB" },
    { name: "PHP,", src: PHP, alt: "PHP" },
    { name: "LARAVEL,", src: LARAVEL, alt: "LARAVEL" },
    { name: "MYSQL.", src: MYSQL, alt: "MYSQL" },
  ];

  return (
    <section className={styles.skillsContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.circle}>
        <p>What do I know in this profession?</p>
      </div>
      <ul className={styles.skillsElement}>
        {skills.map((skill, index) => (
          <li key={index}>
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
      {/* --------------slider-icons----------------- */}
      <ul className={styles.sliderIcons}>
        {skills.map((skill, index) => (
          <li key={index}>
            <Image
              className={styles.icon}
              src={skill.src}
              alt={skill.alt}
              width={400}
              height={400}
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
