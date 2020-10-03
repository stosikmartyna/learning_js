import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import './App.css';

export const App = () => {
  const [inputsValues, setInputsValues] = useState({});
  const [products, setProducts] = useState([]);
  
  const handleInputsValues = (event) => {
    event.preventDefault();
    setInputsValues({...inputsValues, [event.target.id]: event.target.value});    
  }

  const clearForm = () => {
    setInputsValues(
      {
        productName: '',
        quantity: '',
        nettoPrice: '',
        vat: '',
      }
    )
  }

  const handleProductsSubmit = () => {
    setProducts([...products, inputsValues]);
    clearForm();
  }

  return (
    <div className="view">
      <h1>Dynamiczny formularz React</h1>
      <Form inputsValues={inputsValues} onInputsValues={handleInputsValues} onProductsSubmit={handleProductsSubmit} />
      <Table products={products} />
    </div>
  );
}