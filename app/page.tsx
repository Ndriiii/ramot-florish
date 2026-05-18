"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Deklarasi global untuk Google Ads Tracking
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Product = {
    id: number;
    name: string;
    category: "Papan Bunga" | "Standing Flower" | "Bunga Salib";
    images: string[];
}

type HeroSlide = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    targetId: string;
}

const PRODUCTS: Product[] = [
    { id: 1, name: "Papan Bunga Jumbo 01", category: "Papan Bunga", images: ["/Jumbo.webp"]},
    { id: 2, name: "Papan Bunga Jumbo 02", category: "Papan Bunga", images: ["/Jumbo 1.webp"]},
    { id: 3, name: "Papan Bunga Jumbo 03", category: "Papan Bunga", images: ["/Jumbo 2.webp"]},
    { id: 4, name: "Papan Bunga Jumbo 04", category: "Papan Bunga", images: ["/Jumbo 3.webp"]},
    { id: 5, name: "Papan Bunga Jumbo 05", category: "Papan Bunga", images: ["/jgitumbo 4.webp"]},
    { id: 6, name: "Papan Jakarta 01", category: "Papan Bunga", images: ["/PapanJakarta.webp"]},
    { id: 7, name: "Papan Jakarta 02", category: "Papan Bunga", images: ["/JakartaFresh.webp"]},
    { id: 8, name: "Papan Jakarta 03", category: "Papan Bunga", images: ["/Papan Jakarta 2.webp"]},
    { id: 9, name: "Papan Jakarta 04", category: "Papan Bunga", images: ["/Papan Jakarta 3.webp"]},
    { id: 10, name: "Papan Jakarta 05", category: "Papan Bunga", images: ["/Papan Jakarta 4.webp"]},
    { id: 11, name: "Papan Jakarta 06", category: "Papan Bunga", images: ["/Papan Jakarta 5.webp"]},
    { id: 12, name: "Papan Jakarta 07", category: "Papan Bunga", images: ["/Papan Jakarta 6.webp"]},
    { id: 13, name: "Papan Jakarta 08", category: "Papan Bunga", images: ["/Papan Jakarta 7.webp"]},
    { id: 14, name: "Papan Jakarta 09", category: "Papan Bunga", images: ["/Papan Jakarta 8.webp"]},
    { id: 15, name: "Papan Jakarta 10", category: "Papan Bunga", images: ["/Papan Jakarta 9.webp"]},
    { id: 16, name: "Papan Jakarta 11", category: "Papan Bunga", images: ["/Papan Jakarta 10.webp"]},
    { id: 17, name: "Papan Jakarta 12", category: "Papan Bunga", images: ["/Papan Jakarta 11.webp"]},
    { id: 18, name: "Papan Jakarta 13", category: "Papan Bunga", images: ["/Papan Jakarta 12.webp"]},
    { id: 19, name: "Papan Jakarta Jumbo Mahkota 4", category: "Papan Bunga", images: ["/JakartaJumbo.webp"]},
    { id: 20, name: "Papan Bunga Mahkota 1", category: "Papan Bunga", images: ["/Mahkota1.webp"]},
    { id: 21, name: "Papan Bunga 2 Mahkota 01", category: "Papan Bunga", images: ["/Mahkota 2.webp"]},
    { id: 22, name: "Papan Bunga 2 Mahkota 02", category: "Papan Bunga", images: ["/Mahkota 2 1.webp"]},
    { id: 23, name: "Papan Bunga 2 Mahkota 04", category: "Papan Bunga", images: ["/Mahkota 2 3.webp"]},
    { id: 24, name: "Papan Bunga 2 Mahkota 05", category: "Papan Bunga", images: ["/Mahkota 2 4.webp"]},
    { id: 25, name: "Papan Bunga 2 Mahkota 06", category: "Papan Bunga", images: ["/Mahkota 2 5.webp"]},
    { id: 26, name: "Papan Bunga 2 Mahkota 07", category: "Papan Bunga", images: ["/Mahkota 2 6.webp"]},
    { id: 27, name: "Papan Bunga 2 Mahkota 08", category: "Papan Bunga", images: ["/Mahkota 2 7.webp"]},
    { id: 28, name: "Papan Bunga 2 Mahkota 09", category: "Papan Bunga", images: ["/Mahkota 2 8.webp"]},
    { id: 29, name: "Papan Bunga 2 Mahkota 10", category: "Papan Bunga", images: ["/Mahkota 2 9.webp"]},
    { id: 30, name: "Papan Bunga 3 Mahkota 01", category: "Papan Bunga", images: ["/Mahkota3.webp"]},
    { id: 31, name: "Papan Bunga 3 Mahkota 02", category: "Papan Bunga", images: ["/Mahkota 3 1.webp"]},
    { id: 32, name: "Papan Bunga 4 Mahkota 01", category: "Papan Bunga", images: ["/Mahkota4.webp"]},
    { id: 33, name: "Papan Bunga 4 Mahkota 02", category: "Papan Bunga", images: ["/Mahkota4B.webp"]},
    { id: 34, name: "Papan Bunga Mahkota 5", category: "Papan Bunga", images: ["/Mahkota5.webp"]},
    { id: 35, name: "Papan Bunga 3 in 1 01", category: "Papan Bunga", images: ["/3 in 1 01.webp"]},
    { id: 36, name: "Papan Bunga 3 in 1 02", category: "Papan Bunga", images: ["/3 in 1 02.webp"]},
    { id: 37, name: "Papan Printing", category: "Papan Bunga", images: ["/Printing.webp"]},
    { id: 38, name: "Papan Akrilik 01 ", category: "Papan Bunga", images: ["/Akrilik.webp"]},
    { id: 39, name: "Papan Akrilik 02", category: "Papan Bunga", images: ["/Akrilik 2.webp"]},
    { id: 40, name: "Papan Akrilik 03", category: "Papan Bunga", images: ["/Akrilik 3.webp"]},
    { id: 41, name: "Bunga Salib 01", category: "Bunga Salib", images: ["/Salib1.webp"]},
    { id: 42, name: "Bunga Salib 02", category: "Bunga Salib", images: ["/Salib2.webp"]},
    { id: 43, name: "Bunga Salib 03", category: "Bunga Salib", images: ["/Salib3.webp"]},
    { id: 44, name: "Bunga Salib 04", category: "Bunga Salib", images: ["/Salib4.webp"]},
    { id: 45, name: "Bunga Salib 05", category: "Bunga Salib", images: ["/Salib5.webp"]},
    { id: 46, name: "Bunga Salib 06", category: "Bunga Salib", images: ["/Salib6.webp"]},
    { id: 47, name: "Standing Flower 01", category: "Standing Flower", images: ["/Standing.webp"]},
    { id: 48, name: "Standing Flower 02", category: "Standing Flower", images: ["/Standing 1.webp"]},
    { id: 49, name: "Standing Flower 03", category: "Standing Flower", images: ["/Standing2.webp"]},
    { id: 50, name: "Standing Flower 04", category: "Standing Flower", images: ["/Standing3.webp"]},
    { id: 51, name: "Standing Flower 05", category: "Standing Flower", images: ["/Standing4.webp"]},
    { id: 52, name: "Standing Flower 06", category: "Standing Flower", images: ["/Standing 5.webp"]},
    { id: 53, name: "Standing Flower 07", category: "Standing Flower", images: ["/Standing 6.webp"]},
    { id: 54, name: "Standing Flower 08", category: "Standing Flower", images: ["/Standing 7.webp"]},
    { id: 55, name: "Standing Flower 09", category: "Standing Flower", images: ["/Standing 8.webp"]},
    { id: 56, name: "Standing Flower 10", category: "Standing Flower", images: ["/Standing 9.webp"]},
    { id: 57, name: "Standing Flower 11", category: "Standing Flower", images: ["/Standing 10.webp"]}
];

const HERO_SLIDES: HeroSlide[] = [
    {
        title: "Ramot Florist",
        description: "📍 Terletak di Medan | 🗓 Melayani sejak 2020. Menyediakan berbagai pilihan papan bunga ucapan dengan desain eksklusif dan layanan pengiriman tepat waktu di area Medan sekitarnya.",
        image: "/Hero.webp",
        buttonText: "Jelajah Koleksi",
        targetId: "catalog"
    },
    {
        title: "Momen Bahagia",
        description: "Rayakan kemegahan hari bahagia rekan dan mitra bisnis Anda dengan kreasi rangkaian papan bunga mahkota jumbo premium yang dirancang khusus penuh ketelitian.",
        image: "/JakartaJumbo.webp",
        buttonText: "Lihat Desain Wedding",
        targetId: "catalog"
    },
    {
        title: "Ungkapan Simpati",
        description: "Menyediakan pembuatan krans duka cita, standing flower, dan rupa bunga salib berkualitas tinggi secara cepat dan responsif untuk langsung diantar ke rumah duka di Medan.",
        image: "/Salib.webp",
        buttonText: "Koleksi Duka Cita",
        targetId: "catalog"
    }
];

// KOMPONEN ICON WHATSAPP
function WhatsAppIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
    );
}

// KOMPONEN JUDUL SEKSI
function SectionTitle({ title, subtitle } : { title: string, subtitle: string }) {
    return (
        <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-5xl font-sansita text-[#171717]">{title}</h2>
            <div className="h-1 w-20 bg-[#171717] mx-auto rounded-full"></div>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm"> {subtitle} </p>
        </div>
    );
}

const getWhatsAppUrl = (productName?: string) => {
    const base = "https://wa.me/6281260964593";
    if (productName) {
        const message = `Halo Ramot Florist, saya tertarik dengan produk *${productName}*. Bisa info detail pengerjaan dan ketersediaannya?`;
        return `${base}?text=${encodeURIComponent(message)}`;
    }
    return base;
};

// Tipe Sorting
type SortOption = "default" | "asc" | "desc";

export default function Home() {
    const [SelectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>("Semua");
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [visibleCount, setVisibleCount] = useState(10);
    const [sortOrder, setSortOrder] = useState<SortOption>("default");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % 3);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.body.style.overflow = (SelectedProduct || mobileMenuOpen) ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [SelectedProduct, mobileMenuOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setSelectedProduct(null);
            setMobileMenuOpen(false);
        }
    };

    const scrollTo = (id?: string) => {
        setMobileMenuOpen(false);
        setTimeout(() => {
            if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
        }, 10);
    };

    const handleConversionTrack = () => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-18139077658/QHGMCP27wqccEJq4sclD'
            });
        }
    };

    const filteredAndSortedProducts = PRODUCTS
        .filter(product => activeCategory === "Semua" ? true : product.category === activeCategory)
        .sort((a, b) => {
            if (sortOrder === "asc") return a.name.localeCompare(b.name);
            if (sortOrder === "desc") return b.name.localeCompare(a.name);
            return 0;
        });

    return (
        <main className="min-h-screen bg-[#EFE8E8] text-[#171717] font-sans selection:bg-green-200" onKeyDown={handleKeyDown}>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EFE8E8]/80 backdrop-blur-md border-b border-gray-300/50">
                <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
                    <button onClick={() => scrollTo()} className="hover:opacity-80 transition-opacity flex items-center" aria-label="Ramot Florist - Beranda">
                        <Image src="/logo.png" alt="Ramot Florist Logo" width={52} height={52} className="object-contain" priority />
                    </button>
                    <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Beranda </button>
                        <button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Katalog </button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Kontak </button>
                        <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Lokasi </button>
                    </div>
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={handleConversionTrack}
                        className="hidden lg:inline-flex px-5 py-2.5 bg-[#171717] text-white text-sm font-bold rounded-full hover:bg-gray-800 transition shadow-lg active:scale-95">
                            Pesan Sekarang
                    </a>
                    <button onClick={() => setMobileMenuOpen((v) => !v)} className="lg:hidden p-2 rounded-lg text-[#171717] hover:bg-gray-200 transition" aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}>
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-[#EFE8E8] border-t border-gray-200 px-6 py-4 flex flex-col gap-1">
                        {[
                            { label: "Beranda", id: undefined },
                            { label: "Katalog", id: "catalog" },
                            { label: "Kontak", id: "contact" },
                            { label: "Lokasi", id: "location" },
                        ].map(({ label, id }) => (
                            <button key={label} onClick={() => scrollTo(id)} className="text-left w-full py-3 px-2 text-base font-semibold text-gray-600 hover:text-[#171717] hover:bg-gray-100 rounded-lg transition-colors">{label}</button>
                        ))}
                        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={handleConversionTrack} className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-[#171717] text-white text-sm font-bold rounded-full hover:bg-gray-800 transition shadow active:scale-95">
                            Pesan Sekarang
                        </a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative flex items-center bg-[#EFE8E8] pt-20 overflow-hidden select-none min-h-[100svh] lg:min-h-[95vh]">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-20 relative h-[85svh] lg:h-[75vh]">

                    {/* SLIDE 1 — mobile/tablet: stacked vertikal, laptop: 2 kolom */}
                    <div className={`absolute inset-0 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center justify-center transition-all duration-700 ease-in-out transform ${currentHeroSlide === 0 ? "opacity-100 translate-x-0 pointer-events-auto z-10" : "opacity-0 translate-x-10 pointer-events-none z-0"}`}>
                        {/* Teks */}
                        <div className="space-y-3 lg:space-y-8 text-center lg:text-left px-2 lg:px-0">
                            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-sansita leading-[1.1]">Ramot Florist</h1>
                            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                📍 Terletak di Medan | 🗓 Melayani sejak 2020. Menyediakan berbagai pilihan papan bunga ucapan dengan desain eksklusif dan pengiriman tepat waktu.
                            </p>
                            <div className="flex justify-center lg:justify-start pt-1">
                                <button onClick={() => scrollTo("catalog")} className="px-6 lg:px-8 py-3 bg-[#171717] text-[#EFE8E8] rounded-full font-semibold shadow-xl active:scale-95 transition">Jelajah Koleksi</button>
                            </div>
                        </div>
                        {/* Gambar */}
                        <div className="flex justify-center w-full">
                            <div className="relative w-40 sm:w-52 lg:w-[28rem] aspect-[3/4] lg:aspect-[4/5] rounded-t-[100px] lg:rounded-t-[180px] shadow-2xl overflow-hidden hover:rotate-2 transition-transform duration-500 cursor-pointer flex-shrink-0">
                                <Image src="/Hero.webp" alt="Ramot Florist Storefront" fill className="object-cover" priority sizes="(max-width: 1024px) 50vw, 40vw"/>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 2 — mobile/tablet: stacked vertikal, laptop: 2 kolom */}
                    <div className={`absolute inset-0 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-10 items-center justify-center transition-all duration-700 ease-in-out transform ${currentHeroSlide === 1 ? "opacity-100 translate-x-0 pointer-events-auto z-10" : "opacity-0 -translate-x-10 pointer-events-none z-0"}`}>
                        {/* Kolase gambar — di mobile tampil di bawah teks */}
                        <div className="relative order-2 lg:order-1 w-full max-w-[220px] sm:max-w-[280px] lg:max-w-lg xl:max-w-xl mx-auto aspect-square">
                            {/* Gambar 1 */}
                            <div className="absolute top-0 left-0 w-3/5 h-3/5 z-0 group -rotate-2">
                                <Image src="/Papan Jakarta 4.webp" alt="Papan Jumbo" fill className="object-contain drop-shadow-xl p-1 lg:p-2 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 40vw, 25vw"/>
                            </div>
                            {/* Gambar 2 */}
                            <div className="absolute top-8 right-0 w-2/5 h-2/5 z-10 group rotate-3">
                                <Image src="/JakartaJumbo.webp" alt="Papan Jakarta" fill className="object-contain drop-shadow-xl p-1 lg:p-2 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 30vw, 18vw"/>
                            </div>
                            {/* Gambar 3 */}
                            <div className="absolute bottom-8 right-8 w-2/5 h-2/5 z-20 group -rotate-1">
                                <Image src="/Mahkota5.webp" alt="Papan Mahkota 1" fill className="object-contain drop-shadow-xl p-1 lg:p-2 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 30vw, 18vw"/>
                            </div>
                            {/* Gambar 4 */}
                            <div className="absolute bottom-0 left-8 w-2/5 h-2/5 z-30 group rotate-2">
                                <Image src="/Mahkota3.webp" alt="Papan Mahkota 3" fill className="object-contain drop-shadow-xl p-1 lg:p-2 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 30vw, 18vw"/>
                            </div>
                        </div>
                        {/* Teks */}
                        <div className="space-y-3 lg:space-y-6 text-center lg:text-left order-1 lg:order-2 lg:pl-6 z-40 relative px-4">
                            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-green-800 bg-green-100 px-3 py-1 rounded-full">Koleksi Papan</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-sansita leading-tight mt-2">Karya Estetik & Modern</h2>
                            <p className="text-sm lg:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                                Rayakan kemegahan hari bahagia rekan dan mitra bisnis Anda dengan kreasi rangkaian papan bunga mahkota jumbo premium yang dirancang khusus penuh ketelitian.
                            </p>
                            <div className="flex justify-center lg:justify-start pt-1">
                                <button onClick={() => { setActiveCategory("Papan Bunga"); scrollTo("catalog"); }} className="px-6 lg:px-8 py-3 border-2 border-[#171717] text-[#171717] rounded-full font-bold hover:bg-[#171717] hover:text-white transition active:scale-95">Lihat Papan Bunga</button>
                            </div>
                        </div>
                    </div>

                    {/* SLIDE 3 — mobile/tablet: stacked vertikal, laptop: 3 kolom */}
                    <div className={`absolute inset-0 flex flex-col lg:flex-row gap-4 lg:gap-10 items-center justify-center transition-all duration-700 ease-in-out transform ${currentHeroSlide === 2 ? "opacity-100 translate-y-0 pointer-events-auto z-10" : "opacity-0 translate-y-10 pointer-events-none z-0"}`}>
                        {/* Gambar standing flower — hanya muncul di laptop */}
                        <div className="hidden lg:block w-1/3 lg:w-[28%] relative aspect-[3/4]">
                            <Image src="/Standing 1.webp" alt="Fresh Flower" fill className="object-contain drop-shadow-2xl p-2" sizes="25vw"/>
                        </div>
                        {/* Teks tengah */}
                        <div className="w-full lg:w-1/3 lg:w-2/5 text-center space-y-3 lg:space-y-6 px-6 lg:px-4">
                            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-red-800 bg-red-100 px-3 py-1 rounded-full">Layanan Bunga</span>
                            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-sansita leading-tight">Khidmat & Cepat</h2>
                            <p className="text-sm lg:text-base text-gray-600 max-w-lg mx-auto">
                                Menyediakan pembuatan krans duka cita, standing flower, dan rupa bunga salib berkualitas tinggi secara cepat dan responsif untuk langsung diantar ke rumah duka di Medan.
                            </p>
                            <div className="flex justify-center gap-3 pt-1">
                                <button onClick={() => { setActiveCategory("Bunga Salib"); scrollTo("catalog"); }} className="px-4 lg:px-6 py-2.5 lg:py-3 bg-[#171717] text-white text-xs lg:text-sm font-semibold rounded-full shadow-md active:scale-95 transition">Bunga Salib</button>
                                <button onClick={() => { setActiveCategory("Standing Flower"); scrollTo("catalog"); }} className="px-4 lg:px-6 py-2.5 lg:py-3 bg-white border border-gray-300 text-xs lg:text-sm font-semibold rounded-full shadow-sm active:scale-95 transition">Standing Flower</button>
                            </div>
                        </div>
                        {/* Gambar salib */}
                        <div className="w-2/5 sm:w-1/3 lg:w-[28%] relative aspect-[4/5] lg:aspect-[3/4] mx-auto lg:mx-0">
                            <Image src="/Salib.webp" alt="Bunga Salib Ucapan" fill className="object-contain drop-shadow-2xl p-2" sizes="(max-width: 1024px) 45vw, 25vw"/>
                        </div>
                    </div>

                </div>

                {/* Dot navigasi */}
                <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {[0, 1, 2].map((idx) => (
                        <button key={idx} onClick={() => setCurrentHeroSlide(idx)} className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${idx === currentHeroSlide ? "bg-[#171717] w-6 lg:w-8" : "bg-gray-400/50 hover:bg-gray-600"}`} aria-label={`Buka slide ${idx + 1}`} />
                    ))}
                </div>
            </section>

            {/* Section Katalog Utama */}
            <section id="catalog" className="relative py-24 overflow-hidden bg-[#E5DEDE]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <SectionTitle title="Katalog Toko" subtitle="Pilihan Desain Terbaik Menurut Kategori"/>

                    {/* Bagian Filter dan Sorting */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 mb-12">
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            {["Semua", "Papan Bunga", "Standing Flower", "Bunga Salib"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setVisibleCount(10);
                                    }}
                                    className={`px-6 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-all active:scale-95 border border-[#171717]/20 ${
                                        activeCategory === cat
                                        ? "bg-[#171717] text-white shadow-md border-[#171717]"
                                        : "bg-white/50 text-gray-600 hover:bg-white hover:text-[#171717]"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:block h-8 w-px bg-gray-300 mx-2"></div>

                        <div className="flex items-center">
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value as SortOption)}
                                className="bg-white/80 border border-gray-300 text-gray-700 text-xs md:text-sm font-semibold rounded-full px-4 py-2.5 outline-none focus:border-[#171717] transition-colors cursor-pointer appearance-none"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 10px center`, backgroundRepeat: `no-repeat`, backgroundSize: `1em`, paddingRight: `2rem` }}
                            >
                                <option value="default">Urutan Standar</option>
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {filteredAndSortedProducts.slice(0, visibleCount).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => {
                                    setSelectedProduct(product);
                                    setModalImageIndex(0);
                                }}
                            />
                        ))}
                    </div>

                    {filteredAndSortedProducts.length === 0 && (
                        <p className="text-center text-gray-500 font-medium py-12">Belum ada katalog dalam kategori ini.</p>
                    )}

                    {visibleCount < filteredAndSortedProducts.length && (
                        <div className="text-center mt-12 md:mt-16">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 10)}
                                className="px-8 py-3.5 border-2 border-[#171717] text-[#171717] rounded-full font-bold hover:bg-[#171717] hover:text-white transition active:scale-95 shadow-sm"
                            >
                                Muat Lebih Banyak
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Section Kontak */}
            <section id="contact" className="py-20 md:py-32 px-6 bg-[#EFE8E8] text-center">
                <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                    <SectionTitle title="Cara Pemesanan" subtitle="Kontak Kami" />
                    <p className="text-base md:text-xl text-gray-600 leading-relaxed text-center">
                        Untuk membahas mengenai pemesanan, silakan hubungi kami melalui WhatsApp. Klik tombol di bawah untuk memulai percakapan dengan tim kami, dan kami akan dengan senang hati membantu Anda memilih papan bunga yang sempurna untuk acara Anda! Kami juga menerima pemesanan area sekitar Medan.
                    </p>
                    <div className="flex justify-center px-4 sm:px-0">
                        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={handleConversionTrack}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-900/50 active:scale-95">
                            <WhatsAppIcon/>
                            <span> Diskusi Lebih Lanjut </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer & Peta */}
            <footer id="location" className="relative text-[#171717] py-12 md:py-16 px-6 overflow-hidden bg-[#E5DEDE]">
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                        <div className="w-full h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3982.25099702366!2d98.6197!3d3.5294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303125776c6e8601%3A0xa83c925dc35f9898!2sJl.%20Setia%20Budi%20No.32%2C%20Simpang%20Selayang%2C%20Kec.%20Medan%20Tuntungan%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020135!5e0!3m2!1sen!2sid!4v1772374151826!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ramot Florist Location" sandbox="allow-scripts allow-same-origin allow-popups"/>
                        </div>
                        <div className="flex flex-col items-start text-left space-y-5 md:space-y-6">
                            <h2 className="text-3xl md:text-5xl font-sansita"> Ramot Florist </h2>
                            <p className="text-gray-600 leading-relaxed max-w-md text-sm md:text-base">Berlokasi strategis di medan untuk melayani segala kebutuhan bunga Anda. Anda dapat menemukan kami di:</p>
                            <div className="space-y-3 md:space-y-4 text-gray-700 font-medium w-full max-w-sm">
                                <div className="flex items-start gap-4 justify-start">
                                    <div className="p-2 bg-white rounded-full shadow-sm text-green-700 shrink-0 mt-0.5">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <span className="text-left text-sm md:text-base"> Jl. Setia Budi No.32, Simpang Selayang, Kec. Medan Tuntungan, Kota Medan, Sumatera Utara 20135, Indonesia </span>
                                </div>
                                <div className="flex items-center gap-4 justify-start">
                                    <div className="p-2 bg-white rounded-full shadow-sm text-green-700 shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                                    <a href="mailto:ramotflorist@gmail.com" className="text-left hover:underline text-sm md:text-base"> ramotflorist@gmail.com </a>
                                </div>
                                <div className="flex items-center gap-4 justify-start">
                                    <div className="p-2 bg-white rounded-full shadow-sm text-green-700 shrink-0"><WhatsAppIcon/></div>
                                    <span className="text-left text-sm md:text-base"> +62 812-6096-4593 </span>
                                </div>
                                <div className="flex items-center gap-4 justify-start">
                                    <div className="p-2 bg-white rounded-full shadow-sm shrink-0" style={{color: "#E1306C"}}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>
                                    <a href="https://www.instagram.com/papanbunga_medanmurah/" target="_blank" rel="noopener noreferrer" className="text-left hover:underline text-sm md:text-base"> @papanbunga_medanmurah </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16 pt-8 border-t border-gray-300 text-center">
                        <p className="text-xs text-gray-500"> © {new Date().getFullYear()} Ramot Florist. All rights reserved. </p>
                    </div>
                </div>
            </footer>

            {/* Detail Popup Modal */}
            {SelectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8" role="dialog" aria-modal="true" aria-label={`Detail produk: ${SelectedProduct.name}`}>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} aria-hidden="true" />
                    <div className="relative bg-[#EFE8E8] w-full max-w-4xl rounded-3xl shadow-2xl overflow-visible flex flex-col md:flex-row max-h-[92vh] overflow-y-auto border border-gray-200">
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full z-40 transition shadow-sm cursor-pointer text-[#171717]"> ✕ </button>

                        <div className="w-full md:w-1/2 relative bg-[#E5DEDE] min-h-65 sm:min-h-85 md:min-h-125 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden p-4">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-[#E5DEDE] relative">
                                <div className="flex w-full h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${modalImageIndex * 100}%)` }}>
                                    {SelectedProduct.images.map((img, idx) => (
                                        <div key={idx} className="relative w-full h-full shrink-0">
                                            <Image src={img} alt={`${SelectedProduct.name} - ${idx + 1}`} fill className="object-contain drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {SelectedProduct.images.length > 1 && (
                                <>
                                    <button onClick={() => setModalImageIndex((p) => (p - 1 + SelectedProduct.images.length) % SelectedProduct.images.length)}
                                        className="absolute left-7 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg z-30 transition cursor-pointer text-gray-800 active:scale-90 border border-gray-200"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button onClick={() => setModalImageIndex((p) => (p + 1) % SelectedProduct.images.length)}
                                        className="absolute right-7 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg z-30 transition cursor-pointer text-gray-800 active:scale-90 border border-gray-200"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                        {SelectedProduct.images.map((_, idx) => (
                                            <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === modalImageIndex ? 'bg-white' : 'bg-white/50'}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-5 md:space-y-6 bg-[#EFE8E8] rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
                            <div>
                                <span className="text-xs font-bold uppercase text-green-800 tracking-widest bg-green-100 px-3 py-1 rounded-full">{SelectedProduct.category}</span>
                                <h2 className="text-2xl md:text-4xl font-sansita text-[#171717] mt-3 mb-2"> {SelectedProduct.name} </h2>
                                <div className="w-12 h-1 bg-green-800 rounded-full mb-3"></div>
                            </div>
                            <a href={getWhatsAppUrl(SelectedProduct.name)} target="_blank" rel="noopener noreferrer" onClick={handleConversionTrack} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition shadow-lg active:scale-95 w-full text-base">
                                <WhatsAppIcon/>
                                Order via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

// PRODUCT CARD
function ProductCard({ product, onClick } : { product: Product, onClick: () => void }) {
    return (
        <div className="group flex flex-col items-center space-y-3 h-full transition-all duration-300">
            <div
                onClick={onClick}
                className="relative w-full aspect-[4/3] cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onClick()}
                aria-label={`View details for ${product.name}`}
            >
                <div className="relative w-full h-full shrink-0">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 20vw"
                    />
                </div>
            </div>

            <div className="w-full text-center space-y-1 flex flex-col justify-between grow px-1">
                <div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-green-800/80 bg-green-800/10 px-2 py-0.5 rounded-md">{product.category}</span>
                    <h3 onClick={onClick} className="text-sm md:text-base font-sansita text-[#171717] group-hover:text-green-800 transition-colors cursor-pointer line-clamp-1 mt-1.5">{product.name}</h3>
                </div>
                <div onClick={onClick} className="inline-block text-xs md:text-sm text-green-800 font-extrabold cursor-pointer hover:underline tracking-wide pt-0.5">Lihat Detail</div>
            </div>
        </div>
    );
}