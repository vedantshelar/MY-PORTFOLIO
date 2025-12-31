import styles from "./Stats.module.css";
import { IconCode, IconStack2, IconAward } from "@tabler/icons-react";

export default function Stats() {
    const stats = [
        {
            icon: <IconCode size={28} />,
            value: "5+",
            title: "Projects Completed",
            description: "Showcasing creativity and functionality."
        },
        {
            icon: <IconStack2 size={28} />,
            value: "12+",
            title: "Tech Stack",
            description: "Languages and frameworks mastered."
        },
        {
            icon: <IconAward size={28} />,
            value: "4+",
            title: "Achievements",
            description: "Recognitions and certificates earned."
        }
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{item.icon}</div>
                            <div style={{transform:"translateY(-10px)"}}>
                                <h3 className={styles.value}>{item.value}</h3>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
