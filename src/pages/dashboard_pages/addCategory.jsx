import React, { useState } from "react";

const AddCategory = () => {

    const [previewUrl, setPreviewUrl] = useState(null);

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
            setPreviewUrl(null); // Clear the preview if no file is selected
        }
    };

    return (
        <div className='p-4 space-y-4'>
            <h1 className="text-2xl font-bold text-white">Add Category</h1>

            <div className="bg-gray-600 p-4 rounded-lg">
                <form>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="categoryName" className="text-white">Nama Kategori</label>
                            <input
                                type="text"
                                id="categoryName"
                                placeholder="Category Name"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="categoryDescription" className="text-white">Deskripsi</label>
                            <textarea id="categoryDescription" placeholder="Category Description" className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg h-40"></textarea>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="categoryLogo" className="text-white">
                                Logo Kategori
                            </label>
                            <div className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg">
                                <input
                                    type="file"
                                    id="categoryLogo"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="categoryLogo"
                                    className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                >
                                    <span id="file-chosen">Choose File</span>
                                </label>
                            </div>
                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                            >
                                <svg
                                    class="w-4 h-4 text-gray-800 dark:text-white my-auto mr-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 12h14m-7 7V5"
                                    />
                                </svg>
                                Add Category
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddCategory;