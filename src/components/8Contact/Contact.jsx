import styles from "./Contact.module.css";
import ContactFormClient from "./ContactFormClient";

function buildWhatsappHref() {
	const phoneIntl = "543413687985";
	const text = encodeURIComponent(
		"Hola Esme 👋 Me gustaría coordinar una consulta. Vi tus servicios (Sesiones 1 a 1, Talleres, Libro 'Líneas sinceras')."
	);
	return `https://wa.me/${phoneIntl}?text=${text}`;
}

export default function Contact() {
	const mapAddress = "Eva Perón 739, Carcarañá, Santa Fe, Argentina";

	const mapQuery = encodeURIComponent(mapAddress);
	const whatsappHref = buildWhatsappHref();

	return (
		<section className={styles.section} aria-labelledby="contact-title">
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<h2 id="contacto" className={styles.title}>Contactos</h2>
				</header>

				{/* Grid principal: izquierda (WhatsApp + Form) | derecha (Mapa) */}
				<div className={styles.grid}>
					<div className={styles.stack}>
						{/* Bloque 1: WhatsApp */}
						<article className={styles.block} aria-labelledby="whats-title">
							<div className={styles.blockHeader}>
								<h3 id="whats-title" className={styles.cardTitle}>Contactar por WhatsApp</h3>
								<p className={styles.lead}>
									Podés contactarme a través de WhatsApp haciendo clic en el botón.
									Si preferís, también podés dejarme tu consulta mediante el formulario
									y te responderé por alguno de los medios de contacto que dejes.
								</p>
							</div>
							<div className={styles.ctaRow}>
								<a
									className={styles.ctaPrimary}
									href={whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Contactar por WhatsApp"
								>
									Enviar WhatsApp
								</a>
							</div>
						</article>

						{/* Bloque 2: Formulario */}
						<article
							className={`${styles.block} ${styles.formBox}`}
							aria-labelledby="form-title"
						>
							<div className={styles.blockHeader}>
								<h3 id="form-title" className={styles.cardTitle}>Escribime</h3>
							</div>

							<ContactFormClient whatsappHref={whatsappHref} />
						</article>
					</div>

					{/* Bloque 3: Mapa */}
					<aside className={styles.block} aria-labelledby="map-title">
						<div className={styles.blockHeader}>
							<h3 id="map-title" className={styles.cardTitle}>Ubicación</h3>
							<p className={styles.mutedSmall}>{mapAddress}</p>
						</div>

						<div className={styles.embedMap}>
							<figure style={{ margin: 0 }}>
								<iframe
									title="Mapa del consultorio"
									loading="lazy"
									src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</figure>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
