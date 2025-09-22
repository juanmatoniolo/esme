import Link from "next/link";
import styles from "./Book.module.css";

export default function Book() {
    return (
        <section id="libro" className={styles.section} aria-labelledby="book-title">
            <div className="container">
                <p className={styles.eyebrow}>Libro</p>
                <div className={styles.card}>
                    <div>
                        <h2 id="book-title" className={styles.title}>“Líneas sinceras”</h2>
                        <p className={styles.text}>
                            Fruto de mi proceso personal. En más de una página vas a encontrarte y acompañarte.
                        </p>
                        <p className={styles.textMuted}>
                            En Carcarañá: Con Aroma a Libro y Aurora Santería.
                        </p>
                    </div>
                    <Link
                        href="https://www.editorialcarpeliterario.com.ar/"
                        target="_blank" rel="noopener noreferrer"
                        className={styles.buy}
                    >
                        Comprar en la editorial
                    </Link>
                </div>
            </div>
        </section>
    );
}
