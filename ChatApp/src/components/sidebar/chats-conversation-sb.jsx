import "./sb-css.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Chats({ item }) {
  
  const navigate = useNavigate();
  const theme = useSelector((state) => state.themeKey);
  return (
    <div className={`chat${theme ? "" : " dark"}`} onClick={()=>{navigate('work')}}>
      <p className="usr-icon">{item.name[0]}</p>
      <h1 className="usr-name">{item.name}</h1>
      <p className="usr-lastmsg">{item.lastMsg}</p>
      <span className="usr-msgtime">{item.msgTime}</span>
    </div>
  );
}
