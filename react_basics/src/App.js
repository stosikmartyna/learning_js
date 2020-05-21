import React from 'react';
import {Content} from './Content'

export const App = () => {
  const appTextContent = 'World';

  return (
    <Content textContent={appTextContent} />
  );
}
