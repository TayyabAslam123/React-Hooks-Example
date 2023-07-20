import { useState, createContext, useContext } from 'react'
import { Login } from './Login'

export const UserContext = createContext(null);

export const UseContextHook = () => {

    const [username, setUsername] = useState("Tayyab Aslam !!");
    const [age, setAge] = useState("26");
    const [ph, setPhone] = useState("+92 331 4275398");

    const personObj = {username, age, ph};

    return (
        <>
            <UserContext.Provider value={personObj}>
                <h2>UseContextHook</h2>
                <Login />
            </UserContext.Provider>
        </>
    )

}
