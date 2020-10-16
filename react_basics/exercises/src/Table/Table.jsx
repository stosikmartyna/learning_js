import React from 'react';
import './Table.css';

const initialState = {
  name: '',
  surname: '',
  age: '',
  mail: '',
  isVIP: false,
}

export class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      inputsValues: initialState,
      usersData: [],
    }
  }

  getUsersData = () => {
    fetch('./users.json')
      .then(response => response.json())
      .then(response => this.setState({...this.state, usersData: response}))
      .catch(err => console.warn(err))
  }

  componentDidMount() {
    this.getUsersData();
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
      inputsValues: initialState,
      usersData: [...this.state.usersData, this.state.inputsValues],
    }
    this.setState(updatedState);
  }

  removeData = (elementToRemove) => {
    this.setState({
      ...this.state,
      usersData: this.state.usersData.filter(element => element !== elementToRemove)
    })
  }

  validateInputs = () => {
    return (
      this.state.inputsValues.name.trim() !== '' 
      && this.state.inputsValues.surname.trim() !== '' 
      && this.state.inputsValues.age.trim() !== '' 
      && this.state.inputsValues.mail.trim() !== ''
    )
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
        </div>
        <button className="form-button" onClick={this.addData} disabled={!this.validateInputs()}>Submit</button>
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
            {this.state.usersData.map((user, index) => {
              return (
                <tr key={index}>
                  <td key={index + 1}>{index + 1}</td>  
                  <td key={user.name}>{user.name}</td>
                  <td key={user.surname}>{user.surname}</td>  
                  <td key={user.age}>{user.age}</td>
                  <td key={user.mail}>{user.mail}</td>
                  <td>
                    <button className="form-button" onClick={() => this.removeData(user)} disabled={user.isVIP}>
                      X
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>            
        </table>
      </>
    )
  }
}