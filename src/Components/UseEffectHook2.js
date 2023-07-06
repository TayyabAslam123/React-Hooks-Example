import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectHook2 = () => {
  const [mydata, setData] = useState("");

  useEffect(() => {
    if (mydata === "") {
      axios.get('https://random-data-api.com/api/v2/users')
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    }
  }, []);

  return (
    <div>
      <h2>Hi {mydata.first_name}</h2>
    </div>
  );
}

export default UseEffectHook2;
