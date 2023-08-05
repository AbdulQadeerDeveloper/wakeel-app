import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../Images';
import { PrimaryNavbar } from '../Data';
import { ImDownload } from 'react-icons/im';

const PrimaryNav = () => {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleScroll = () => {
    if (window.pageYOffset >= 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  const extractRouteFromURL = (url) => {
    const urlParts = url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart.startsWith('#')) {
      return '';
    }
    return lastPart;
  };

  const currentRoute = extractRouteFromURL(window.location.href);
  // console.log(currentRoute)

  return (
    <div className={`primary-nav ${bgColor ? 'active-bg' : ''}`}>
      {/* Navbar */}
      <nav className={`navbar`}>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>

        {/* Desktop Navbar */}
        <ul className="navbar-menu">
          {PrimaryNavbar.map((e) => (
            <Link key={e.id} to={`/${e.link}`} className={`navbar-link`}>
              <li className={`nav-items ${toggle ? 'down-menu-animation' : ''}`}
                onClick={(event) => {
                  if (currentRoute === '' || currentRoute === '/') {
                    event.stopPropagation()
                  }
                }}>
                {e.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Toggle Menu */}
        <div className="toggle-btn" onClick={() => setToggle(!toggle)}>
          <div className={` toggle ${toggle ? 'toggle-active active-navbar' : 'toggle'}`}></div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className={`mob-navbar ${toggle ? 'mob-navbar-active' : ''}`}>
        <div className={`border-b`}></div>
        <ul className="mob-navbar-menu">
          {PrimaryNavbar.map((e) => (
            <Link
              key={e.id}
              to={`/${e.link}`}
              className={`navbar-link`}>
              <li className={`nav-items ${toggle ? 'down-menu-animation' : ''}`} onClick={(event) => {
                  setToggle(false)
                  if (currentRoute === '' || currentRoute === '/') {
                    event.stopPropagation()
                  }
                }}>
                {e.title}
              </li>
            </Link>
          ))}

          <button
            type="button"
            className="center-flex global-btn"
            onClick={() => {
              setToggle(false);
              navigate('/download');
            }}
          >
            <ImDownload className="btn-icon" />
            <span>Download</span>
          </button>
        </ul>
      </div>

      {/* Download Button */}
      <div className="center-flex download-btn">
        <button type="button" className="center-flex global-btn" onClick={() => navigate('/download')}>
          <ImDownload className="btn-icon" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default PrimaryNav;
