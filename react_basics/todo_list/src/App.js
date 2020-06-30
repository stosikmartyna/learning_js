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

  const removeTodo = (todoToRemove) => {
    const filteredTodos = todos.filter(todo => todo !== todoToRemove)
    setTodos(filteredTodos)
  }

  return (
    <>
      <input onChange={handleInputValue}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            <button onClick={() => removeTodo(todo)}>X</button> {todo}
          </li>
        ))}
      </ul>
    </>
  );
}