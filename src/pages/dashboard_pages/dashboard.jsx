import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const [filter, setFilter] = useState({ month: "01", year: "2025" });
    const [profit, setProfit] = useState(false);
    const [expenseProfit, setExpenseProfit] = useState(false);
    const [difference, setDifference] = useState(true);

    const data = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Income",
                data: [300, 500, 400, 600],
                backgroundColor: "rgba(74, 222, 128, 0.7)",
                borderColor: "#4ade80",
                borderWidth: 1,
            },
            {
                label: "Expenses",
                data: [200, 300, 250, 400],
                backgroundColor: "rgba(239, 68, 68, 0.7)",
                borderColor: "#ef4444",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#fff",
                },
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                titleColor: "#fff",
                bodyColor: "#fff",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#fff",
                },
                grid: {
                    color: "",
                },
            },
            y: {
                ticks: {
                    color: "#fff",
                },
                grid: {
                    color: "",
                },
            },
        },
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 flex bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl justify-between">
                    <div className="items-center my-auto text-white">
                        <h1 className="text-xl font-semibold">Total Produk</h1>
                        <p className="text-3xl font-bold">100</p>
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 p-2 bg-white rounded-lg shadow-md transition-all transform hover:scale-110">
                        <svg className="w-full h-full text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                    </div>
                </div>
                <div className="p-6 flex bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl justify-between">
                    <div className="items-center my-auto text-white">
                        <h1 className="text-xl font-semibold">Total Brand</h1>
                        <p className="text-3xl font-bold">10</p>
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 p-2 bg-white rounded-lg shadow-md transition-all transform hover:scale-110">
                        <svg className="shrink-0 w-full h-full text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-5V1a1 1 0 0 0-1-1Zm0 2h4v2h-4V2Zm-6 4h12v12H4V6Z" />
                        </svg>
                    </div>
                </div>
                <div className="p-6 flex bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl justify-between">
                    <div className="items-center my-auto text-white">
                        <h1 className="text-xl font-semibold">Total Transaksi</h1>
                        <p className="text-3xl font-bold">10</p>
                    </div>
                    <div className="flex items-center justify-center w-20 h-20 p-2 bg-white rounded-lg shadow-md transition-all transform hover:scale-110">
                        <svg className="shrink-0 w-full h-full text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                        </svg>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white">Statistik</h2>
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <label className="block text-white font-semibold" htmlFor="month">
                        Bulan
                    </label>
                    <select
                        id="month"
                        name="month"
                        value={filter.month}
                        onChange={handleFilterChange}
                        className="p-2 rounded-lg border-1 text-white bg-gray-700"
                    >
                        {Array.from({ length: 12 }, (_, i) => {
                            const month = String(i + 1).padStart(2, "0");
                            return (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="block text-white font-semibold" htmlFor="year">
                        Tahun
                    </label>
                    <select
                        id="year"
                        name="year"
                        value={filter.year}
                        onChange={handleFilterChange}
                        className="p-2 rounded-lg border-1 text-white bg-gray-700"
                    >
                        {Array.from({ length: 5 }, (_, i) => {
                            const year = String(2025 - i);
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="space-x-4 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg rounded-lg p-4">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <Bar data={data} options={options} />
                </div>
                <div className="w-full h-full flex flex-col">
                    <h1 className="text-xl font-semibold text-white">Details</h1>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between mt-4 h-full">
                        <div className="w-full">
                            <h1 className="text-lg font-semibold text-green-500">Total Income</h1>
                            {profit ? (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-white mr-4">Rp. 1.000.000</h1>
                                    <svg class="w-6 h-6 text-green-500 dark:text-green mt-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                                    </svg>
                                    <p className="text-green-500 mt-auto">+ 30% <span className="text-white">From last month</span></p>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-white mr-4">Rp. 500.000</h1>
                                    <svg class="w-6 h-6 text-red-500 dark:text-red mt-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                                    </svg>

                                    <p className="text-red-500 mt-auto">- 30% <span className="text-white">From last month</span></p>
                                </div>
                            )}
                        </div>
                        <div className="w-full mt-4">
                            <h1 className="text-lg font-semibold text-red-500">Total Expenses</h1>
                            {expenseProfit ? (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-white mr-4">Rp. 500.000</h1>
                                    <svg class="w-6 h-6 text-green-500 dark:text-green mt-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                                    </svg>
                                    <p className="text-green-500 mt-auto">+ 30% <span className="text-white">From last month</span></p>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-white mr-4">Rp. 1.000.000</h1>
                                    <svg class="w-6 h-6 text-red-500 dark:text-red mt-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                                    </svg>
                                    <p className="text-red-500 mt-auto">- 30% <span className="text-white">From last month</span></p>
                                </div>
                            )}
                        </div>
                        <div className="w-full mt-4">
                            <h1 className="text-lg font-semibold text-white">Total Difference</h1>
                            {difference ? (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-green-500 mr-4">Rp. 500.000</h1>
                                    <svg class="w-6 h-6 text-green-500 dark:text-green mt-auto" aria-hidden="true" xmlns="http://www.w3.org/
                                2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                                    </svg>
                                    <p className="text-green-500 mt-auto">+ 30% <span className="text-white">From last month</span></p>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <h1 className="text-3xl font-semibold text-red-500 mr-4">Rp. 500.000</h1>
                                    <svg class="w-6 h-6 text-red-500 dark:text-red mt-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207" />
                                    </svg>
                                    <p className="text-red-500 mt-auto">- 30% <span className="text-white">From last month</span></p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white">Recent Transactions</h2>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left text-white p-2">No</th>
                            <th className="text-left text-white p-2">Product</th>
                            <th className="text-left text-white p-2">Brand</th>
                            <th className="text-left text-white p-2">Price</th>
                            <th className="text-left text-white p-2">Quantity</th>
                            <th className="text-left text-white p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-white p-2">1</td>
                            <td className="text-white p-2">Laptop</td>
                            <td className="text-white p-2">Asus</td>
                            <td className="text-white p-2">Rp. 10.000.000</td>
                            <td className="text-white p-2">1</td>
                            <td className="text-white p-2">Rp. 10.000.000</td>
                        </tr>
                        <tr>
                            <td className="text-white p-2">2</td>
                            <td className="text-white p-2">Mouse</td>
                            <td className="text-white p-2">Logitech</td>
                            <td className="text-white p-2">Rp. 500.000</td>
                            <td className="text-white p-2">2</td>
                            <td className="text-white p-2">Rp. 1.000.000</td>
                        </tr>
                        <tr>
                            <td className="text-white p-2">3</td>
                            <td className="text-white p-2">Keyboard</td>
                            <td className="text-white p-2">Razer</td>
                            <td className="text-white p-2">Rp. 1.000.000</td>
                            <td className="text-white p-2">1</td>
                            <td className="text-white p-2">Rp. 1.000.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
