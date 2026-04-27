import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png'; // Make sure logo.png assets folder mein ho

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <img src={logo} alt="Cyntax Logo" className="nav-logo-img" />
          <h1 className="logo-text">Travel with Cyntax</h1>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
              Gallery
            </NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;