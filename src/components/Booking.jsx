import React, { useState } from 'react';
import './Booking.css';
 import scanner from '../assets/images/scanner.jpeg'; 

function Booking() {
  const whatsappNumber = "8988199226";
  const message = "Hi Cyntax, I want to book a Himachal Couple Tour. Please share details.";
  
  // Replace with your actual UPI ID and QR Image URL
  const upiId = "mtthakur.786.mt@oksbi"; 

  return (
    <section className="booking-section-white">
      <div className="booking-container-new">
        
        {/* Left Side: WhatsApp & Payment */}
        <div className="booking-main-content">
          
          {/* WhatsApp Card */}
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

          {/* NEW: Payment Section (Pay Now) */}
          <div className="payment-card-premium">
            <div className="payment-grid">
              <div className="payment-info">
                <div className="promo-badge">Limited Time Offer</div>
                <h3 className="pay-title">Reservation Token</h3>
                <div className="price-tag">
                  <span className="old-price">₹2,000</span>
                  <span className="new-price">₹599</span>
                </div>
                <p className="pay-desc">High season fills up fast. If we've finalized your plan, secure your spot now with a fully refundable token deposit.</p>
                
                <ul className="pay-features">
                  <li><i className="fas fa-check-circle"></i> Instantly locks your vehicle</li>
                  <li><i className="fas fa-check-circle"></i> Deducted from final bill</li>
                  <li><i className="fas fa-check-circle"></i> 100% Refundable up to 24h before</li>
                </ul>
                
                <div className="upi-id-box">
                  <span>UPI ID: <strong>{upiId}</strong></span>
                </div>
              </div>

              <div className="qr-wrapper">
                <div className="qr-box">
                    <img src={scanner} alt="Payment QR Code" />
                    <p>Scan to Pay</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Social Links */}
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