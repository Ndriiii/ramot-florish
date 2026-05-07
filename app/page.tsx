import type { Metadata } from "next";
import { Geist, Geist_Mono, Sansita_Swashed, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sansita = Sansita_Swashed({
  variable: "--font-sansita",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ramot Florist | Papan Bunga Wedding, Grand Opening & Duka Cita Medan",
  description:
    "Toko bunga di Medan sejak 2020. Menyediakan papan bunga ucapan untuk Wedding, Grand Opening, Duka Cita dengan desain eksklusif. Pengiriman tepat waktu. +62 812-6096-4593",
  applicationName: "Ramot Florist",
  keywords: ["papan bunga medan", "toko bunga medan", "bunga duka cita medan", "ramot florist"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ramot Florist Medan",
    description: "Papan bunga eksklusif untuk semua momen spesial Anda.",
    url: "https://ramotflorist.com",
    siteName: "Ramot Florist",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sansita.variable} ${lato.variable} antialiased`}>
        
        {/* Google Tag (gtag.js) - AW-18139077658 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18139077658`}
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18139077658', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}