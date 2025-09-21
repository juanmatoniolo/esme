import Link from "next/link";
import styles from "./Hero.module.css";

const WAPP_URL = `https://wa.me/543413687985?text=${encodeURIComponent(
    "Hola! Gracias por resonar con mi trabajo y animarte a contactarme! En breve me estoy comunicando con vos✨"
)}`;
const MAILTO = "mailto:laliperisset@hotmail.com";

export default function Hero() {
    return (
        <header className={styles.hero} role="region" aria-label="Presentación de Esmeralda Perisset">
            <div className="container text-center">

                <h1 className={styles.title}>Soy Esmeralda, Psicóloga Clínica</h1>

                <p className="mb-2 mt-3">
                    <span className="badge-soft me-2">Psicoanálisis</span>
                    <span className="badge-soft me-2">Biodescodificación</span>
                    <span className="badge-soft me-2">Constelaciones</span>
                    <span className="badge-soft">Registros</span>
                </p>

                <p className={styles.subtitle}>
                    Comprendernos, alivia. Te acompaño con herramientas claras para
                    conocerte, sanar y vivir con mayor bienestar.
                </p>


                <div className="d-flex justify-content-center flex-wrap gap-2">
                    <Link href="#taller" className={styles.ctaPrimary}>
                        Conocé mi Taller
                    </Link>
                    <Link href="#libro" className={styles.ctaSecondary}>
                        Ver mi Libro
                    </Link>

                </div>
            </div>
        </header>
    );
}
