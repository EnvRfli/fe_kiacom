import React, { useState } from "react";

const AddTransaction = () => {
    const [transactionType, setTransactionType] = useState("income"); // "income" or "expense"
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 20 },
        { id: 3, name: "Keyboard", price: 50 },
    ]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const [tempPrice, setTempPrice] = useState(0);
    const [paymentType, setPaymentType] = useState("cash"); // "cash" or "credit"
    const [editingIndex, setEditingIndex] = useState(null); // Track which item is being edited

    // Handle product selection
    const handleProductChange = (e) => {
        const productId = parseInt(e.target.value);
        const product = products.find((p) => p.id === productId);
        setSelectedProduct(product);
        setTempPrice(product ? product.price : 0); // Set tempPrice to selected product's price
        setPrice(product ? product.price * quantity : 0);
    };

    // Handle quantity change
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        setPrice(tempPrice * newQuantity); // Calculate price based on tempPrice
    };

    // Handle tempPrice change
    const handleTempPriceChange = (e) => {
        const newTempPrice = parseFloat(e.target.value);
        setTempPrice(newTempPrice);
        setPrice(newTempPrice * quantity); // Recalculate price when tempPrice changes
    };

    // Add or update product in cart
    const addToCart = () => {
        if (selectedProduct && quantity > 0) {
            const item = {
                product: selectedProduct,
                fixedPrice: tempPrice,
                quantity: quantity,
                totalPrice: price,
            };

            if (editingIndex !== null) {
                // Update existing item in cart
                const updatedCart = [...cart];
                updatedCart[editingIndex] = item;
                setCart(updatedCart);
                setEditingIndex(null); // Reset editing state
            } else {
                // Add new item to cart
                setCart([...cart, item]);
            }

            // Reset input fields
            setSelectedProduct(null);
            setQuantity(1);
            setTempPrice(0);
            setPrice(0);
        }
    };

    // Handle payment type change
    const handlePaymentTypeChange = (e) => {
        setPaymentType(e.target.value);
    };

    // Edit item in cart
    const handleEdit = (index) => {
        const item = cart[index];
        setSelectedProduct(item.product);
        setQuantity(item.quantity);
        setTempPrice(item.totalPrice / item.quantity); // Calculate tempPrice from totalPrice and quantity
        setPrice(item.totalPrice);
        setEditingIndex(index); // Set the index of the item being edited
    };

    // Delete item from cart
    const handleDelete = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    // Calculate total amount
    const totalAmount = cart.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-white mb-6">Tambah Transaksi / Pengeluaran Baru</h1>
            <h2 className="text-lg font-semibold text-white mx-auto text-center">
                Pilih Jenis Transaksi
            </h2>
            <div className="w-2/3 mx-auto bg-gray-800 flex p-2 rounded-lg relative overflow-hidden">
                <div
                    className={`absolute inset-y-0 left-0 w-[calc(50%-0.5rem)] bg-blue-500 rounded-sm transition-transform duration-300 m-2 ${transactionType === "expense" ? "translate-x-full" : ""
                        }`}
                ></div>

                <button
                    onClick={() => setTransactionType("income")}
                    className={`w-1/2 py-2 text-white font-semibold focus:outline-none relative z-10 ${transactionType === "income" ? "text-white" : "cursor-pointer text-gray-400 opacity-50 hover:text-gray-200"
                        }`}
                >
                    Transaksi
                </button>
                <button
                    onClick={() => setTransactionType("expense")}
                    className={`w-1/2 py-2 text-white font-semibold focus:outline-none relative z-10 ${transactionType === "expense" ? "text-white" : "cursor-pointer text-gray-400 opacity-50 hover:text-gray-200"
                        }`}
                >
                    Pengeluaran
                </button>
            </div>

            <div className="bg-gray-600 p-4 rounded-lg">
                <div className="space-y-2">
                    <h1 className="text-xl font-bold text-white text-center mb-4">{transactionType === "income" ? "Transaksi Baru" : "Pengeluaran Baru"}

                    </h1>
                </div>
                {
                    transactionType === "income" ? (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="product" className="text-white font-semibold ml-1">Pilih Produk</label>
                                    <select
                                        id="product"
                                        value={selectedProduct ? selectedProduct.id : ""}
                                        onChange={handleProductChange}
                                        className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                    >
                                        <option value="" disabled>Pilih Produk</option>
                                        {products.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name} - ${product.price}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="quantity" className="text-white font-semibold ml-1">Jumlah</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                        className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Harga Satuan</label>
                                <input
                                    type="number"
                                    value={tempPrice}
                                    onChange={handleTempPriceChange}
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Harga Total</label>
                                <input
                                    type="text"
                                    value={`$${price}`}
                                    readOnly
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                />
                            </div>
                            <button
                                onClick={addToCart}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-75 mb-4"
                            >
                                {editingIndex !== null ? "Update Keranjang" : "Tambah ke Keranjang"}
                            </button>
                            <div className={`space-y-2 bg-yellow-900 p-4 rounded-lg ${cart.length === 0 ? "hidden" : ""}`}>
                                <h2 className="text-xl font-bold text-white">List Pembelian</h2>
                                <table className="w-full text-white text-center">
                                    <thead>
                                        <tr>
                                            <th className="text-white">No</th>
                                            <th className="text-white">Produk</th>
                                            <th className="text-white">Harga Satuan</th>
                                            <th className="text-white">Jumlah</th>
                                            <th className="text-white">Total Harga</th>
                                            <th className="text-white">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr className={`text-white ${index % 2 === 0 ? 'bg-yellow-800 hover:bg-yellow-700' : 'hover:bg-yellow-700'} cursor-pointer transition duration-75`}>
                                                <td className="py-2">{index + 1}</td>
                                                <td className="py-2">{item.product.name}</td>
                                                <td className="py-2">${item.fixedPrice}</td>
                                                <td className="py-2">{item.quantity}</td>
                                                <td className="py-2">${item.totalPrice}</td>
                                                <td className="py-2">
                                                    <button
                                                        onClick={() => handleEdit(index)}
                                                        className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 transition duration-75"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(index)}
                                                        className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-75"
                                                    >
                                                        Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Total Pembayaran</label>
                                <input
                                    type="text"
                                    value={`$${totalAmount}`}
                                    readOnly
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="paymentType" className="text-white font-semibold ml-1">Metode Pembayaran</label>
                                <select
                                    id="paymentType"
                                    value={paymentType}
                                    onChange={handlePaymentTypeChange}
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                >
                                    <option value="cash">Tunai</option>
                                    <option value="credit">Kredit</option>
                                </select>
                            </div>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-75"
                            >
                                Simpan Transaksi
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Deskripsi Pengeluaran</label>
                                <input
                                    type="text"
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Jumlah Pengeluaran</label>
                                <input
                                    type="number"
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-semibold ml-1">Metode Pembayaran</label>
                                <select
                                    className="flex px-4 py-2 shadow-md font-semibold text-white w-full focus:outline-none rounded-lg border bg-gray-600 mb-2"
                                >
                                    <option value="cash">Tunai</option>
                                    <option value="credit">Kredit</option>
                                </select>
                            </div>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-75"
                            >
                                Simpan Pengeluaran
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AddTransaction;