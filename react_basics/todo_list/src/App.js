import React, { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = () => {
    setTodos([...todos, inputValue]);
  }

  return (
    <>
      <input onChange={handleInputValue}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </>
  );
}