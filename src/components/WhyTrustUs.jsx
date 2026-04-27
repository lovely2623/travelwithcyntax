import React from 'react';
import './WhyTrustUs.css';

const promises = [
  { id: 1, icon: "fas fa-user-shield", title: "100% Privacy", desc: "Special focus on couple privacy & safe stays." },
  { id: 2, icon: "fas fa-percentage", title: "0% Hidden Fees", desc: "No extra charges. What you see is what you pay." },
  { id: 3, icon: "fas fa-id-card", title: "Govt. Registered", desc: "Fully verified & certified Himachal Tour Agency." },
  { id: 4, icon: "fas fa-map-marked-alt", title: "Local Experts", desc: "Drivers & guides with deep local knowledge." },
  { id: 5, icon: "fas fa-language", title: "Hindi & English", desc: "Smooth communication in your preferred language." },
  { id: 6, icon: "fas fa-briefcase", title: "Luggage Facility", desc: "Safe storage for your belongings during tours." },
  { id: 7, icon: "fas fa-first-aid", title: "First Aid Ready", desc: "All vehicles equipped with emergency medical kits." },
  { id: 8, icon: "fas fa-headset", title: "24/7 VIP Support", desc: "We are just one call away, anytime, anywhere." }
];

function WhyTrustUs() {
  return (
    <section className="trust-section">
      <div className="trust-container">
        
        {/* Special Couple Offer Banner */}
        <div className="gift-hamper-banner">
          <div className="gift-content">
            <i className="fas fa-gift gift-icon"></i>
            <div className="gift-text">
              <h3>Exclusive Welcome Gift Hamper!</h3>
              <p>Special Surprise Hamper for every Couple on arrival at Chandigarh/Shimla. 🎁</p>
            </div>
          </div>
          <span className="premium-label">Premium Offer</span>
        </div>

        <div className="trust-header">
          <h2 className="trust-title">Why Couples Choose <span> Travel With Cyntax?</span></h2>
          <p className="trust-subtitle">Your safety and comfort are our top priorities. Experience Himachal like a VIP.</p>
        </div>

        <div className="promises-grid">
          {promises.map((item) => (
            <div className="promise-card" key={item.id}>
              <div className="promise-icon-box">
                <i className={item.icon}></i>
              </div>
              <div className="promise-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyTrustUs;