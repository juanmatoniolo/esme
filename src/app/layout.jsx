import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Esmeralda Perisset | Psicóloga Clínica",
  description:
    "Soy Esmeralda, psicóloga clínica. Descubrí mis talleres de autoconocimiento y mi libro 'Líneas sinceras'.",

  // ✅ Íconos
  icons: {
    icon: "/icon_32x32.png",
    shortcut: "/icon_96x96.png",
    apple: "/icon_192x192.png"
  },

  // ✅ PWA Manifest
  manifest: "/manifest.json",

  // ✅ Metadata para compartir en redes
  openGraph: {
    title: "Esmeralda Perisset | Psicóloga Clínica",
    description:
      "Talleres de autoconocimiento y el libro 'Líneas sinceras'.",
    url: "psicoesmeperisset.com",
    siteName: "Esmeralda Perisset",
    images: [
      {
        url: "/icon_1024x1024.png",
        width: 1024,
        height: 1024,
        alt: "Logo Esmeralda Perisset"
      }
    ],
    locale: "es_ES",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Esmeralda Perisset | Psicóloga Clínica",
    description: "Talleres de autoconocimiento y el libro 'Líneas sinceras'.",
    images: ["/icon_1024x1024.png"],
    creator: "@tuusuario"
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
