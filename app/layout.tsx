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
    // "Ramot Florist" shows in Google search results, not the domain
    title: "Ramot Florist | Papan Bunga Wedding, Grand Opening & Duka Cita Medan",
    description:
        "Toko bunga di Medan sejak 2020. Menyediakan papan bunga ucapan untuk Wedding, Grand Opening, Duka Cita dengan desain eksklusif. Pengiriman tepat waktu. +62 821-9129-5376",
    // This controls the browser tab name and search result site name
    applicationName: "Ramot Florist",
    keywords: [
        "papan bunga medan",
        "toko bunga medan",
        "bunga duka cita medan",
        "bunga wedding medan",
        "grand opening bunga",
        "ramot florist",
        "papan bunga murah medan",
    ],
    // Favicon and web icons
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
    },
    openGraph: {
        title: "Ramot Florist Medan",
        description: "Papan bunga eksklusif untuk semua momen spesial Anda. Wedding, Grand Opening, Duka Cita.",
        url: "https://ramotflorist.com",
        siteName: "Ramot Florist",
        images: [
            {
                url: "/logo.png",
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
        images: ["/logo.png"],
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
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className={`${geistSans.variable} ${geistMono.variable} ${sansita.variable} ${lato.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}