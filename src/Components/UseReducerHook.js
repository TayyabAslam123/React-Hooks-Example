import React from 'react'
import { useReducer } from 'react';

const UseReducerHook = () => {

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { counter: state.counter + 1, myTxt: state.myTxt }
      case 'TOGGLE':
        return { counter: state.counter, myTxt: !state.myTxt }
      default:
        return state
    }
  }

  // Reducer State with state value and 
  const [myState, dispath] = useReducer(reducer, { counter: 0, myTxt: true })
  //
  return (
    <div>
      <h1>{myState.counter}</h1>
      <hr></hr>
      <button onClick={() => {
        dispath({ type: 'INCREMENT' });
        dispath({ type: 'TOGGLE' });
      }}>Increment</button>
      <hr></hr>
      <h1>{myState.myTxt && <p>My sample text</p>}</h1>
    </div>
  )
}

export default UseReducerHook
