import React, { useState } from "react";

const Product = () => {
    const [schema, setSchema] = useState("table");

    return (
        <div className='p-4 space-y-4'>
            <div className="flex items-center justify-between space-x-4">
                <h1 className="text-2xl font-bold text-white">Product</h1>
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <svg class="w-4 h-4 text-gray-800 dark:text-white my-auto mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        Add Product</button>
                </div>
            </div>
            <div className="flex-auto flex border border-gray-300 rounded-lg my-auto mb-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white my-auto ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search Product"
                    className="flex px-4 py-2 text-white w-full focus:outline-none rounded-r-lg"
                />
            </div>

            <div className="flex items-center align-middle justify-end">
                <div
                    className={`flex items-center space-x-4 text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-500 group rounded-lg transition duration-75 cursor-pointer mr-2 ${schema === 'table' ? 'bg-gray-500' : ''}`}
                    onClick={() => setSchema('table')}
                >

                    <svg class="w-9 h-9 text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                    </svg>
                </div>
                <div className={`flex items-center space-x-4 text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-500 group rounded-lg transition duration-75 cursor-pointer p-1 ${schema === 'grid' ? 'bg-gray-500' : ''}`}
                    onClick={() => setSchema('grid')}>
                    <svg class="w-7 h-7 text-gray-800 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>


            {
                schema === 'table' ? (
                    < table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left text-white">No</th>
                                <th className="text-left text-white">Product Name</th>
                                <th className="text-left text-white">Brand</th>
                                <th className="text-left text-white">Category</th>
                                <th className="text-left text-white">Price</th>
                                <th className="text-left text-white">Stock</th>
                                <th className="text-left text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 10 }).map((_, index) => (
                                    <tr key={index} className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-800 hover:bg-gray-900' : 'hover:bg-gray-800'} cursor-pointer transition duration-75`}>
                                        <td className="text-white my-2 pl-2">{index + 1}</td>
                                        <td className="text-white my-2 pl-2">Asus ROG</td>
                                        <td className="text-white my-2 pl-2">Asus</td>
                                        <td className="text-white my-2 pl-2">Laptop</td>
                                        <td className="text-white my-2 pl-2">Rp. 10.000.000</td>
                                        <td className="text-white my-2 pl-2">10</td>
                                        <td className="flex items-center space-x-2">
                                            <button className="bg-blue-500 text-white my-2 pl-2 px-2 py-1 rounded-md flex items-center space-x-2">

                                                Edit</button>
                                            <button className="bg-red-500 text-white my-2 pl-2 px-2 py-1 rounded-md flex items-center space-x-2">

                                                Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="border border-gray-300 rounded-lg bg-gray-800 cursor-pointer hover:bg-gray-700 transition duration-75">
                                    <div className="flex items-center justify-between p-2">
                                        <h1 className="text-white line-clamp-2 mr-2">
                                            Asus ROG asdasdasd kajsdh </h1>
                                        <div className="flex flex-col items-end space-y-2">
                                            <button className="bg-red-500 text-white px-2 py-1 rounded-lg flex items-center space-x-2">
                                                Delete</button>
                                            <button className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center space-x-2">
                                                Edit</button>
                                        </div>

                                    </div>
                                    <div className="flex items-center justify-between p-2">
                                        <div className="space-y-2 mr-2">
                                            <p className="text-white">Asus</p>
                                            <p className="text-white">Laptop</p>
                                            <p className="text-white">Rp. 10.000.000</p>
                                            <p className="text-white">Stock: 10</p>
                                        </div>
                                        <div className="flex items-center justify-center w-32 h-32 rounded-lg">
                                            <img src="https://dlcdnwebimgs.asus.com/gain/61C10B93-CB5D-49A6-A4CB-24A77EB00DAE" alt="Product" className="w-20 h-20 rounded-lg" />
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div >

    )
}

export default Product;