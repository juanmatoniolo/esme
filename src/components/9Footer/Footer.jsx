// app/components/Footer.jsx
import { FiPhone, FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    const phoneE164 = "+543413687985";
    const email = "laliperisset@hotmail.com";
    const address = "Eva Perón 500, Carcarañá, Santa Fe, Argentina";

    // Social / enlaces rápidos
    const whatsappHref = `https://wa.me/543413687985?text=${encodeURIComponent(
        "Hola Esme 👋 Me gustaría coordinar una consulta."
    )}`;
    const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const instagramUrl = "https://www.instagram.com/psico.esmeperisset/"; // 
    // Atribución
    const juanmaWa = `https://wa.me/543412275598?text=${encodeURIComponent(
        "Hola vi que creaste la pagina de Esme. Quesiera hacerte una consulta"
    )}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Esmeralda Perisset - Psicóloga",
        image: [],
        telephone: phoneE164,
        email,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Eva Perón 500",
            addressLocality: "Carcarañá",
            addressRegion: "Santa Fe",
            addressCountry: "AR",
        },
        areaServed: "Argentina",
        description:
            "Sesiones 1 a 1 (presencial y online), talleres vivenciales y libro 'Líneas sinceras'.",
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.topRow}>
                    <div className={styles.brandBlock}>
                        <div className={styles.brand}>Esmeralda Perisset</div>
                        <p className={styles.copy}>
                            Psicóloga clínica — Psicoanálisis, Biodescodificación, Constelaciones familiares,
                            Registros Akáshicos.
                        </p>
                    </div>

                    <div className={styles.contactBlock} aria-label="Contacto">
                        <span className={styles.allNetworks}>Ponte en contacto a traves de:</span>
                        <nav className={styles.iconRow} aria-label="Canales de contacto">
                            <a className={styles.iconBtn} href={`tel:${phoneE164}`} aria-label="Teléfono">
                                <FiPhone />
                            </a>
                            <a className={styles.iconBtn} href={`mailto:${email}`} aria-label="Email">
                                <FiMail />
                            </a>
                            <a
                                className={styles.iconBtn}
                                href={mapHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Mapa"
                            >
                                <FiMapPin />
                            </a>
                            <a
                                className={styles.iconBtn}
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                className={styles.iconBtn}
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FiInstagram />
                            </a>
                        </nav>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>© {new Date().getFullYear()} Esmeralda Perisset</span>
                    <span className={styles.dot} aria-hidden="true">•</span>
                    <span className={styles.madeBy}>
                        Hecho por{" "}
                        <a href={juanmaWa} target="_blank" rel="noopener noreferrer">
                            JuanmaToniolo
                        </a>{" "}
                        de{" "}
                        <a href="https://www.revolucionred.com" target="_blank" rel="noopener noreferrer">
                            Revolución Red
                        </a>
                    </span>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </footer>
    );
}
