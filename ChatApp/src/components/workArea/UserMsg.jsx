import "./wa-styles.css";
export default function UserMsg() {
  let data = { msg: "i'm good bro", time: "12:01AM" };
  return (
    <div className="userBubble">
      <div className="userBox">
        <p className="user-msg">{data.msg}</p>
        <p className="user-time">{data.time}</p>
      </div>
    </div>
  );
}
