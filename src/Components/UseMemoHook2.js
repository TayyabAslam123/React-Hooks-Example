import React, { useState, useMemo } from 'react'

const UseMemoHook2 = () => {

  const [myNum, setNum] = useState(0);

  const findRand = () => {
    let rand = Math.random() * 10;
    console.log(rand); // say 99.81321410836433
    rand = Math.floor(rand); // 99
    return rand;
  }


  const getMyRandomData = useMemo(() => findRand(), []);

  return (
    <div>
      {findRand()}
    </div>
  )
}

export default UseMemoHook2
