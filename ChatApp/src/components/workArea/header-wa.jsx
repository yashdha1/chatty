// workArea/header-wa.js
import React from "react";
import "./wa-styles.css"
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
export default function HeaderWa({ data }) {
  return (
    <div className="headerWa">
      <p className="icon">{data.name[0]}</p>
      <p className="name">{data.name}</p>
      <div className="deleteButton">
        <IconButton>
             <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
    </div>
  );
}
