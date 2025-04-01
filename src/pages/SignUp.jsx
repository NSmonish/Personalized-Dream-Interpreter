import { useState } from "react";
import AppleIcon from "../assets/AppleIcon.jpg";
import GoogleIcon from "../assets/GoogleIcon.jpg";
import "./SignUp.css";
import Login from "./Login";
import { signup } from "../services/authService";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default role
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signup(userData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      const decoded = jwtDecode(data.token);
      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Signup failed!");
    }
  };
  return (
    <>
      <div className="app-container">
        <div className="login-box">
          <div className="left-box">
            <img />
          </div>
          <div className="right-box">
            <h2>WELCOME!</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">NAME</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">EMAIL</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">PASSWORD</label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Sign Up</button>
            </form>
            <div className="alternative">
              <p>OR USING:</p>
              <img src={AppleIcon} />
              <img src={GoogleIcon} />
            </div>
            <div className="tologin">
              <p>Already Registered?</p>
              <a href="./Login">LOGIN</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
