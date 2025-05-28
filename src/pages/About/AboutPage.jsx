import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Navbar - Same as before */}
      {/* <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png" 
                alt="ConnectHub Logo" 
                className="logo-img"
              />
            </Link>
          </div>
          <div className="navbar-right">
            <Link to="/" className="navbar-button">
              <span className="button-icon">🏠</span> Home
            </Link>
          </div>
        </div>
      </nav> */}

      <main className="about-content">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-text">
            <h1>About ConnectHub <span className="wave-emoji">👋</span></h1>
            <p className="subtitle">Seamless video conferencing for everyone</p>
          </div>
          <div className="hero-image">
            <img 
              src="https://illustrations.popsy.co/amber/remote-meeting.svg" 
              alt="Video Conference Illustration"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose ConnectHub? <span className="emoji">✨</span></h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>HD Video Meetings</h3>
              <p>Crystal clear video quality with adaptive resolution</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>End-to-end encrypted meetings for your privacy</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Low latency connections for real-time communication</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Built-in Chat</h3>
              <p>Real-time messaging during your meetings</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>File Sharing</h3>
              <p>Share documents and images during calls</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Browser Based</h3>
              <p>No downloads required - works in any modern browser</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works <span className="emoji">🤔</span></h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create or Join</h3>
                <p>Create a new meeting or join with a code</p>
                <img 
                  src="https://illustrations.popsy.co/amber/entering-code.svg" 
                  alt="Enter code illustration"
                  className="step-image"
                />
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Invite Participants</h3>
                <p>Share your meeting link with others</p>
                <img 
                  src="https://illustrations.popsy.co/amber/sharing-files.svg" 
                  alt="Sharing illustration"
                  className="step-image"
                />
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Start Connecting</h3>
                <p>Begin your video conference instantly</p>
                <img 
                  src="https://illustrations.popsy.co/amber/video-call.svg" 
                  alt="Video call illustration"
                  className="step-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Get In Touch <span className="emoji">📧</span></h2>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>support@connecthub.com</p>
              <a href="mailto:support@connecthub.com" className="contact-button">
                Send Email
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available 24/7 for instant support</p>
              <button className="contact-button">
                Start Chat
              </button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 (800) 123-4567</p>
              <button className="contact-button">
                Call Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png" 
              alt="ConnectHub Logo" 
              className="logo-img"
            />
            <span>ConnectHub</span>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-social">
            <a href="#"><span className="social-icon">🐦</span></a>
            <a href="#"><span className="social-icon">📘</span></a>
            <a href="#"><span className="social-icon">📸</span></a>
            <a href="#"><span className="social-icon">🔗</span></a>
          </div>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} ConnectHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;