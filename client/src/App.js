import React from 'react';
import '../src/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Admin from './component/admin/AdminLogin';
import AdminDashboard  from './component/admin/AdminDashboard';
const App = () => {
  return (    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/admin-login" element={<Admin/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>  
  ); 
};

export default App; 
