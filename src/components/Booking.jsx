import React, { useState } from 'react'; // useState add kiya
import './Booking.css';

function Booking() {
  const [showPayment, setShowPayment] = useState(false); // Default hide rahega

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

            {/* Click karne par state true ho jayegi */}
            <button onClick={() => setShowPayment(true)} className="pay-now-btn">
              Pay Now & Secure <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-glass-card-white small-card">
            <div className="icon-circle-insta small-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-content-white"><h3>Instagram Updates</h3></div>
            <i className="fas fa-chevron-right arrow-icon"></i>
          </a>
        </div>
      </div>

      {/* --- PAYMENT MODAL (Condition: Only shows if showPayment is true) --- */}
      {showPayment && (
        <div className="payment-overlay">
          <div className="payment-modal">
            <button className="close-modal" onClick={() => setShowPayment(false)}>&times;</button>
            
            <div className="qr-header">
                <h2>Secure Reservation</h2>
                <p>Scan to pay <b>₹999</b> token amount</p>
            </div>
            
            <div className="qr-placeholder">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${whatsappNumber}@okicici&pn=Cyntax%20Travels&am=999&cu=INR`} alt="UPI QR" />
                <div className="qr-scan-line"></div>
            </div>

            <div className="upi-details">
                <span>ID: <b>{whatsappNumber}@okicici</b></span>
                <button onClick={() => navigator.clipboard.writeText(`${whatsappNumber}@okicici`)} className="copy-btn">Copy</button>
            </div>

            <div className="payment-footer">
                <p><i className="fas fa-shield-alt"></i> Verified Business Account</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Booking;