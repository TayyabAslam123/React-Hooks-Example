import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

function UseLayoutEffectHook() {

  const ref = useRef(null);

  // USE EFFECT CALLED AT END AFTER COMPONENT LOADED 
  useEffect(() => {
    console.log('Use Effect triggered !!');
  }, []);

  // USELAYOUTEFFECT TRIGGER BEFORE COMPONENT LOADED
  useLayoutEffect(() => {

    console.log('Use useLayoutEffect triggered !!');
    ref.current.style.backgroundColor = 'blue';
    ref.current.style.color = 'white';

  }, []);

  return <div ref={ref}>Hello, world!</div>;
}


export default UseLayoutEffectHook;