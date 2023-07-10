import React , {useRef,useState,useEffect}  from 'react'

const useRefHook5 = () => {

    const [counter, SetCounter] = useState(0);
    const counterRef = useRef(null);
    
    useEffect(() => {
        console.log('Re Rendered !!');
    });
  
    const handleButtonClick = () => {
        SetCounter(counter + 1);
    };

    const getCounterVal = () => {
        alert(counterRef.current.innerText);
    };

  return (
    <div>
      <h1 ref={counterRef}>{counter}</h1>
      <button  onClick={handleButtonClick}>CLICK TO INCREMENT</button>
      <button  onClick={getCounterVal}>CLICK TO KNOW THE VALUE</button>
    </div>
  )
}

export default useRefHook5
