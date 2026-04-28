import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "8988199226";
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
          
          <div className="booking-actions">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn-premium"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>

            <button className="pay-now-btn" onClick={() => setIsModalOpen(true)}>
              <i className="fas fa-shield-alt"></i> Pay Now
            </button>
          </div>
          <span className="reply-text">Average response time: 60 seconds</span>
        </div>

        {/* Right Side: Social Links */}
        <div className="social-column-white">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-glass-card-white">
            <div className="icon-circle-insta"><i className="fab fa-instagram"></i></div>
            <div className="social-content-white">
              <h3>Instagram</h3>
              <p>Daily tour updates & couple stories</p>
            </div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-glass-card-white">
            <div className="icon-circle-fb"><i className="fab fa-facebook-f"></i></div>
            <div className="social-content-white">
              <h3>Facebook</h3>
              <p>Join our 10K+ travel community</p>
            </div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>
        </div>
      </div>

      {/* --- PAYMENT MODAL --- */}
      {isModalOpen && (
        <div className="payment-modal-overlay">
          <div className="payment-modal-content">
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>
            
            <div className="modal-header">
              <span className="urgency-tag">🔥 High season fills up fast!</span>
              <h3>Secure Your Spot</h3>
              <p>If we've finalized your plan, pay a token deposit now.</p>
            </div>

            <div className="token-card">
              <div className="token-details">
                <h4>Reservation Token</h4>
                <div className="pricing">
                  <span className="old-price">₹2,000</span>
                  <span className="new-price">₹899</span>
                </div>
              </div>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> Instantly locks your vehicle</li>
                <li><i className="fas fa-check-circle"></i> Deducted from final bill</li>
                <li><i className="fas fa-check-circle"></i> 100% Refundable (up to 24h before)</li>
              </ul>
            </div>

            <div className="qr-section">
              <div className="qr-box">
                {/* Yahan apni QR image ka path dal dena */}
                <p>QR Code Placeholder</p>
              </div>
              <div className="upi-details">
                <span>Scan and Pay via any UPI App</span>
                <strong className="upi-id">mtthakur.786.mt@oksbi</strong>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText('mtthakur.786.mt@oksbi')}>
                   Copy ID
                </button>
              </div>
            </div>

            <p className="secure-footer"><i className="fas fa-lock"></i> Secure & Verified Payment</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Booking;