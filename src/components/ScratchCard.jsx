import React, { useEffect, useRef, useState } from 'react';
import './ScratchCard.css';

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [reward, setReward] = useState("");
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);

  const offers = [
    "FREE Chadwick Falls Trip (Shimla) 🌲",
    "Flat ₹2000 OFF on Final Bill 💸",
    "Free Dinner at Mall Road 🍲",
    "20% Discount on Luxury Stay 🏨",
    "Buy 1 Get 1 Adventure Activity 🧗"
  ];

  useEffect(() => {
    // Check if user already played (LocalStorage check)
    const hasPlayed = localStorage.getItem('cyntax_reward_claimed');
    if (hasPlayed) {
      setAlreadyPlayed(true);
      setReward(hasPlayed);
      return;
    }

    // Random Reward Selection
    const randomOffer = offers[Math.floor(Math.random() * offers.length)];
    setReward(randomOffer);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Fill with silver scratch layer
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, width, height);
    
    // Add some pattern to the scratch area
    ctx.font = "20px Arial";
    ctx.fillStyle = "#888";
    ctx.fillText("Scratch to Win!", 50, 80);

    const scratch = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - rect.left;
      const y = (e.clientY || e.touches[0].clientY) - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();

      checkScratchPercentage();
    };

    const checkScratchPercentage = () => {
      const imageData = ctx.getImageData(0, 0, width, height);
      let count = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] === 0) count++;
      }
      if (count > (imageData.data.length / 4) * 0.6) {
        setIsScratched(true);
        localStorage.setItem('cyntax_reward_claimed', randomOffer);
      }
    };

    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch);

    return () => {
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('touchmove', scratch);
    };
  }, []);

  return (
    <div className="scratch-container">
      <div className="scratch-wrapper">
        <h2 className="offer-title">Exclusive Travelers Deal 🎁</h2>
        
        {alreadyPlayed ? (
          <div className="already-played">
            <h3>You already claimed:</h3>
            <div className="reward-text-final">{reward}</div>
            <p>Offer linked to your IP/Device</p>
          </div>
        ) : (
          <div className="canvas-area">
            <div className="reward-underneath">{reward}</div>
            <canvas 
              ref={canvasRef} 
              width={300} 
              height={150} 
              className={`scratch-canvas ${isScratched ? 'fade-out' : ''}`}
            />
          </div>
        )}
        
        {isScratched && !alreadyPlayed && (
          <div className="congrats-msg">🎉 Congratulations! Take a screenshot to redeem.</div>
        )}
      </div>
    </div>
  );
};

export default ScratchCard;