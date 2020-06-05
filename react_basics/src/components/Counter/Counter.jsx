import React, { useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{marginTop:'3rem'}}>
            <button onClick={() => setCounter(counter-1)}> - </button>
            <span> {counter} </span>
            <button onClick={() => setCounter(counter+1)}> + </button>
        </div>
    )
}
    