import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "500", "600", "700"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", weight: ["400", "500", "600", "700"] });

export const metadata = {
  metadataBase: new URL("https://esme-delta.vercel.app"),
  title: "Esmeralda Perisset | Psicóloga Clínica",
  description: "Soy Esmeralda, psicóloga clínica. Descubrí mis talleres y mi libro 'Líneas sinceras'.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" }
    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp", media: "(prefers-color-scheme: light)" },
      { url: "/apple-touch-icon-dark.webp", sizes: "180x180", type: "image/webp", media: "(prefers-color-scheme: dark)" }
    ]
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Esmeralda Perisset | Psicóloga Clínica",
    description: "Talleres de autoconocimiento y el libro 'Líneas sinceras'.",
    url: "/",
    siteName: "Esmeralda Perisset",
    type: "website",
    images: [
      { url: "/og-image.webp", width: 1200, height: 630, alt: "Esmeralda Perisset | Psicóloga Clínica" }
    ]
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"]
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
