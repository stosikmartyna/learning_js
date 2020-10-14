import React from 'react';
import { useState } from 'react';
import './Table.css';

const initialState = {
    name: '',
    surname: '',
    age: '',
    mail: '',
}

export const Table = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [userData, setUserData] = useState([]);

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value}); 
    } 

    const addData = () => {
        setUserData([...userData, inputsValues])
        setInputsValues(initialState);
    }

    return (
        <>
          <div className="form">
            <input id="name" type="text" placeholder="Name" value={inputsValues.name} onChange={handleInputChange} />
            <input id="surname" type="text" placeholder="Surname" value={inputsValues.surname} onChange={handleInputChange} />
            <input id="age" type="number" placeholder="Age" value={inputsValues.age} onChange={handleInputChange} />
            <input id="mail" type="mail" placeholder="Mail" value={inputsValues.mail} onChange={handleInputChange} />
            <button onClick={addData}>Add</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>  
                    <td>{user.name}</td>
                    <td>{user.surname}</td>  
                    <td>{user.age}</td>
                    <td>{user.mail}</td>
                  </tr>
                )
              })}
            </tbody>            
          </table>
        </>
    )
}