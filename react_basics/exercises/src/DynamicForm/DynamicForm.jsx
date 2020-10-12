import React, { useState } from 'react';

const initialState = {
    text: '',
    number: '',
    mail: '',
    password: '',
}

export const DynamicForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value}); 
    } 

    const submitForm = () => {
        const isFormValid = inputsValues.text.trim() !== '' 
            && inputsValues.number.trim() !== '' 
            && inputsValues.mail.trim() !== '' 
            && inputsValues.password.trim() !== ''

        const submitValidatedForm = () => {
            alert("Sent correctly");
            setInputsValues(initialState);
            setIsFormSubmitted(false);
        }

        setIsFormSubmitted(true);
        isFormValid && submitValidatedForm();
    }
            
    return (
        <>
            <div>
                <label>Text</label>
                <input id="text" type="text" onChange={handleInputChange} value={inputsValues.text} />
                {isFormSubmitted && inputsValues.text.trim() === '' && <span>This field is required</span>}               
            </div>
            <div>
                <label>Number</label>
                <input id="number" type="number" onChange={handleInputChange} value={inputsValues.number} />
                {isFormSubmitted && inputsValues.number.trim() === '' && <span>This field is required</span>}               
            </div>
            <div>
                <label>Mail</label>
                <input id="mail" type="mail" onChange={handleInputChange} value={inputsValues.mail} />
                {isFormSubmitted && inputsValues.mail.trim() === '' && <span>This field is required</span>}
            </div>
            <div>
                <label>Password</label>
                <input id="password" type="password" onChange={handleInputChange} value={inputsValues.password} />
                {isFormSubmitted && inputsValues.password.trim() === '' && <span>This field is required</span>}        
            </div>
            <button onClick={submitForm}>Submit</button>
        </>
    )
}