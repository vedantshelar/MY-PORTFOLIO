import { useState } from "react";
import styles from "./TechStack.module.css";

const techData = {
    languages: [
        { name: "HTML", icon: "/tech/html5.png" },
        { name: "CSS", icon: "/tech/css.png" },
        { name: "JavaScript", icon: "/tech/javascript.png" },
        { name: "C", icon: "/tech/c.png" },
        { name: "C++", icon: "/tech/cPuls.png" },
        { name: "Java", icon: "/tech/java.png" }
    ],
    frameworks: [
        { name: "React.js", icon: "/tech/reactjs.png" },
        { name: "Node.js", icon: "/tech/nodejs.png" },
        { name: "Express.js", icon: "/tech/Express.png" },
        { name: "Tailwind CSS", icon: "/tech/TailwindCSS.png" }
    ], 
    databases: [
        { name: "MongoDB", icon: "/tech/MongoDB.png" },
        { name: "MySQL", icon: "/tech/mySQL.png" }
    ],
    tools: [
        { name: "Git", icon: "/tech/git.png" },
        { name: "GitHub", icon: "/tech/github2.png" },
        { name: "Figma", icon: "/tech/figma.png" },
        { name: "Android Studio", icon: "/tech/androidStudio.png" },
        { name: "VS Code", icon: "/tech/vsCode.png" },
        { name: "IntelliJ IDEA", icon: "/tech/IntelliJIDEA.png" }
    ]
};


export default function TechStack() {
    const [activeTab, setActiveTab] = useState("languages");

    return (
        <section id="techStack" className={styles.techSection}>
            <div className={styles.container}>

                {/* HEADER */}
                <h2 className={styles.title}>Technologies</h2>
                <p className={styles.subtitle}>
                    The technical stack powering my approach to building modern web products.
                </p>

                {/* FILTER BUTTONS */}
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeTab === "languages" ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab("languages")}
                    >
                        Languages
                    </button>

                    <button
                        className={`${styles.filterBtn} ${activeTab === "frameworks" ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab("frameworks")}
                    >
                        Frameworks / Libraries
                    </button>

                    <button
                        className={`${styles.filterBtn} ${activeTab === "databases" ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab("databases")}
                    >
                        Databases
                    </button>

                    <button
                        className={`${styles.filterBtn} ${activeTab === "tools" ? styles.active : ""
                            }`}
                        onClick={() => setActiveTab("tools")}
                    >
                        Tools
                    </button>
                </div>

                {/* TECH GRID */}
                <div className={styles.grid}>
                    {techData[activeTab].map((tech, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>
                                <img src={tech.icon} alt={tech.name} />
                            </div>

                            <p className={styles.cardLabel}>{tech.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
