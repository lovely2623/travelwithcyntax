import React, { useState } from 'react';
import './Gallery.css';

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

const galleryImages = [
  { id: 1, src: 'shimla', category: 'Shimla', title: 'The Ridge, Shimla' },
  { id: 2, src: '', category: 'Manali', title: 'Snowy Solang Valley' },
  { id: 3, src: '', category: 'Spiti', title: 'Key Monastery' },
  { id: 4, src: '', category: 'Offbeat', title: 'Chanshal Pass Clouds' },
  { id: 5, src: '', category: 'Dalhousie', title: 'Khajjiar Meadows' },
  { id: 6, src: '', category: 'Spiritual', title: 'Jakhu Temple View' },
  { id: 7, src: '', category: 'Shimla', title: 'Toy Train Heritage' },
  { id: 8, src: '', category: 'Dharamshala', title: 'HPCA Cricket Stadium' },
  { id: 9, src: '', category: 'Offbeat', title: 'Pabbar Valley Rohru' },
  { id: 10, src: '', category: 'Spiritual', title: 'Mata Chintpurni Way' },
  { id: 11, src: '', category: 'Manali', title: 'Rohtang Pass Snow' },
  { id: 12, src: '', category: 'Spiti', title: 'Langza Buddha Statue' }
];

function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ['All', 'Shimla', 'Manali', 'Spiti', 'Offbeat', 'Spiritual'];

  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <h1>Himachal Through Our Lens 📸</h1>
        <p>Managed by <b>Lovely Mohit Thakur</b> | Cyntax Travels Memories</p>
      </section>

      {/* Categories Bar */}
      <div className="filter-wrapper">
        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="gallery-container">
        <div className="masonry-grid">
          {filteredImages.map(img => (
            <div className="masonry-item" key={img.id}>
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="masonry-overlay">
                <small>{img.category}</small>
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="gallery-footer-cta">
        <h2>Like what you see?</h2>
        <p>In haseen waadiyon mein aapka swagat hai. Aaj hi apna trip plan karein.</p>
        <button onClick={() => window.open('https://wa.me/918988199226', '_blank')}>
          <i className="fab fa-whatsapp"></i> Chat with Mohit Sir
        </button>
      </section>
    </div>
  );
}

export default Gallery;