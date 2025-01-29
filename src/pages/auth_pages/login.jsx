import React, { useState } from "react";
// import authService from "../services/AuthService";
import { Navigate } from "react-router-dom";

const Login = () => {
    // const token = localStorage.getItem("token");

    // if (token) {
    //     // Redirect jika token ada
    //     return <Navigate to="/home" replace />;
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setEmailError("Format email invalid.");
        } else {
            setEmailError("");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Format email invalid.");
            return;
        }
        // setEmailError("");
        // setErrorMessage("");
        // setIsLoading(true);

        // try {
        //     await authService.login(email, password);
        //     window.location.href = "/home";
        // } catch (error) {
        //     if (error.response && error.response.status === 401) {
        //         setErrorMessage("Login failed, email or password is incorrect.");
        //     } else {
        //         setErrorMessage("An unexpected error occurred. Please try again.");
        //     }
        // } finally {
        //     setIsLoading(false);
        // }
    };



    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                onSubmit={handleLogin}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {errorMessage && (
                    <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                )}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Eg. johnDoe@gmail.com"
                        className={`mt-1 block w-full border-2 ${emailError
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                            } shadow-sm focus:ring-blue-500 sm:text-sm py-1 px-2`}
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-1 px-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500"
                        }`}
                >
                    {isLoading ? (
                        <span className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 2.42.965 4.617 2.535 6.182l1.465-1.465z"
                                ></path>
                            </svg>
                        </span>
                    ) : (
                        "Login"
                    )}
                </button>
                <div className="w-full">
                    <p className="text-sm text-right mt-4">
                        Don't have an account?{" "}
                        <span className="text-blue-500 hover:text-blue-700">
                            <a href="/register">Register here</a>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
