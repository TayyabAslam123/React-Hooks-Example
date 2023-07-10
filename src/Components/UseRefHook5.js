import React, { useRef, useState, useEffect } from 'react'

const useRefHook5 = () => {

  const [counter, SetCounter] = useState(0);
  const counterRef = useRef(null);
  
  // always rendered when state change
  useEffect(() => {
    console.log('Re Rendered !!');
  });

  // call function to update value using useState
  const handleButtonClick = () => {
    SetCounter(counter + 1);
  };

  // use ref hook to get value of h1 tag with out changing state
  const getCounterVal = () => {
    alert(counterRef.current.innerText);
  };

  return (
    <div>
      <h1 ref={counterRef}>{counter}</h1>
      <button onClick={handleButtonClick}>CLICK TO INCREMENT</button>
      <button onClick={getCounterVal}>CLICK TO KNOW THE VALUE</button>
    </div>
  )
}

export default useRefHook5
