import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'; 
import { logo } from '../../assets/images';

function Header() {
  return (
    <>
      <header>
        <div className="navbar">
          <img src={logo} className='logo' />
          <div className="headings">
            <NavLink className="head-link" to='/'>Home</NavLink>
            <NavLink className="head-link" to='/about'>About Us</NavLink>
            <NavLink className="head-link" to='/whatwedo'>What We Do</NavLink>
            <NavLink className="head-link" to='/ourplans'>Our Plans</NavLink>
            <NavLink className="head-link" to='/faqs'>FAQs</NavLink>
            <NavLink className="head-link" to='/insights'>Insights</NavLink>
            <NavLink className="head-link" to='/contact'>Contact Us</NavLink>
          </div>

          <div className="buttons">
            <div className="button1">
              <NavLink className="button1-link" to='/demo'>Start Your Demo</NavLink>
            </div>

            <div className="button2">
              <NavLink className="button2-link" to='/login'>Login</NavLink>
            </div>
          </div>

          
        </div>
      </header>
    </>
  )
}

export default Header;