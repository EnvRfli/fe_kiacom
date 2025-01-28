import React, { useState } from "react";
import ProductSelector from "../../components/productSelector";

const AddProduct = () => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [productName, setProductName] = useState("");
    const [productStock, setProductStock] = useState(0);
    const [productCategory, setProductCategory] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);

    const brandList = [
        { id: 1, name: "Nvidia" },
        { id: 2, name: "Samsung" },
        { id: 3, name: "WD Green" },
    ]

    const categoryList = [
        { id: 1, name: "GPU" },
        { id: 2, name: "SSD" },
        { id: 3, name: "HDD" },
    ]

    const handleProductChange = (event) => {
        setProductCategory(event.target.value);

    }

    const handleBrandChange = (event) => {
        setProductBrand(event.target.value);
    }

    const handleFileChange = (event) => {
        const fileInput = event.target;
        const fileChosen = document.getElementById("file-chosen");

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileChosen.textContent = file.name;

            // Create a URL for the selected file
            const fileUrl = URL.createObjectURL(file);
            setPreviewUrl(fileUrl);
        } else {
            fileChosen.textContent = "No file chosen";
            setPreviewUrl(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Log the form data (you can replace this with an API call)
        console.log({
            productName,
            productStock,
            productCategory,
            productBrand,
            productDescription,
            productPrice,
            isAvailable,
            previewUrl,
        });

        // Reset form fields after submission (optional)
        setProductName("");
        setProductStock(0);
        setProductCategory("");
        setProductBrand("");
        setProductDescription("");
        setProductPrice(0);
        setIsAvailable(true);
        setPreviewUrl(null);
        document.getElementById("file-chosen").textContent = "No file chosen";
    };

    return (
        <div className='p-4 space-y-4'>
            <h1 className="text-2xl font-bold text-white">Add Product</h1>

            <div className="bg-gray-600 p-4 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productName" className="text-white">Product Name</label>
                            <input
                                type="text"
                                id="productName"
                                placeholder="Product Name"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productStock" className="text-white">Stock</label>
                            <input
                                type="number"
                                id="productStock"
                                placeholder="Product Stock"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                                value={productStock}
                                onChange={(e) => setProductStock(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productCategory" className="text-white">Category</label>
                            <ProductSelector
                                products={categoryList}
                                selectedProduct={productCategory}
                                handleProductChange={handleProductChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productBrand" className="text-white">Brand</label>
                            <ProductSelector
                                products={brandList}
                                selectedProduct={productBrand}
                                handleProductChange={handleBrandChange}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productDescription" className="text-white">Description</label>
                            <textarea
                                id="productDescription"
                                placeholder="Product Description"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg h-40"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productPrice" className="text-white">Price</label>
                            <input
                                type="number"
                                id="productPrice"
                                placeholder="Product Price"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                                value={productPrice}
                                onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="isAvailable" className="text-white">Availability</label>
                            <select
                                id="isAvailable"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                                value={isAvailable}
                                onChange={(e) => setIsAvailable(e.target.value === "true")}
                            >
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="productImage" className="text-white">
                                Product Image
                            </label>
                            <div className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg">
                                <input
                                    type="file"
                                    id="productImage"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="productImage"
                                    className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Choose File
                                </label>
                                <span id="file-chosen" className="ml-2 text-gray-400">
                                    No file chosen
                                </span>
                            </div>
                        </div>
                        {previewUrl && (
                            <div className="mt-4">
                                <img src={previewUrl} alt="Preview" className="w-40 h-40 object-cover rounded-lg" />
                            </div>
                        )}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer hover:bg-blue-600 transition duration-200"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;