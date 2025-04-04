import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainContainer from "./components/mainBox";
import WelcomePage from "./components/WelcomePage";
import WorkArea from "./components/workArea";
import OnlineUser from "./components/online_user";
import CreateGroups from "./components/CreateGroups";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import OnlineGroups from "./components/online_groups";
import Welcome from "./components/Welcome"; // Import the new Welcome component

function App() {
  return (
    <div id="outer-box">
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Add Welcome component */}
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route path="work" element={<WorkArea />} />
          <Route path="users-online" element={<OnlineUser />} />
          <Route path="groups-online" element={<OnlineGroups />} />
          <Route path="groups" element={<CreateGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
