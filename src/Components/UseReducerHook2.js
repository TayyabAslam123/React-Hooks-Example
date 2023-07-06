import React from 'react'
import { useReducer } from 'react';

const UseReducerHook2 = () => {

    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { price: state.price + 5 }
            case 'subtract':
                return { price: state.price - 5 }
            default:
                return state
        }
    }

    // Reducer State with state value and in this case intial price is 250 
    const [myState, dispath] = useReducer(reducer, { price: 250})
    //

    // dispath will directly call the reducer function
    return (
        <div>
          <button onClick={() => { dispath({ type: 'add' }); }}>+</button>
          <h1>{myState.price}</h1>
          <button onClick={() => { dispath({ type: 'subtract' }); }}>-</button>
        </div>
      );
}

export default UseReducerHook2
