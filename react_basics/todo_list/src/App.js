import React from 'react';

export class App extends React.Component {
  state = {
    todos: [],
    inputValue: '',
  }

  handleInputValue = (event) => {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit = () => {
    this.setState({todos: [...this.state.todos, this.state.inputValue]})
    this.setState({inputValue: ''})
  }

  removeTodo = (todoToRemove) => {
    const filteredTodos = this.state.todos.filter(todo => todo !== todoToRemove)
    this.setState({todos: filteredTodos})
  }

  render() {
    return (
      <>
        <input onChange={this.handleInputValue} value={this.state.inputValue} />
        <button onClick={this.handleSubmit}>Add</button>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              <button onClick={() => this.removeTodo(todo)}>X</button> {todo}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
