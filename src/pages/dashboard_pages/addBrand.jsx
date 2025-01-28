import React, { useState } from "react";

const AddBrand = () => {

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
            <h1 className="text-2xl font-bold text-white">Add Brand</h1>

            <div className="bg-gray-600 p-4 rounded-lg">
                <form>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="brandName" className="text-white">Nama Brand</label>
                            <input
                                type="text"
                                id="brandName"
                                placeholder="Brand Name"
                                className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="brandDescription" className="text-white">Deskripsi</label>
                            <textarea id="brandDescription" placeholder="Brand Description" className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg h-40"></textarea>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="brandLogo" className="text-white">
                                Logo Brand
                            </label>
                            <div className="px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-lg">
                                <input
                                    type="file"
                                    id="brandLogo"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="brandLogo"
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
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="max-w-full h-auto rounded-lg"
                                    style={{ maxHeight: "200px" }}
                                />
                            </div>
                        )}
                        <div className="flex items-center justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Brand</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default AddBrand;