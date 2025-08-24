/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState, useEffect } from 'react';
import { logo } from '../Images';

function Preloader({ isLoading }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingPercentage((prevPercentage) => (prevPercentage < 100 ? prevPercentage + 1 : prevPercentage));
      }, 30);
    } else {
      setTimeout(() => {
        setLoadingPercentage(100);
      }, 500);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  const logoStyle = {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundClip: 'text',
    fontSize: '100px',
    fontWeight: '400',
    textAlign: 'center',
    transition: 'opacity 1s ease-in-out, background-position 1s linear',
    opacity: isLoading ? 1 : 0,
    position: 'fixed',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const percentageStyle = {
    fontSize: '18px',
    fontWeight: '300',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginTop: '20px',
  };

  const Image = {
    width: '155px',
    height: '55px',
    backgroundImage: `linear-gradient(to top , transparent ${loadingPercentage}%, rgba(255,255,255,0.8) ${loadingPercentage}%), url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };
  return (
    <div style={logoStyle}>
      {isLoading && (
        <div className="loader">
          <div style={Image} />
          <div style={percentageStyle}>
            Loading
            {loadingPercentage}
          </div>
        </div>
      )}
    </div>
  );
}

export default Preloader;
