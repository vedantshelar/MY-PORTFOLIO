import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import styles from "./College.module.css";

function College() {
    return ( 
        <div id="education" className={styles.collegeSection}>
            <div className={styles.container}>
            <h1 className={styles.heading}>Education</h1>
            <p className={styles.subHeading}>Academic foundations that support my growth as a full-stack developer.</p>
            <AnimatedTestimonialsDemo className={styles.collegeInfoContainer}/>
            </div>
        </div>
     );
}

export default College;