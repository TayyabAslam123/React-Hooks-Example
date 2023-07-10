import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

function UseLayoutEffectHook() {

  const ref = useRef(null);

  // use effect called at end after component loaded 
  useEffect(() => {

    console.log('Use Effect triggered !!');

  }, []);

  // useLayoutEffect trigger before component loaded
  useLayoutEffect(() => {

    console.log('Use useLayoutEffect triggered !!');

    ref.current.style.backgroundColor = 'red';
    ref.current.style.color = 'white';

  }, []);

  return <div ref={ref}>Hello, world!</div>;
}


export default UseLayoutEffectHook;