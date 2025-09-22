import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
    const personLD = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Esmeralda Perisset",
        "jobTitle": "Psicóloga clínica",
        "description":
            "Psicóloga clínica en Carcarañá (Santa Fe, Argentina). Base psicoanalítica e integración de Biodescodificación, Constelaciones Familiares y Registros Akáshicos. Sesiones presenciales y online, talleres y autora de 'Líneas sinceras'.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Carcarañá",
            "addressRegion": "Santa Fe",
            "addressCountry": "AR"
        },
        "knowsAbout": [
            "Psicoanálisis",
            "Biodescodificación",
            "Constelaciones familiares",
            "Registros Akáshicos",
            "Talleres vivenciales",
            "Terapia online"
        ],
        "url": "https://esme-delta.vercel.app/#sobre-mi"
    };

    return (
        <section
            id="sobre-mi"
            className={styles.section}
            aria-labelledby="about-title"
            itemScope
            itemType="https://schema.org/Person"
        >
            {/* JSON-LD */}
            <Script
                id="ld-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personLD) }}
            />

            <div className="container">
                <h2 id="about-title" className={styles.title}>
                    Primero me presento formalmente…
                </h2>

                <div className={styles.cols}>
                    <div>
                        <p className={styles.copy}>
                            Como les mencioné arriba, mi nombre es{" "}
                            <strong itemProp="name">Esmeralda Perisset</strong>. Soy{" "}
                            <span itemProp="jobTitle"><strong>psicóloga clínica</strong></span> y vivo en{" "}
                            <address itemProp="address" className="d-inline not-italic m-0 p-0">
                                Carcarañá, Santa Fe, Argentina
                            </address>
                            . Mi base es el <strong>Psicoanálisis</strong> y, según cada caso, integro herramientas
                            como <em>Biodescodificación</em>, <em>Constelaciones Familiares</em> y{" "}
                            <em>Registros Akáshicos</em>. Creo profundamente que <em>comprendernos, alivia</em>. Este
                            espacio existe para darte herramientas claras que te acerquen a tu bienestar. Trabajo con
                            una <strong>escucha empática y sin juicios</strong>, cuidando la{" "}
                            <strong>confidencialidad</strong> y respetando los <strong>tiempos</strong> de cada proceso.
                            Ofrezco <strong>sesiones 1 a 1</strong> de forma <strong>presencial y online</strong>, además de{" "}
                            <strong>talleres vivenciales</strong> (y material grabado para avanzar a tu ritmo). También soy
                            autora de <strong>“Líneas sinceras”</strong>.
                        </p>
                    </div>

                    <figure className={styles.photo}>
                        <Image
                            src="/assets/esmeralda.webp"          // asegurate que exista esta ruta
                            alt="Esmeralda Perisset, psicóloga clínica en Carcarañá"
                            fill
                            sizes="(min-width: 1200px) 720px, (min-width: 768px) 420px, 100vw"
                            className={styles.img}
                            priority={false}
                        />
                        <figcaption className="visually-hidden">
                            Retrato de Esmeralda Perisset, psicóloga clínica.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
