import React, { useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div style={{marginTop:'3rem'}}>
            <button onClick={decrement}> - </button>
            <span> {counter} </span>
            <button onClick={increment}> + </button>
        </div>
    )
}
    