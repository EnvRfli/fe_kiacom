import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard_pages/dashboard';
import Product from './pages/dashboard_pages/product';
import Brand from './pages/dashboard_pages/brand';
import Category from './pages/dashboard_pages/category';
import AddTransaction from './pages/dashboard_pages/addTransaction';
import AddBrand from './pages/dashboard_pages/addbrand';
import AddCategory from './pages/dashboard_pages/addCategory';
import AddProduct from './pages/dashboard_pages/addProduct';
import Login from './pages/auth_pages/login';
import Register from './pages/auth_pages/register';
import Home from './pages/main_pages/home';


function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-gray-700'>
        {/* <Sidebar /> */}
        <Header />
        {/* <div className='sm:ml-64'> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* </div> */}
      </div>
    </Router >
  )
}

export default App
