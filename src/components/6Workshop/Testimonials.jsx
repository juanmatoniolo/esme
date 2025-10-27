"use client";

import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Brenda",
        text: "Qué bueno que te animaste a brindar esto a más personas. Para mí tu taller fue uno de los más movilizantes que hice, y tenés algo en tu hablar que transmite mucha paz y calma.",
    },
    {
        name: "Silvana",
        text: "Me llevo muchos interrogantes y la intención de ir a buscar las respuestas. Gracias por abrir esa puerta tan amorosamente.",
    },
    {
        name: "Nancy",
        text: "Nunca pensé que me sería de tanta ayuda este taller. Es increíble. ¡Gracias!",
    },
    {
        name: "Lucía",
        text: "Todavía estoy en shock. Aguanten estos espacios que vos coordinás con tanto amor, profesionalismo y respeto. ¡Súper recomiendo!",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
            <h2 id="testimonials-title" className={styles.title}>
                Lo que dicen quienes participaron
            </h2>

            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                className={styles.swiper}
            >
                {testimonials.map(({ name, text }, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card}>
                            <p className={styles.cardText}>“{text}”</p>
                            <p className={styles.name}>— {name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
