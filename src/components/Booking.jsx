import React from 'react';
import './Booking.css';

function Booking() {
  const whatsappNumber = "8988199226";
  const message = "Hi Cyntax, I want to book a Himachal Couple Tour. Please share details.";

  return (
    <section className="booking-section-white">
      <div className="booking-container-new">
        
        {/* Left Side: WhatsApp Card */}
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

        {/* Right Side: Social & Payment Options */}
        <div className="social-column-white">
          
          {/* Reservation Token Card (Professional Payment Card) */}
          <div className="payment-card-premium">
            <div className="payment-header">
              <span className="hot-deal-tag">Limited Time Offer</span>
              <h3>Reservation Token</h3>
              <div className="price-tag">
                <span className="old-price">₹2,000</span>
                <span className="new-price">₹999</span>
              </div>
            </div>
            
            <ul className="benefits-list">
              <li><i className="fas fa-bolt"></i> Instantly locks your vehicle</li>
              <li><i className="fas fa-minus-circle"></i> Deducted from final bill</li>
              <li><i className="fas fa-undo"></i> 100% Refundable up to 24h before</li>
            </ul>

            <p className="urgency-text">High season fills up fast. Secure your spot now!</p>

            <a href="#payment-portal" className="pay-now-btn">
              Pay Now & Secure <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-glass-card-white small-card">
            <div className="icon-circle-insta small-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-content-white">
              <h3>Instagram Updates</h3>
            </div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>
        </div>
      </div>

      {/* NEW SECTION: Payment Portal (Jo link pe click krne pe dikhega) */}
      <div id="payment-portal" className="payment-portal-section">
          <div className="qr-container">
              <div className="qr-header">
                  <h2>Complete Your Booking</h2>
                  <p>Scan the QR code to pay <b>₹999</b> safely via any UPI App</p>
              </div>
              
              <div className="qr-placeholder">
                  {/* Yahan aap apna QR code image dal sakte hain */}
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=YOUR_UPI_ID@okicici&pn=Cyntax%20Travels&am=999&cu=INR" alt="UPI QR Code" />
                  <div className="qr-scan-line"></div>
              </div>

              <div className="upi-details">
                  <span>UPI ID: <b>8988199226@okicici</b></span>
                  <button onClick={() => navigator.clipboard.writeText("8988199226@okicici")} className="copy-btn">Copy</button>
              </div>

              <div className="payment-footer">
                  <p><i className="fas fa-shield-alt"></i> Secure Encrypted Payment</p>
                  <div className="payment-icons">
                      <i className="fab fa-google-pay"></i>
                      <i className="fab fa-amazon-pay"></i>
                      <i className="fas fa-credit-card"></i>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Booking;