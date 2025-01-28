import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard_pages/dashboard';
import Product from './pages/dashboard_pages/product';


function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-gray-700'>
        <Sidebar />
        <div className='sm:ml-64'>
          <Routes>
            <Route path='/' element={<Product />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
