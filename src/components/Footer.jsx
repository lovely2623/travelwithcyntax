import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(1000);

  useEffect(() => {
    const savedCount = localStorage.getItem('cyntax_vc') || 1000;
    const hasVisited = sessionStorage.getItem('v_session');
    if (!hasVisited) {
      const newCount = parseInt(savedCount) + 1;
      setVisitorCount(newCount);
      localStorage.setItem('cyntax_vc', newCount);
      sessionStorage.setItem('v_session', 'true');
    } else {
      setVisitorCount(parseInt(savedCount));
    }
  }, []);

  return (
    <footer className="luxury-footer-fixed">
      <div className="f-container">
        <div className="f-row">
          
          {/* Branding */}
          <div className="f-col-brand">
            <h2 className="f-logo">Travel with <span>Cyntax</span></h2>
            <p className="f-desc">
              Your premium travel partner in Himachal. Making every journey special for couples and families.
            </p>
          <div className="f-social-links">
    <a href="#" className="social-icon-btn"><i className="fab fa-facebook-f"></i></a>
    <a href="#" className="social-icon-btn"><i className="fab fa-instagram"></i></a>
    <a href="#" className="social-icon-btn"><i className="fab fa-whatsapp"></i></a>
  </div>
          </div>

          {/* Links */}
          <div className="f-col-links">
            <h4 className="f-heading">Explore</h4>
            <ul className="f-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="f-col-contact">
            <h4 className="f-heading">Get In Touch</h4>
            <div className="f-contact-details">
              <a href="mailto:info@cyntax.com" className="f-contact-item">
                <i className="fas fa-envelope"></i> info@cyntax.com
              </a>
              <a href="https://wa.me/8988199226" className="f-contact-item">
                <i className="fab fa-whatsapp"></i> +91 89881-99226
              </a>
            </div>
            
            {/* Working Shimla Map */}
          <div className="f-map-container">
      <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2223842603416!2d77.10896!3d30.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzM2LjAiTiA3N8KwMDYnMzIuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="150" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Cyntax Location"
            ></iframe>
  </div>
          </div>

        </div>

        {/* Visitor Center Section */}
        <div className="f-visitor-section">
          <div className="v-counter-pill">
             <i className="fas fa-eye"></i> Total Visitors: <strong>{visitorCount}</strong>
          </div>
        </div>

        {/* Footer Bottom (Bold & Visible) */}
        <div className="f-bottom-credits">
          <div className="f-credits-flex">
            <div className="f-copyright">
              © 2026 <strong>Travel with Cyntax</strong>. All Rights Reserved.
            </div>
            <div className="f-maintained">
              Maintained by: <span>Lovely Mohit Thakur</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;