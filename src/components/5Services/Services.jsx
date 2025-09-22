import styles from "./Services.module.css";

const items = [
    { t: "Sesiones 1 a 1", d: "Atención presencial y online a cualquier parte del mundo." },
    { t: "Talleres vivenciales", d: "Herramientas claras para autoconocimiento y crecimiento personal." },
    { t: "Libro: “Líneas sinceras”", d: "Un acompañamiento en palabras para distintos momentos." }
];

export default function Services() {
    return (
        <section className={styles.fondoSection}>

            <div className={styles.section}>
                {/* OLA SUPERIOR */}
                <svg className={styles.waveTop} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>

                <div id="servicios" className={styles.section} aria-labelledby="services-title">
                    {/* OLA SUPERIOR (simétrica) */}
                    <svg className={styles.waveTop} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                        {/* fill = color de la sección anterior */}
                        <path
                            d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z"
                            fill="var(--color-surface-alt)"
                        />
                    </svg>

                    <div className="container">
                        <h2 id="services-title" className={styles.title}>Cómo puedo ayudarte</h2>

                        <div className={styles.grid}>
                            {items.map((it) => (
                                <article className={styles.card} key={it.t}>
                                    <h3 className={styles.cardTitle}>{it.t}</h3>
                                    <p className={styles.cardDesc}>{it.d}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <svg className={styles.waveBottom} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                        <path
                            d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z"
                            fill="var(--color-surface-alt)"
                        />
                    </svg>
                </div>
                {/* OLA INFERIOR */}
                <svg className={styles.waveBottom} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>
            </div>
        </section>

    );
}
