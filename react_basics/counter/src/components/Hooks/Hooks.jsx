import React, {useState, useEffect} from 'react';

export const Hooks = () => {
    const [state, setState] = useState('Initial state')

    useEffect(() => {
        setState('State updated by useEffect')
    }, [setState])

    const handleStateValue = () => {
        setState('State changed by click on button')
    }

    return (
        <>
            <p>State value: {state}</p>
            <button onClick={handleStateValue}>Change</button>
        </>
    )
} 