import React, { useState, useEffect } from 'react';
import './ScratchCard.css';

const ScratchCard = () => {
    const [mobile, setMobile] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState(false);

    const wheelOptions = [
        "FREE Kufri Trip", "FREE Chadwick Fall", "FREE Sankat Mochan", 
        "FREE Jakhu Trip", "FREE IIAS Trip", "FREE Annandale Trip", 
        "₹101 Cashback", "₹201 Cashback",
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
        if (mobile.length >= 10) setIsVerified(true);
        else alert("Please enter a valid WhatsApp number!");
    };

    const spinWheel = () => {
        if (!isVerified || isSpinning || alreadyPlayed) return;
        setIsSpinning(true);
        const randomDegree = Math.floor(5000 + Math.random() * 5000);
        setRotation(randomDegree);

        setTimeout(() => {
            const actualDeg = randomDegree % 360;
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
        const text = `Hi Travel with Cyntax! 🏔️%0A%0AI won: ${spinResult}%0A*Coupon:* CYN${coupon}%0A*Mob:* ${mobile}%0A%0AConfirm my booking! ✅`;
        window.open(`https://wa.me/918988199226?text=${text}`, '_blank');
    };

    return (
        <main className="cyntax-container">
            <div className="content-wrapper">
                {/* Left Side: The Game */}
                <section className="game-card">
                    <header className="spin-header">
                        <h1 className="brand-title">Spin & <span className="red-accent">Win</span></h1>
                        <p className="sub-tag">Explore Shimla with Cyntax Travel Partner</p>
                        
                        {!isVerified ? (
                            <form className="phone-auth-form" onSubmit={handleVerify}>
                                <input 
                                    type="tel" 
                                    placeholder="Enter WhatsApp Number" 
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                />
                                <button type="submit">Unlock Game</button>
                            </form>
                        ) : (
                            <div className="unlock-status">✅ Ready to Spin: {mobile}</div>
                        )}
                    </header>

                    <div className={`wheel-box ${!isVerified ? 'is-locked' : ''}`}>
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
                    </div>

                    {alreadyPlayed && spinResult && (
                        <div className="win-announcement">
                            <h3>🎉 Winner: {spinResult}</h3>
                            <button className="whatsapp-redirect-btn" onClick={sendToWhatsApp}>
                                Claim on WhatsApp
                            </button>
                        </div>
                    )}
                </section>

                {/* Right Side: Professional Emergency Info */}
                <aside className="info-sidebar">
                    <div className="emergency-card">
                        <h3>🚑 24/7 Emergency Support</h3>
                        <p>Your safety is our priority while traveling Shimla & Solan.</p>
                        
                        <div className="contact-list">
                            <div className="contact-item highlight">
                                <span>Cyntax Support:</span>
                                <a href="tel:8988199226">89881-199226</a>
                            </div>
                            <div className="contact-item">
                                <span>IGMC Shimla:</span>
                                <a href="tel:01772804251">0177-2804251</a>
                            </div>
                            <div className="contact-item">
                                <span>AIIMS Bilaspur:</span>
                                <a href="tel:01978272500">01978-272500</a>
                            </div>
                            <div className="contact-item">
                                <span>Police Helpline:</span>
                                <a href="tel:112">112 / 100</a>
                            </div>
                        </div>
                        <div className="pro-badge">Official Travel Partner</div>
                    </div>

                    <div className="trust-factors">
                        <div className="t-item">🛡️ Insured Trips</div>
                        <div className="t-item">🏔️ Local Guides</div>
                        <div className="t-item">🚗 Sanatized Cabs</div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default ScratchCard;