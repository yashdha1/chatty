import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import logo from "../Images/message_icon.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({ userName: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const loginHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/login",
        data,
        config
      );
      console.log('Response:', response);
      setLoginStatus({ msg: "Login successful", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/app/welcome");
    } catch (e) {
      console.log('Error:', e.response || e.message);
      setLoginStatus({ msg: "Invalid userName or password", key: Math.random() });
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value}) ; 
  };

  return (
    <div className="loginPage">
      <div className="login-inner">
        <img src={logo} alt="logo" className="login-logo" />
        <div className="login-container">
          <p>Login to your Account</p>
          <input
            type="text"
            name="userName"
            placeholder="UserName"
            value={data.userName}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <button onClick={loginHandler} disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <p>Don't have an Account? <span className="signin-else" onClick={() => navigate('/signup')}>Sign Up</span></p>
          {loginStatus && <p>{loginStatus.msg}</p>}
        </div>
      </div>
    </div>
  );
}
