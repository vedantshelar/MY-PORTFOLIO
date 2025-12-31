import styles from "./ProjectGallery.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export default function AchievementGallery() {
  const navigate = useNavigate();

  let achievements = useSelector((state)=>{
    return state.portfolio.portfolio.achievements;
  })


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.heading}>Achievement Gallery</h1>
          <p className={styles.subheading}>
          Recognitions and certificates I have earned along the way.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {achievements.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper} onClick={()=>{window.open(project.image)}}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
