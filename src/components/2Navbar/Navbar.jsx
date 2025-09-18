"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav
            className={`navbar navbar-light navbar-expand-lg fixed-top shadow-sm ${styles.navRoot}`}
        >
            <div className="container">
                {/* Marca / Logo */}
                <Link href="/" className={`navbar-brand ${styles.brand}`}>
                    <Image
                        src="/logo3.png"
                        alt="Logo Esmeralda"
                        width={120}
                        height={60}
                        className={styles.logo}
                        priority
                    />
                </Link>

                {/* Hamburguesa custom con 3 líneas */}
                <button
                    className={`navbar-toggler ${styles.toggler}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Abrir navegación"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Menú */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link href="#sobre-mi" className="nav-link">
                                Sobre mí
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#taller" className="nav-link">
                                Taller
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#libro" className="nav-link">
                                Libro
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="#contacto"
                                className={`nav-link ${styles.btnContact}`}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
