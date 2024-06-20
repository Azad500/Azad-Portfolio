import styles from "./navbar.module.scss";
import Image from "next/image";
import hamburgerBlack from "../../../assets/images/menu.svg";
import hamburgerWhite from "../../../assets/images/menuWhite.png";
import MenuList from "../menuList/menu";

interface NavbarProps {
  openMenu: boolean;
  toggleMenu: () => void;
  handleHomeRef: () => void;
  handleAboutRef: () => void;
  handleSkillsRef: () => void;
  handleWorkHistoryRef: () => void;
}

export default function Navbar({
  openMenu,
  toggleMenu,
  handleHomeRef,
  handleAboutRef,
  handleSkillsRef,
  handleWorkHistoryRef,
}: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarElement}>
        <div className={styles.name}>
          <h1 className={styles.yellowPoint}>Azad</h1>
          <span className={styles.whiteText}>Mirzazada</span>
          <span className={styles.yellowPoint}>.</span>
        </div>
        <div
          className={`${styles.loginPart} ${openMenu ? styles.rotate : ""}`}
          onClick={toggleMenu}
        >
          <Image
            className={styles.blackIcon}
            src={hamburgerBlack}
            alt="Menu"
            width={35}
            height={35}
            priority
          />
          <Image
            className={styles.whiteIcon}
            src={hamburgerWhite}
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
          />
        </div>
      </div>
    </nav>
  );
}
