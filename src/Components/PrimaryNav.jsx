/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quotes */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImDownload } from 'react-icons/im';
import { logo } from '../Images';
import PrimaryNavbar from '../Data/PrimaryNavbar';

function PrimaryNav() {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.pageYOffset >= 200) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  const handleRoute = (event) => {
    setToggle(false);
    if (currentRoute === '' || currentRoute === '/') {
      event.stopPropagation();
    }
  };

  const handleKeyDown = (event, link) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      // Handle keyboard interaction here
      handleRoute(link);
    }
  };

  return (
    <div className={`primary-nav ${bgColor ? 'active-bg' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>

        {/* Desktop Navbar */}
        <ul className="navbar-menu">
          {PrimaryNavbar.map((e) => (
            <Link key={e.id} to={`/${e.link}`} className="navbar-link">
              <li
                className={`nav-items ${toggle ? 'down-menu-animation' : ''}`}
                onClick={(event) => {
                  if (currentRoute === '' || currentRoute === '/') {
                    event.stopPropagation();
                  }
                }}
                onKeyDown={(event) => handleKeyDown(event, e.link)}
              >
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
        <div className="border-b" />
        <ul className="mob-navbar-menu">
          {PrimaryNavbar.map((e) => (
            <Link key={e.id} to={`/${e.link}`} className="navbar-link">
              <li className={`nav-items ${toggle ? 'down-menu-animation' : ''}`} onKeyDown={(event) => handleKeyDown(event, e.link)} onClick={handleRoute}>
                {e.title}
              </li>
            </Link>
          ))}

          <div className="mob-download-btn">
            <Link to="https://play.google.com/store/apps" target="_blank">
              <button type="button" className="center-flex global-btn" onClick={() => setToggle(false)}>
                <ImDownload className="btn-icon" />
                <span>Download</span>
              </button>
            </Link>
          </div>
        </ul>
      </div>

      {/* Download Button */}
      <div className="center-flex download-btn">
        <Link to="https://play.google.com/store/apps" target="_blank">
          <button type="button" className="center-flex global-btn">
            <ImDownload className="btn-icon" />
            <span>Download</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PrimaryNav;
