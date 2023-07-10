import React, {useRef} from 'react'

const UseRefHook = () => {
   
  const inputRef = useRef(null);
  
  // const btnClick=()=>{
  //   console.log(inputRef.current.value);
  //   inputRef.current.focus();
  // }

  return (
    <div>
      <h1>Hello World</h1>
      <input type='text' placeholder='Ex ..' ref={inputRef}/>
      {/* <button onClick={btnClick}>Change Name</button> */}
    </div>
  )
}

export default UseRefHook
