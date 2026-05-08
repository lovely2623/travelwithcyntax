import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date()); // Time State
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  // Live Time Update Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const handleLogout = () => {
    if (window.confirm("Mohit Sir, Logout karna hai?")) {
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/');
      window.location.reload();
    }
  };

  const closeMenu = () => setMenuOpen(false);

  // Time format function (09:24 PM)
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <header className={`main-header ${scrolled ? "header-scrolled" : ""}`}>
      {/* --- MINI TOP BAR --- */}
      <section className='mini-top-bar'>
        <div className="top-bar-left-content">
            <div className='info-item'>
              <i className="fas fa-map-marker-alt"></i>
              <span>Solan</span>
            </div>

            <div className='info-item hide-on-mobile'>
              <a href="mailto:travelwithcyntax@gmail.com">
                <i className="fas fa-envelope"></i>
                <span>travelwithcyntax@gmail.com</span>
              </a>
            </div>

            <div className='info-item'>
              <a href="https://wa.me/+918988199226" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
                <span>8988199226</span>
              </a>
            </div>
        </div>

        {/* Live Time - Hamesha Right End mein rahega */}
        <div className='live-time'>
          <i className="far fa-clock"></i>
          <span>{formatTime(currentTime)}</span>
        </div>
      </section>

      {/* --- MAIN NAVBAR --- */}
      <nav className="navbar-area">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="logo-text-branding">Travel With Cyntax</h1>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </div>

          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/tours" onClick={closeMenu}>Tour Packages</NavLink></li>
            <li><NavLink to="/AboutUs" onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/ContactUs" onClick={closeMenu}>Contact Us</NavLink></li>
            <li><NavLink to="/Gallery" onClick={closeMenu}>Gallery</NavLink></li>

            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;