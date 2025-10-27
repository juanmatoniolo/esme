import React from 'react'
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });
import dynamic from "next/dynamic";
import styles from "./video.module.css"


export default function Video() {
    // ✅ Datos de ejemplo
    const v = {
        t: "Título",
        d: "Intro de lo que ofrecemos",
        url: "https://www.youtube.com/watch?v=GnsQDsBvJtQ",
    };
    return (
        <div>
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
            </article>
        </div>
    )
}
