import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { logo } from '../Images';
import PrimaryNavbar from '../Data/PrimaryNavbar';

function Footer() {
  return (
    <footer className="my-footer">
      <div className="footer-top">
        <div className="footer-row">
          {/* Column 1: Logo & About */}
          <div className="footer-col">
            <div className="logo">
              <a href="/">
                {' '}
                <img src={logo} alt="logo" />{' '}
              </a>
            </div>

            <p className="my-site-description">
              Wakeel App provides online legal services, client management, and professional dealings with lawyers. Our mission is to make law accessible for everyone.
            </p>
            <div className="my-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="footer-col">
            <h2 className="my-section-title">Important Links</h2>
            <ul className="list-style">
              <li>
                <Link to="/" className="my-list-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="my-list-item">
                  About
                </Link>
              </li>
              <li>
                <Link to="#features" className="my-list-item">
                  Feature
                </Link>
              </li>
              <li>
                <Link to="#services" className="my-list-item">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#online-dealings" className="my-list-item">
                  Online Dealings
                </Link>
              </li>
              <li>
                <Link to="#connect-with-us" className="my-list-item">
                  Connect With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h2 className="my-section-title">Contact Us</h2>
            <ul className="list-style">
              <li className="my-list-item">
                <FaMapMarkerAlt className="inline-icon" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="my-list-item">
                <FaPhoneAlt className="inline-icon" />
                <span>+92 300 1234567</span>
              </li>
              <li className="my-list-item">
                <FaEnvelope className="inline-icon" />
                <span>info@wakeelapp.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="my-copyright">
        © <span>{new Date().getFullYear()}</span>{' '}
        <Link to="/" className="link-style">
          Wakeel App
        </Link>{' '}
        | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
