"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./CardVideo.module.css";

// Carga sólo en cliente para evitar SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CardVideo({
    url,
    title,
    description,
    badge = "Video",
    className = "",
}) {
    return (
        <article className={`${styles.card} ${className}`} aria-label={title}>
            {/* Media / Player */}
            <div className={styles.media}>
                <div className={styles.playerWrap}>
                    <ReactPlayer
                        url={url}
                        width="100%"
                        height="100%"
                        controls
                        light={true} // 👈 muestra preview
                        playIcon={
                            <button className={styles.playButton}>
                                ▶
                            </button>
                        }
                    />
                </div>
            </div>

            {/* Texto */}
            <div className={styles.text}>
                <h3 className={styles.h3}>{title}</h3>
                <p className={styles.p}>{description}</p>
                <a href="#taller" className={styles.boton}>
                    Conocer más
                </a>
            </div>
        </article>
    );
}
