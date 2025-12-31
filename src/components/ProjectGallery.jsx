import styles from "./ProjectGallery.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux'


export default function ProjectGallery() {
  const navigate = useNavigate();

  let projects = useSelector((state)=>{
    return state.portfolio.portfolio.projects;
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
          <h1 className={styles.heading}>Project Gallery</h1>
          <p className={styles.subheading}>
          Real-world projects highlighting my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
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
                  <button
                    className={styles.primaryBtn}
                    onClick={()=>{navigate(`/projects/${project._id}`)}}
                  >
                    View Details
                  </button>
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryBtn}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
