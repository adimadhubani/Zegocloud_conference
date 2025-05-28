import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Create this CSS file for styling
import Navbar from "./Navbar"

const HomePage = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }

    return (
        <>
        {/* <Navbar/> */}
        <div className="home-page-container">
            <div className="home-page-content">
                <div className="left-section">
                    <div className="header-section">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png" 
                            alt="Video Chat Logo" 
                            className="logo"
                        />
                        <h1>Welcome to ConnectHub <span className="wave-emoji">👋</span></h1>
                        <p className="subtitle">High-quality video meetings in your browser</p>
                    </div>
                    
                    <form className="room-form" onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="roomCode">
                                <span className="label-icon">🔑</span> Enter Room Code
                            </label>
                            <input 
                                id="roomCode"
                                type="text" 
                                value={roomCode} 
                                onChange={(e) => setRoomCode(e.target.value)} 
                                required 
                                placeholder="e.g. ADITYA-2314" 
                                className="room-input"
                            />
                        </div>
                        <button type="submit" className="enter-button">
                            Join Room <span className="button-emoji">🚀</span>
                        </button>
                    </form>

                    <div className="features-section">
                        <div className="feature">
                            <span className="feature-icon">🎥</span>
                            <h3>HD Video</h3>
                            <p>Crystal clear video quality</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🔒</span>
                            <h3>Secure</h3>
                            <p>End-to-end encryption</p>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">💬</span>
                            <h3>Chat</h3>
                            <p>Real-time messaging</p>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="illustration">
                        <img 
                            src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
                            alt="Video call illustration"
                            className="hero-image"
                        />
                    </div>
                    <div className="testimonial">
                        <p>"The easiest way to connect with my remote team!"</p>
                        <div className="user">
                            <img 
                                src="https://randomuser.me/api/portraits/women/44.jpg" 
                                alt="User"
                                className="user-avatar"
                            />
                            <span>Adi, Marketing Director</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="footer">
                <p>Made with <span className="heart-emoji">❤️</span> by ConnectHub Team • © 2023</p>
            </footer>
        </div>
        </>
    )
};

export default HomePage;
