import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/message_icon.png";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({ userName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [signupStatus, setSignupStatus] = useState({ msg: "", key: null });

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:4000/user/signup",
        data,
        config
      );
      console.log("Response:", response);
      setSignupStatus({ msg: "Signup successful", key: Math.random() });
      setLoading(false);
      navigate("/app/welcome");
    } catch (e) {
      console.log("Error:", e.response || e.message);
      setSignupStatus({ msg: "Signup failed", key: Math.random() });
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginPage">
      <div className="login-inner">
        <img src={logo} alt="logo" className="login-logo" />
        <div className="login-container">
          <p>Create a New Account</p>
          <input
            type="text"
            name="userName"
            placeholder="UserName"
            value={data.userName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <button onClick={signUpHandler} disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p>
            Already have an Account?{" "}
            <span className="signin-else" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
          {signupStatus.msg && <p>{signupStatus.msg}</p>}
        </div>
      </div>
    </div>
  );
}