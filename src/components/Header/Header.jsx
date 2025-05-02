// import {React, useState} from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import { logo } from '../../assets/images';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);


//   return (
//     <>
//       <header>
//         <div className="navbar">
//           <img src={logo} className='logo' />
//           <div className={`headings ${menuOpen ? 'show' : ''}`}>
//             <NavLink className="head-link" to='/'>Home</NavLink>
//             <NavLink className="head-link" to='/about'>About Us</NavLink>
//             <NavLink className="head-link" to='/whatwedo'>What We Do</NavLink>
//             <NavLink className="head-link" to='/ourplans'>Our Plans</NavLink>
//             <NavLink className="head-link" to='/faqs'>FAQs</NavLink>
//             <NavLink className="head-link" to='/insights'>Insights</NavLink>
//             <NavLink className="head-link" to='/contact'>Contact Us</NavLink>
//           </div>

//           <div className={`buttons ${menuOpen ? 'show' : ''}`}>
//             <div className="button1">
//               <NavLink className="button1-link" to='/demo'>Start Your Demo</NavLink>
//             </div>

//             <div className="button2">
//               <NavLink className="button2-link" to='/login'>Login</NavLink>
//             </div>
//           </div>
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <FontAwesomeIcon icon={faBars} />
//           </div>

//         </div>
//       </header>
//     </>
//   )
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { logo } from '../../assets/images';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [showMenu, setShowMenu] = useState(false);
const [menuClass, setMenuClass] = useState('');

useEffect(() => {
  if (isMenuOpen) {
    setShowMenu(true); // Render the menu
    document.body.style.overflow = 'hidden';

    // Wait for next tick before adding slide-in
    setTimeout(() => {
      setMenuClass('slide-in');
    }, 20); // 10–20ms is enough
  } else {
    setMenuClass('slide-out'); // Start slide-out
    document.body.style.overflow = 'auto';

    // Wait for animation to complete before unmount
    setTimeout(() => {
      setShowMenu(false);
    }, 400); // Match your transition duration
  }
}, [isMenuOpen]);

const location = useLocation();

useEffect(() => {
  // Auto-close menu when route changes
  setIsMenuOpen(false);
}, [location]);

  return (
    <header>
      <div className="navbar">
        <img src={logo} className="logo" />

        <div className="headings">
          <NavLink className="head-link" to="/">Home</NavLink>
          <NavLink className="head-link" to="/about">About Us</NavLink>
          <NavLink className="head-link" to="/whatwedo">What We Do</NavLink>
          <NavLink className="head-link" to="/ourplans">Our Plans</NavLink>
          <NavLink className="head-link" to="/faqs">FAQs</NavLink>
          <NavLink className="head-link" to="/insights">Insights</NavLink>
          <NavLink className="head-link" to="/contact">Contact Us</NavLink>
        </div>

        <div className="buttons">
          <div className="button1">
            <NavLink className="button1-link" to="/demo">Start Your Demo</NavLink>
          </div>
          <div className="button2">
            <NavLink className="button2-link" to="/login">Login</NavLink>
          </div>
        </div>

        {/* Hamburger icon for medium screens */}
        <div className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>

      {/* Side menu for hamburger */}
      {showMenu && (
        <>
          <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
          <div className={`side-menu ${menuClass}`}>
          <img src={logo} className="logo2" />
            <NavLink className="head-link" to="/">Home</NavLink>
            <NavLink className="head-link" to="/about">About Us</NavLink>
            <NavLink className="head-link" to="/whatwedo">What We Do</NavLink>
            <NavLink className="head-link" to="/ourplans">Our Plans</NavLink>
            <NavLink className="head-link" to="/faqs">FAQs</NavLink>
            <NavLink className="head-link" to="/insights">Insights</NavLink>
            <NavLink className="head-link" to="/contact">Contact Us</NavLink>
            <div className='br'/>
            <div className="button2">
              <NavLink className="button2-link" to="/login">Log In</NavLink>
            </div>
            <div className="button1">
              <NavLink className="button1-link" to="/demo">Start Your Demo</NavLink>
            </div>
          </div>
        </>
      )}

    </header>
  );
}

export default Header;
