// app/api/logout/route.js
import { cookies } from "next/headers";

export async function POST(req) {
	// Borra la cookie
	cookies().delete("adm_auth", {
		path: "/",
	});

	return new Response(JSON.stringify({ ok: true }), {
		headers: { "Content-Type": "application/json" },
	});
}
