import type { Metadata } from "next";
import { Geist, Geist_Mono, Sansita_Swashed, Lato } from "next/font/google";
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
    title: "Ramot Florist Medan | Papan Bunga Wedding, Grand Opening & Duka Cita",
    description:
        "Toko bunga di Medan sejak 2020. Menyediakan papan bunga ucapan untuk Wedding, Grand Opening, Duka Cita dengan desain eksklusif. Pengiriman tepat waktu. +62 821-9129-5376",
    keywords: [
        "papan bunga medan",
        "toko bunga medan",
        "bunga duka cita medan",
        "bunga wedding medan",
        "grand opening bunga",
        "ramot florist",
        "papan bunga murah medan",
    ],
    openGraph: {
        title: "Ramot Florist Medan",
        description: "Papan bunga eksklusif untuk semua momen spesial Anda. Wedding, Grand Opening, Duka Cita.",
        url: "https://ramotflorist.com",
        siteName: "Ramot Florist",
        images: [
            {
                url: "/Hero.jpeg",
                width: 1200,
                height: 630,
                alt: "Ramot Florist - Toko Bunga Medan",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ramot Florist Medan",
        description: "Papan bunga eksklusif untuk semua momen spesial Anda.",
        images: ["/Hero.jpeg"],
    },
    alternates: {
        canonical: "https://ramotflorist.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sansita.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
