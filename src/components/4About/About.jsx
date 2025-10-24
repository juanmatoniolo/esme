import Image from "next/image";
import Script from "next/script";
import styles from "./About.module.css";

export default function About() {
    const personLD = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Esmeralda Perisset",
        jobTitle: "Psicóloga clínica",
        description:
            "Psicóloga clínica en Carcarañá (Santa Fe, Argentina). Base psicoanalítica e integración de Biodescodificación, Constelaciones Familiares y Registros Akáshicos. Sesiones presenciales y online, talleres y autora de 'Líneas sinceras'.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Carcarañá",
            addressRegion: "Santa Fe",
            addressCountry: "AR",
        },
        knowsAbout: [
            "Psicoanálisis",
            "Biodescodificación",
            "Constelaciones familiares",
            "Registros Akáshicos",
            "Talleres vivenciales",
            "Terapia online",
        ],
        url: "https://esme-delta.vercel.app/#sobre-mi",
    };

    return (
        <section
            id="sobre-mi"
            className={styles.section}
            aria-labelledby="about-title"
            itemScope
            itemType="https://schema.org/Person"
        >
            <Script
                id="ld-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personLD) }}
            />

            <div className="container">
                <h2 id="about-title" className={styles.title}>
                    Hola! Soy Esme
                </h2>

                <div className={styles.cols}>
                    {/* Texto */}
                    <div>
                        <p className={styles.copy}>
                            Mi nombre es <strong itemProp="name">Esmeralda Perisset</strong>. Soy{" "}
                            <span itemProp="jobTitle"><strong>psicóloga clínica</strong></span> y vivo en{" "}
                            <span
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                                className="d-inline"
                            >
                                <span itemProp="addressLocality">Carcarañá</span>,{" "}
                                <span itemProp="addressRegion">Santa Fe</span>,{" "}
                                <span itemProp="addressCountry">Argentina</span>
                            </span>
                            .
                        </p>

                        <p className={styles.copy}>
                            La base de mi formación es la <strong>Psicología integral</strong>. Amo la idea de
                            que no somos “individuos”, sino “sujetos” barrados, divididos entre una parte{" "}
                            <em>consciente</em> y otra <em>inconsciente</em>. La mayor parte del tiempo
                            es nuestro inconsciente el que nos guía, por eso es tan importante descubrir
                            y comprender su funcionamiento.
                        </p>

                        <p className={styles.copy}>
                            Trabajo en consultorio hace muchos años. Este mismo camino, sumado a mi
                            proceso personal, me llevó a explorar otras herramientas como{" "}
                            <em>Biodescodificación</em>, <em>Constelaciones familiares</em> y{" "}
                            <em>Registros Akáshicos</em>. Primero las viví en mi propio cuerpo, luego las
                            estudié y hoy las aplico según cada caso y la historia de cada consultante.
                        </p>

                        <p className={styles.copy}>
                            También coordino <strong>talleres de autoconocimiento</strong>, donde
                            comparto estas herramientas para quienes buscan explorar y comprenderse más
                            a un nivel más profundo.
                        </p>

                        <p className={styles.copy}>
                            Creo con convicción que <q>comprendernos, alivia</q>. El sentido de este
                            espacio es brindarte recursos para que aprendas a{" "}
                            <strong>comprenderte</strong> y eso te traiga <strong>alivio</strong>.
                            ¿Te animás?
                        </p>
                    </div>

                    {/* Foto */}
                    <figure className={styles.photo}>
                        <Image
                            src="/assets/esmeportada.webp"
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
