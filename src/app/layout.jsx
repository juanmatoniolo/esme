import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Nunito, Dancing_Script, Ubuntu } from "next/font/google";
import BootstrapClient from "@/components/Boostrap/BootstrapClient";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "500", "600", "700"] });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing", weight: ["400", "500", "600", "700"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  metadataBase: new URL("http://psicoesmeperisset.com/"),
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
  url: "http://psicoesmeperisset.com/", // <- aquí ponelo completo
  siteName: "Esmeralda Perisset",
  type: "website",
  images: [
    {
      url: "http://psicoesmeperisset.com/android-chrome-192x192.webp", // <- url absoluta
      width: 1200,
      height: 630,
      alt: "Esmeralda Perisset | Psicóloga Clínica"
    }
  ]
},

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dancingScript.variable} ${ubuntu.variable}`}>
      <body suppressHydrationWarning={true}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}