import React, { useState, useCallback } from 'react'
import Child from './Child';

const UseCallBackHook = () => {
    const [toggle, setToggle] = useState([false]);
    const [data, setData] = useState("Yo, how are you ?");

    // OLD
    // const returnComment =(name) => {
    //         return data + name;
    //     };

    // NEW WITH USECALLBACK HOOK
    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );
    
    return (
        <>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </>
    )
}

export default UseCallBackHook
