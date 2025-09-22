import styles from "./Workshop.module.css";

const points = [
    "Lealtades inconscientes y su influencia en nuestra vida.",
    "¿Por qué conocer nuestro árbol genealógico?",
    "Vínculo vs. relación.",
    "Sanar el vínculo con mamá y papá para habilitar destino/propósito.",
    "Los 3 órdenes del amor (Bert Hellinger).",
    "Grabado para hacerlo a tu ritmo."
];

export default function Workshop() {
    return (
        <section id="taller" className={styles.section} aria-labelledby="workshop-title">
            <div className="container">
                <p className={styles.eyebrow}>Taller</p>
                <h2 id="workshop-title" className={styles.title}>Taller teórico–vivencial</h2>
                <ul className={styles.list}>
                    {points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
            </div>
        </section>
    );
}
