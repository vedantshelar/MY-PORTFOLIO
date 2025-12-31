import { Color } from "ogl";
import styles from "./SingleProjectView.module.css";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function getProjectByID(projects,projectId){
    return projects.filter((project)=>{
        if(project._id==projectId){
            return true;
        }else{
            return false;
        }
    })
}

export default function SingleProjectView() {
    const navigate = useNavigate();
    let params = useParams();
    let projects = useSelector((state)=>{
        return state.portfolio.portfolio.projects;
      });
    let projectId = params.id;
    let project = getProjectByID(projects,projectId);
    project = project[0];

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

    return (
        <section className={styles.page}>
            <div className={styles.container}>

                {/* TITLE */}
                <h1 className={styles.title}>{project.title}</h1>

                {/* DESCRIPTION */}
                <p className={styles.description}>{project.description}</p>

                {/* THUMBNAIL */}
                <div className={styles.thumbnailWrapper}>
                    <img src={project.thumbnail} alt={project.title} />
                </div>

                {/* KEY FEATURES */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>✨ Key Features</h2>
                    <ul className={styles.featureList}>
                        {project.features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <i className={`fa-regular fa-circle-check ${styles.checkIcon}`}></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* TECH STACK */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}><i class="fa-solid fa-code" style={{ color: "#f5f5f5", marginRight: "8px" }}></i>Tech Stack</h2>
                    <div className={styles.techStack}>
                        {project.techStack.map((tech, index) => (
                            <span key={index} className={styles.tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* SCREENSHOTS */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}><i class="fa-solid fa-photo-film" style={{ color: "#f5f5f5", marginRight: "8px" }}></i>Screenshots</h2>
                    <div className={styles.screenshotGrid}>
                        {project.screenshots.map((img, index) => (
                            <div key={index} className={styles.screenshot} onClick={()=>{window.open(img)}}>
                                <img src={img} alt={`Screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className={styles.ctaSection}>
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.codeBtn}
                    >
                        Code
                    </a>

                    <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.demoBtn}
                    >
                        Live Demo
                    </a>
                </div>


            </div>
        </section>
    );
}
