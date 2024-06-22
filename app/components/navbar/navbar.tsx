import styles from "./navbar.module.scss";
import Image from "next/image";
import hamburgerBlack from "../../../assets/images/menu.svg";
import hamburgerWhite from "../../../assets/images/menuWhite.png";
import MenuList from "../menuList/menu";

interface NavbarProps {
  openMenu: boolean;
  changeColor: boolean;
  whiteText: boolean;
  toggleMenu: () => void;
  handleHomeRef: () => void;
  handleAboutRef: () => void;
  handleSkillsRef: () => void;
  handleWorkHistoryRef: () => void;
  handleEducationRef: () => void;
  handleCertificationsRef: () => void;
  handleProjectsRef: () => void;
}

export default function Navbar({
  openMenu,
  changeColor,
  whiteText,
  toggleMenu,
  handleHomeRef,
  handleAboutRef,
  handleSkillsRef,
  handleWorkHistoryRef,
  handleEducationRef,
  handleCertificationsRef,
  handleProjectsRef,
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarElement}>
        <div className={styles.name}>
          {whiteText ? (
            <h1
              className={changeColor ? styles.yellowPoint : styles.darkYellow}
            >
              Azad
            </h1>
          ) : (
            <h1 className={changeColor ? styles.yellowPoint : styles.whiteText}>
              Azad
            </h1>
          )}
          <span className={changeColor ? styles.whiteText : styles.blackText}>
            Mirzazada
          </span>
          {whiteText ? (
            <span
              className={changeColor ? styles.yellowPoint : styles.darkYellow}
            >
              .
            </span>
          ) : (
            <span
              className={changeColor ? styles.yellowPoint : styles.whiteText}
            >
              .
            </span>
          )}
        </div>
        <div
          className={`${styles.loginPart} ${openMenu ? styles.rotate : ""}`}
          onClick={toggleMenu}
        >
          <Image
            className={changeColor ? styles.whiteIcon : styles.whiteIconClose}
            src={hamburgerWhite}
            alt="Menu"
            width={35}
            height={35}
            priority
          />
          <Image
            className={!changeColor ? styles.blackIcon : styles.blackIconClose}
            src={hamburgerBlack}
            alt="Menu"
            width={35}
            height={35}
            priority
          />
        </div>
        <div
          className={`${styles.menuListElement} ${
            openMenu ? styles.open : styles.close
          }`}
        >
          <MenuList
            openMenu={openMenu}
            toggleMenu={toggleMenu}
            handleHomeRef={handleHomeRef}
            handleAboutRef={handleAboutRef}
            handleSkillsRef={handleSkillsRef}
            handleWorkHistoryRef={handleWorkHistoryRef}
            handleEducationRef={handleEducationRef}
            handleCertificationsRef={handleCertificationsRef}
            handleProjectsRef={handleProjectsRef}
          />
        </div>
      </div>
    </nav>
  );
}
