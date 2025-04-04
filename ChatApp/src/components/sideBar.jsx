import "./stylesFile.css"; 
import HeaderSidebar from "./sidebar/header-sb";
import SearchSidebar from "./sidebar/search-sb";
import Conversation from "./sidebar/conversation-sb";
import { useState  } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { toggleTheme } from "../features/themeSlice";


export default function SideBar({data}){
    
    return <div className="sideBar">
        {/* <AccountCircleIcon/>  */}
        
        <HeaderSidebar/>
        <SearchSidebar/>
        <Conversation data={data}/>
         
    </div>
}