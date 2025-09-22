export function normalizeYouTubeUrl(url) {
	try {
		const parsed = new URL(url);

		// Caso 1: formato corto youtu.be/VIDEOID
		if (parsed.hostname.includes("youtu.be")) {
			const videoId = parsed.pathname.slice(1); // lo que sigue a la barra
			return `https://www.youtube.com/watch?v=${videoId}`;
		}

		// Caso 2: formato largo youtube.com/watch?v=VIDEOID
		if (
			parsed.hostname.includes("youtube.com") &&
			parsed.searchParams.has("v")
		) {
			const videoId = parsed.searchParams.get("v");
			return `https://www.youtube.com/watch?v=${videoId}`;
		}

		// Si ya es válido o no se reconoce, devolvemos como está
		return url;
	} catch (e) {
		console.error("URL inválida:", url);
		return url;
	}
}
