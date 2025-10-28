"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Book.module.css";

const EDITORIAL_URL = "https://www.editorialcarpeliterario.com.ar/productos/lineas-sinceras-de-esmeralda-perisset/";
const BOOK_TITLE = "Líneas sinceras";
const BOOK_SUBTITLE =
    "Un recorrido íntimo por sensaciones y momentos, para acompañarte en tu propio proceso de comprensión y alivio. Disponible en Carcarañá en `Con Aroma a Libro` y `Aurora Santería`. Para envíos a otras ciudades, podés comprarlo a través de la editorial.";
const BOOK_AUTHOR = "Esmeralda Perisset";

export default function Book({
    images = [
        { src: "/assets/esmelibro3.webp", alt: "Líneas sinceras sobre una mesa" },
        { src: "/assets/esmelibro2.webp", alt: "Detalle de la tapa del libro Líneas sinceras" },
        { src: "/assets/esmelibro4.webp", alt: "Esmeralda presentando el libro" },
        { src: "/assets/esmelibro.webp", alt: "Esmeralda presentando el libro" },
    ],
}) {
    const jsonLd = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "Book",
            name: BOOK_TITLE,
            author: { "@type": "Person", name: BOOK_AUTHOR },
            description: BOOK_SUBTITLE,
            inLanguage: "es",
            offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                url: EDITORIAL_URL,
                priceCurrency: "ARS",
            },
        }),
        []
    );

    return (
        <section className={` ${styles.section}`} aria-labelledby="book-title" id="libro">
            <div className={`${styles.wrapper} container`}>
                <div className={`${styles.header} container`}>
                    <h2 id="book-title" className={styles.title}>{BOOK_TITLE}</h2>
                    <p className={styles.subtitle}> Un recorrido íntimo por sensaciones y momentos, para acompañarte en tu propio proceso de comprensión y alivio. Disponible en Carcarañá en `Con Aroma a Libro` y `Aurora Santería`. Para envíos a otras ciudades, podés comprarlo a través de la editorial.</p>
                </div>

                <div className={styles.sliderWrap}>
                    <Swiper
                        modules={[Pagination, A11y, Autoplay]}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        spaceBetween={12}
                        loop
                        autoplay={{
                            delay: 4800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={600}
                        a11y={{
                            prevSlideMessage: "Imagen anterior",
                            nextSlideMessage: "Imagen siguiente",
                        }}
                        className={styles.swiper}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i} className={styles.slide}>
                                <figure className={styles.figure}>
                                    <div className={styles.imageBox}>
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className={styles.image}
                                            loading={i === 0 ? "eager" : "lazy"}
                                            decoding="async"
                                        />
                                    </div>
                                    {img.caption ? (
                                        <figcaption className={styles.caption}>{img.caption}</figcaption>
                                    ) : null}
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.ctaBottom}>
                    <a
                        className={styles.ctaPrimary}
                        href={EDITORIAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Comprar ahora →
                    </a>
                </div>
            </div>

            {/* SEO Book JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
