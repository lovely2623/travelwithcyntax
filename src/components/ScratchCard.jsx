import React, { useState, useEffect } from 'react';
import './ScratchCard.css';

const ScratchCard = () => {
    const [scratched, setScratched] = useState(false);
    const [scratchReward, setScratchReward] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState({ scratch: false, spin: false });

    const wheelOptions = [
        "FREE Kufri Trip", 
        "Chadwick Fall", 
        "Sankat Mochan", 
        "Jakhu Trip", 
        "IIAS Trip", 
        "Annandale Trip", 
        "Hard Luck", 
        "50% OFF Deal"
    ];

    const scratchOffers = [
        "Flat ₹2500 OFF on Bill",
        "Free Dinner at Mall Road",
        "Buy 1 Get 1 Adventure",
        "VIP Pass to Chadwick Falls"
    ];

    useEffect(() => {
        // LocalStorage Check (Simulated IP tracking)
        const sPlayed = localStorage.getItem('cyntax_scratch');
        const spPlayed = localStorage.getItem('cyntax_spin');
        
        if (sPlayed) setAlreadyPlayed(prev => ({ ...prev, scratch: true }));
        if (spPlayed) setAlreadyPlayed(prev => ({ ...prev, spin: true }));

        setScratchReward(scratchOffers[Math.floor(Math.random() * scratchOffers.length)]);
    }, []);

    const handleScratch = () => {
        if (alreadyPlayed.scratch) return;
        setScratched(true);
        localStorage.setItem('cyntax_scratch', 'Played');
    };

    const spinWheel = () => {
        if (isSpinning || alreadyPlayed.spin) return;

        setIsSpinning(true);
        const randomDegree = Math.floor(5000 + Math.random() * 5000); // Massive rotation
        setRotation(randomDegree);

        setTimeout(() => {
            const actualDeg = randomDegree % 360;
            const index = Math.floor((360 - actualDeg) / (360 / wheelOptions.length));
            setSpinResult(wheelOptions[index]);
            setIsSpinning(false);
            setAlreadyPlayed(prev => ({ ...prev, spin: true }));
            localStorage.setItem('cyntax_spin', wheelOptions[index]);
        }, 4000);
    };

    return (
        <div className="cyntax-main-wrapper">
            <header className="game-header">
                <h1>Travel With <span className="neon-text">Cyntax</span> Lucky Hub</h1>
                <p>Exclusive Shimla Deals - One Try Per Device</p>
            </header>

            <div className="game-container">
                {/* --- Scratch Card Section --- */}
                <div className="card-box">
                    <h2 className="card-title">Scratch & Win</h2>
                    {alreadyPlayed.scratch ? (
                        <div className="played-status">Reward Claimed! Check your IP history.</div>
                    ) : (
                        <div className={`scratch-pad ${scratched ? 'revealed' : ''}`} onClick={handleScratch}>
                            <div className="scratch-content">
                                <span>CONGRATS!</span>
                                <h3>{scratchReward}</h3>
                            </div>
                            <div className="scratch-cover">
                                <div className="pattern"></div>
                                <p>SCRATCH HERE</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* --- Spin Wheel Section --- */}
                <div className="card-box">
                    <h2 className="card-title">Spin The Wheel</h2>
                    {alreadyPlayed.spin ? (
                        <div className="played-status">You Won: {localStorage.getItem('cyntax_spin')}</div>
                    ) : (
                        <div className="wheel-wrapper">
                            <div className="wheel-pointer"></div>
                            <div className="the-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
                                {wheelOptions.map((opt, i) => (
                                    <div key={i} className="wheel-segment" style={{ '--i': i }}>
                                        <span>{opt}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="spin-btn" onClick={spinWheel} disabled={isSpinning}>
                                {isSpinning ? "..." : "SPIN"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {spinResult && <div className="popup-notif">You Won: {spinResult} 🎉</div>}
        </div>
    );
};

export default ScratchCard;