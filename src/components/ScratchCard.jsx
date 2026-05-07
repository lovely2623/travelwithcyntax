import React, { useState, useEffect } from 'react';
import './ScratchCard.css';

const ScratchCard = () => {
    const [mobile, setMobile] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [scratched, setScratched] = useState(false);
    const [scratchReward, setScratchReward] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinResult, setSpinResult] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [alreadyPlayed, setAlreadyPlayed] = useState({ scratch: false, spin: false });

    const wheelOptions = [
        "FREE Kufri Trip", "Chadwick Fall", "Sankat Mochan", 
        "Jakhu Trip", "IIAS Trip", "Annandale Trip", 
        "₹500 Cashback", "50% OFF Deal"
    ];

    const scratchOffers = [
        "Flat ₹2500 OFF", "Free Dinner @ Mall Road", 
        "BOGO Adventure", "VIP Chadwick Pass"
    ];

    useEffect(() => {
        const sPlayed = localStorage.getItem('cyntax_scratch');
        const spPlayed = localStorage.getItem('cyntax_spin');
        if (sPlayed) setAlreadyPlayed(prev => ({ ...prev, scratch: true }));
        if (spPlayed) setAlreadyPlayed(prev => ({ ...prev, spin: true }));
        
        setScratchReward(scratchOffers[Math.floor(Math.random() * scratchOffers.length)]);
    }, []);

    const handleVerify = (e) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setIsVerified(true);
        } else {
            alert("Please enter a valid WhatsApp number!");
        }
    };

    const handleScratch = () => {
        if (!isVerified || alreadyPlayed.scratch) return;
        setScratched(true);
        localStorage.setItem('cyntax_scratch', scratchReward);
    };

    const spinWheel = () => {
        if (!isVerified || isSpinning || alreadyPlayed.spin) return;
        setIsSpinning(true);
        const randomDegree = Math.floor(5000 + Math.random() * 5000);
        setRotation(randomDegree);

        setTimeout(() => {
            const actualDeg = randomDegree % 360;
            const index = Math.floor((360 - actualDeg) / (360 / wheelOptions.length));
            const result = wheelOptions[index];
            setSpinResult(result);
            setIsSpinning(false);
            setAlreadyPlayed(prev => ({ ...prev, spin: true }));
            localStorage.setItem('cyntax_spin', result);
        }, 4000);
    };

    const sendToWhatsApp = (type, reward) => {
        const coupon = Math.floor(100000 + Math.random() * 900000);
        const text = `Hi Travel with Cyntax! 🏔️%0A%0AI just won a reward on your website!%0A%0A*Game Type:* ${type}%0A*Reward:* ${reward}%0A*Coupon ID:* CYN${coupon}%0A*My Number:* ${mobile}%0A%0AAttached is my screenshot. Please book my trip! ✅`;
        window.open(`https://wa.me/918988199226?text=${text}`, '_blank');
    };

    return (
        <div className="cyntax-outer-container">
            <div className="game-wrapper">
                <header className="header-section">
                    <h1 className="brand-name">Travel with <span className="highlight">Cyntax</span></h1>
                    <p className="tagline">Grab Your Exclusive Shimla Deals!</p>
                    
                    {!isVerified ? (
                        <form className="verify-box" onSubmit={handleVerify}>
                            <input 
                                type="number" 
                                placeholder="Enter WhatsApp Number to Unlock" 
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                            <button type="submit">Unlock Games</button>
                        </form>
                    ) : (
                        <div className="unlocked-msg">✅ Games Unlocked! Good Luck, {mobile}</div>
                    )}
                </header>

                <div className={`games-grid ${!isVerified ? 'locked' : ''}`}>
                    {/* Scratch Card */}
                    <div className="game-card">
                        <h3>Scratch & Win</h3>
                        {alreadyPlayed.scratch ? (
                            <div className="claimed-box">
                                <p>You Won: <b>{localStorage.getItem('cyntax_scratch')}</b></p>
                                <button className="wa-btn" onClick={() => sendToWhatsApp('Scratch Card', localStorage.getItem('cyntax_scratch'))}>Book with WhatsApp</button>
                            </div>
                        ) : (
                            <div className={`scratch-pad ${scratched ? 'revealed' : ''}`} onClick={handleScratch}>
                                <div className="reward-layer">
                                    <span className="congrats">WINNER!</span>
                                    <span className="reward-val">{scratchReward}</span>
                                    <button className="claim-now" onClick={(e) => { e.stopPropagation(); sendToWhatsApp('Scratch Card', scratchReward); }}>Redeem Now</button>
                                </div>
                                <div className="cover-layer">
                                    <p>SCRATCH ME</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Spin Wheel */}
                    <div className="game-card">
                        <h3>Lucky Spin</h3>
                        {alreadyPlayed.spin ? (
                            <div className="claimed-box">
                                <p>You Won: <b>{localStorage.getItem('cyntax_spin')}</b></p>
                                <button className="wa-btn" onClick={() => sendToWhatsApp('Spin Wheel', localStorage.getItem('cyntax_spin'))}>Book with WhatsApp</button>
                            </div>
                        ) : (
                            <div className="wheel-box">
                                <div className="pointer"></div>
                                <div className="wheel-graphic" style={{ transform: `rotate(${rotation}deg)` }}>
                                    {wheelOptions.map((opt, i) => (
                                        <div key={i} className="segment" style={{ '--i': i }}>
                                            <span>{opt}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="center-spin" onClick={spinWheel} disabled={isSpinning}>
                                    {isSpinning ? "..." : "SPIN"}
                                </button>
                            </div>
                        )}
                        {spinResult && !isSpinning && <p className="take-ss">📸 Take Screenshot & Book!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScratchCard;