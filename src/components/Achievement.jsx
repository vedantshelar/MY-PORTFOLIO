import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Achievement() {

  let achievements = useSelector((state)=>{
    return state.portfolio.portfolio.achievements;
  })

  const MAX_VISIBLE = 3;
  const visibleProjects = achievements.slice(0, MAX_VISIBLE);
  const showSeeMore = achievements.length > MAX_VISIBLE;

  let navigate = useNavigate();

  return (
    <section id="achievements" className={styles.projects} style={{paddingBottom:"15px"}}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Achievements</h2>

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
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

        {/* 🔥 SEE MORE BUTTON */}
        {showSeeMore && (
          <div className={styles.seeMoreWrapper}>
            <button className={styles.seeMoreBtn} onClick={()=>{navigate("/achievementGallery")}}>
              See More Achievements →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
