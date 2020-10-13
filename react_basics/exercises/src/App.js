import React from 'react';
import { WordCounter } from './WordCounter/WordCounter';
import { DynamicForm } from './DynamicForm/DynamicForm';
import { DarkLightToggle } from './DarkLightToggle/DarkLightToggle';

export const App = () => {
  return (
    <>
      <WordCounter />
      <hr />
      <DynamicForm />
      <hr />
      <DarkLightToggle />
    </> 
  );
}