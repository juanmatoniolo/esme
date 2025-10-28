"use client";

import Testimonials from "./Testimonials";
import Video from "./Video";
import styles from "./Workshop.module.css";
// ✅ Importamos el player de YouTube (fork actualizado)

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
        <section>
            <section id="taller" className={styles.section} aria-labelledby="workshop-title">
                <div className="container">
                    <p className={styles.eyebrow}>Taller vivencial de autoconocimiento</p>

                    <div id="workshop-title" className={styles.title}>
                        <p>
                            Si sentís que te cuesta conectar con tu propósito personal, si estás estancad@ y no sabés por qué, o
                            simplemente algo resuena en vos al leer el nombre de este Taller, <strong>ES PARA VOS</strong>.
                        </p>
                        <p>
                            Un taller vivencial es una experiencia corta, pero que te permite mirar con profundidad ciertos aspectos de tu
                            personalidad y de tu sistema familiar que quizás te están limitando sin saber.
                        </p>
                        <p>
                            Con herramientas de las constelaciones familiares, ejercicios sistémicos y meditaciones, este taller te va a ayudar
                            a mirar patrones repetitivos o desequilibrios dentro de tu árbol, y de esta forma, conectar con tu poder personal
                            y tomar las riendas de tu vida.
                        </p>
                        <p><strong>¡Te veo ahí!</strong></p>
                    </div>

                    <ul className={styles.list}>
                        {points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.videoContainer}>
                    <Video />
                </div>

            </section>

            <div className={styles.oneToOneSection} >
            </div>
            <section
                className="container "
                aria-labelledby="one-to-one-title"
            >
                <h2 id="one-to-one-title" className="mb-4 text-center m-auto">
                    Sesiones 1 a 1
                </h2>
                <p>
                    Realizo mis sesiones 1 a 1 de manera <strong>presencial</strong> y también <strong>online a cualquier parte del mundo</strong>.
                </p>
                <p>
                    Combino mis conocimientos en <strong>psicología </strong> con mi búsqueda de herramientas como{" "}
                    <strong>Constelaciones</strong> y <strong>Bio descodificación</strong>, que utilizo en el espacio terapéutico
                    siempre que el paciente lo requiera.
                </p>

                <Testimonials />
            </section>
        </section>
    );
}
