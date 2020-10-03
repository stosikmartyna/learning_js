import React from 'react';
import './Form.css';

export const Form = ({inputsValues, onInputsValues, onProductsSubmit}) => {

    const isValid = () => {
        return !!inputsValues.productName
            && !!inputsValues.quantity
            && !!inputsValues.nettoPrice
            && !!inputsValues.vat
    }

    return (
        <>
            <h2>Dodaj produkt</h2>
            <div className="form"> 
                <input id="productName" type="text" placeholder="Produkt" value={inputsValues.productName} onChange={onInputsValues}/>
                <input id="quantity" type="number" placeholder="Ilość" value={inputsValues.quantity} min="0" onChange={onInputsValues}/>
                <input id="nettoPrice" type="number" placeholder="Cena netto" value={inputsValues.nettoPrice} min="0" onChange={onInputsValues}/>
                <select id="vat" name="vat" value={inputsValues.vat} onChange={onInputsValues}>
                    <option value="">VAT</option>
                    <option value={8}>8%</option>
                    <option value={23}>23%</option>
                    <option value={32}>32%</option>
                </select>
                <button onClick={onProductsSubmit} disabled={!isValid()}>Dodaj</button>
            </div>
        </>
    )
}