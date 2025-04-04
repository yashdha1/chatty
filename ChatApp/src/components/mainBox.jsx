import SideBar from "./sideBar";
import WorkArea from "./workArea";
import WelcomePage from "./WelcomePage";
import CreateGroups from "./CreateGroups";
import LoginPage from "./LoginPage";
import OnlineUser from "./online_user";
import OnlineGroups from "./online_groups";

import "./stylesFile.css";
import { Outlet } from "react-router-dom";
export default function MainContainer() {

  const data = [
    {
      name: "Alice",
      lastMsg: "Hey, how are you?",
      msgTime: "2 days ago",
    },
    {
      name: "Bob",
      lastMsg: "Can you send me the files?",
      msgTime: "1 day ago",
    },
    {
      name: "Charlie",
      lastMsg: "Meeting at 3 PM.",
      msgTime: "5 days ago",
    },
  ]
  return (
    <div className="mainBox">
      {/* <LoginPage/> */}
      <SideBar data={data}/>
      <Outlet/>
      {/* <WelcomePage></WelcomePage> */}
      {/* <OnlineUser></OnlineUser> */}
      {/* <OnlineGroups>
      </OnlineGroups> */}
      {/* <WorkArea data={data}></WorkArea> */}
      {/* <CreateGroups/>       */}
    </div>
  );
}
