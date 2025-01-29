import React, { useState, useEffect } from "react";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [1, 2, 3];
    const imglink = [
        "https://megacom.id/wp-content/uploads/2022/11/Banner-1-Asus-kanan-kiri-kecil-kecil-kecil.jpg",
        "https://id.store.asus.com/media/wysiwyg/ProArt-Collection---Column-Banner-2524x1160-px.jpg",
        "https://megacom.id/wp-content/uploads/2022/11/Banner-1-Asus-kanan-kiri-kecil-kecil-kecil.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="bg-yellow-50 min-h-screen">
            <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:[h-65vh] overflow-hidden">
                <div
                    className="flex transition-transform duration-500 h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 relative h-full"
                        >
                            <img
                                src={imglink[index]}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt={`Slide ${slide}`}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-800/50 text-yellow-50 p-2 rounded-full hover:bg-yellow-800 transition-colors"
                >
                    &larr;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-800/50 text-yellow-50 p-2 rounded-full hover:bg-yellow-800 transition-colors"
                >
                    &rarr;
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                                ? 'bg-yellow-800'
                                : 'bg-yellow-800/50 hover:bg-yellow-800'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-yellow-900">
                <div className="h-34 bg-yellow-50 rounded-bl-4xl flex justify-center items-start p-4 -mt-20">
                    <h1 className="text-yellow-900 text-2xl font-bold text-center mt-19">
                        Welcome to Kia Computer</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Section: New Products */}
                <div className="bg-yellow-900 rounded-tr-4xl rounded-br-4xl p-4">
                    <h1 className="text-yellow-50 text-2xl font-bold text-center mb-2">Produk Terbaru</h1>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4 mx-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="bg-yellow-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg relative"
                            >
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src="https://www.palit.com/product/vga/picture/p05345/p05345_propng_724676bd1c50f0e8.png"
                                        alt="Product"
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-yellow-900 font-semibold mt-2">Product Name</h2>
                                <p className="text-yellow-900">Rp. 1.000.000</p>
                                <div className="absolute inset-0 bg-yellow-800/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                                    <div className="flex justify-center items-center h-full">
                                        <button className="bg-yellow-50 text-yellow-900 px-4 py-1 rounded-lg hover:bg-yellow-200 transition-colors">
                                            Detail Produk
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Hero Section (Replacing Best-Selling Products) */}
                <div className="bg-yellow-50 rounded-tl-4xl p-4 flex flex-col justify-center items-center">
                    <h1 className="text-yellow-900 text-3xl font-bold text-center mb-4">Promo Potongan Harga!</h1>
                    <p className="text-yellow-900 text-lg text-center mb-6">
                        Dapatkan sampai dengan <span className="font-bold">50%</span> potongan harga pada produk pilihan kami saat ini!
                    </p>
                    <div className="relative">
                        {/* Discount Ribbon */}
                        <div className="absolute -top-2 -right-2 bg-red-600 text-yellow-50 px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                            -50% off
                        </div>
                        <img
                            src="https://www.palit.com/product/vga/picture/p05345/p05345_propng_724676bd1c50f0e8.png"
                            alt="Featured Product"
                            className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6"
                        />
                    </div>
                    <h2 className="text-yellow-900 text-2xl font-bold mb-2">Nvidia Gefore RTX 5090</h2>
                    <div className="flex items-center gap-2 mb-6">
                        <p className="text-yellow-900 line-through">Rp. 2.000.000</p>
                        <p className="text-red-600 font-bold text-xl">Rp. 1.000.000</p>
                    </div>
                    <button className="bg-yellow-900 text-yellow-50 px-6 py-2 rounded-lg hover:bg-yellow-800 transition-colors">
                        Lihat produk lainnya
                    </button>
                </div>
            </div>
            <div className="bg-yellow-900 mx-4 mt-10 rounded-xl shadow-md p-4 justify-center">
                <h1 className="text-yellow-50 text-2xl font-bold text-center">Filter Produk</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-yellow-50 text-center font-semibold">
                            Filter Berdasarkan Kategori
                        </h1>
                        <div className="overflow-y-auto">
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 20 }).map((_, index) => (
                                    index < 19 ? (
                                        <label
                                            key={index}
                                            className="border border-yellow-50 bg-yellow-900 hover:bg-yellow-700 transition px-3 py-2 rounded-md cursor-pointer text-yellow-50"
                                        >
                                            <input type="checkbox" className="hidden" />
                                            Kategori {index + 1}
                                        </label>
                                    ) : (
                                        <label
                                            key={index}
                                            className="border border-yellow-50 bg-yellow-900 hover:bg-yellow-700 transition px-3 py-2 rounded-md cursor-pointer text-yellow-50"
                                        >
                                            <input type="checkbox" className="hidden" />
                                            Other Categories
                                        </label>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h1 className="text-yellow-50 text-center font-semibold">
                            Filter Berdasarkan Brand
                        </h1>
                        <div className="overflow-y-auto">
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 20 }).map((_, index) => (
                                    index < 19 ? (
                                        <label
                                            key={index}
                                            className="border border-yellow-50 bg-yellow-900 hover:bg-yellow-700 transition px-3 py-2 rounded-md cursor-pointer text-yellow-50"
                                        >
                                            <input type="checkbox" className="hidden" />
                                            Brand {index + 1}
                                        </label>
                                    ) : (
                                        <label
                                            key={index}
                                            className="border border-yellow-50 bg-yellow-900 hover:bg-yellow-700 transition px-3 py-2 rounded-md cursor-pointer text-yellow-50"
                                        >
                                            <input type="checkbox" className="hidden" />
                                            Other Brand
                                        </label>
                                    )

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;
