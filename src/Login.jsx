import { useState } from 'react';
import AppleIcon from './assets/AppleIcon.jpg';
import GoogleIcon from './assets/GoogleIcon.jpg';
import './SignUp.css';

function Login() {
  return (
    <>
      <div className="app-container">
        <div className="login-box">
          <div className="left-box">
            <img />
          </div>
          <div className="right-box">
            <h2>WELCOME BACK!</h2>
            <form>
              <div className="input-group">
                <label htmlFor="email">EMAIL</label>
                <br />
                <input type="email" id="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="password">PASSWORD</label>
                <br />
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className="alternative">
              <p>OR USING:</p>
              <img src={AppleIcon}/>
              <img src={GoogleIcon}/>
            </div>
            <div className="tologin">
              <p>New User?</p>
              <a href="#">SIGN UP</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;