import "./sb-css.css";
import Chats from "./chats-conversation-sb";
import { useState } from "react";
import React from "react";
import { useSelector } from "react-redux";

export default function Conversation({ data }) {
  const [iniChat, iniMethod] = useState(data);
   

  return (
    <div className= "chatList">
      {iniChat.map((chat, index) => (
        <div key={index} >
          <Chats item={chat} />
        </div>
      ))}
    </div>
  );
}
