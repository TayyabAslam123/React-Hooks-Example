import React, {useRef,useState} from 'react'

const UseRefHook2 = () => {

  const [counter, SetCounter] = useState(0);
  const Inicounter = useRef(0);

  const increment=()=>{
    SetCounter(counter + 1);
    console.log(Inicounter.current.innerText);
  }

  return (
    <div>
      <h1 ref={Inicounter}>{counter}</h1>
      <button onClick={increment}>PRESS</button>
    </div>
  )

}

export default UseRefHook2
