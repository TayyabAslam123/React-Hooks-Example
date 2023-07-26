import React, { useState, createContext, useContext } from 'react';
import { Login } from './Login';

export const UserContext = createContext(null);

export const UseContextHook = () => {
    const [username, setUsername] = useState("Tayyab");

    // Function to update the username
    const updateUsername = (newUsername) => {
        setUsername(newUsername);
    };

    return (
        <>
            <UserContext.Provider value={{ username, updateUsername }}>
                <h2>UseContextHook</h2>
                <Login />
            </UserContext.Provider>
        </>
    );
};