import React from 'react';
import { logo } from '../Images';
import { Link } from "react-router-dom";
import { FaDribbbleSquare, FaFacebookSquare, FaYoutubeSquare, FaInstagram, FaTwitterSquare, } from 'react-icons/fa';
import { FooterLink } from "../Data";
const Footer = () => {
    return (

        <footer className='my-footer'>

            {/* Footer Top */}
            <div className='footer-top'>

                {/* Logo + Deatils */}
                <div className='my-site-details'>
                    <img src={logo} className='my-logo' alt='logo' />
                    <p className='my-site-description'>
                        Wakeel App provides a platform that allows skilled and experienced
                        professionals to connect with clients looking for specific services. Wakeel App provides a platform that allows skilled and experienced
                        professionals to connect with clients looking for specific services. Wakeel App provides a platform that allows skilled and experienced
                        professionals to connect with clients looking for specific services.
                    </p>
                    <div className='my-social-icons'>
                        <FaFacebookSquare className='cursor-pointer' />
                        <FaInstagram className='cursor-pointer' />
                        <FaTwitterSquare className='cursor-pointer' />
                        <FaYoutubeSquare className='cursor-pointer' />
                        <FaDribbbleSquare className='cursor-pointer' />
                    </div>
                </div>

                {/* Footer Links */}
                <div className='my-footer-links'>
                    <div className='my-section'>
                        <h1 className='my-section-title'>{FooterLink.title}</h1>
                        <ul className='list-style'>
                            {FooterLink.items.map((item) => (
                                <li className='my-list-item' key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className='my-copyright'>
                Copyright &copy; 2023 <Link to='/' className='link-style'>Wakeel App</Link> | All rights are reserved
            </div>
        </footer>
    );
};

export default Footer;