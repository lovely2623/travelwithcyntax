import React, { useState } from 'react';
import './TourPackages.css';

const allPackages = [
  { 
    id: 1, 
    title: "Shimla-Solan Sangam", 
    tagline: "Heritage, Temple & Hidden Mushroom Trails",
    duration: "4 Days / 3 Nights",
    pickup: "Chandigarh / Kalka",
    price: "*****",
    category: "Couple Special",
    itinerary: [
      { day: "Day 1", spot: "Pick-up from Chandigarh. Drive to Solan. Visit Jatoli Temple (Asia's Highest) & Karol Tibba (Hidden Cave)." },
      { day: "Day 2", spot: "Drive to Shimla. Visit Tara Devi & Sankat Mochan Temple for spiritual peace." },
      { day: "Day 3", spot: "Shimla Local: IIAS (Vice Regal Lodge), Jakhu Temple, Mall Road & Ridge walk." },
      { day: "Day 4", spot: "Naldhera Golf Course & Kufri. Evening drop at Chandigarh." }
    ],
    specialty: "A perfect mix of Shimla's heritage and Solan's unexplored beauty."
  },
  { 
    id: 2, 
    title: "Dhauladhar ki Chhaon (Dharamshala-Dalhousie)", 
    tagline: "Tibetan Soul & Mini Switzerland",
    duration: "5 Days / 4 Nights",
    pickup: "Chandigarh",
    price: "*****",
    category: "Family Fun",
    itinerary: [
      { day: "Day 1", spot: "Chandigarh to Dharamshala. Check-in and evening at HPCA Cricket Stadium." },
      { day: "Day 2", spot: "McLeodganj Magic: Dalai Lama Temple, Bhagsu Nag Falls & St. John's Church." },
      { day: "Day 3", spot: "Drive to Dalhousie. Relax and enjoy the colonial architecture." },
      { day: "Day 4", spot: "Full day trip to Khajjiar (Mini Switzerland). Horse riding & Pine forest walk." },
      { day: "Day 5", spot: "Chamba Local visit and departure towards Chandigarh." }
    ],
    specialty: "Stunning views of Dhauladhar ranges with Tibetan culture."
  },
  { 
    id: 3, 
    title: "Shaktipeeth Darshan (The Holy Tour)", 
    tagline: "Divine Blessings for the Family",
    duration: "4 Days / 3 Nights",
    pickup: "Chandigarh",
    price: "*****",
    category: "Spiritual",
    itinerary: [
      { day: "Day 1", spot: "Chandigarh to Mata Chintpurni Temple. Evening Aarti." },
      { day: "Day 2", spot: "Drive to Mata Jwala Ji. Visit the eternal flame. Afternoon at Baglamukhi Temple." },
      { day: "Day 3", spot: "Visit Kangra Devi Temple. Explore Kangra Fort (Ancient History)." },
      { day: "Day 4", spot: "Early morning at Chamunda Devi. Return drive to Chandigarh." }
    ],
    specialty: "A dedicated tour for spiritual souls covering major Himachal temples."
  },
  { 
    id: 4, 
    title: "Snow-Capped Soulmates (Manali-Kullu)", 
    tagline: "River Rafting & Snow Romance",
    duration: "4 Days / 3 Nights",
    pickup: "Chandigarh",
    price: "*****",
    category: "Couple Special",
    itinerary: [
      { day: "Day 1", spot: "Chandigarh to Manali. Scenic drive via Mandi. Evening at Mall Road." },
      { day: "Day 2", spot: "Rohtang Pass/Atal Tunnel visit. Snow activities at Solang Valley." },
      { day: "Day 3", spot: "Manali Local: Hidimba Temple, Vashisht Hot Springs. Afternoon Kullu Rafting." },
      { day: "Day 4", spot: "Kullu Shawl factory visit. Drive back to Chandigarh." }
    ],
    specialty: "High adventure with paragliding and romantic snow walks."
  },
  { 
    id: 5, 
    title: "The Offbeat Odyssey (Chanshal-Dodra)", 
    tagline: "Raw Beauty. Real Adventure.",
    duration: "6 Days / 5 Nights",
    pickup: "Shimla",
    price: "*****",
    category: "Adventure",
    itinerary: [
      { day: "Day 1", spot: "Shimla to Rohru via Pabbar Valley." },
      { day: "Day 2", spot: "Climb to Chanshal Pass (Highest Peak of Shimla). Camping at top." },
      { day: "Day 3", spot: "Trek to Dodra-Kawar villages. Meet the local tribes." },
      { day: "Day 4", spot: "Explore Saru Tal (Alpine Lake). Return to Rohru." },
      { day: "Day 5", spot: "Drive back to Shimla via Kotkhai Apple Orchards." }
    ],
    specialty: "No crowd, no noise. Pure mountain serenity for soul searchers."
  },
  { 
    id: 6, 
    title: "Spiti ka Sultan (The High Life)", 
    tagline: "The Middle Land Experience",
    duration: "9 Days / 8 Nights",
    pickup: "Shimla / Manali",
    price: "*****",
    category: "Premium",
    itinerary: [
      { day: "Day 1", spot: "Shimla to Sarahan via Sangla Valley." },
      { day: "Day 2", spot: "Sarahan to Kalpa. Sunset view of Kinner Kailash." },
      { day: "Day 3", spot: "Kalpa to Kaza. Entering the cold desert." },
      { day: "Day 4", spot: "Visit Key Monastery & Kibber (Highest inhabited village)." },
      { day: "Day 5-9", spot: "Hikkim, Langza, Chandratal Lake & exit via Rohtang to Manali." }
    ],
    specialty: "The ultimate bucket list tour of high altitude monasteries."
  }
];

function TourPackages() {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleWhatsApp = (pkgTitle) => {
    const msg = encodeURIComponent(`Hi Cyntax Travels! I'm interested in the "${pkgTitle}" package. Please share details and pricing.`);
    window.open(`https://wa.me/918988199226?text=${msg}`, '_blank');
  };

  return (
    <section className="tour-wrapper">
      <div className="tour-intro">
        <span className="gold-badge">Luxury Meets Mountains</span>
        <h2>Premium Himachal Itineraries 🏔️</h2>
        <p>Pickups from <strong>Shimla & Chandigarh</strong> | 2-3 Star Comfort Hotels</p>
      </div>

      <div className="tour-grid">
        {allPackages.map((pkg) => (
          <div className="package-card" key={pkg.id}>
            <div className="pkg-tag">{pkg.category}</div>
            <h3>{pkg.title}</h3>
            <p className="pkg-meta">{pkg.tagline}</p>
            <div className="pkg-specs">
              <span><i className="fas fa-calendar-day"></i> {pkg.duration}</span>
              <span><i className="fas fa-map-pin"></i> {pkg.pickup}</span>
            </div>
            <div className="pkg-bottom">
              <span className="pkg-price-hidden">INR {pkg.price}*</span>
              <button className="details-btn" onClick={() => setSelectedPkg(pkg)}>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILED MODAL */}
      {selectedPkg && (
        <div className="tour-modal-overlay">
          <div className="tour-modal-content">
            <button className="close-modal" onClick={() => setSelectedPkg(null)}>×</button>
            
            <div className="modal-header-img">
              <h2>{selectedPkg.title}</h2>
              <p>{selectedPkg.tagline}</p>
            </div>

            <div className="modal-inner-body">
              <div className="specialty-box">
                <strong>Why choose this?</strong>
                <p>{selectedPkg.specialty}</p>
              </div>

              <div className="itinerary-timeline">
                <h4>Full Itinerary Plan</h4>
                {selectedPkg.itinerary.map((dayPlan, i) => (
                  <div className="day-step" key={i}>
                    <div className="day-circle">{dayPlan.day}</div>
                    <div className="day-info">{dayPlan.spot}</div>
                  </div>
                ))}
              </div>

              <div className="package-note">
                <i className="fas fa-info-circle"></i> Rates vary in peak season. Contact us for the best live quote!
              </div>

              <button className="wa-enquire-btn" onClick={() => handleWhatsApp(selectedPkg.title)}>
                <i className="fab fa-whatsapp"></i> Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default TourPackages;