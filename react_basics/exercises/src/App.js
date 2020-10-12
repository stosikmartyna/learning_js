import React from 'react';
import { WordCounter } from './WordCounter/WordCounter';
import { DynamicForm } from './DynamicForm/DynamicForm';

export const App = () => {
  return (
    <>
      <WordCounter />
      <hr />
      <DynamicForm />
    </> 
  );
}