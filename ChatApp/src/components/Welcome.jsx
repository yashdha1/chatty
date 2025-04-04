import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesFile.css";
import logo from "../Images/message_icon.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-inner-box">
        <img src={logo} alt="logo" className="img-welcome" />
        <div className="welcome-buttons">
          <button onClick={() => navigate("login")} className="welcome-btn">
            Login
          </button>
          <button onClick={() => navigate("signup")} className="welcome-btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
