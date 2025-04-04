import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './stylesFile.css';

const onlineUsers = ['School', 'Work', 'Anime'];

export default function OnlineGroups() {
    return (
        <div className="onlineContainer">
            <div className="onlineUserHeader">
                Groups Currently to join
            </div>
            <TextField
                className="searchFieldGroups"
                placeholder="Search users"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <div className="onlineListGroup">
                <div className="groups">
                    {onlineUsers.map((user, index) => (
                        <div key={index} className="group">
                            {user}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
