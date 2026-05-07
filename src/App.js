import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mini from './components/Mini';
import TrendingDestinations from './components/TrendingDestinations';
import Booking from './components/Booking';
import WhyTrustUs from './components/WhyTrustUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TourPackages from './pages/TourPackages';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import ScratchCard from './components/ScratchCard';

// Scroll To Top Logic (Har page change par screen upar chali jaye)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};


// Home page component
function Home() {
  return (
    <>
    <ScratchCard />
      <TrendingDestinations />
        < WhyTrustUs />
      <Booking />
      <Testimonials />
    </>
  );
}




function App() {
  return (
    <Router>
      <ScrollToTop />

      <div>
      <Mini />
      <Navbar /> 

 <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<TourPackages />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} /> 
          <Route path="/Gallery" element={<Gallery />} /> 



        </Routes>
     
      <Footer />

      </div>
    </Router>
  );
}

export default App;