/* eslint-disable quotes */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterLinkData from '../Data/FooterLinkData';
import { logo } from '../Images';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="my-footer">
      {/* Footer Top */}
      <div className="footer-top">
        {/* Logo + Details */}
        <div className="my-site-details">
          <img src={logo} className="my-logo" alt="logo" />
          <p className="my-site-description">{/* Your site description here */}</p>
          <div className="my-social-icons">{/* Social icons here */}</div>
        </div>

        {/* Footer Links */}
        <div className="my-footer-links">
          <div className="my-section">
            <h1 className="my-section-title">Important Links</h1>
            <ul className="list-style ">
              {FooterLinkData.map((item) => (
                <Link key={item.id} to={`/${item.link}`} className="my-list-item link cursor-pointer ">
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="my-copyright">
        Copyright&copy; 2023
        <Link to="/" className="link-style">
          Wakeel App
        </Link>
        | All rights are reserved
      </div>
    </footer>
  );
}

export default Footer;
