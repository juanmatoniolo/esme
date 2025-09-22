import Link from "next/link";
import styles from "./Contact.module.css";

const PHONE_DISPLAY = "(0341) 3687985";
const EMAIL = "laliperisset@hotmail.com";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Eva%20Per%C3%B3n%20500%2C%20Carcara%C3%B1%C3%A1%2C%20Santa%20Fe%2C%20Argentina";
const WAPP = `https://wa.me/543413687985?text=${encodeURIComponent(
    "Hola! Gracias por resonar con mi trabajo y animarte a contactarme! En breve me estoy comunicando con vos✨"
)}`;

export default function Contact() {
    return (
        <section id="contacto" className={styles.section} aria-labelledby="contact-title">
            <div className="container">
                <p className={styles.eyebrow}>Contacto</p>
                <div className={styles.card}>
                    <p className={styles.line}><strong>Tel:</strong> {PHONE_DISPLAY}</p>
                    <p className={styles.line}><strong>Mail:</strong> {EMAIL}</p>
                    <p className={styles.line}>
                        <strong>Ubicación:</strong> Consultorio en zona Urano — Eva Perón al 500, Carcarañá —
                        <Link href={MAP_URL} target="_blank" rel="noopener noreferrer" className={styles.mapLink}> Ver mapa</Link>
                    </p>

                    <div className={styles.ctas}>
                        <Link href={WAPP} target="_blank" rel="noopener noreferrer" className={styles.primary}>WhatsApp</Link>
                        <a href={`mailto:${EMAIL}`} className={styles.outline}>Enviar email</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
