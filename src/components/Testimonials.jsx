import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const reviews = [
  { id: 1, name: "Arjun & Sneha", role: "Honeymooners", review: "Privacy was our main concern. Cyntax delivered 100% safe and romantic stays. The gift hamper was lovely!", stars: 5 },
  { id: 2, name: "Vikram Rathore", role: "Solo Explorer", review: "Local expertise is unmatched. They know the hidden gems of Spiti that no one else shows. Best service!", stars: 5 },
  { id: 3, name: "The Sharma Family", role: "Family Trip", review: "Traveling with kids was so easy. The 24/7 support helped us find a doctor in Manali instantly at night.", stars: 5 },
  { id: 4, name: "Rohan & Aditi", role: "Couple Getaway", review: "Chandigarh pickup was smooth. Luxury SUV and very polite driver. Our Shimla tour was perfectly curated.", stars: 5 },
  { id: 5, name: "Karan Mehra", role: "Business Tour", review: "Professional, transparent, and 0% hidden fees. Cyntax is the most trustworthy agency in Himachal.", stars: 5 },
  { id: 6, name: "Anjali Kapoor", role: "Small Family", review: "The Shaktipeeth temple tour was spiritual and well-organized. Luggage safety and privacy were excellent.", stars: 5 },
  { id: 7, name: "Sameer & Ishita", role: "Soulmates", review: "Luxury riverside camp in Kullu was the highlight! Cyntax team treats you like family. Must book!", stars: 5 },
  { id: 8, name: "Megha Verma", role: "Group of Friends", review: "Very safe for female travelers. English/Hindi speaking guides made communication very easy. Great experience!", stars: 5 },
  { id: 9, name: "Amit & Priya", role: "Newlyweds", review: "From first aid to luxury dinners, they took care of everything. Best surprise gift ever! Thank you.", stars: 5 }
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardsPerPage = 3; // Desktop par 3 cards
  const totalDots = Math.ceil(reviews.length / cardsPerPage); // 9 / 3 = 3 Dots

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalDots);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalDots]);

  return (
    <section className="testimonials-luxury">
      <div className="testi-wrapper">
        
        <header className="testi-header-center">
          <span className="gold-tag">Guest Experiences</span>
          <h2 className="title-premium">Trusted by <span>Happy Couples</span></h2>
          <div className="header-line-blue"></div>
        </header>

        <div className="carousel-view-port">
          <div 
            className="carousel-track-flex" 
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((item) => (
              <div className="testi-slide" key={item.id}>
                <div className="luxury-glass-card">
                  <div className="card-top-row">
                    <div className="avatar-letter">{item.name.charAt(0)}</div>
                    <div className="stars-wrap">
                      {[...Array(item.stars)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  
                  <p className="feedback-text">"{item.review}"</p>
                  
                  <div className="card-author">
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                  <i className="fas fa-quote-right card-bg-icon"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed: Only 3 Dots for 9 Reviews (Group of 3) */}
        <div className="carousel-nav-dots">
          {[...Array(totalDots)].map((_, i) => (
            <button 
              key={i} 
              className={`nav-dot ${index === i ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;