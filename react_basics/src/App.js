import React, { useState } from 'react';
import { Content } from './Content';
import { Animals } from './components/Animals/Animals';

export const App = () => {
  const appTextContent = 'World';
  const [persons, setPersons] = useState(undefined);

  const handlePersons = () => {
    setPersons([
      { name: 'Ala', age: 25 },
      { name: 'Max', age: 18 },
      { name: 'Matt', age: 37 },
      { name: 'Greg', age: 43 },
    ])
  }

  const handleResetPersons = () => {
    setPersons([])
  }

  return (
    <>
      <Content textContent={appTextContent} />
      <button onClick={handlePersons}>Get names</button>
      <button onClick={handleResetPersons}>Reset names</button>
      {persons &&
        <ul>
          {persons.map((person, i) => {
            return <li key={i}>{person.name}</li>
          })}
        </ul>
      }
      <Animals />
    </>
  );
}
