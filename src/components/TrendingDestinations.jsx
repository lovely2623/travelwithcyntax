import React from 'react';
import './TrendingDestinations.css';

// Assets Import (Original paths maintained)
import shimla from '../assets/images/shimla.avif';
import church from '../assets/images/church.avif';
import iias from '../assets/images/iias.avif';
import jakhu from '../assets/images/jakhu.avif';
import bag from '../assets/images/baglamukhi.jpg';
import chamba from '../assets/images/chamba.avif';
import Chanshal from '../assets/images/chanshal.jpg';
import kullu from '../assets/images/kullu.webp';
import manali from '../assets/images/manali.avif';
import pal from '../assets/images/palampur.jpg';
import sol from '../assets/images/solan.webp';
import spiti from '../assets/images/spiti.avif';





const destinations = [
  { id: 1, title: "Shimla & Kufri", tagline: "Romantic Heritage Walks", image: shimla, cat: "Honeymoon Special" },
  { id: 2, title: "Manali & Solang", tagline: "Luxury Snow Retreats", image: manali, cat: "Couple Friendly" },
  { id: 3, title: "Spiti Valley", tagline: "Adventure for Soulmates", image: spiti, cat: "Premium Explorer" },
  { id: 4, title: "Kangra Temples", tagline: "Spiritual Divine Peace", image: bag, cat: "Family Special" },
  { id: 5, title: "Solan Valley", tagline: "The Mushroom City Escapes", image: sol, cat: "Small Family" },
  { id: 6, title: "Chamba & Dalhousie", tagline: "Switzerland of India", image: chamba, cat: "Couple Gateway" },
  { id: 7, title: "Kullu Valley", tagline: "Riverside Bliss & Rafting", image: kullu, cat: "Adventure Family" },
  { id: 8, title: "Palampur Tea Gardens", tagline: "Lush Greenery & Luxury", image: pal, cat: "Premium Stay" },
  { id: 9, title: "Chanshal Pass Dodra Kawar", tagline: "Lush Greenery & Luxury", image: Chanshal, cat: "Stay in Tent" }

];

function TrendingDestinations() {
  return (
    <section className="trending-premium-section">
      
      {/* Top Marquee with your requested offers */}
      <div className="top-booking-marquee">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          🔥 <strong style={{color: '#ffcc00'}}>SPECIAL OFFER:</strong> Book any 5-Day Himachal Package & Get a **FREE Romantic Candle Light Dinner** + **Welcome Gift Hamper** for Couples! 🎁 
          <span className="marquee-divider"> | </span>
          🚗 **FREE PRIVATE PICKUP:** Direct pickup from Chandigarh Airport/Railway Station to your Hotel! 
          <span className="marquee-divider"> | </span>
          🏩 <strong style={{color: '#00ff88'}}>LIVE BOOKING:</strong> 5 Newlywed Couples from Delhi & Punjab just confirmed their Manali Luxury Suite! 
          <span className="marquee-divider"> | </span>
          ❄️ **SPITI SPECIAL:** 15% OFF on Group Bookings for Small Families! 
          <span className="marquee-divider"> | </span>
          📞 **VIP SUPPORT:** Call/WhatsApp 89881-99226 for Instant Itinerary!
        </marquee>
      </div>

      <div className="content-wrapper-white">
        {/* Header Section */}
        <div className="luxury-header">
          <span className="premium-tag">Explore Himachal with Cyntax</span>
          <h2 className="title-text">Himalayan Luxury for Couples & Families</h2>
          <div className="header-divider"></div>
          <p className="deep-text">
            Experience the majestic peaks of Himachal where **Luxury meets Comfort**. 
            Whether you are a **Couple** looking for a romantic hideaway or a **Small Family** seeking a safe, premium adventure, we craft every moment with care. 
            From **Private Pickups in Chandigarh** to curated **Shaktipeeth Temple Tours**, 
            your journey is our priority.
          </p>
        </div>

        {/* Grid Section */}
        <div className="modern-grid-8">
          {destinations.map((item) => (
            <div className="luxury-card" key={item.id}>
              <div className="card-thumb">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className={`tag-badge ${item.cat.includes('Family') ? 'fam-tag' : 'couple-tag'}`}>
                  {item.cat}
                </div>
              </div>
              <div className="card-details">
                <h3>{item.title}</h3>
                <p>{item.tagline}</p>
                <div className="card-footer-luxury">
                   <span><i className="fas fa-map-marker-alt"></i> Himachal</span>
                   <button className="mini-view-btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingDestinations;