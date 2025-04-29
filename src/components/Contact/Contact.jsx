import React from 'react';
import './Contact.css';
import BlueBack from '../Sections/BlueBack/BlueBack';
import { contact } from '../../assets/images'

function Contact() {
  return (
    <>
      <BlueBack page="Contact Us" prevPage="Home > Contact Us" />
      <div className='contact-div'>
        <div className='contact-innerDiv'>
          <div className='contact-left'>
            <h1>Contact Us</h1>
            <h4>We're Here To Listen: Ask, Suggest, Comment - Your Feedback Matters!</h4>
            <div className='contact-form'>
              <div className='input-firstline'>
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
              </div>
              <div className='input-email'><input type="email" placeholder='Email'/></div>
              <div className='input-textarea'><textarea className='focus' type="text" rows="9" cols="55" placeholder='What Can We Help You With?'/></div>
              <div className="buttonOne">Submit</div>
            </div>
          </div>

          <div className='contact-right'>
            <img src={contact} alt="Contact Us" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact