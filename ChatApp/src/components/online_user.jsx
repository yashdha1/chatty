import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './stylesFile.css';

const onlineUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

export default function OnlineUser() {
    return (
        <div className="onlineContainer">
            <div className="onlineUserHeader">
                Users Currently Active Are
            </div>
            <TextField
                className="searchFieldUser" //search in the currently online users 
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
            <div className="onlineListUser">
                <div className="users">
                    {onlineUsers.map((user, index) => (
                        <div key={index} className="user">
                            {user}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
