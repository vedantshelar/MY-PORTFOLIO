import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* Left Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.frame}>
            <img src="/vedant.jpg" alt="Vedant Shelar" />
          </div>

          <div className={styles.badge}>
            <span>FULL STACK</span>
            <strong>Developer</strong>
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <p className={styles.label}>ABOUT ME</p>

          <h2 className={styles.heading}>
            Turning complex problems <br />
            into simple, beautiful <br />
            solutions.
          </h2>

          <p className={styles.text}>
            Hi, I'm Vedant Shelar, a passionate Full-Stack Web Developer skilled
            in the MERN stack. I love building interactive, user-friendly
            applications and turning ideas into real-world digital solutions.
          </p>

          <p className={styles.text}>
            Always curious, I enjoy learning new technologies and working on
            innovative projects that challenge me to grow. My goal is to build
            applications that are scalable, efficient, and provide an
            exceptional user experience.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div>
              <h3>12+</h3>
              <p>Prg Languages</p>
            </div>
            <div>
              <h3>5+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>4+</h3>
              <p>Achievements</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
