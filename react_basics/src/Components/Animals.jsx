import React, {useState} from 'react';

export const Animals = () => {
const [animal, setAnimal] = useState('Dog');

    const handleAnimalsChanged = (event) => {
        setAnimal(event.target.value)
    }

    return (
        <>
            <p>{animal}</p>
            <input type="text" onChange={handleAnimalsChanged}/>
        </>
    )
}