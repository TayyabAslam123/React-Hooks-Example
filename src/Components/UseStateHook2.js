import React, { useState } from 'react'

const UseStateHook2 = () => {
  const[mytxt,  SetText]=useState('tayyab Aslam');
  
  const newTxt=(e)=>{
    console.log(e.target.value);
    SetText(e.target.value);
  }

  const cleanData=()=>{
    SetText('');
  }


  return (
    <div>
      <p>MY FORM</p>
      <input type='text' placeholder='Type here' onChange={newTxt}/>
      <hr></hr>
      <h2>{mytxt}</h2>
      <hr></hr>
      <button onClick={cleanData}>CLEAR</button>
    </div>
  )
}

export default UseStateHook2
