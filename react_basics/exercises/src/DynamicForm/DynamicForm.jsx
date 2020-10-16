import React, { useState } from 'react';
import './DynamicForm.css';

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

    const displayInputError = (value) => {
        const isNotValid = isFormSubmitted && value.trim() === '';

        if (isNotValid) {
            return <span className="input-error">This field is required</span>
        }
    }
           
    return (
        <>
            <form>
                <div className="labeled-input">
                    <label htmlFor="text">Text</label>
                    <input id="text" type="text" onChange={handleInputChange} value={inputsValues.text} />
                    {displayInputError(inputsValues.text)}  
                </div>
                <div className="labeled-input">
                    <label htmlFor="number">Number</label>
                    <input id="number" type="number" onChange={handleInputChange} value={inputsValues.number} />
                    {displayInputError(inputsValues.number)}  
                </div>
                <div className="labeled-input">
                    <label htmlFor="mail">Mail</label>
                    <input id="mail" type="mail" onChange={handleInputChange} value={inputsValues.mail} />
                    {displayInputError(inputsValues.mail)}   
                </div>
                <div className="labeled-input">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleInputChange} value={inputsValues.password} />
                    {displayInputError(inputsValues.password)} 
                </div> 
            </form>
            <button className="submit-button" onClick={submitForm}>Submit</button>
        </>
    )
}