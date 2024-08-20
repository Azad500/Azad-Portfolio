import Image from "next/image";
import Slider from "./slider";
import styles from "./projects.module.scss";
import GarantCompressor from "../../../assets/projects/GarantCompressor.png";
import Webrandy from "../../../assets/projects/Webrandy.png";
import AddressArch from "../../../assets/projects/AddressArch.png";
import AlasEva from "../../../assets/projects/AlasEva.png";
import AzSpeech from "../../../assets/projects/AzSpeech.png";
import MStock from "../../../assets/projects/MStock.png";
import BestPrint from "../../../assets/projects/BestPrint.png";
import LosAngeles from "../../../assets/projects/LosAngeles.png";
import AmoFresh from "../../../assets/projects/AmoFresh.png";
import StudentAll from "../../../assets/projects/StudentAll.png";
import MayakCargo from "../../../assets/projects/MayakCargo.png";
import Minik from "../../../assets/projects/Minik.png";
import MayakMebel from "../../../assets/projects/MayakMebel.png";
import PutaLogistik from "../../../assets/projects/PutaLogistik.png";
import Mico from "../../../assets/projects/Mico.png";
import MenzilTap from "../../../assets/projects/MenzilTap.png";
import AzadPortfolio from "../../../assets/projects/AzadPortfolio.png";
import IndiTap from "../../../assets/projects/IndiTap.png";
import MyWork from "../../../assets/projects/MyWork.png";
import GlobalAptek from "../../../assets/projects/GlobalAptek.png";
import FreelancerAzad from "../../../assets/images/freelancerAzad.jpg";
import { useState } from "react";

interface Project {
  id: number;
  image: StaticImageData;
  alt: string;
  link: string;
  site: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  description6: string;
  description7: string;
  description8: string;
  description9: string;
  description10: string;
  description11: string;
  description12: string;
  description13: string;
  description14: string;
  description15: string;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Company {
  id: number;
  image: StaticImageData;
  alt: string;
  description: string;
}

type SelectedProject = Project | null;
type SelectedCompany = Company | null;

const freelanceElement: Project[] = [
  {
    id: 1,
    image: GarantCompressor,
    alt: "Garant Compressor",
    link: "https://garantcompressor.com/",
    site: "garantcompressor.com",
    description1:
      "• React: A JavaScript library for building user interfaces, React was used to create the dynamic components of the site.",
    description2:
      "• React DOM: This library serves as the entry point to the DOM and server renderers for React.",
    description3:
      "• React Router DOM: Utilized for handling navigation within the website, enabling a seamless single-page application experience.",
    description4:
      "• Sass: The first CSS processor that lets you write more consistent and scalable styles, and a CSS framework used to make it look great on all devices.",
    description5:
      "• i18next: An internationalization framework used to handle translations and localization of the website content.",
    description6:
      "• React i18next: Integration of i18next for React, enabling multi-language support in the React components.",
    description7:
      "• React Scroll: This library was used to enable smooth scrolling effects within the website.",
    description8:
      "• React Smooth Scroll Hook: Another library to enhance the smooth scrolling experience on the site.",
    description9:
      "• React Router Hash Link: This extension of React Router allows for smooth scrolling to anchors within the page.",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 2,
    image: LosAngeles,
    alt: "Los Angeles",
    link: "https://los-angeles-zeta.vercel.app/",
    site: "losangeles.com",
    description1:
      "• React: A JavaScript library for building user interfaces, providing the structure for dynamic components.",
    description2:
      "• React DOM: Facilitates the interaction between React and the DOM.",
    description3:
      "• Sass: The first CSS processor that lets you write more consistent and scalable styles, and a CSS framework used to make it look great on all devices.",
    description4:
      "• React Slick: A carousel component for React, used for image sliders and carousels.",
    description5:
      "• Slick Carousel: The core carousel functionality for creating responsive sliders.",
    description6:
      "• React Accordion: Used for creating collapsible sections to organize content.",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 3,
    image: AmoFresh,
    alt: "AmoFresh",
    link: "https://amofresh.az/",
    site: "amoFresh.az",
    description1:
      "• I prepared a page for a presentation at the opening of a company. The deadline was very tight and I wrote and submitted it in 2 hours.",
    description2: "• This site is a plain vanilla project.",
    description3:
      "• The site has a catalog in 3 languages ​​and is in the form of a book flip.",
    description4: "• The site is responsive.",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 4,
    image: StudentAll,
    alt: "StudentAll",
    link: "https://studentall.com/studentinfo/",
    site: "studentall.com/studentinfo",
    description1: "• I made this site in 3 hours.",
    description2: "• This site is a plain vanilla project.",
    description3: "• It is responsive.",
    description4: "• In addition, Php was used.",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 5,
    image: Mico,
    alt: "Mico",
    link: "https://mico-theta.vercel.app/",
    site: "mico-cinema.com",
    description1:
      "• React: JavaScript library for creating user interfaces. It provides the structure of dynamic components.",
    description2:
      "• Next.js: A React-based framework offers SSR (Server Side Rendering) and static site rendering capabilities.",
    description3:
      "• Framer Motion: A library for animations and movements to enrich user interactions.",
    description4:
      "• Next Video: A library used to manage and display video content.",
    description5:
      "• React Bootstrap: Bootstrap's integration with React delivers ready-style components and leverages the power of the CSS framework for responsive design.",
    description6:
      "• React DOM: Enables React applications to interact with DOM (Document Object Model).",
    description7:
      "• React Page Scroller: A library that facilitates in-page navigation, especially used in single page applications.",
    description8:
      "• Sass: The first CSS processor that lets you write more consistent and scalable styles, and a CSS framework used to make it look great on all devices.",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 6,
    image: AzadPortfolio,
    alt: "AzadPortfolio",
    link: "https://www.azadmirzazada.com/",
    site: "azadmirzazada.com",
    description1:
      "• React: A JavaScript library for building user interfaces. It provides the structure for dynamic components.",
    description2:
      "• Next.js: A React-based framework that offers SSR (Server-Side Rendering) and capabilities for building static websites.",
    description3:
      "• React Router DOM: A library for managing navigation and routing in React applications.",
    description4:
      "• React Fullpage: A library for creating full-page transitions and layouts.",
    description5:
      "• Sass: A CSS preprocessor used for writing more maintainable and scalable CSS styles.",
    description6:
      "• Next Router Mock: A library for simulating route transitions and navigation during development in Next.js applications.",
    description7:
      "• React Devtools: Browser-based tools for inspecting and debugging React applications.",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
];

const webrandyStartuup: Project[] = [
  {
    id: 1,
    image: Webrandy,
    alt: "Webrandy Startup",
    link: "https://webrandy.com/",
    site: "webrandy.com",
    description1:
      "• React: A popular JavaScript library used to create user interfaces. It provides the structure of dynamic components.",
    description2:
      "• React Router DOM: A library used for page routing and management in React applications.",
    description3:
      "• React Bootstrap: Bootstrap's integration with React delivers ready-style components and leverages the power of the CSS framework for responsive design.",
    description4:
      "• React FontAwesome: A library that provides React components for FontAwesome icons.",
    description5:
      "• React Redux: React connector of the Redux library used for state management in React applications.",
    description6:
      "• Redux Toolkit: An officially recommended and developed toolset for Redux, making Redux more efficient and easy to manage.",
    description7:
      "• Bootstrap: A popular CSS framework used to create mobile-friendly web projects.",
    description8:
      "• Font Awesome: A library that provides vector icons, enriching the design using project-specific icons.",
    description9:
      "• JSON Server: A tool used to create mock APIs in development, enables data simulation.",
    description10:
      "• Sass: A CSS preprocessor that makes CSS writing more maintainable and editable.",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 2,
    image: AddressArch,
    alt: "Adress Arch",
    link: "https://address-arch.vercel.app/",
    site: "adress-arch.com",
    description1:
      "• React: A popular JavaScript library for building user interfaces. It provides the structure for dynamic components.",
    description2:
      "• React Bootstrap: Integrates Bootstrap with React, offering pre-styled components and responsive design capabilities.",
    description3:
      "• React DOM: Facilitates interaction between React components and the Document Object Model (DOM).",
    description4:
      "• React Responsive: A React library for handling media queries and ensuring responsiveness across devices.",
    description5:
      "• React Scroll: Provides functionality for smooth scrolling within a page.",
    description6:
      "• React Toastify: A React library for displaying notifications, enhancing user interactions with informative messages.",
    description7:
      "• React YouTube: Integrates YouTube videos into React applications.",
    description8:
      "• Bootstrap: A popular CSS framework for creating mobile-responsive web projects.",
    description9:
      "• EmailJS Com: Integrates email sending capabilities into React applications through an API service.",
    description10:
      "• Sass: A CSS preprocessor that enhances maintainability and scalability of CSS styles.",
    description11:
      "• Slick Carousel: A JavaScript library for creating carousel/slider functionality.",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 3,
    image: BestPrint,
    alt: "Best Print",
    link: "...",
    site: "bestprint.az",
    description1:
      "• React: JavaScript library used to create the user interface, used to manage and update components in the admin panel.",
    description2:
      "• React DOM: Interacts with the DOM (Document Object Model) in React applications and determines how components will be rendered on the page in the admin panel.",
    description3:
      "• React Router: Provides page redirection in React applications and manages navigation between different sections in the admin panel.",
    description4:
      "• React Router DOM: Provides DOM integration of React Router for web applications and provides declarative routing in the admin panel.",
    description5:
      "• Sass: A CSS preprocessor used to write more maintainable and editable CSS styles, making appearance and style management easier in the admin panel.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
];

const alasElement: Project[] = [
  {
    id: 1,
    image: AlasEva,
    alt: "Alas Eva",
    link: "https://web.alasdevcenter.com/",
    site: "alasdevcenter.com",
    description1:
      "• Reduxjs/Toolkit:A library for efficient Redux development, providing utilities to simplify Redux setup and management.",
    description2:
      "• Axios:A promise-based HTTP client for making API requests, commonly used for fetching data from a server.",
    description3:
      "• Bootstrap:A popular CSS framework for responsive and mobile-first web development.",
    description4:
      "• Gsap:GreenSock Animation Platform, a JavaScript library for creating high-performance animations.",
    description5:
      "• Json-server:A full fake REST API for frontend development, useful for mocking backend responses during development.",
    description6: "• React:A JavaScript library for building user interfaces.",
    description7:
      "• React-Bootstrap:Bootstrap components built with React, providing pre-styled UI components.",
    description8: "• React-Dom:React's package for managing DOM rendering.",
    description9:
      "• React-Redux:Official React bindings for Redux, facilitating state management in React applications.",
    description10:
      "• React-Responsive-Carousel:A responsive carousel component for React applications.",
    description11:
      "• React-Router-Dom:DOM bindings for React Router, enabling navigation between different views in a React application.",
    description12:
      "• React-Slick:React wrapper for Slick Carousel, a carousel/slider component for React.",
    description13:
      "• React-Transition-Group:A set of utilities for managing component transitions in React applications.",
    description14:
      "• Sass:A CSS preprocessor that adds power and elegance to CSS with variables, nesting, and more.",
    description15:
      "• Slick-Carousel:A carousel/slider JavaScript library for creating responsive and touch-friendly sliders.",
  },
  {
    id: 2,
    image: AzSpeech,
    alt: "AzSpeech",
    link: "...",
    site: "azspeech.az",
    description1:
      "• ffmpeg/core:Core FFmpeg library for handling video and audio processing.",
    description2:
      "• ffmpeg/ffmpeg:FFmpeg library bindings for JavaScript, enabling video and audio processing.",
    description3:
      "• reduxjs/toolkit:A library for efficient Redux development, simplifying Redux setup and state management.",
    description4:
      "• ffmpeg:Another FFmpeg library for handling multimedia files.",
    description5:
      "• file-saver:A library for saving files on the client-side, useful for exporting data.",
    description6:
      "• jszip:A JavaScript library for creating, reading, and editing .zip files.",
    description7:
      "• lz-string:A library for compressing and decompressing strings.",
    description8:
      "• react:A popular JavaScript library for building user interfaces.",
    description9:
      "• react-dom:Facilitates interaction between React components and the DOM.",
    description10:
      "• react-redux:Official React bindings for Redux, enabling state management in React applications.",
    description11:
      "• react-router-dom:DOM bindings for React Router, allowing navigation between different views in a React application.",
    description12:
      "• sass:A CSS preprocessor that adds power and elegance to CSS with variables, nesting, and more.",
    description13:
      "• zipson:A library for compressing and serializing JSON objects.",
    description14: "",
    description15: "",
  },
];

const mstock: Project[] = [
  {
    id: 1,
    image: MStock,
    alt: "MStock",
    link: "https://mstock.az/",
    site: "mstock.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• It is the official website of the company.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 2,
    image: MayakCargo,
    alt: "MayakCargo",
    link: "https://cargo-pearl-chi.vercel.app/",
    site: "mayakcargo.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 3,
    image: Minik,
    alt: "Minik",
    link: "https://main--minikk.netlify.app/",
    site: "minik.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 4,
    image: MayakMebel,
    alt: "MayakMebel",
    link: "https://mayak-mebel.vercel.app/",
    site: "mayakMebel.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 5,
    image: PutaLogistik,
    alt: "PutaLogistik",
    link: "https://puta-logistik.vercel.app/",
    site: "puta-logistik.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 6,
    image: MenzilTap,
    alt: "MenzilTap",
    link: "https://main--menziltap.netlify.app/",
    site: "menzilTap.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 7,
    image: IndiTap,
    alt: "IndiTap",
    link: "https://main--inditap.netlify.app/",
    site: "IndiTap.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 8,
    image: MyWork,
    alt: "MyWork",
    link: "https://main--mywork-az.netlify.app/",
    site: "MyWork.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
  {
    id: 9,
    image: GlobalAptek,
    alt: "Global Aptek",
    link: "https://main--globalaptek.netlify.app/",
    site: "GlobalAptek.az",
    description1:
      "• According to the request of the manager, the site was developed in vanilla.",
    description2: "• I used different animations.",
    description3: "• There is responsiveness.",
    description4: "• More css and js functionality is preferred here.",
    description5: "• This site will be connected to the backend in the future.",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  },
];
// ----------------all-projects----------------
const allProjects = [
  ...freelanceElement,
  ...webrandyStartuup,
  ...alasElement,
  ...mstock,
];
const allProjectsData = Array.from(
  { length: 30 },
  (_, index) => allProjects[index % allProjects.length]
);
const length = [
  mstock.length +
    alasElement.length +
    webrandyStartuup.length +
    freelanceElement.length,
];
// ----------------------
const freelanceWork: Company[] = [
  {
    id: 1,
    image: FreelancerAzad,
    alt: "Freelance",
    description:
      "Accepting additional work not only enriches my portfolio, but also promotes myself. React is my main preference for freelance projects, but I still consider the client's request as the main thing.",
  },
];

const webrandyCompany: Company[] = [
  {
    id: 1,
    image: Webrandy,
    alt: "Webrandy Startup",
    description:
      "Here, we mainly developed the sites of clients that the manager contacted or found himself. I worked in this startup for some time and gained some experience.",
  },
];

const alasCompany: Company[] = [
  {
    id: 1,
    image: AlasEva,
    alt: "Alas Development Center",
    description:
      "After completing the 6-month front-end developer training, selected students joined the 4-month internship program at Alas Development Center, and I was one of those students. I worked on 2 big projects in a 4-month internship program.",
  },
];

const mstockCompany: Company[] = [
  {
    id: 1,
    image: MStock,
    alt: "MStock Company",
    description:
      "In this company, I prepare websites in vanilla according to the request of the manager. I don't use Libraries or frameworks as per the request of the manager. The company is new and I am developing websites to promote the company.",
  },
];

export default function Projects() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [aboutCompany, setAboutCompany] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SelectedProject>(null);
  const [selectedCompany, setSelectedCompany] = useState<SelectedCompany>(null);

  const handlePopUp = (project: Project) => {
    setSelectedProject(project);
    setOpenPopUp(true);
  };

  const handleAboutCompany = (project: Company) => {
    setSelectedCompany(project);
    setAboutCompany(true);
  };

  const closePopUp = () => {
    setOpenPopUp(false);
    setSelectedProject(null);
  };

  const closeAboutCompany = () => {
    setAboutCompany(false);
  };

  return (
    <section className={styles.container}>
      {/* -------------About-Company----------- */}
      {aboutCompany && selectedCompany && (
        <div className={styles.aboutCompanyContainer}>
          <div className={styles.aboutCompanyElement}>
            <h2>{selectedCompany.alt}</h2>
            <div className={styles.imageCon}>
              <Image
                className={styles.images}
                src={selectedCompany.image}
                alt={selectedCompany.alt}
                width={400}
                height={400}
                priority
              />
            </div>
            <div className={styles.popUpTexts}>
              <p>{selectedCompany.description}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={closeAboutCompany}>Back</button>
            </div>
          </div>
        </div>
      )}
      {/* -------------Pop-Up----------- */}
      {openPopUp && selectedProject && (
        <div className={styles.popUpContainer}>
          <div className={styles.popUpElement}>
            <h2>{selectedProject.alt}</h2>
            <div className={styles.imageCon}>
              <Image
                className={styles.images}
                src={selectedProject.image}
                alt={selectedProject.alt}
                width={400}
                height={400}
                priority
              />
            </div>
            <div className={styles.popUpTexts}>
              <p>{selectedProject.description1}</p>
              <p>{selectedProject.description2}</p>
              <p>{selectedProject.description3}</p>
              <p>{selectedProject.description4}</p>
              <p>{selectedProject.description5}</p>
              <p>{selectedProject.description6}</p>
              <p>{selectedProject.description7}</p>
              <p>{selectedProject.description8}</p>
              <p>{selectedProject.description9}</p>
              <p>{selectedProject.description10}</p>
              <p>{selectedProject.description11}</p>
              <p>{selectedProject.description12}</p>
              <p>{selectedProject.description13}</p>
              <p>{selectedProject.description14}</p>
              <p>{selectedProject.description15}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={closePopUp}>Back</button>
              <button
                onClick={() => window.open(selectedProject.link, "_blank")}
              >
                Visit Link
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ------------------------------- */}
      <div className={styles.portfolioTexts}>
        <div className={styles.projectsHeaderText}>
          <h2>MY PROJECTS</h2>
          <p>{length}</p>
        </div>
        <div className={styles.portfolioContainer}>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            {freelanceWork.map((element, index) => (
              <li key={index}>
                <h3>{element.alt}</h3>
                <p onClick={() => handleAboutCompany(element)}>ⓘ</p>
              </li>
            ))}
            <li className={styles.elements}>
              {freelanceElement.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
                  <div className={styles.imageElement}>
                    <Image
                      className={styles.image}
                      src={element.image}
                      alt={element.alt}
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            {webrandyCompany.map((element, index) => (
              <li key={index}>
                <h3>{element.alt}</h3>
                <p onClick={() => handleAboutCompany(element)}>ⓘ</p>
              </li>
            ))}
            <li className={styles.elements}>
              {webrandyStartuup.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
                  <div className={styles.imageElement}>
                    <Image
                      className={styles.image}
                      src={element.image}
                      alt={element.alt}
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            {alasCompany.map((element, index) => (
              <li key={index}>
                <h3>{element.alt}</h3>
                <p onClick={() => handleAboutCompany(element)}>ⓘ</p>
              </li>
            ))}
            <li className={styles.elements}>
              {alasElement.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
                  <div className={styles.imageElement}>
                    <Image
                      className={styles.image}
                      src={element.image}
                      alt={element.alt}
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
          {/* ---------------------- */}
          <ul className={styles.portfolioPart}>
            {mstockCompany.map((element, index) => (
              <li key={index}>
                <h3>{element.alt}</h3>
                <p onClick={() => handleAboutCompany(element)}>ⓘ</p>
              </li>
            ))}
            <li className={styles.elements}>
              {mstock.map((element, index) => (
                <div
                  className={styles.imageContainer}
                  key={index}
                  onClick={() => handlePopUp(element)}
                >
                  <div className={styles.imageElement}>
                    <Image
                      className={styles.image}
                      src={element.image}
                      alt={element.alt}
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  <p>{element.site}</p>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
      {/* ----------------slider------------ */}
      <div className={styles.firstSliderContainer}>
        {Array.from({ length: 30 }, (_, index1) => (
          <div className={styles.firstSliderElement} key={index1}>
            {allProjectsData.map((element, elementIndex1) => (
              <a target="_blank" href={element.link} key={elementIndex1}>
                <div className={styles.slider}>
                  <Image
                    className={styles.image}
                    src={element.image}
                    alt={element.alt}
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
      {/* ---------------------------------- */}
      <Slider />
    </section>
  );
}
