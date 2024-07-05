"use client";
import "./globals.css";
import { useRef, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import WorkHistory from "./components/workHistory/workHistory";
import Education from "./components/education/education";
import Certifications from "./components/certifications/certifications";
import Projects from "./components/projects/projects";
import Language from "./components/language/language";
import Footer from "./components/footer/footer";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [whiteText, setWhiteText] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleHomeRef = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(true);
    setWhiteText(true);
  };
  const handleAboutRef = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(false);
    setWhiteText(true);
  };
  const handleSkillsRef = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(true);
    setWhiteText(true);
  };
  const handleWorkHistoryRef = () => {
    workHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(false);
    setWhiteText(false);
  };
  const handleEducationRef = () => {
    educationRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(false);
    setWhiteText(true);
  };

  const handleCertificationsRef = () => {
    certificationsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };
  const handleProjectsRef = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };
  const handleLanguageRef = () => {
    languageRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };

  const handleScroll = (direction: "up" | "down") => {
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (direction === "up") {
      window.scrollTo({
        top: currentScroll - viewportHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: currentScroll + viewportHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fullpage-container">
      <div className="scroll">
        <div className="scroll-buttons">
          <button className="up-arrow" onClick={() => handleScroll("up")}>
            &#62;
          </button>
          <button className="down-arrow" onClick={() => handleScroll("down")}>
            &#62;
          </button>
        </div>
      </div>
      <Navbar
        toggleMenu={toggleMenu}
        openMenu={openMenu}
        handleHomeRef={handleHomeRef}
        handleAboutRef={handleAboutRef}
        handleSkillsRef={handleSkillsRef}
        handleWorkHistoryRef={handleWorkHistoryRef}
        handleEducationRef={handleEducationRef}
        handleCertificationsRef={handleCertificationsRef}
        handleProjectsRef={handleProjectsRef}
        handleLanguageRef={handleLanguageRef}
        changeColor={changeColor}
        whiteText={whiteText}
      />
      <div ref={homeRef} className="section">
        <Header />
      </div>
      <div ref={aboutRef} className="section">
        <About />
      </div>
      <div ref={skillsRef} className="section">
        <Skills />
      </div>
      <div ref={workHistoryRef} className="section">
        <WorkHistory />
        {/* imageproblem */}
      </div>
      <div ref={educationRef} className="section">
        <Education />
      </div>
      <div ref={certificationsRef} className="section">
        <Certifications />
      </div>
      <div ref={projectsRef} className="section">
        <Projects />
      </div>
      <div ref={languageRef} className="section">
        <Language />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
}
