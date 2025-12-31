import styles from "./Hero.module.css";
import LightRays from './LightRays';

function Hero() {
    return (

        <div id="home" style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: "black" }}>
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.2}
                rayLength={1.5}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />
            <div className={styles.heroSection}>
                <div className={styles.heroInnerSection}>
                    <span className={styles.nameBatch}>Hello I'am Vedant</span>
                    <h1 className={styles.heroHeading}>Building digital <br /> <span className={styles.experienceText}>Experience</span> that matter.</h1>
                    <p className={styles.heroPara}>I'm Full Stack Web Developer passionate about creating intuitive and dynamic user experience</p>
                    <div className={styles.heroBtnBox}>
                        <button className={`${styles.heroBtn} ${styles.heroViewProjectBtn}`}> <a href="#projects">View Projects</a></button>
                        <button className={`${styles.heroBtn} ${styles.heroContactBtn}`}><a href="#contact">Contact Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
