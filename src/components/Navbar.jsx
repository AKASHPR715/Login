import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">User Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
