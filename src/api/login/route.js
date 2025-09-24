// app/api/login/route.js
export const runtime = "nodejs"; // <-- agrega esto

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getEnvCreds, signSession } from "@/lib/auth";
import { verifyPassword } from "@/lib/pwd";

async function fetchAdminAuth(base) {
	const res = await fetch(`${base}/adminAuth.json`, { cache: "no-store" });
	if (!res.ok) throw new Error("RTDB no responde");
	return await res.json();
}

export async function POST(req) {
	try {
		const { base, user: envUser, pass: envPass } = getEnvCreds(); // lanza si faltan envs
		const { user = "", pass = "" } = await req.json().catch(() => ({}));

		let ok = false;
		let reason = "invalid";

		try {
			const stored = await fetchAdminAuth(base);
			if (stored?.user && stored?.hash && stored?.salt && stored?.iter) {
				ok =
					stored.user === user &&
					(await verifyPassword(pass, stored));
				if (!ok) reason = "hash_mismatch_or_user";
			} else {
				// bootstrap con .env
				ok = user === envUser && pass === envPass;
				if (!ok) reason = "env_mismatch";
			}
		} catch (e) {
			reason = "rtdb_error";
			throw e;
		}

		if (!ok) {
			return NextResponse.json(
				{ ok: false, message: "Credenciales inválidas", reason },
				{ status: 401 }
			);
		}

		const token = await signSession(user);
		cookies().set({
			name: "adm_auth",
			value: token,
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
			path: "/",
			maxAge: 60 * 60 * 8,
		});

		return NextResponse.json({ ok: true });
	} catch (err) {
		return NextResponse.json(
			{
				ok: false,
				message: "Fallo del servidor. Revisá .env y runtime.",
				error: String(err?.message || err),
			},
			{ status: 500 }
		);
	}
}
