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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Backend Save Logic (Intact)
    try {
      const response = await fetch('https://cyntaxitinstitute.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // 2. WhatsApp Redirect Logic
        const phoneNumber = "918988199226"; 
        const messageText = `*Nayi Booking Inquiry आई है!* 🏔️%0A%0A` +
          `*Naam:* ${formData.name}%0A` +
          `*Email:* ${formData.email}%0A` +
          `*Mobile:* ${formData.mobile}%0A` +
          `*Package:* ${formData.tourPackage}%0A` +
          `*Message:* ${formData.message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${messageText}`;
        
        alert("Shukriya Mohit Sir! Details save ho gayi hain. Ab aapko WhatsApp par redirect kiya ja raha hai.");
        
        // Reset Form
        setFormData({ name: '', email: '', mobile: '', tourPackage: '', message: '' });
        
        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
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
      {/* SEO Friendly Meta-like Structure */}
      <section className="contact-hero" aria-labelledby="hero-title">
        <div className="hero-content container">
          <h1 id="hero-title">Plan Your Next Adventure 🎒</h1>
          <p>Himachal ki haseen vadiyon mein apna dream trip design karayein Mohit Sir ke saath.</p>
        </div>
      </section>

      <main className="contact-main-grid container">
        {/* Left Side: Contact Cards */}
        <aside className="contact-info-panel">
          <div className="c-card" role="complementary">
            <div className="c-icon" aria-hidden="true">📞</div>
            <h3>Call / WhatsApp</h3>
            <p>Direct support for your trip:</p>
            <a href="https://wa.me/918988199226" aria-label="Contact on WhatsApp">+91 89881 99226</a>
          </div>

          <div className="c-card" role="complementary">
            <div className="c-icon" aria-hidden="true">📧</div>
            <h3>Email Address</h3>
            <p>Group booking inquiries:</p>
            <a href="mailto:info@travelwithcyntax.com">info@travelwithcyntax.com</a>
          </div>

          <div className="c-card" role="complementary">
            <div className="c-icon" aria-hidden="true">📍</div>
            <h3>Our Base</h3>
            <p>Shimla & Solan, Himachal Pradesh</p>
          </div>
        </aside>

        {/* Right Side: Travel Form */}
        <section className="contact-form-container">
          <h2>Send Booking Inquiry</h2>
          <form onSubmit={handleSubmit} className="travel-form">
            <div className="form-row">
              <input 
                type="text" name="name" placeholder="Aapka Naam" 
                value={formData.name} onChange={handleChange} required 
                aria-label="Full Name"
              />
              <input 
                type="email" name="email" placeholder="Email Address" 
                value={formData.email} onChange={handleChange} required 
                aria-label="Email Address"
              />
            </div>
            
            <input 
              type="tel" name="mobile" placeholder="Mobile Number" 
              value={formData.mobile} onChange={handleChange} required 
              aria-label="Mobile Number"
            />
            
            <select 
              name="tourPackage" value={formData.tourPackage} 
              onChange={handleChange} required aria-label="Select Tour Package"
            >
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
              aria-label="Special Requirements"
            ></textarea>
            
            <button type="submit" className="wa-submit-btn" disabled={loading}>
              {loading ? "Processing..." : "Submit & Message on WhatsApp 🚀"}
            </button>
          </form>
        </section>
      </main>

      <section className="google-map-wrap" aria-label="Office Location">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.123456789!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzE3LjMiTiA3N8KwMTAnMjQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Cyntax Location"
          ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;