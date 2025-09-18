
/**/
📌 Estructura básica de la Landing Page (Next.js + Bootstrap)

Layout Global (_app.js o layout.tsx en App Router)

Navbar fijo (con logo/nombre + links de navegación).

Footer (con datos de contacto, links rápidos, copyright).

Secciones principales

Hero Section (Bienvenida)

Imagen de Esmeralda o ilustración suave.

Título claro: "Soy Esmeralda, Psicóloga Clínica".

Subtítulo inspirador: "Descubrí herramientas profundas para comprenderte y sanar".

Botón CTA: "Conocé mi curso".

Sobre mí

Texto resumido de quién es (bio corta, no toda la info cruda).

Foto profesional y cálida.

CTA secundario: "Leer más sobre mi historia".

Curso/Taller Online

Explicación clara del contenido.

Listado de beneficios (bullet points).

Imagen ilustrativa.

CTA: "Acceder al taller".

Libro “Líneas sinceras”

Imagen de la portada.

Breve descripción.

Botón CTA: "Comprar ahora".

Servicios (Sesiones 1 a 1 + Talleres presenciales)

Cards con descripción corta de cada servicio.

CTA: "Agendar sesión".

Testimonios (Social Proof)

Opiniones de pacientes/lectores (si los tiene).

Fotos pequeñas (siempre que haya permiso).

Formulario de contacto

Nombre, email, mensaje.

Botón CTA: "Enviar".

También un CTA de WhatsApp directo.

Footer

Redes sociales.

Email de contacto.

Ubicación.

Copyright.

🎨 Diseño (UI/UX)

Colores: Paleta en tonos pastel (ejemplo: lavanda, celeste claro, beige suave, verde agua). Esto transmite paz, calma y confianza → fundamental para un perfil de psicología.

Tipografía: Google Fonts → opciones como Poppins, Quicksand o Nunito. Todas tienen bordes redondeados y son altamente legibles.

Mobile First: Bootstrap ya trae grid responsivo. Diseñamos primero pensando en pantallas chicas (stack vertical) y luego adaptamos a desktop.

CTAs claros: máximo 1 CTA principal por sección (ej: curso, libro, contacto). No sobrecargar.

Espacios en blanco (white space): necesarios para transmitir calma y que el contenido respire.

Imágenes humanas y naturales: aumentan confianza (foto de Esme en varias secciones).

🔍 SEO (Google)

Head bien optimizado

<title> único y descriptivo. Ej: "Esmeralda Perisset | Psicóloga Clínica - Cursos y Terapias Online".

<meta description> claro y atractivo (máx. 160 caracteres).

Open Graph y meta tags para compartir en redes.

Estructura Hn (Jerarquía de títulos)

H1 → Hero principal.

H2 → “Sobre mí”, “Curso”, “Libro”, “Servicios”, “Contacto”.

H3 → subtemas (ej: beneficios del taller).

Contenido legible

Frases cortas, lenguaje claro (no copiar literal todo su texto).

Uso de palabras clave: “psicóloga clínica en Argentina”, “taller de autoconocimiento online”, “curso de constelaciones familiares”.

Performance (Core Web Vitals)

Next.js optimiza imágenes automáticamente (next/image).

Lazy load en imágenes que no son visibles de entrada.

Bootstrap en versión optimizada.

Accesibilidad (A11y)

Texto alternativo (alt) en imágenes.

Contraste adecuado entre texto y fondo.

Botones accesibles con teclado.