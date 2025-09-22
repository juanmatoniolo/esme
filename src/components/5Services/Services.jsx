"use client";

import styles from "./Services.module.css";
import CardVideo from "@/components/CardVideo/CardVideo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { normalizeYouTubeUrl } from "./normalizeYouTubeUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
    {
        t: "Sesiones 1 a 1",
        d: "Atención presencial y online a cualquier parte del mundo.",
        url: "https://youtu.be/l8vz4C5q-kM?si=5bdtHF1BgZh3Dhax",
    },
    {
        t: "Talleres vivenciales",
        d: "Herramientas claras para autoconocimiento y crecimiento personal.",
        url: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    },
    {
        t: "Libro: “Líneas sinceras”",
        d: "Un acompañamiento en palabras para distintos momentos.",
        url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    },
];

export default function Services() {
    return (
        <section className={styles.fondoSection}>
            <div className={styles.section}>
                {/* OLA SUPERIOR */}
                <svg className={styles.waveTop} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>

                <div className={styles.section}>
                    <h2 id="services-title" className={styles.title}>Mis servicios</h2>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {videos.map((v) => (
                            <SwiperSlide key={v.t}>
                                <CardVideo
                                    url={normalizeYouTubeUrl(v.url)} // 👈 normalización aquí
                                    title={v.t}
                                    description={v.d}
                                    badge="Video"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* OLA INFERIOR */}
                <svg className={styles.waveBottom} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,80 C240,40 480,40 720,80 S1200,120 1440,80 L1440,0 L0,0 Z" />
                </svg>
            </div>
        </section>
    );
}
