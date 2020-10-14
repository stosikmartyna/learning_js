import React from 'react';
import { WordCounter } from './WordCounter/WordCounter';
import { DynamicForm } from './DynamicForm/DynamicForm';
import { DarkLightToggle } from './DarkLightToggle/DarkLightToggle';
import { Table } from './Table/Table';

export const App = () => {
  return (
    <>
      <WordCounter />
      <hr />
      <DynamicForm />
      <hr />
      <DarkLightToggle />
      <hr />
      <Table />
    </> 
  );
}