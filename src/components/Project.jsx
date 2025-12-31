import { useNavigate } from "react-router-dom";
import styles from "./Project.module.css";
import { useSelector } from 'react-redux'


export default function Project() {
  let projects = useSelector((state)=>{
    return state.portfolio.portfolio.projects;
  })
  const MAX_VISIBLE = 3;
  const visibleProjects = projects.slice(0, MAX_VISIBLE);
  const showSeeMore = projects.length > MAX_VISIBLE;

  let navigate = useNavigate();

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Projects</h2>

        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.thumbnail} alt={project.title} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <button className={styles.primaryBtn} onClick={()=>{navigate(`/projects/${project._id}`)}}>View Details</button>
                  <button className={styles.secondaryBtn} onClick={()=>{window.open(project.liveDemoLink)}}>Live Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 SEE MORE BUTTON */}
        {showSeeMore && (
          <div className={styles.seeMoreWrapper}>
            <button className={styles.seeMoreBtn} onClick={()=>{navigate("/ProjectGallery")}}>
              See More Projects →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
