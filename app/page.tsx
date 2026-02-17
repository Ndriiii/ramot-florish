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

        <section id = "catalog" className = "max-w-6xl mx-auto px-6 py-24">
            <SectionTitle title = "Catalogue" subtitle = "Find the Perfect Board"/>
            <div className = "mt-20 space-y-24 md:pace-y-32">
                {PRODUCTS.slice(0, visibleCount).map((product, index) => (
                    <ProductCard
                        key = {product.id}
                        product = {product}
                        isReverse = {(index + 1) % 2 === 0}
                        onClick= {() => setSelectedProduct(product)}
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
            
        </section>

        <footer className = "bg-[#171717]text-[#EFE8E8] py-16 px-6 mt-12">
            <div className = "max-w-5xl mx-auto text-center space-y-8">
                <h2  className = "text-4xl md:text-5xl font-sansita"> Ramot Florist </h2>
                <p className = "max-w-lg mx-auto text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla enim temporibus, sapiente illum quia voluptatibus aspernatur esse similique magnam et, dicta non velit, expedita recusandae. Cumque harum ullam ipsa corporis.  
                </p>
                <a
                    href = "https://wa.me/6282191295376"
                    target = "_blank"
                    className = "inline-flex items-center gap-3 px-8 py-4 bg-green-700 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-green-900/50">
                    <span> Chat on WhatsApp </span>
                    <svg className = "w-5 h-5" fill = "currentColor" viewBox = "0 0 24 24"> <path d = "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
                <p className = "text-xs text-gray-500 pt-8"> © {new Date().getFullYear()} Ramot Florist. All rights reserved. </p>
            </div>
        </footer>

        {SelectedProduct && (
            <div className = "fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className = "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick = {() => setSelectedProduct(null)}/>
                <div className = "relative bg-[#EFE8E8] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-150 animate-in fade-in zoom-in duration-200">
                    <button onClick = {() => setSelectedProduct(null)} className = "absolute top-3 right-3 p-2 bg-black/10 rounded-full hover:bg-black/20 z-10 transition"> ✕ </button>
                    <div className = "w-full md:w-1/2 relative min-h-62.5 bg-gray-200">
                        <div className = "absolute inset-0 flex items-center justify-center text-gray-500"> Image of {SelectedProduct.name} </div>
                        <Image src = {SelectedProduct.image} alt = {SelectedProduct.name} fill className = "object-cover"/>
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
            </h2>
            <div className = "h-1 w-20 bg-[#171717] mx-auto rounded-full"></div>
            <p className = "text-gray-500 font-medium uppercase tracking-wider text-sm"> {subtitle} </p>
        </div>
    );
}

function ProductCard({ product, isReverse, onClick } : { product: Product, isReverse: boolean, onClick: () => void }) {
    return (
        <div onClick = {onClick} className = {`group flex flex-col md:flex-row items-center gap-8 md:gap-20 cursor-pointer ${isReverse ? "md:flex-row-reverse" : ""}`}>
            <div className = "w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg bg-white relative aspect-4/3 md:aspect-auto md:h-100">\
                <div className = "absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"> Product Image </div>
                <Image 
                    src = {product.image}
                    alt = {product.name}
                    fill
                    className = "object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes = "(max-width: 768px) 100vw, 50vw"/>
            </div>
            <div className = "w-full md:w-1/2 text-center md:text-left space-y-4">
                <h3 className = "text-3xl font-sansita text-[#171717] group-hover:text-green-800 transition-colors">
                    {product.name}
                </h3>
                <p className = "text-2xl font-bold text-gray-800"> {product.price} </p>
                <p className = "text-gray-600 leading-relaxed text-lg line-clamp-3 md:line-clamp-none"> {product.desc} </p>
                <div className = "inline-block border-b border-green-800 text-green-800 font-semibold pt-2"> View Details </div>
            </div>
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