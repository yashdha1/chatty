import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { toggleTheme } from "../../features/themeSlice";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./sb-css.css";

export default function HeaderSidebar() {
  // const [theme, setTheme] = useState(true);
  // console.log(useSelector(state=>state.themeKey)) ;
  const theme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className={`headerSb${theme ? "" : " dark"}`}>
      {" "}
      {/* Correct class name concatenation */}
      <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div>
        <IconButton
          onClick={() => {
            navigate("users-online");
          }}
        >
          <PersonAddAltIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("groups-online");
          }}
        >
          <GroupAddIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("groups");
          }}
        >
          <AddCircleIcon />
        </IconButton>

        <IconButton onClick={()=>{dispatch(toggleTheme())}}>
          {theme ? <LightModeIcon /> : <DarkModeIcon />}{" "}
          {/* Conditionally render icons */}
        </IconButton>
      </div>
    </div>
  );
}
