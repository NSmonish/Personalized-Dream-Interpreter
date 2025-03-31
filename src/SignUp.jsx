import { useState } from 'react';
import AppleIcon from './assets/AppleIcon.jpg';
import GoogleIcon from './assets/GoogleIcon.jpg';
import './SignUp.css';
import Login from './Login';

function SignUp() {
  return (
    <>
      <div className="app-container">
        <div className="login-box">
          <div className="left-box">
            <img />
          </div>
          <div className="right-box">
            <h2>WELCOME!</h2>
            <form>
              <div className="input-group">
                <label htmlFor="username">NAME</label>
                <br />
                <input type="text" id="username" name="username" />
              </div>
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
              <p>Already Registered?</p>
              <a href={Login}>LOGIN</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;