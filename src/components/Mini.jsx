import React from 'react';
import './Mini.css';

function Mini() {
  return (
    <section className='mini-one'>
        {/* Location - Sirf Desktop pe dikhegi space bachane ke liye */}
        <div className='info-item desktop-only'>
          <i className="fas fa-map-marker-alt"></i>
          <span>Shimla</span>
        </div>

        {/* Email - Clickable */}
        <div className='info-item'>
          <a href="mailto:info@travelwithcyntax@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email Us</span> {/* Mobile pe sirf 'Email Us' dikhega space ke liye */}
            <span className="desktop-only">: info@travelwithcyntax@gmail.com</span>
          </a>
        </div>

        {/* WhatsApp - Clickable */}
        <div className='info-item'>
          <a href="https://wa.me/918988199226" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
            <span>8988199226</span>
          </a>
        </div>
    </section>
  );
}

export default Mini;