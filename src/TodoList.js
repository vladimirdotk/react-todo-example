import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {

  _getRows() {
    return this.props.todos.map((todo, index) => {
      return (
        <tr key={index + todo.name} className={todo.done ? 'done' : ''}>
          <td><input onClick={() => {this.props.markAsDoneHandler(index)}} className="form-check-input" type="checkbox" value=""></input></td>
          <td>{todo.name}</td>
          <td><button onClick={() => {this.props.deleteTodoHandler(index)}} className="btn btn-danger">
            удалить
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <tbody>
          {this._getRows()}
        </tbody>
      </table>
    );
  }
}

export default TodoList;