import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SecondaryNavbar } from '../Data'
import { Link } from 'react-router-dom';

const SecondaryNav = () => {
  return (
    <div className='secondary-nav'>
      <div className='global-height header-paragraph'>
        <div className='arrow-icon-box'>
          <FiChevronLeft className='arrow-icon-left' />
          <FiChevronLeft className='arrow-icon-left' />
        </div>

        {SecondaryNavbar.line} <Link to={SecondaryNavbar.link} className='app-name'> {SecondaryNavbar.appname}</Link>
        <img src={SecondaryNavbar.emoji} alt={SecondaryNavbar.appname} className='emoji' />
        <div className='arrow-icon-box'>
          <FiChevronRight className='arrow-icon-right' />
          <FiChevronRight className='arrow-icon-right' />
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav