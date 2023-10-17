import "../../style/homeStyle/navbar.css";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

const FullNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add your search logic here (e.g., redirect to a search results page).
    // For simplicity, we'll just log the search query to the console.
    console.log('Search Query:', searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="full-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">KRASH</div>
        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">About</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      
    </nav>
  );
};

export default FullNavbar;

