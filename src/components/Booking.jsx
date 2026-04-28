import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  // Modal State
  const [showModal, setShowModal] = useState(false);
  
  const whatsappNumber = "8988199226"; // Apna number yahan dalein
  const message = "Hi Cyntax, I want to book a Himachal Couple Tour. Please share details.";

  return (
    <section className="booking-section-white">
      <div className="booking-container-new">
        
        {/* Left Side: Premium WhatsApp Card (Original Structure) */}
        <div className="booking-card-white fast-whatsapp-blue">
          <div className="status-badge-blue">
            <span className="live-dot-blue"></span> 24/7 Priority Support
          </div>
          <h2 className="title-blue">Instant Booking</h2>
          <p className="desc-gray">Skip the long forms! Chat directly with our travel experts and book your dream Himachal trip in minutes.</p>
          
          {/* Buttons Group */}
          <div className="booking-btn-group">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn-premium"
              aria-label="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>

            {/* Pay Now Button - New Add-on */}
            <button 
              className="pay-now-action-btn" 
              onClick={() => setShowModal(true)}
              aria-label="Secure Reservation"
            >
              <i className="fas fa-check-shield"></i> Pay Now
            </button>
          </div>

          <span className="reply-text">Average response time: 60 seconds</span>
        </div>

        {/* Right Side: Clean Social Links (Original Structure) */}
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

      {/* --- Reservation Modal --- */}
      {showModal && (
        <div className="token-modal-overlay">
          <div className="token-modal-card">
            <button className="modal-close-x" onClick={() => setShowModal(false)}>&times;</button>
            
            <div className="modal-promo-header">
              <span className="fire-tag">🔥 High season fills up fast</span>
              <h3>Secure Your Spot</h3>
              <p>Fully refundable token deposit for Cyntax Travelers.</p>
            </div>

            <div className="token-price-box">
              <div className="price-row">
                <span className="token-label">Reservation Token</span>
                <div className="price-tag">
                  <span className="strike">₹2,000</span>
                  <span className="final">₹999</span>
                </div>
              </div>
              <div className="token-perks">
                <p><i className="fas fa-car"></i> Instantly locks your vehicle</p>
                <p><i className="fas fa-file-invoice-dollar"></i> Deducted from final bill</p>
                <p><i className="fas fa-undo"></i> 100% Refundable up to 24h before</p>
              </div>
            </div>

            <div className="payment-gateway-mock">
              <div className="qr-container">
                {/* Yahan QR Image laga lena */}
                <div className="qr-placeholder">
                   <i className="fas fa-qrcode"></i>
                   <span>QR CODE</span>
                </div>
              </div>
              <div className="upi-info">
                <span className="scan-text">Scan & Pay via UPI</span>
                <code className="upi-id-text">mtthakur.786.mt@oksbi</code>
                <button className="copy-btn-small" onClick={() => navigator.clipboard.writeText('mtthakur.786.mt@oksbi')}>
                  Copy ID
                </button>
              </div>
            </div>

            <p className="secure-badge-footer">
              <i className="fas fa-shield-check"></i> Secure Transaction by Cyntax IT
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Booking;