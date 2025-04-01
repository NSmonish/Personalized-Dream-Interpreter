import { useState } from "react";
import AppleIcon from "../assets/AppleIcon.jpg";
import GoogleIcon from "../assets/GoogleIcon.jpg";
import { login } from "../services/authService";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(credentials);
    if (data.token) {
      localStorage.setItem("token", data.token);
      const decoded = jwtDecode(data.token);
      if (decoded.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Login failed!");
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
            <h2>WELCOME BACK!</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">EMAIL</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
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
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <div className="alternative">
              <p>OR USING:</p>
              <img src={AppleIcon} />
              <img src={GoogleIcon} />
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
};

export default Login;
