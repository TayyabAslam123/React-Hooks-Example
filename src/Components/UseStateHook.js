import React from 'react'
import { useState } from 'react';

const UseStateHook = () => {
    // variable is counter and function name is SetCounter.
    const [counter, SetCounter] = useState(0);
    // we trigger here to change state of react and react knows to change its state.
    const increment = () => {
        SetCounter(counter + 1);
    }
    // const increment = () => {
    //     counter = counter + 1;
    //     console.log(counter);
    // }

    return (
        <>
            {/* <div>
                {counter % 2 == 0 &&
                    <h1>{counter}</h1>
                }
            </div> */}

            <div>
                {counter}
                <br></br>
                <button onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default UseStateHook
