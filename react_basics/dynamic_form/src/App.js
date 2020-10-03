import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import './App.css';

export const App = () => {
  const [inputsValues, setInputsValues] = useState({});
  const [products, setProducts] = useState([]);
  
  const handleInputsValues = (event) => {
      setInputsValues({...inputsValues, [event.target.id]: event.target.value});
  }

  const handleProductsSubmit = () => {
    setProducts([...products, inputsValues]);
    setInputsValues('');
  }

  return (
    <div className="view">
      <h1>Dynamiczny formularz React</h1>
      <Form onInputsValues={handleInputsValues} onProductsSubmit={handleProductsSubmit} />
      <Table products={products}/>
    </div>
  );
}