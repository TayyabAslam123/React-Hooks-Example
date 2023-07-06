import React, { useState } from 'react'

const UseStateHook2 = () => {

  //mytxt is variable and SetText is function
  const [mytxt, SetText] = useState('tayyab Aslam');

  //onChange it is called
  const newTxt = (e) => {
    console.log(e.target.value);
    SetText(e.target.value);
  }

  //clean data 
  const cleanData = () => {
    SetText('');
  }


  return (
    <div>
      <p>MY FORM</p>
      <input type='text' placeholder='Type here' onChange={newTxt} value={mytxt} />
      <hr></hr>
      <h2>{mytxt}</h2>
      <hr></hr>
      <button onClick={cleanData}>CLEAR</button>
    </div>
  )
}

export default UseStateHook2
