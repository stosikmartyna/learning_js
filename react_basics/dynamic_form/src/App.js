import React from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import './App.css';

export const App = () => {
  return (
    <div className="view">
      <h1>Dynamiczny formularz React</h1>
      <Form />
      <Table />
    </div>
  );
}