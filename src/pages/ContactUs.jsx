import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    tourPackage: '', // Updated from course
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Aapke Render Backend ka URL intact rakha hai
    try {
      const response = await fetch('https://cyntaxitinstitute.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Shukriya Mohit Sir! Booking Query save ho gayi hai. 🏔️");
        setFormData({ name: '', email: '', mobile: '', tourPackage: '', message: '' });
      } else {
        alert("Error: " + (result.error || "Data save nahi hua."));
      }
    } catch (error) {
      alert("Backend se connection nahi ho paya!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-travel-wrapper">
      {/* 60px Navbar gap handle karne ke liye main container */}
      
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Plan Your Next Adventure 🎒</h1>
          <p>Humse baat karein aur apni dream Himachal trip design karayein.</p>
        </div>
      </section>

      <div className="contact-main-grid container">
        
        {/* Left Side: Contact Cards */}
        <aside className="contact-info-panel">
          <div className="c-card">
            <div className="c-icon">📞</div>
            <h3>Call/WhatsApp</h3>
            <p>Direct contact with Mohit Sir:</p>
            <a href="https://wa.me/918988199226">+91 89881 99226</a>
          </div>

          <div className="c-card">
            <div className="c-icon">📧</div>
            <h3>Email Address</h3>
            <p>For group booking queries:</p>
            <a href="mailto:info@travelwithcyntax.com">info@travelwithcyntax.com</a>
          </div>

          <div className="c-card">
            <div className="c-icon">📍</div>
            <h3>Our Base</h3>
            <p>Shimla & Solan, Himachal Pradesh</p>
          </div>
        </aside>

        {/* Right Side: Travel Form */}
        <div className="contact-form-container">
          <h2>Send Booking Inquiry</h2>
          <form onSubmit={handleSubmit} className="travel-form">
            <div className="form-row">
              <input type="text" name="name" placeholder="Aapka Naam" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            </div>
            
            <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
            
            <select name="tourPackage" value={formData.tourPackage} onChange={handleChange} required>
              <option value="">Choose Your Vibe</option>
              <option value="honeymoon">Honeymoon Special (Shimla/Manali)</option>
              <option value="family">Family Adventure (Dharamshala/Dalhousie)</option>
              <option value="spiritual">Shaktipeeth Darshan</option>
              <option value="offbeat">Chanshal / Dodra-Kawar Offbeat</option>
              <option value="spiti">Spiti Valley Expedition</option>
            </select>

            <textarea name="message" placeholder="Aapki koi special requirement? (e.g. No. of days, Date of travel)" rows="4" value={formData.message} onChange={handleChange}></textarea>
            
            <button type="submit" className="wa-submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry 🚀"}
            </button>
          </form>
        </div>
      </div>

      <div className="google-map-wrap">
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
  );
}

export default ContactUs;