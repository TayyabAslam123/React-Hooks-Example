import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
    // useState Hook
    const [dataa, setData] = useState([]);
    //
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
            console.log(dataa[0]);
    }, []);


    return (
        <div>
            {dataa.map((repo) => (
                <p key={repo.id}>{repo.email}</p>
            ))}
        </div>
    );
}

export default UseEffectHook
