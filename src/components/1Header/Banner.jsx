"use client";
import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <header
            className={styles.banner}
            role="img"
            aria-label="Esmeralda Perisset, Psicóloga Clínica"
        >
            <Image
                src="/assets/esmeBanner.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className={styles.img}
            />

            {/* Contenido opcional (podés borrar si no querés texto) */}
            <div className={`container ${styles.inner}`}>
                <h1 className={styles.title}>Psicología clínica con calidez y claridad</h1>
                <p className={styles.subtitle}>
                    Acompañamiento profesional para tu proceso personal.
                </p>
            </div>
        </header>
    );
}
