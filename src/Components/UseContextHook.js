import { useState, createContext, useContext } from 'react'
import { Login } from './Login'

export const UserContext = createContext(null);

export const UseContextHook = () => {

    const [username, setUsername] = useState("Tayyab Aslam !!");

    return (
        <>
            <UserContext.Provider value={username}>
                <h2>UseContextHook</h2>
                <Login />
            </UserContext.Provider>
        </>
    )

}
