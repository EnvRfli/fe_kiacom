import React, { useState } from "react";

const Brand = () => {

    return (
        <div className='p-4 space-y-4'>
            <div className="flex items-center justify-between space-x-4">
                <h1 className="text-2xl font-bold text-white">Brand</h1>
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <svg class="w-4 h-4 text-gray-800 dark:text-white my-auto mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        Add Brand</button>
                </div>
            </div>
            <div className="flex-auto flex border border-gray-300 rounded-lg my-auto mb-4">
                <svg class="w-6 h-6 text-gray-800 dark:text-white my-auto ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search Product"
                    className="flex px-4 py-2 text-white w-full focus:outline-none rounded-r-lg"
                />
            </div>
            <div className="flex grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg p-2 h-34 flex items-center justify-center overflow-hidden group"
                        >
                            <img
                                src="../../../public/brandLogo/nvidia-logo.png"
                                className="w-full h-full object-contain"
                                alt="Brand Logo"
                            />

                            <div
                                className="absolute inset-0 bg-opacity-0 group-hover:bg-black group-hover:opacity-50 transition-opacity duration-200"
                            ></div>

                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                                <div className="text-white text-center mb-2">
                                    <h1 className="text-lg font-semibold">Nvidia</h1>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-blue-600 transition duration-200">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-red-600 transition duration-200">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brand;