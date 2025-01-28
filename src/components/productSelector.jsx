import React from "react";
import Select from "react-select";

const ProductSelector = ({ products, selectedProduct, handleProductChange }) => {
    // Transform products into the format required by react-select
    const options = products.map((product) => ({
        value: product.id,
        label: `${product.name}`,
    }));

    // Handle change event
    const handleChange = (selectedOption) => {
        handleProductChange({
            target: {
                value: selectedOption ? selectedOption.value : "",
            },
        });
    };

    // Set the default value based on the selectedProduct
    const defaultValue = selectedProduct
        ? options.find((option) => option.value === selectedProduct.id)
        : null;

    // Custom styles for react-select
    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#4a5568", // bg-gray-700
            borderColor: "#ffffff", // white border
            color: "#ffffff", // white text
            borderRadius: "0.5rem", // rounded-lg
            padding: "0.14rem", // px-4 py-2
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#4a5568", // bg-gray-700
            borderColor: "#ffffff", // white border
            borderRadius: "0.5rem", // rounded-lg
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? "#4a5568" // bg-gray-700 for selected
                : state.isFocused
                    ? "#718096" // bg-gray-600 for focused
                    : "#4a5568", // bg-gray-700 for default
            color: "#ffffff", // white text
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#ffffff", // white text
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#a0aec0", // text-gray-400
        }),
        input: (provided) => ({
            ...provided,
            color: "#ffffff", // white text
        }),
    };

    return (
        <Select
            id="product"
            value={defaultValue}
            onChange={handleChange}
            options={options}
            placeholder="Pilih Produk"
            isSearchable
            styles={customStyles}
        />
    );
};

export default ProductSelector;