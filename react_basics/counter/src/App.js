import React from 'react';
import { Content } from './Content';
import { Persons } from './components/Persons/Persons';
import { Animals } from './components/Animals/Animals';
import { ArrayMethods } from './components/ArrayMethods/ArrayMethods';
import { Hooks } from './components/Hooks/Hooks';
import { Counter } from './components/Counter/Counter';

export const App = () => {
  const appTextContent = 'World';

  return (
    <>
      <Content textContent={appTextContent} />
      <Persons />
      <ArrayMethods />
      <Hooks />
      <Counter />
      {/* <Animals /> */}
    </>
  );
}
