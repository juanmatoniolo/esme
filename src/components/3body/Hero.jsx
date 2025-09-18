import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className="container text-center">
                {/* Título */}
                <h1 className={styles.title}>
                    Soy Esmeralda, Psicóloga Clínica
                </h1>

                {/* Subtítulo */}
                <p className={styles.subtitle}>
                    Descubrí herramientas profundas para comprenderte,
                    sanar y vivir con mayor bienestar.
                </p>

                {/* CTA */}
                <Link href="#taller" className={styles.ctaPrimary}>
                    Conocé mi Taller
                </Link>
                <Link href="#libro" className={styles.ctaSecondary}>
                    Ver mi Libro
                </Link>
            </div>
        </header>
    );
}
