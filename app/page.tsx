"use client";
import { useRef, useState } from "react";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import WorkHistory from "./components/workHistory/workHistory";
import { webpack } from "next/dist/compiled/webpack/webpack";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workHistoryRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleHomeRef = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };
  const handleAboutRef = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };
  const handleSkillsRef = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };
  const handleWorkHistoryRef = () => {
    workHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  return (
    <div className="fullpage-container">
      <Navbar
        toggleMenu={toggleMenu}
        openMenu={openMenu}
        handleHomeRef={handleHomeRef}
        handleAboutRef={handleAboutRef}
        handleSkillsRef={handleSkillsRef}
        handleWorkHistoryRef={handleWorkHistoryRef}
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
      </div>
    </div>
  );
}
