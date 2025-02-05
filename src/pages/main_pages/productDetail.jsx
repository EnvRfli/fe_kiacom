import React, { useState } from 'react';

const ProductDetail = () => {
    const [discount, setDiscount] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [imageDisplayed, setImageDisplayed] = useState(0);

    const description = `Zotac Gaming GeForce RTX 3090 Trinity adalah kartu grafis yang didesain untuk para gamer yang menginginkan performa tinggi. Kartu grafis ini memiliki 24GB GDDR6X VRAM yang mampu memberikan performa yang sangat baik untuk berbagai jenis game. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi IceStorm 2.0 yang membuat kartu grafis ini tetap dingin meskipun digunakan dalam waktu yang lama. Kartu grafis ini juga dilengkapi dengan teknologi Spectra 2.0 yang memungkinkan pengguna untuk mengatur pencahayaan RGB sesuai dengan keinginan mereka. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi Active Fan Control yang membuat kipas pada kartu grafis ini berhenti berputar ketika suhu kartu grafis ini rendah. Zotac Gaming GeForce RTX 3090 Trinity adalah kartu grafis yang didesain untuk para gamer yang menginginkan performa tinggi. Kartu grafis ini memiliki 24GB GDDR6X VRAM yang mampu memberikan performa yang sangat baik untuk berbagai jenis game. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi IceStorm 2.0 yang membuat kartu grafis ini tetap dingin meskipun digunakan dalam waktu yang lama. Kartu grafis ini juga dilengkapi dengan teknologi Spectra 2.0 yang memungkinkan pengguna untuk mengatur pencahayaan RGB sesuai dengan keinginan mereka. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi Active Fan Control yang membuat kipas pada kartu grafis ini berhenti berputar ketika suhu kartu grafis ini rendah. Zotac Gaming GeForce RTX 3090 Trinity adalah kartu grafis yang didesain untuk para gamer yang menginginkan performa tinggi. Kartu grafis ini memiliki 24GB GDDR6X VRAM yang mampu memberikan performa yang sangat baik untuk berbagai jenis game. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi IceStorm 2.0 yang membuat kartu grafis ini tetap dingin meskipun digunakan dalam waktu yang lama. Kartu grafis ini juga dilengkapi dengan teknologi Spectra 2.0 yang memungkinkan pengguna untuk mengatur pencahayaan RGB sesuai dengan keinginan mereka. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi Active Fan Control yang membuat kipas pada kartu grafis ini berhenti berputar ketika suhu kartu grafis ini rendah. Zotac Gaming GeForce RTX 3090 Trinity adalah kartu grafis yang didesain untuk para gamer yang menginginkan performa tinggi. Kartu grafis ini memiliki 24GB GDDR6X VRAM yang mampu memberikan performa yang sangat baik untuk berbagai jenis game. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi IceStorm 2.0 yang membuat kartu grafis ini tetap dingin meskipun digunakan dalam waktu yang lama. Kartu grafis ini juga dilengkapi dengan teknologi Spectra 2.0 yang memungkinkan pengguna untuk mengatur pencahayaan RGB sesuai dengan keinginan mereka. Zotac Gaming GeForce RTX 3090 Trinity juga dilengkapi dengan teknologi Active Fan Control yang membuat kipas pada kartu grafis ini berhenti berputar ketika suhu kartu grafis ini rendah.`;
    const images = [
        'https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50900b-10p-image01.jpg?itok=JZKplkzM',
        'https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50900b-10p-image05.jpg?itok=XwOK5f0f',
        'https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50900b-10p-image02.jpg?itok=e4Ae-4y4',
    ]

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-5/6 min-h-screen bg-yellow-50 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                {/* Image Container */}
                <div className='flex flex-col items-center p-2 rounded-lg'>
                    {/* Main Image */}
                    <div className='w-full aspect-square overflow-hidden rounded-lg p-2 border border-gray-500 mb-2'>
                        <img
                            src={images[imageDisplayed]}
                            alt=""
                            className='w-full h-full object-cover rounded-lg'
                        />
                    </div>
                    {/* Thumbnails */}
                    <div className='w-full h-[17vh] flex p-2 justify-center items-center mt-2'>
                        {images.map((item, index) => (
                            <div
                                className={`w-[15vh] aspect-square overflow-hidden mr-2 p-1 border-gray-500 rounded-sm cursor-pointer transition-all duration-300 ${imageDisplayed === index
                                    ? 'border-yellow-500 border-2'
                                    : 'border-gray-500 border'
                                    }`}
                                key={index}
                                onClick={() => setImageDisplayed(index)}
                            >
                                <img
                                    src={item}
                                    alt=""
                                    className="w-full h-full object-cover rounded-sm"
                                />
                                <div className='inset-0 flex justify-center items-center bg-yellow-500/50 opacity-0 rounded-sm hover:bg-yellow-50/70 hover:opacity-50 cursor-pointer transition-all duration-300'></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className='p-2'>
                    <h1 className='text-2xl font-bold text-yellow-900 mb-1 line-clamp-2'>
                        Zotac Gaming GeForce RTX 3090 Trinity
                    </h1>
                    <p className='text-md text-yellow-700 mb-2'>
                        Terjual : <span className='text-yellow-900 font-bold'> 10</span>
                    </p>
                    <p className='text-md text-yellow-700 mb-2'>
                        Stok : <span className='text-yellow-900 font-bold'> 5</span>
                    </p>
                    <h1 className='text-3xl font-bold text-yellow-900 mb-4'>
                        Rp 30.000.000
                    </h1>
                    <div className='border-t border-b border-gray-500 px-2 py-1 mb-2'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm text-yellow-900 font-bold'>Detail</p>
                        </div>
                    </div>
                    <div className='px-2'>
                        <p className='text-sm text-yellow-700 mb-1'>
                            Kondisi : <span className='text-yellow-900 font-bold'> Baru</span>
                        </p>
                        <p className='text-sm text-yellow-700 mb-1'>
                            Berat : <span className='text-yellow-900 font-bold'> 1 Kg</span>
                        </p>
                        <p className='text-sm text-yellow-700 mb-1'>
                            Kategori : <span className='text-yellow-900 font-bold'> Elektronik</span>
                        </p>
                        <p className='text-sm text-yellow-700 mb-1'>
                            Brand : <span className='text-yellow-900 font-bold'> Zotac</span>
                        </p>
                    </div>
                    <div className='px-2'>
                        <p className='text-sm text-yellow-800 mb-1'>Deskripsi:</p>
                        <div
                            className={`text-sm text-yellow-700 mb-1 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-[200px]'}`}
                        >
                            {description}
                        </div>
                        {description.length > 500 && (
                            <button
                                onClick={toggleExpand}
                                className='text-sm text-yellow-900 font-bold underline cursor-pointer'
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </div>
                    <div className='flex justify-end pr-2'>
                        <a
                            href="https://example.com/contact-seller"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center px-2 mt-4 space-x-2 bg-green-800 py-2 rounded-md cursor-pointer hover:bg-green-700 transition-colors transform hover:scale-101 duration-300 ring-2 ring-green-500 ring-opacity-50 hover:ring-green-600 animate-glow'
                            aria-label="Tanya Penjual"
                        >
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-green-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                    clipRule="evenodd"
                                />
                                <path
                                    fill="currentColor"
                                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                                />
                            </svg>
                            <p className='text-sm text-white font-bold'>Tanya Penjual</p>
                        </a>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl font-bold text-yellow-900 p-4'>Produk Serupa</h1>
            <div className='p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                {
                    Array.from({ length: 20 }).map((_, index) => (
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
                    ))
                }
            </div>
        </div >
    );
};

export default ProductDetail;