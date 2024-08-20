"use client";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
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
import Evaluate from "./components/evaluate/evaluate";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [whiteText, setWhiteText] = useState(true);
  const [evaluate, setEvaluate] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    { ref: homeRef, id: "home" },
    { ref: aboutRef, id: "about" },
    { ref: skillsRef, id: "skills" },
    { ref: workHistoryRef, id: "workHistory" },
    { ref: educationRef, id: "education" },
    { ref: certificationsRef, id: "certifications" },
    { ref: projectsRef, id: "projects" },
    { ref: languageRef, id: "language" },
    { ref: footerRef, id: "footer" },
  ];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeRef = () => {
    handleScrollToRef(homeRef);
    toggleMenu();
    setChangeColor(true);
    setWhiteText(true);
  };
  const handleAboutRef = () => {
    handleScrollToRef(aboutRef);
    toggleMenu();
    setChangeColor(false);
    setWhiteText(true);
  };
  const handleSkillsRef = () => {
    handleScrollToRef(skillsRef);
    toggleMenu();
    setChangeColor(true);
    setWhiteText(true);
  };
  const handleWorkHistoryRef = () => {
    handleScrollToRef(workHistoryRef);
    toggleMenu();
    setChangeColor(false);
    setWhiteText(false);
  };
  const handleEducationRef = () => {
    handleScrollToRef(educationRef);
    toggleMenu();
    setChangeColor(false);
    setWhiteText(true);
  };
  const handleCertificationsRef = () => {
    handleScrollToRef(certificationsRef);
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };
  const handleProjectsRef = () => {
    handleScrollToRef(projectsRef);
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };
  const handleLanguageRef = () => {
    handleScrollToRef(languageRef);
    toggleMenu();
    setChangeColor(true);
    setWhiteText(false);
  };

  const handleEvaluate = () => {
    setEvaluate(true);
    toggleMenu();
  };

  const handleCloseEvaluate = () => {
    setEvaluate(false);
  };

  const handleUpClick = () => {
    const currentIndex = sectionRefs.findIndex(
      (section) => section.id === currentSection
    );
    if (currentIndex > 0) {
      handleScrollToRef(sectionRefs[currentIndex - 1].ref);
    }
  };

  const handleDownClick = () => {
    const currentIndex = sectionRefs.findIndex(
      (section) => section.id === currentSection
    );
    if (currentIndex < sectionRefs.length - 1) {
      handleScrollToRef(sectionRefs[currentIndex + 1].ref);
    }
  };

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home", changeColor: true, whiteText: true },
      { ref: aboutRef, id: "about", changeColor: false, whiteText: true },
      { ref: skillsRef, id: "skills", changeColor: true, whiteText: true },
      {
        ref: workHistoryRef,
        id: "workHistory",
        changeColor: false,
        whiteText: false,
      },
      {
        ref: educationRef,
        id: "education",
        changeColor: false,
        whiteText: true,
      },
      {
        ref: certificationsRef,
        id: "certifications",
        changeColor: true,
        whiteText: false,
      },
      { ref: projectsRef, id: "projects", changeColor: true, whiteText: false },
      { ref: languageRef, id: "language", changeColor: true, whiteText: false },
      { ref: footerRef, id: "footer", changeColor: true, whiteText: false },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (section) {
              setChangeColor(section.changeColor);
              setWhiteText(section.whiteText);
              setCurrentSection(section.id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="fullpage-container">
      <div className="fullpage-element">
        <div className="buttons">
          <button
            className={currentSection === "home" ? "up-none" : "up-button"}
            onClick={handleUpClick}
          >
            ▲
          </button>
          <button
            className={
              currentSection === "footer" ? "down-none" : "down-button"
            }
            onClick={handleDownClick}
          >
            ▼
          </button>
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
          handleEvaluate={handleEvaluate}
          changeColor={changeColor}
          whiteText={whiteText}
        />
        {evaluate && (
          <div className="evaluate">
            <Evaluate handleCloseEvaluate={handleCloseEvaluate} />
          </div>
        )}
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
        <div ref={footerRef} className="section">
          <Footer />
        </div>
      </div>
    </div>
  );
}
