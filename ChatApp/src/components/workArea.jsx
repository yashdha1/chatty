// workArea.js
import React from "react";
import ChatArea from "./workArea/chatArea-wa";
import HeaderWa from "./workArea/header-wa";
import InputArea from "./workArea/input-wa";
import "./stylesFile.css";

export default function WorkArea() {
  // Ensure data is an array and has at least one entry
  
  const data = {
    name: "John Doe"
  };
  
  return (
    <div className="workArea">
      <HeaderWa data={data} /> 
      <ChatArea />
      <InputArea />
    </div>
  );
}
