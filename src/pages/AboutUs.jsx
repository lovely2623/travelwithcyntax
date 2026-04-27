import React from 'react';
import './AboutUs.css';
import directorImg from '../assets/images/me.jpg'; 

function AboutUs() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Mohit Sir, I want a customized Himachal tour plan.");
    window.open(`https://wa.me/918988199226?text=${msg}`, '_blank');
  };

  return (
    <div className="about-wrapper">
      {/* Hero Section - Height kam ki hai taaki scroll na karna pade zyada */}
      <section className="clean-hero">
        <div className="hero-text">
          <h1>Your Trusted Travel Partner</h1>
          <p>Authentic Himachal Experiences with Cyntax Travels</p>
        </div>
      </section>

      {/* Founder Section - Photo Choti aur Professional Layout */}
      <section className="pro-founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-img-container">
              <img src={directorImg} alt="Lovely Mohit Thakur - Director" />
            </div>
            <div className="founder-details">
              <span className="founder-label">Founder & Director</span>
              <h2>Lovely Mohit Thakur</h2>
              <p>
                "Himachal ko explore karna sirf ek safar nahi, ek ehsaas hai. Cyntax Travels mein hum har guest ko family ki tarah treat karte hain. Humara focus <strong>Privacy, Comfort aur Local Expertise</strong> par hai."
              </p>
              <div className="mini-stats">
                <span><b>5+</b> Years Exp.</span>
                <span><b>1.2K+</b> Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Kam margin aur Clean Icons */}
      <section className="service-strip">
        <div className="container service-flex">
          <div className="s-item">🛡️ Verified Agents</div>
          <div className="s-item">🚗 Chandigarh Pickup</div>
          <div className="s-item">🏨 2-3 Star Premium Stays</div>
          <div className="s-item">💬 24/7 Support</div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h3>Need a tailor-made itinerary?</h3>
          <p>Direct talk with Mohit Sir for best deals.</p>
          <button className="wa-btn-pro" onClick={handleWhatsApp}>
            <i className="fab fa-whatsapp"></i> Plan My Custom Trip
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;