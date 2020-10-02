import React, { useState } from 'react';
import './Form.css';

export const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (event) => {
        setInputValue({...inputValue, [event.target.id]: event.target.value});
    }

    return (
        <>
            <h2>Dodaj produkt</h2>
            <div className="form"> 
                <input id="product" type="text" placeholder="Produkt" onChange={handleInputValue}/>
                <input id="quantity" type="number" placeholder="Ilość" onChange={handleInputValue}/>
                <input id="nettoPrice" type="number" placeholder="Cena netto" onChange={handleInputValue}/>
                <select id="vat" name="vat" onChange={handleInputValue}>
                    <option value="">VAT</option>
                    <option value="vat8">8%</option>
                    <option value="vat23">23%</option>
                    <option value="vat32">32%</option>
                </select>
                <button>Dodaj</button>
            </div>
        </>
    )
}