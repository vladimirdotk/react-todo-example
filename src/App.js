import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './InputGroup';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InputGroup from './InputGroup';
import TodoList from './TodoList';
import TodoData from './TodoData';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: TodoData.getTodos()};
    TodoData.addChangeHandler(() => {
      this.setState({todos: TodoData.getTodos()});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todo List</h1>
        </header>
        <br/><br/>
        <div className="container">
         <InputGroup
          addTodoHandler={TodoData.addTodo}
          clearTodosHandler={TodoData.clearTodos}
        />
         <TodoList
          todos={this.state.todos}
          deleteTodoHandler={TodoData.deleteTodo}
          markAsDoneHandler={TodoData.markAsDone}
        />
        </div>
      </div>
    );
  }
}

export default App;
