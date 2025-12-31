import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.educationSection}>
      <div className={styles.container}>

        {/* HEADER */}
        <h2 className={styles.title}>Education</h2>
        <p className={styles.subtitle}>
          Academic background and learning journey
        </p>

        {/* TIMELINE */}
        <div className={styles.timeline}>

          {/* ITEM 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <h3>Bachelor of Engineering</h3>
              <span className={styles.field}>Information Technology</span>

              <p className={styles.institute}>
                Rajiv Gandhi Institute of Technology, Mumbai
              </p>

              <span className={styles.duration}>2023 – Present</span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <h3>Diploma in Information Technology</h3>
              <span className={styles.field}>Information Technology</span>

              <p className={styles.institute}>
                Kala Vidya Mandir Institute of Technology, Mumbai
              </p>

              <span className={styles.duration}>2020 – 2023</span>

              <span className={styles.badge}>College Topper</span>
            </div>
          </div>

           {/* ITEM 2 */}
           <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <h3>Diploma in Information Technology</h3>
              <span className={styles.field}>Information Technology</span>

              <p className={styles.institute}>
                Kala Vidya Mandir Institute of Technology, Mumbai
              </p>

              <span className={styles.duration}>2020 – 2023</span>

              <span className={styles.badge}>College Topper</span>
            </div>
          </div>

           {/* ITEM 2 */}
           <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <h3>Diploma in Information Technology</h3>
              <span className={styles.field}>Information Technology</span>

              <p className={styles.institute}>
                Kala Vidya Mandir Institute of Technology, Mumbai
              </p>

              <span className={styles.duration}>2020 – 2023</span>

              <span className={styles.badge}>College Topper</span>
            </div>
          </div>

           {/* ITEM 2 */}
           <div className={styles.timelineItem}>
            <div className={styles.dot}></div>

            <div className={styles.card}>
              <h3>Diploma in Information Technology</h3>
              <span className={styles.field}>Information Technology</span>

              <p className={styles.institute}>
                Kala Vidya Mandir Institute of Technology, Mumbai
              </p>

              <span className={styles.duration}>2020 – 2023</span>

              <span className={styles.badge}>College Topper</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
