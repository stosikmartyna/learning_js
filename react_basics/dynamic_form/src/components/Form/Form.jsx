import React from 'react';
import './Form.css';

export const Form = () => {
    return (
        <>
            <h2>Dodaj produkt</h2>
            <div className="form"> 
                <input type="text" placeholder="Produkt"/>
                <input type="number" placeholder="Ilość"/>
                <input type="number" placeholder="Cena netto"/>
                <select name="vat" id="vat">
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