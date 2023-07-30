import { useEffect } from "react";
import React from 'react'

function Child({ returnComment }) {

    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
    }, [returnComment]);

    return <div>{returnComment("Pedro")}</div>;
    
}

export default Child
