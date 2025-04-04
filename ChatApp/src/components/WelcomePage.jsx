import React from "react";
import "./stylesFile.css" 
import logo from "../Images/message_icon.png";
import { useNavigate } from "react-router-dom";
export default function WelcomePage() {
  
  const navigate = useNavigate() ; 
  const userData = JSON.parse(localStorage.getItem('userData')) ; 
  console.log(userData);
  if(!userData){
    console.log("User is not authenticated!");
    navigate('/') ; 
  }

  return (
    <div className="img-box">
      <img src={logo} alt="logo" className="img-logo" />
      <div>
        <p className="logo-title">End to End Encryption</p>
      </div>
    </div>
  );
}
