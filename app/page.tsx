"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

type Product = {
    id: number;
    name: string;
    price: string;
    images: string[];
}

const PRODUCTS: Product[] = [
    { id: 1, name: "Bunga Salib", price: "Rp 500.000", images: ["/Salib.jpeg", "/Salib1.jpeg", "/Salib2.jpeg", "/Salib3.jpeg", "/Salib4.jpeg", "/Salib5.jpeg", "/Salib6.jpeg"]},
    { id: 2, name: "Papan Jakarta", price: "Rp 650.000", images: ["/PapanJakarta.jpeg"]},
    { id: 3, name: "Papan Jakarta Jumbo Mahkota 4", price: "Rp 1.500.000", images: ["/JakartaJumbo.jpeg"]},
    { id: 4, name: "Papan Bunga Jumbo", price: "Rp 300.000", images: ["/Jumbo.jpeg"]},
    { id: 5, name: "Papan Jakarta Mahkota Bunga Fresh", price: "Rp 900.000", images: ["/JakartaFresh.jpeg"]},
    { id: 6, name: "Papan Bunga Mahkota 1", price: "Rp 400.000", images: ["/Mahkota1.jpeg"]},
    { id: 7, name: "Papan Bunga Duka Cita 3 Mahkota", price: "Rp 600.000", images: ["/Mahkota3.jpeg"]},
    { id: 8, name: "Papan Bunga Duka Cita 4 Mahkota", price: "Rp 700.000", images: ["/Mahkota4.jpeg"]},
    { id: 9, name: "Papan Bunga Mahkota 4", price: "Rp 700.000", images: ["/Mahkota4B.jpeg"]},
    { id: 10, name: "Papan Printing", price: "Rp 1.500.000", images: ["/Printing.jpeg"]}
];

export default function Home() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [SelectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

return (
    <main className = "min-h-screen bg-[#EFE8E8] text-text-[#171717] font-sans selection:bg-green-200">
        <nav className = "fixed top-0 left-0 right-0 z-50 bg-[#EFE8E8]/80 backdrop-blur-md border-b border-gray-300/50">
            <div className = "max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
                <button
                    onClick = {() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className = "text-2xl md:text-3xl font-sansita font-bold text-[#171717] hover:opacity-80 transition-opacity">
                        Ramot Florist
                </button>
                <div className = "hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                    <button onClick = {() => window.scrollTo({top: 0, behavior: 'smooth'})} className = "hover:text-[#171717] hover:cursor-pointer transition-colors"> Home </button>
                    <button onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Katalog </button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Kontak </button>
                    <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#171717] hover:cursor-pointer transition-colors"> Lokasi </button>
                </div>
                <a
                    href = "https://wa.me/6282191295376"
                    target = "_blank"
                    className = "px-5 py-2.5 bg-[#171717] text-white text-sm font-bold rounded-full hover:bg-gray-800 transition shadow-lg active:scale-95">
                        Order Now
                </a>
            </div>
        </nav>
        <section id = "home" className = "relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
            <div className = "max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div className = "order-2 md:order-1 space-y-8 z-10 text-center md:text-left">
                    <h1 className = "text-6xl md:text-8xl font-sansita leading-[1.1] drop-shadow-sm"
                        >
                        Ramot Florist
                    </h1>
                    <p className = "text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                        Ramot florist merupakan toko papan bunga yang terletak di Medan dan berdiri pada tahun 2020. 
                    </p>
                    <button
                        onClick = {() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        className = "group relative inline-flex items-center justify-center px-8 py-3 bg-[#171717] text-[#EFE8E8] rounded-full font-semibold overflow-hidden transition-transform active:scale-95 shadow-xl  hover:cursor-pointer">   
                    <span className = "relative z-10 group-hover:text-white transition-colors"> Explore Collection </span>
                    <div className = "absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"> </div>
                    </button>
                </div>
                <div className = "order-1 md:order-2 flex justify-center relative w-full">
                    <div className = "relative w-full max-w-lg md:max-w-2xl aspect-1260/917 rounded-t-[100px] border-4 border-white shadow-2xl overflow-hidden bg-gray-200">
                        <div className = "absolute inset-0 flex items-center justify-center text-gray-500"> Intro Image </div>
                        <Image 
                            src = "/Hero.jpeg" 
                            alt = "Ramot Florist Storefront" 
                            fill 
                            className = "object-cover" 
                            priority 
                            sizes = "(max-width: 768px) 100vw, 50vw" 
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id = "catalog" className = "relative py-24 overflow-hidden">
            <div className = "absolute inset-0 bg-[#626262] opacity-10 pointer-events-none"></div>
            <div className = "relative z-10 max-w-6xl mx-auto px-6">
                <SectionTitle title = "Catalogue" subtitle = "Find the Perfect Board"/>
                <div className = "mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {PRODUCTS.slice(0, visibleCount).map((product) => (
                        <ProductCard
                            key = {product.id}
                            product = {product}
                            onClick = {() => {
                                setSelectedProduct(product);
                                setModalImageIndex(0); 
                            }}
                        />
                    ))}
                </div>

                {visibleCount < PRODUCTS.length && (
                    <div className = "text-center mt-24">
                        <button
                            onClick = {() => setVisibleCount((p) => p + 4)}
                            className = "px-10 py-4 border-2 border-[#171717] text-[#171717] rounded-full font-bold uppercase tracking-widest hover:bg-[#171717] hover:text-white transition-all active:scale-95"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>  
        </section>

        <section id = "contact" className = "py-32 px-6 bg-[#EFE8E8] text-center">
            <div className = "max-w-3xl mx-auto space-y-8">
                <SectionTitle title = "Custom Made" subtitle = "Tailored to your needs" />
                <p className = "text-lg md:text-xl text-gray-600 leading-relaxed">
                    Have a specific vision in mind? We accept custom-made floral arrangements and flower boards to suit any occasion perfectly. Reach out to us directly for better pricing and to discuss your unique details!
                </p>
                <a
                    href = "https://wa.me/6282191295376"
                    target = "_blank"
                    className = "mt-8 inline-flex items-center gap-3 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-900/50 active:scale-95"
                >
                    <svg className = "w-6 h-6" fill = "currentColor" viewBox = "0 0 24 24"> <path d = "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span> Discuss Custom Order </span>
                </a>
            </div>
        </section>

        <footer id = "location" className="relative text-[#171717] py-16 px-6 overflow-hidden bg-[#E5DEDE]">
            <div className = "relative z-10 max-w-6xl mx-auto">
                <div className = "grid md:grid-cols-2 gap-12 items-center">
                    <div className = "w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 bg-white">
                        <iframe 
                            src = "https://www.google.com/maps/embed?pb=!3m2!1sen!2sid!4v1772018909429!5m2!1sen!2sid!6m8!1m7!1sH_CCbMaVOt_IOCZjM7m0bA!2m2!1d3.529904168466145!2d98.61997906953339!3f272.7972766462385!4f-10.416460174378727!5f0.7820865974627469https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1212.433024880907!2d98.6197138226707!3d3.530545860542313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f2315f824a3%3A0xc7deb6cd04ee2b55!2sTukangPerabotMedan.com!5e0!3m2!1sen!2sid!4v1772019128104!5m2!1sen!2sid" 
                            width = "100%" 
                            height = "100%" 
                            style = {{ border: 0 }} 
                            allowFullScreen = {true} 
                            loading = "lazy" 
                            referrerPolicy = "no-referrer-when-downgrade"
                            title = "Ramot Florist Location"
                        ></iframe>
                    </div>    
                    <div className = "flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <h2 className = "text-4xl md:text-5xl font-sansita"> Ramot Florist </h2>
                        <p className = "text-gray-600 leading-relaxed max-w-md pb-4">
                            Located in the heart of the city. We provide the highest quality floral arrangements for your special moments. 
                        </p>

                        <div className = "space-y-4 text-gray-700 font-medium w-full max-w-sm">
                            <div className = "flex items-center gap-4 justify-center md:justify-start">
                                <div className = "p-2 bg-white rounded-full shadow-sm text-green-700">
                                    <svg className = "w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <span className = "text-left">Jl. Setia Budi, Simpang Selayang, Kec. Medan Tuntungan, Kota Medan, Sumatera Utara 20135</span>
                            </div>
                            
                            <div className = "flex items-center gap-4 justify-center md:justify-start">
                                <div className = "p-2 bg-white rounded-full shadow-sm text-green-700">
                                    <svg className = "w-5 h-5" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" strokeWidth = "2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <span className = "text-left"> hello@ramotflorist.com </span>
                            </div>

                            <div className = "flex items-center gap-4 justify-center md:justify-start">
                                <div className = "p-2 bg-white rounded-full shadow-sm text-green-700">
                                    <svg className = "w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                </div>
                                <span className = "text-left"> +62 821-9129-5376 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "mt-16 pt-8 border-t border-gray-300 text-center">
                    <p className = "text-xs text-gray-500"> © {new Date().getFullYear()} Ramot Florist. All rights reserved. </p>
                </div>
            </div>
        </footer>

        {SelectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)}/>  
                    <div className="relative bg-[#EFE8E8] w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-200 max-h-[95vh] overflow-y-auto">            
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full z-20 transition shadow-sm cursor-pointer text-[#171717]"> ✕ </button>
                        <div className="w-full md:w-1/2 relative bg-white overflow-hidden group min-h-87.5 md:min-h-125">
                            <div 
                                className="flex w-full h-full absolute inset-0 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${modalImageIndex * 100}%)` }}
                            >
                                {SelectedProduct.images.map((img, idx) => (
                                    <div key={idx} className="relative w-full h-full shrink-0">
                                        <Image 
                                            src={img} 
                                            alt={`${SelectedProduct.name} - Image ${idx + 1}`} 
                                            fill 
                                            className="object-contain p-8 drop-shadow-xl"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                ))}
                            </div>
                            {SelectedProduct.images.length > 1 && (
                                <>
                                    <button 
                                        onClick={() => setModalImageIndex((p) => (p - 1 + SelectedProduct.images.length) % SelectedProduct.images.length)} 
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition cursor-pointer text-gray-800"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button 
                                        onClick={() => setModalImageIndex((p) => (p + 1) % SelectedProduct.images.length)} 
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 transition cursor-pointer text-gray-800"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                        {SelectedProduct.images.map((_, idx) => (
                                            <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === modalImageIndex ? 'bg-green-700' : 'bg-gray-300'}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div>
                                <h2 className="text-4xl font-sansita text-[#171717] mb-2">{SelectedProduct.name}</h2>
                                <div className="w-12 h-1 bg-green-800 rounded-full mb-4"></div>
                                <p className="text-3xl font-bold text-green-800">{SelectedProduct.price}</p>
                            </div>
                            <a href="https://wa.me/6282191295376" target="_blank" className="inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition shadow-lg active:scale-95 w-full md:w-auto">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                Order via WhatsApp
                            </a>
                        </div>
                    </div>
            </div>
        )}  
    </main>
);
}

function SectionTitle({ title, subtitle } : { title: string, subtitle: string }) {
    return (
        <div className = "text-center space-y-2">
            <h2 className = "text-4xl md:text-5xl font-sansita text-[#171717]"
                style = {{ WebkitTextStroke: "1px #FDFDFD" }}>
                {title}
            </h2>
            <div className = "h-1 w-20 bg-[#171717] mx-auto rounded-full"></div>
            <p className = "text-gray-500 font-medium uppercase tracking-wider text-sm"> {subtitle} </p>
        </div>
    );
}

function ProductCard({ product, onClick } : { product: Product, onClick: () => void }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className = "group flex flex-col items-center space-y-5 h-full">
            <div 
                onClick = {onClick}
                className = "relative w-full aspect-3/2 cursor-pointer rounded-xl overflow-hidden"
            >
                <div 
                    className = "flex w-full h-full transition-transform duration-500 ease-in-out"
                    style = {{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {product.images.map((img, idx) => (
                        <div key = {idx} className = "relative w-full h-full shrink-0">
                            <Image 
                                src = {img}
                                alt = {`${product.name} - Image ${idx + 1}`}
                                fill
                                className = "object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" 
                                sizes = "(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>

                {product.images.length > 1 && (
                    <>
                        <button 
                            onClick = {prevImage}
                            className = "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-gray-800 shadow-md z-10 cursor-pointer"
                        >
                            <svg className = "w-4 h-4" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth = {2} d= "M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button 
                            onClick = {nextImage}
                            className = "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-gray-800 shadow-md z-10 cursor-pointer"
                        >
                            <svg className = "w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                        
                        <div className = "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            {product.images.map((_, idx) => (
                                <div key = {idx} className = {`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-green-700' : 'bg-gray-400/80'}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className = "w-full text-center space-y-2 px-4 grow">
                <h3 
                    onClick = {onClick}
                    className = "text-2xl md:text-3xl font-sansita text-[#171717] group-hover:text-green-800 transition-colors cursor-pointer line-clamp-2"
                >
                    {product.name}
                </h3>
                <p className = "text-xl font-bold text-gray-800"> {product.price} </p>
                <div onClick = {onClick} className = "inline-block text-green-800 font-semibold pt-1 cursor-pointer hover:underline"> 
                    View Details 
                </div>
            </div>
        </div>
    );
}