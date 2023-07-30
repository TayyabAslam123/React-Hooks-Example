import React, { useState, useEffect, useMemo } from 'react';


const UseMemoHook = () => {

  const [myData, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [randomNum, setRandomNum] = useState(0);


  //
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    console.log(myData);
  }, []);

  // Function to check longest name
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  // Memoized function
  const getLongestName = useMemo(() => findLongestName(myData), [randomNum]);

  return (
    <>
      <p>Use Memo Hook</p>
      
      <hr></hr>
      {findLongestName(myData)}
      <hr></hr>

      <button
        onClick={() => {
          setRandomNum(Math.random());
          console.log(randomNum);
        }}
      >Generate Random Number</button>

      <hr></hr>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      
      <hr></hr>
      <h1>{toggle && <span>Toggle !!!</span>}</h1>
    </>
  );
}
export default UseMemoHook
