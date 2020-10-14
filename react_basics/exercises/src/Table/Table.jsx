import React from 'react';
import './Table.css';

const initialState = {
  name: '',
  surname: '',
  age: '',
  mail: '',
}

export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      inputsValues: initialState,
      userData: [],
    }
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      inputsValues: {
        ...this.state.inputsValues,
        [event.target.id]: event.target.value,
      } 
    });
  } 

  addData = () => {
    const updatedState = {
      ...this.state,
      userData: [...this.state.userData, this.state.inputsValues],
    }
    this.setState(updatedState);
  }

  render() {
    const {inputsValues} = this.state;

    return (
      <>
        <div className="form">
          <input id="name" type="text" placeholder="Name" value={inputsValues.name} onChange={this.handleInputChange} />
          <input id="surname" type="text" placeholder="Surname" value={inputsValues.surname} onChange={this.handleInputChange} />
          <input id="age" type="number" placeholder="Age" value={inputsValues.age} onChange={this.handleInputChange} />
          <input id="mail" type="mail" placeholder="Mail" value={inputsValues.mail} onChange={this.handleInputChange} />
          <button onClick={this.addData}>Add</button>
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
            {this.state.userData.map((user, index) => {
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
}