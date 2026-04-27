import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1597033648617-35727d21c0e9?q=80&w=800', category: 'Shimla', title: 'The Ridge, Shimla' },
  { id: 2, src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800', category: 'Manali', title: 'Snowy Solang Valley' },
  { id: 3, src: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=800', category: 'Spiti', title: 'Key Monastery' },
  { id: 4, src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800', category: 'Offbeat', title: 'Chanshal Pass Clouds' },
  { id: 5, src: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=800', category: 'Dalhousie', title: 'Khajjiar Meadows' },
  { id: 6, src: 'https://images.unsplash.com/photo-1621230135676-cb26e896d2ec?q=80&w=800', category: 'Spiritual', title: 'Jakhu Temple View' },
  { id: 7, src: 'https://images.unsplash.com/photo-1615822977464-96d596409605?q=80&w=800', category: 'Shimla', title: 'Toy Train Heritage' },
  { id: 8, src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800', category: 'Dharamshala', title: 'HPCA Cricket Stadium' },
  { id: 9, src: 'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?q=80&w=800', category: 'Offbeat', title: 'Pabbar Valley Rohru' },
  { id: 10, src: 'https://images.unsplash.com/photo-1620658422475-6f17e0591244?q=80&w=800', category: 'Spiritual', title: 'Mata Chintpurni Way' },
  { id: 11, src: 'https://images.unsplash.com/photo-1603566232044-6019a1288c03?q=80&w=800', category: 'Manali', title: 'Rohtang Pass Snow' },
  { id: 12, src: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800', category: 'Spiti', title: 'Langza Buddha Statue' }
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