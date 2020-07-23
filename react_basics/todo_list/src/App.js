import React, { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // wywołanie funkcji useState 
  // const [stan, funkcja ustawiająca wartość stanu] = useState(stan początkowy)
  // setInputValue('nowa/przypisana wartość')

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }

  // funkcja odczytująca wartość inputa poprzez onChange event, która wywołuje funkcję setInputValue (ustawia wartość z inputa jako wartość przechowywaną w stanie) 

  const handleSubmit = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  // funckja wywoływana po wciśnięciu buttona, która wywołuje funkcję setTodos, która spreaduje aktualny stan todos i dopisuje do niego wartość z inputa
  // funkcja setInputValue zmienia stan inputa na pusty string, czyszcząc wpisaną uprzednio zawartość

  const removeTodo = (todoToRemove) => {
    const filteredTodos = todos.filter(todo => todo !== todoToRemove)
    setTodos(filteredTodos)
  }

  // todoToRemove -
  // funkcja po przefiltrowaniu tablicy todos usuwa element, który nie spełnia określonego warunku
  // setTodos ustawia jako stan wynik filtrowania, czyli tablicę bez usuniętego elementu

  return (
    <>
      <input onChange={handleInputValue} value={inputValue} />
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