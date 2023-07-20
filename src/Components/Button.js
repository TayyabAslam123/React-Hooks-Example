import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));


    return (
        <>
            <button>Button From Child</button>
            <br></br>
            <br></br>
            <h1>{toggle && <span>Toggle !!!</span>}</h1>
        </>
    );

});

export default Button;