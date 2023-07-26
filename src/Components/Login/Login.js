import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login =()=> {
    const navigate = useNavigate();
  return (
    <div>
          <div className="form-container">
              <div className="sigup-head">
                  <h1>Login your account</h1>
              </div>
              <div className="email-input">
                  <input type="text" placeholder='Enter The Email Address' />
              </div>
              <div className="password-input">
                  <input type="password" placeholder='Enter the password' />
              </div>
              <div className="signup-btn">
                  <button>Login</button>
              </div>
              <div className="no-account-link">
                <p onClick={() => navigate('/signup')}>Create new account</p>
              </div>

          </div>
    </div>
  )
}

export default Login
