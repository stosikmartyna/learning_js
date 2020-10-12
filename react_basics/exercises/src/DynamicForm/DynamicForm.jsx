import React, { useState } from 'react';

const initialState = {
    text: '',
    number: '',
    mail: '',
    password: '',
}

export const DynamicForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    
    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value}); 
    } 

    const clearForm = () => setInputsValues(initialState);

    const validateForm = () => {
        if (inputsValues.text.trim() === '') {
            return false;
        } else {
            return true;
        }
    }

    const submitForm = () => {
        validateForm();
        clearForm();
        console.log(inputsValues)
    }
    
        
    return (
        <>
            <div>
                <label>Text</label>
                <input id="text" type="text" onChange={handleInputChange} value={inputsValues.text} />
            </div>
            <div>
                <label>Number</label>
                <input id="number" type="number" onChange={handleInputChange} value={inputsValues.number} />
            </div>
            <div>
                <label>Mail</label>
                <input id="mail" type="mail" onChange={handleInputChange} value={inputsValues.mail} />
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="password" onChange={handleInputChange} value={inputsValues.password} />
            </div>
            <button onClick={submitForm} disabled={!validateForm()}>Submit</button>
        </>
    )
}