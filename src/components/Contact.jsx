import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconBrandLinkedin,
    IconBrandGithub,
    IconSend
} from "@tabler/icons-react";
import Stats from "./Stats";
import { useState } from "react";

export default function Contact() {
    let [formData, setFormData] = useState({ name: "", email: "", message: "" });
    let [isLoading,setIsLoading] = useState(false );

    function handleInput(e) {
        let key = e.target.name;
        let value = e.target.value;
        setFormData((currentFormData) => {
            return { ...currentFormData, [key]: value };
        })
    }


    function sendEmail() {
        setIsLoading(true);
        if (!formData.name || !formData.email || !formData.message) {
            alert("All fields are required!");
            return;
        } 

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                  name: formData.name,
                  email: formData.email,
                  message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    alert("Failed to send message!");
                    console.error(error);
                }
            ).finally(() => {
                setIsLoading(false);
              });
    }


    return (
        <section className={styles.contactSection}>
            <Stats />
            <div id="contact" className={styles.container}>

                {/* LEFT CARD */}
                <div className={styles.card}>
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.subtext}>
                        Feel free to reach out for collaborations, opportunities, or just a
                        friendly chat.
                    </p>

                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <span className={styles.icon}><IconMail size={20} /></span>
                            <div>
                                <p className={styles.label}>Email</p>
                                <p className={styles.value}>vedantshelar871@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon}><IconPhone size={20} /></span>
                            <div>
                                <p className={styles.label}>Phone</p>
                                <p className={styles.value}>+91 9321677312</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon}><IconMapPin size={20} /></span>
                            <div>
                                <p className={styles.label}>Location</p>
                                <p className={styles.value}>Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://www.linkedin.com/in/vedant-shelar"
                            target="_blank" className={styles.socialIcon}>
                            <IconBrandLinkedin size={20} />
                        </a>
                        <a href="https://github.com/vedantshelar"
                            target="_blank" className={styles.socialIcon}>
                            <IconBrandGithub size={20} />
                        </a>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className={styles.card}>
                    <h2 className={styles.heading}>Send a Message</h2>

                    <form className={styles.form}>
                        <label>
                            Name
                            <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleInput} />
                        </label>

                        <label>
                            Email
                            <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleInput} />
                        </label>

                        <label>
                            Message
                            <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleInput}></textarea>
                        </label>

                        <button type="button" className={styles.button} onClick={sendEmail}>
                            {!isLoading ? "Send Message":"Sending..."}
                            <IconSend size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
