
# React Hook's
Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
Hooks allow us to "hook" into React features such as state and lifecycle methods.

You must import Hooks from react.
Here we are using the useState Hook to keep track of the application state.
State generally refers to application data or properties that need to be tracked.

## Hook Rules
There are 3 rules for hooks:

* Hooks can only be called inside React function components.
* Hooks can only be called at the top level of a component.
* Hooks cannot be conditional


##  UseState()
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.
We can change state any time using useState hook.

Initialize useState: 
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}

##  UseReducer()
use reducer hook is used when we have to manage multiple states.

 // Reducer State with state value and 
  const [myState, dispath] = useReducer(reducer, { counter: 0, myTxt: true })

// Dispatch is used to manage the states.
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

## UseEffectHook()

It is normally used when you need to execute code again if state changes.
We use it to do api calls.
fetch & axios both is used to do api calls
useEffect is used to perform actions after the component appears on the screen.

## UseLayoutEffectHook()

When we use useLayoutEffect, React makes sure that everything is ready before showing the component.
useLayoutEffect is a React hook that is similar to the useEffect hook, but it runs synchronously immediately after all DOM mutations are applied. This can be useful in cases where you need to perform measurements or modify the DOM immediately after an update is committed.
When React finishes creating the component and it's about to be shown on the screen, useLayoutEffect jumps into action. It lets us do any special actions or calculations that we want to perform before the component is shown to the user.

For example, you might want to measure the size of a box or change the color of an element based on some conditions. useLayoutEffect allows you to do these kinds of things right before the component is displayed.


## UseRef()

The useRef hook in React is primarily used to access and manipulate the underlying DOM elements directly.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
The useRef Hook is also be used to keep track of previous state values.

Its example can be make a input editable , go to top of the page , show any section of page on click, etc

## ImperativeHandle()

useImperativeHandle is a hook in React that allows a parent component to access and interact with certain functions or properties of its child component.

Imagine you have a custom child component called ChildComponent that performs some specific actions internally. However, you want the parent component to be able to trigger those actions directly when needed. To achieve this, you can use the useImperativeHandle hook.

It's important to note that using useImperativeHandle should generally be avoided if possible, as it goes against the principle of encapsulation and can lead to a less maintainable codebase. It's best to use it sparingly and only when necessary for specific use cases like integrating with third-party libraries or handling special situations.

## useContextHook()
useContext is a hook in React that allows you to access and share data between different components without having to pass the data down through props manually.

## UseMemoHook

In simple words, the useMemo hook in React is a way to save and remember the result of a function so that it doesn't need to be recalculated every time your component re-renders.

Imagine you have a function that takes some input and performs a complex calculation to get an output. Without useMemo, this function would run every time your component updates, even if the input hasn't changed. But with useMemo, you can tell React to store the result of the function and only recalculate it when the input changes.

So, useMemo helps improve the performance of your React app by avoiding unnecessary re-calculations and making your components faster. It's especially useful when dealing with computationally expensive operations or when you want to optimize rendering in your ap

## UseCallBackHook

useCallback is a React hook used to optimize the performance of your components when you have functions that you pass as props to child components. It ensures that the function is not recreated every time the component renders, which can help reduce unnecessary re-renders and improve efficiency.

In simple words, useCallback remembers the function you give it and only changes it when its dependencies change. This can be helpful when you want to pass functions down to child components so that they don't unnecessarily re-render and improve your app's performance.
