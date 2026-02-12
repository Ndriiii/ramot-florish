"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

type Product = {
    id: number;
    name: string;
    price: string;
    desc: string;
    image: string;
}

const PRODUCTS: Product[] = [
    { id: 1, name: "Testing", price: "Rp 10.000", desc: "Gataula", image: "/p1.jpg"}
];

export default function Home() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [SelectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleCarousel = (direction: "next" | "prev") => {
        setCarouselIndex((prev) => {
            if (direction === "next") return (prev + 1) % PRODUCTS.length;
            return (prev - 1 + PRODUCTS.length) % PRODUCTS.length;
        });
    };

    const carouselItems = useMemo(() => {
        const prev = (carouselIndex - 1 + PRODUCTS.length) % PRODUCTS.length;
        const next = (carouselIndex + 1) % PRODUCTS.length;
        return [PRODUCTS[prev], PRODUCTS[carouselIndex], PRODUCTS[next]];
    }, [carouselIndex]);

return (
    <main className = "min-h-screen bg-[#EFE8E8] text-text-[#171717] font-sans selection:bg-green-200">
        <section className = "relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
            <div className = "max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div className = "order-2 md:order-1 space-y-8 z-10 text-center md:text-left">
                    <h1 className = "text-6xl md:text-8xl font-sansita leading-[1.1] drop-shadow-sm"
                        >
                            Ramot Florist
                    </h1>
                    <p className = "text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis, dolor optio consequuntur a veniam laborum sunt accusamus saepe facilis soluta ad autem voluptate quod, deleniti atque ipsa officiis iste.
                    </p>
                    <button
                        onClick = {() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                        className = "group relative inline-flex items-center justify-center px-8 py-3 bg-[#171717] text-[#EFE8E8] rounded-full font-semibold overflow-hidden transition-transform active:scale-95 shadow-xl">   
                    <span className = "relative z-10 group-hover:text-white transition-colors"> Explore Collection </span>
                    <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"> </div>
                    </button>
                </div>
                <div className = "order-1 md:order-2 flex justify-center relative">
                    <div className= "relative w-75 h-100 md:w-112.5 md:h-137.5 rounded-t-[100px] border-4 border-white shadow-2xl overflow-hidden bg-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">Intro Image</div>
                        {/* Uncomment below when you have the image file */}
                        {/* <Image src="/intro.jpg" alt="Ramot Florist Storefront" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" /> */}
                    </div>
                </div>
            </div>
        </section>

        <section className = "py-24 relative overflow-hidden">
            <div className = "absolute inset-0 bg-[#626262] opacity-10 pointer-events-none"></div>
            <div className = "relative max-w-7xl mx-auto px-4 text-center">
                <SectionTitle title = "Highlights" subtitle = "Our Customer Favorites"/>
                    <div className = "mt-12 flex items-center justify-center gap-2 md:gap-8">
                        <CarouselButton direction = "prev" onClick = {() => handleCarousel("prev")}/>
                        <div className = "flex items-center gap-4 md:gap-6 perspective-1000 h-125">
                            {carouselItems.map((item, idx) => {
                                const isCenter = idx === 1;
                                return (
                                    <div key = {`${item.id}-${idx}`}
                                        className = {`relative transition-all duration-500 ease-out rounded-xl overflow-hidden shadow-xl bg-white border border-white
                                            ${isCenter ? "w-65 h-90 md:w-87.5 md:h-112.5 opacity-100 scale-100 z-20" : "w-35 h-50 md:w-55 md:h-75 opacity-50 scale-90 grayscale z-10"
                                        }`}>
                                        {/* Replace placeholder with Image component */}
                                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">{item.name}</div>
                                        {/* <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" /> */}
                                        {isCenter && (
                                            <div className = "absolute bottom-0 inset-x-0 bg-black/60 p-4 text-white backdrop-blur-sm">
                                                <p className = "font-sansita text-xl"> {item.name} </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <CarouselButton direction = "next" onClick = {() => handleCarousel("next")}/>
                    </div>
            </div>
        </section>
    </main>
    );
}

function SectionTitle({ title, subtitle } : { title: string, subtitle: string }) {
    return (
        <div className = "text-center space-y-2">
            <h2 className = "text-4xl md:text-5xl font-sansita text-[#171717"
                style = {{ WebkitTextStroke: "1px #FDFDFD" }}>
            </h2>
            <div className = "h-1 w-20 bg-[#171717] mx-auto rounded-full"></div>
            <p className = "text-gray-500 font-medium uppercase tracking-wider text-sm"> {subtitle} </p>
        </div>
    );
}

function CarouselButton ({ direction, onClick } : { direction: "prev" | "next", onClick: () => void }) {
    return (
        <button onClick = {onClick} className = "p-3 md:p-4 bg-white rounded-full shadow-md hover:scale-110 active:scale-90 transition z-30 text-[#171717]">
            {direction === "prev" ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            )}
        </button>
    );
}