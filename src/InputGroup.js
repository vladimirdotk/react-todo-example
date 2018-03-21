/*eslint no-restricted-globals: 0*/
import React, {Component} from 'react';

class InputGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
  }

  _addTodo = () => {
    if (this.state.inputValue && this.state.inputValue.trim()) {
      this.props.addTodoHandler(this.state.inputValue);
      this.setState({inputValue: ''});
    }
  }

  onInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this._addTodo();
    }
  }

  onClearPress = () => {
    if (confirm('Очистить todo list?')) {
      this.props.clearTodosHandler();
    }
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" value={this.state.inputValue} onChange={this.onInputChange} onKeyPress={this.onKeyPress} className="form-control" placeholder="Купить молоко">
        </input>
        <div className="input-group-append">
          <button onClick={this._addTodo} className="btn btn-outline-success" type="button">
            добавить
          </button>
        </div>
        <div className="input-group-append">
          <button onClick={this.onClearPress} className="btn btn-outline-danger" type="button">
            очистить
          </button>
        </div>
      </div>
    );
  }
}

export default InputGroup;