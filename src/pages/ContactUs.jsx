import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    tourPackage: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aapka WhatsApp Number
    const phoneNumber = "918988199226"; 

    // WhatsApp Message Format (URL Encoded)
    const messageText = `*Nayi Booking Inquiry आई है!* 🏔️%0A%0A` +
      `*Naam:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Package:* ${formData.tourPackage}%0A` +
      `*Message:* ${formData.message}`;

    // WhatsApp Link Generation
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${messageText}`;
    
    // User ko message dikhana aur redirect karna
    alert("Shukriya! Aapki details ready hain. Submit karte hi aapka WhatsApp khul jayega.");
    
    // Seedha WhatsApp par bhej dena
    window.open(whatsappURL, '_blank');

    // Form khali kar dena
    setFormData({ name: '', email: '', mobile: '', tourPackage: '', message: '' });
  };

  return (
    <div className="contact-travel-wrapper">
      <section className="contact-hero">
        <div className="hero-content container">
          <h1>Plan Your Next Adventure 🎒</h1>
          <p>Directly chat with Mohit Sir and design your dream Himachal trip.</p>
        </div>
      </section>

      <main className="contact-main-grid container">
        {/* Left Side: Contact Cards */}
        <aside className="contact-info-panel">
          <div className="c-card">
            <div className="c-icon">📞</div>
            <h3>Quick Support</h3>
            <p>Direct WhatsApp:</p>
            <a href="https://wa.me/918988199226">+91 89881 99226</a>
          </div>

          <div className="c-card">
            <div className="c-icon">📧</div>
            <h3>Official Email</h3>
            <p>For documentation:</p>
            <a href="mailto:info@travelwithcyntax.com">info@travelwithcyntax.com</a>
          </div>

          <div className="c-card">
            <div className="c-icon">📍</div>
            <h3>Location</h3>
            <p>Shimla & Solan, Himachal Pradesh</p>
          </div>
        </aside>

        {/* Right Side: Form */}
        <section className="contact-form-container">
          <h2>Send Inquiry to WhatsApp</h2>
          <form onSubmit={handleSubmit} className="travel-form">
            <div className="form-row">
              <input 
                type="text" name="name" placeholder="Aapka Naam" 
                value={formData.name} onChange={handleChange} required 
              />
              <input 
                type="email" name="email" placeholder="Email Address" 
                value={formData.email} onChange={handleChange} required 
              />
            </div>
            
            <input 
              type="tel" name="mobile" placeholder="Mobile Number" 
              value={formData.mobile} onChange={handleChange} required 
            />
            
            <select name="tourPackage" value={formData.tourPackage} onChange={handleChange} required>
              <option value="">Choose Your Vibe</option>
              <option value="Honeymoon Special">Honeymoon Special (Shimla/Manali)</option>
              <option value="Family Adventure">Family Adventure (Dharamshala/Dalhousie)</option>
              <option value="Spiritual Shaktipeeth">Shaktipeeth Darshan</option>
              <option value="Offbeat Chanshal">Chanshal / Dodra-Kawar Offbeat</option>
              <option value="Spiti Valley">Spiti Valley Expedition</option>
            </select>

            <textarea 
              name="message" 
              placeholder="Aapki koi special requirement? (e.g. No. of days, Date of travel)" 
              rows="4" value={formData.message} 
              onChange={handleChange}
            ></textarea>
            
            <button type="submit" className="wa-submit-btn">
               Send on WhatsApp 🚀
            </button>
          </form>
        </section>
      </main>

      <section className="google-map-wrap">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.039643445012!2d77.10896!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzE3LjMiTiA3N8KwMDYnMzIuMyJF!5e0!3m2!1sen!2sin!4v1620000000000" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Cyntax Office"
          ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;