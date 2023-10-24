import React from 'react';
import '../src/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import Admin from './component/admin/AdminLogin';
import AdminDashboard  from './component/admin/AdminDashboard';
import Category  from './component/category/CategoryAll';
const App = () => {
  return (    
    <div>
  <div>
    <FloatingWhatsApp/>
  </div>
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/admin-login" element={<Admin/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </BrowserRouter>
    </div>  
  ); 
};

export default App; 
