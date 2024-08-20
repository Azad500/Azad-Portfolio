"use client";
import { useState } from "react";
import Entry from "./entry/entry";
import styles from "./page.module.scss";
import AboutMe from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import Experience from "./experience/experience";
import Education from "./education/education";
import Certification from "./certification/certification";
import Project from "./projects/projects";
import Language from "./language/language";
import Other from "./other/other";
export default function AdminPanel() {
  const [entry, setEntry] = useState(true);
  const [aboutMe, setAboutMe] = useState(false);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [certification, setCertification] = useState(false);
  const [projects, setProjects] = useState(false);
  const [language, setLanguage] = useState(false);
  const [other, setOther] = useState(false);

  const handleEntry = () => {
    setEntry(true);
    setSkills(false);
    setAboutMe(false);
    setExperience(false);
    setEducation(false);
    setCertification(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleAboutMe = () => {
    setAboutMe(true);
    setEntry(false);
    setSkills(false);
    setExperience(false);
    setEducation(false);
    setCertification(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleSkills = () => {
    setSkills(true);
    setEntry(false);
    setAboutMe(false);
    setExperience(false);
    setEducation(false);
    setCertification(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleExperience = () => {
    setExperience(true);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
    setEducation(false);
    setCertification(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleEducation = () => {
    setEducation(true);
    setExperience(false);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
    setCertification(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleCertification = () => {
    setCertification(true);
    setEducation(false);
    setExperience(false);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
    setProjects(false);
    setLanguage(false);
    setOther(false);
  };

  const handleProjects = () => {
    setProjects(true);
    setCertification(false);
    setEducation(false);
    setExperience(false);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
    setLanguage(false);
    setOther(false);
  };

  const handleLanguage = () => {
    setLanguage(true);
    setProjects(false);
    setCertification(false);
    setEducation(false);
    setExperience(false);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
    setOther(false);
  };

  const handleOther = () => {
    setOther(true);
    setLanguage(false);
    setProjects(false);
    setCertification(false);
    setEducation(false);
    setExperience(false);
    setEntry(false);
    setAboutMe(false);
    setSkills(false);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <nav>
          <div>
            <h3 onClick={handleEntry} className={entry ? styles.active : ""}>
              Entry
            </h3>
            <h3
              onClick={handleAboutMe}
              className={aboutMe ? styles.active : ""}
            >
              About Me
            </h3>
            <h3 onClick={handleSkills} className={skills ? styles.active : ""}>
              Skills
            </h3>
            <h3
              onClick={handleExperience}
              className={experience ? styles.active : ""}
            >
              Experience
            </h3>
            <h3
              onClick={handleEducation}
              className={education ? styles.active : ""}
            >
              Education
            </h3>
          </div>
          <div>
            <h3
              onClick={handleCertification}
              className={certification ? styles.active : ""}
            >
              Certification
            </h3>
            <h3
              onClick={handleProjects}
              className={projects ? styles.active : ""}
            >
              Projects
            </h3>
            <h3
              onClick={handleLanguage}
              className={language ? styles.active : ""}
            >
              Language
            </h3>
            <h3 onClick={handleOther} className={other ? styles.active : ""}>
              Other
            </h3>
          </div>
        </nav>
      </header>
      <section className={styles.main}>
        {entry && <Entry />}
        {aboutMe && <AboutMe />}
        {skills && <Skills />}
        {experience && <Experience />}
        {education && <Education />}
        {certification && <Certification />}
        {projects && <Project />}
        {language && <Language />}
        {other && <Other />}
      </section>
    </section>
  );
}
