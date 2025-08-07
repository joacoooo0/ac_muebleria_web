import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AC Mueblería",
  description: "Muebles y Diseño. Optimización, diseño, y fabricación de muebles en melamina y madera. Muebles a medida para el hogar, la oficina y más. Pasión por hacer funcional lo esencial.",
  keywords: ['muebles de melamina', 'muebleria', 'muebles 3D', 'diseño de interiores', 'AC Muebleria'],
  openGraph: {
    title: 'AC Muebleria',
    description: 'Muebles de melamina personalizados con visualización 3D.',
    url: 'https://www.acmuebleria.pe', // Reemplazar con el dominio real
    siteName: 'AC Muebleria',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ACMuebleria', // Reemplazar con el handle real
  },
  icons: {
    icon: '/favicon.ico',
     apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://www.acmuebleria.pe', // URL canónica
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta property=""></meta>
      <body>
        {children}
      </body>
    </html>
  );
}
