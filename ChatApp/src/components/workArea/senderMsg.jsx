import "./wa-styles.css";
export default function SenderMsg() {
  let data = { msg: "hey how are you", time: "12:00AM" };
  return (
    <div className="senderBubble">
      <div className="senderBox">
        <p className="sent-msg">{data.msg}</p>
        <p className="sent-time">{data.time}</p>
      </div>
    </div>
  );
}
