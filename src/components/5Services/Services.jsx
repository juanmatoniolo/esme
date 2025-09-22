import styles from "./Services.module.css";

const items = [
    { t: "Sesiones 1 a 1", d: "Atención presencial y online a cualquier parte del mundo." },
    { t: "Talleres vivenciales", d: "Herramientas claras para autoconocimiento y crecimiento personal." },
    { t: "Libro: “Líneas sinceras”", d: "Un acompañamiento en palabras para distintos momentos." }
];

export default function Services() {
    return (
        <section id="servicios" className={styles.section} aria-labelledby="services-title">
            <div className="container">
                <p className={styles.eyebrow}>Servicios</p>
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
        </section>
    );
}
