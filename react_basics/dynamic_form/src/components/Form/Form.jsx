import React from 'react';
import './Form.css';

export const Form = ({onInputsValues, onProductsSubmit}) => {
    return (
        <>
            <h2>Dodaj produkt</h2>
            <div className="form"> 
                <input id="product" type="text" placeholder="Produkt" onChange={onInputsValues}/>
                <input id="quantity" type="number" placeholder="Ilość" onChange={onInputsValues}/>
                <input id="nettoPrice" type="number" placeholder="Cena netto" onChange={onInputsValues}/>
                <select id="vat" name="vat" onChange={onInputsValues}>
                    <option value="">VAT</option>
                    <option value={8}>8%</option>
                    <option value={23}>23%</option>
                    <option value={32}>32%</option>
                </select>
                <button onClick={onProductsSubmit}>Dodaj</button>
            </div>
        </>
    )
}