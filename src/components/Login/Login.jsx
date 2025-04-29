import React from 'react';
import './login.css';
import { loginimg, logo } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className='login'>
        <div className='login-img'>
          <img src={loginimg} alt="" />
        </div>

        <div className='login-div'>
          <div className='login-form'>
            <div className='login-logo'>
              <img src={logo} alt="logo" />
            </div>
            {/* fields */}
            <div className='login-fields'>
              <h2>Login</h2>
              <p>Email</p>
              <div className='login-email'>
                <input type="email" placeholder='Email Here' />
              </div>
              <p>Password</p>
              <div className='login-email'>
                  <input type={showPassword ? "text" : "password"} placeholder='Password Here' />
                  <span onClick={togglePassword} style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='icons' />
                </span>
              </div>
              <p className='forgot'>Forgot Password?</p>
              <div className="button-login">Login</div>
              <p className='signup'>Don't have an account? <span>Register Here</span></p>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login