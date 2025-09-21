import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "500", "600", "700"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", weight: ["400", "500", "600", "700"] });

export const metadata = {
  metadataBase: new URL("https://esme-delta.vercel.app"), // 👈 importante para URLs absolutas
  title: "Esmeralda Perisset | Psicóloga Clínica",
  description: "Soy Esmeralda, psicóloga clínica. Descubrí mis talleres y mi libro 'Líneas sinceras'.",

  // Usa PNG/ICO (no webp) para máxima compatibilidad
  icons: {
    icon: [
      { url: "/favicon.ico" }, // fallback universal
      { url: "/favicon-32x32.png", sizes: "32x32" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Esmeralda Perisset | Psicóloga Clínica",
    description: "Talleres de autoconocimiento y el libro 'Líneas sinceras'.",
    url: "/",
    siteName: "Esmeralda Perisset",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",  // 👈 será https://esme-delta.vercel.app/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Esmeralda Perisset | Psicóloga Clínica"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dancingScript.variable}`}>
      <body suppressHydrationWarning={true}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
