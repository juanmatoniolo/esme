"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./Services.module.css";
import Link from "next/link";

// ✅ Importamos el player de YouTube (fork actualizado)
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

// ✅ Datos de ejemplo
const v = {
    t: "Título",
    d: "Intro de lo que ofrecemos",
    url: "https://www.youtube.com/watch?v=GnsQDsBvJtQ",
};

export default function Services() {
    return (
        <section className={styles.fondoSection}>
            <div className={styles.section}>
                {/* OLA SUPERIOR */}
                <svg
                    className={styles.waveTop}
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>

                <div className={styles.section2}>
                    <h2 id="services-title" className={styles.title}>
                        Mis servicios
                    </h2>

                    {/* ✅ Card directamente aquí */}
                    <article className={styles.card} aria-label={v.t}>
                        <div className={styles.media}>
                            <ReactPlayer
                                url={v.url}
                                width="100%"
                                height="100%"
                                controls
                                playIcon={
                                    <button className={styles.playButton} aria-label={`Reproducir ${v.t}`}>
                                        ▶
                                    </button>
                                }
                            />
                        </div>

                        <div className={styles.text}>
                            <Link href="#taller" className={styles.boton}>
                                Conocer más
                            </Link>
                        </div>
                    </article>
                </div>

                {/* OLLink INFERIOR */}
                <svg
                    className={styles.waveBottom}
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>
            </div>
        </section>
    );
}
