/* eslint-disable quotes */
import React from 'react';
import { home } from '../Images';

function HeroSection() {
  return (
    <div className="hero-section" id="hero">
      <div className="wrap-container">
        {/* Shades */}
        <div className="container">
          <div className="shade1"></div>
          <div className="shade2"></div>
        </div>

        <div className="center-flex container">
          <div className="left-side">
            <h1>Hire your Lawyer online now!</h1>
            <p className="hero-paragraph">
              Hiring your lawyer has never been easier! With our user-friendly online platform, you can now access top-notch legal expertise right from the comfort of your home or office. Our
              extensive network of skilled attorneys covers a wide range of practice areas, ensuring you find the perfect match for your specific legal needs. Simply browse through our profiles, read
              client reviews, and schedule a consultation with the lawyer of your choice. Our secure and efficient platform guarantees a seamless experience, allowing you to focus on what matters most
              - your case. Say goodbye to traditional hassles and embrace the convenience of hiring your lawyer online today!
            </p>
          </div>

          <div className="right-side">
            <div className="img-box">
              <div className="hero-bg"></div>
              <img src={home} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
