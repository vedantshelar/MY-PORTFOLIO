import styles from "./Footer.module.css";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconMail
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Column 1 — Brand */}
                <div className={styles.column}>
                    <h3 className={styles.brand}>Vedant Shelar</h3>
                    <p className={styles.role}>Full Stack Web Developer (MERN Stack)</p>
                    <p className={styles.description}>
                        I design and build modern web applications using the MERN stack, focusing on performance, scalability, and real-world problem solving.
                    </p>
                </div>

                {/* Column 2 — Quick Links */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blog">Achievements</a></li>
                        <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </div>

                {/* Column 3 — Connect */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Connect</h4>
                    <div className={styles.socials}>
                        <a href="https://github.com/vedantshelar" target="_blank">
                            <IconBrandGithub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/vedant-shelar" target="_blank">
                            <IconBrandLinkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/its_ved_0_1/
" target="_blank">
                            <IconBrandInstagram size={20} />
                        </a>
                        <a href="mailto:vedantshelar871@gmail.com">
                            <IconMail size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 4 — Availability */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Availability</h4>
                    <p className={styles.description}>
                        Currently open to freelance projects, collaborations, and
                        full-time roles. Let’s build something impactful together.
                    </p>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className={styles.bottom}>
                © {new Date().getFullYear()} Vedant Shelar. All rights reserved.
            </div>
        </footer>
    );
}
