import React from "react";
import "./stylesFile.css" 

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
export default function CreateGroups() {
  return (
    <div className="groupCreate">
      <div className="group-container">
      <input type="text" placeholder="group name" className="in-group" />
      <LibraryAddIcon className="in-groupicon"/ >
      </div> 
    </div>
  );
}
