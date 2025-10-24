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

                <div className={`${styles.badges1}`}>

                    <p className={` badge-soft me-2 ${styles.badges}`}>Psicología integral</p>
                    <p className={`badge-soft me-2 ${styles.badges}`}>Biodescodificación</p>
                    <p className={`badge-soft me-2 ${styles.badges}`}>Constelaciones</p>
                    <p className={` badge-soft me-2 ${styles.badges}`}>Registros</p>
                </div>



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
