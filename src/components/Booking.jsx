import React from 'react';
import './Booking.css';

function Booking() {
  const whatsappNumber = "8988199226"; // Apna number yahan dalein
  const message = "Hi Cyntax, I want to book a Himachal Couple Tour. Please share details.";

  return (
    <section className="booking-section-white">
      <div className="booking-container-new">
        
        {/* Left Side: Premium WhatsApp Card */}
        <div className="booking-card-white fast-whatsapp-blue">
          <div className="status-badge-blue">
            <span className="live-dot-blue"></span> 24/7 Priority Support
          </div>
          <h2 className="title-blue">Instant Booking</h2>
          <p className="desc-gray">Skip the long forms! Chat directly with our travel experts and book your dream Himachal trip in minutes.</p>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn-premium"
          >
            <i className="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
          <span className="reply-text">Average response time: 60 seconds</span>
        </div>

        {/* Right Side: Clean Social Links */}
        <div className="social-column-white">
          
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-glass-card-white">
            <div className="icon-circle-insta">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-content-white">
              <h3>Instagram</h3>
              <p>Daily tour updates & couple stories</p>
            </div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-glass-card-white">
            <div className="icon-circle-fb">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-content-white">
              <h3>Facebook</h3>
              <p>Join our 10K+ travel community</p>
            </div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Booking;