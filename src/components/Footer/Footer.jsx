import React from 'react';
import './footer.css';
import { Link, NavLink } from 'react-router-dom';
import { logo, facebook, tiktok, youtube, instagram } from '../../assets/images';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="firstcol">
            <img src={logo} />
            <p>MyMealGuru is here to revolutionize the way you plan your meals. Click here to discover how
              we're making that happen - one personalized meal at a time.</p>
          </div>

          <div className="seccol">
            <p>Quick Links</p>
            <NavLink className="seccol-link" to="/about">About us</NavLink>
            <NavLink className="seccol-link" to="/whatwedo">Who we Are</NavLink>
            <NavLink className="seccol-link" to="/ourplans">Our Plans</NavLink>
            <NavLink className="seccol-link" to="/faqs">FAQs</NavLink>
            <NavLink className="seccol-link" to="/contact">Contact Us</NavLink>
          </div>

          <div className="thirdcol">
            <p>Follow Us</p>
            <div>
              <img src={instagram} alt="" />
              <Link to="https://www.instagram.com">Instagram</Link>
            </div>
            <div>
              <img src={facebook} alt="" />
              <Link to="https://www.facebook.com"> Facebook</Link>
            </div>
            <div>
              <img src={tiktok} alt="" />
              <Link to="https://www.tiktok.com"> TikTok</Link>
            </div>
            <div>
              <img src={youtube} alt="" />
              <Link to="https://www.youtube.com"> YouTube</Link>
            </div>

          </div>

          <div className="fourthcol">
            <p className="first-para">Subscribe To Our Newletter!</p>
            <p className="second-para">Let us help you eat healthier with our newsletter! Get recipes, <br /> tips,
              and knowledge delivered to your inbox. Subscribe now.</p>
            <div className="subscribe">
              <input type="text" placeholder="Your Email" />
              <button className="sub-button">SUBMIT</button>
            </div>
          </div>
        </div>

        <div className='copyright-div'>
          <div className='copyright'>
            <p>&copy; MyMealGuru 2024. All Rights Reserved.</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </div>

      </footer>

    </>
  )
}

export default Footer;