import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                <p className="m-0">© {new Date().getFullYear()} Esmeralda Perisset</p>
                <nav className={styles.nav}>
                    <Link href="#sobre-mi">Sobre mí</Link>
                    <Link href="#taller">Taller</Link>
                    <Link href="#libro">Libro</Link>
                    <Link href="#contacto">Contacto</Link>
                </nav>
            </div>
        </footer>
    );
}
