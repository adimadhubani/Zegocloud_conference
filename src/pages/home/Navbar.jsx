import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png" 
            alt="ConnectHub Logo" 
            className="logo-img"
          />
          <span className="logo-glow">ConnectHub</span>
        </Link>
        <div className="navbar-right">
          <button className="navbar-button">
            <span className="button-icon">👋</span> About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;