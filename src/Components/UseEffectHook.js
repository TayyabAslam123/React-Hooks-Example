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
        <>
            <h1>Comments Data</h1>
            <hr></hr>
            <div>
                {dataa.map((repo) => (
                    <>
                        <h2 key={repo.id}>{repo.name}</h2>
                        <p key={repo.id}>{repo.email}</p>
                        <hr></hr>
                    </>
                ))}
            </div>
        </>
    );
}

export default UseEffectHook
