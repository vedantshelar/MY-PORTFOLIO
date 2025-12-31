import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    let [openNavBar,setOpenNavBar] = useState(false);

    function toggleNavbar(){
        if(openNavBar){
            setOpenNavBar(false);
        }else{
            setOpenNavBar(true);
        }
    }

    function closeNavbar(){
        setOpenNavBar(false);
    }
    return (
        <>
            <div className={styles.navbarSection}>
                <span className={styles.logo}>VS</span>
                <div className={styles.menuSection}>
                    <a href="#home" className={styles.menu}>Home</a>
                    <a href="#about" className={styles.menu}>
                        About
                    </a>
                    <a href="#projects" className={styles.menu}>Projects</a>
                    <a href="#techStack" className={styles.menu}>Tech Stack</a>
                    <a href="#education" className={styles.menu}>Education</a>
                    <a href="#achievements" className={styles.menu}>Achievements</a>
                    <a href="#contact" className={styles.menu}>Contact</a>
                </div>
                <div className={styles.bar} onClick={toggleNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className={openNavBar ? `${styles.mobileNavBar} ${styles.activeMobileNavBar}` : `${styles.mobileNavBar}`}>
                <div className={styles.cross} onClick={closeNavbar}>
                    <i class="fa-solid fa-xmark"></i>
                </div> 
                <div className={styles.mobileMenuSection}>
                    <a href="#home" className={styles.mobileMenu} onClick={closeNavbar}>Home</a>
                    <a href="#about" className={styles.mobileMenu} onClick={closeNavbar}>
                        About
                    </a>
                    <a href="#projects" className={styles.mobileMenu} onClick={closeNavbar}>Projects</a>
                    <a href="#techStack" className={styles.mobileMenu} onClick={closeNavbar}>Tech Stack</a>
                    <a href="#education" className={styles.mobileMenu} onClick={closeNavbar}>Education</a>
                    <a href="#achievements" className={styles.mobileMenu} onClick={closeNavbar}>Achievements</a>
                    <a href="#contact" className={styles.mobileMenu} onClick={closeNavbar}>Contact</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
