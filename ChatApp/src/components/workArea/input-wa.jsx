import "./wa-styles.css";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

export default function InputArea() {
  return (
    <div className="input-wa">
      <input type="text" placeholder="Type a massege" className="inputBox" />

      <div className="sendButton">
        <SendIcon></SendIcon>
      </div>
    </div>
  );
}
