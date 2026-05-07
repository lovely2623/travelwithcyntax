import React, { useState, useEffect } from 'react';
import './ScratchCard.css';

const ScratchCard = () => {
    const [mobile, setMobile] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);

    // --- यहाँ से तुम ऑप्शंस बदल सकते हो (Total 8 होने चाहिए) ---
    const wheelOptions = [
        "FREE Kufri Trip", 
        "FREE Chadwick Fall", 
        "FREE Sankat Mochan", 
        "FREE Jakhu Trip", 
        "FREE IIAS Trip", 
        "FREE Annandale Trip", 
        "₹101 Cashback", 
        "₹201 Cashback",
        
    ];

    useEffect(() => {
        const spPlayed = localStorage.getItem('cyntax_spin_result');
        if (spPlayed) {
            setAlreadyPlayed(true);
            setSpinResult(spPlayed);
        }
    }, []);

    const handleVerify = (e) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setIsVerified(true);
        } else {
            alert("Please enter a valid WhatsApp number!");
        }
    };

    const spinWheel = () => {
        if (!isVerified || isSpinning || alreadyPlayed) return;
        
        setIsSpinning(true);
        // 5000+ degrees for multiple smooth rotations
        const randomDegree = Math.floor(5000 + Math.random() * 5000);
        setRotation(randomDegree);

        setTimeout(() => {
            const actualDeg = randomDegree % 360;
            // Calculate which slice landed at the top (pointer position)
            const sliceAngle = 360 / wheelOptions.length;
            const index = Math.floor((360 - actualDeg) / sliceAngle);
            const result = wheelOptions[index];
            
            setSpinResult(result);
            setIsSpinning(false);
            setAlreadyPlayed(true);
            localStorage.setItem('cyntax_spin_result', result);
        }, 4000);
    };

    const sendToWhatsApp = () => {
        const coupon = Math.floor(100000 + Math.random() * 900000);
        const text = `Hi Travel with Cyntax! 🏔️%0A%0AI just won a reward on your Spin Wheel!%0A%0A*Reward:* ${spinResult}%0A*Coupon ID:* CYN${coupon}%0A*WhatsApp No:* ${mobile}%0A%0AAttached is the screenshot of my win. Please confirm my booking! ✅`;
        window.open(`https://wa.me/918988199226?text=${text}`, '_blank');
    };

    return (
        <div className="cyntax-spin-page">
            <div className="spin-main-content">
                <header className="spin-header">
                    <h1 className="brand-title">Game with <span className="red-accent">Cyntax</span></h1>
                    <p className="sub-tag">Spin the Wheel & Explore Shimla for Free!</p>
                    
                    {!isVerified ? (
                        <form className="phone-auth-form" onSubmit={handleVerify}>
                            <input 
                                type="number" 
                                placeholder="Enter WhatsApp Number to Unlock" 
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                            <button type="submit">Unlock Spin</button>
                        </form>
                    ) : (
                        <div className="unlock-status">✨ Ready to Win, {mobile}!</div>
                    )}
                </header>

                <div className={`spin-section ${!isVerified ? 'is-locked' : ''}`}>
                    <div className="wheel-container">
                        <div className="wheel-pointer"></div>
                        <div className="the-wheel-body" style={{ transform: `rotate(${rotation}deg)` }}>
                            {wheelOptions.map((opt, i) => (
                                <div key={i} className="wheel-slice" style={{ '--i': i }}>
                                    <span>{opt}</span>
                                </div>
                            ))}
                        </div>
                        <button className="spin-trigger-btn" onClick={spinWheel} disabled={isSpinning || alreadyPlayed}>
                            {isSpinning ? "..." : "SPIN"}
                        </button>
                    </div>

                    {alreadyPlayed && spinResult && (
                        <div className="win-announcement">
                            <h3>🎉 You Won: {spinResult}</h3>
                            <p>Take a screenshot & click below to claim on WhatsApp!</p>
                            <button className="whatsapp-redirect-btn" onClick={sendToWhatsApp}>
                                Book My Trip Now
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScratchCard;