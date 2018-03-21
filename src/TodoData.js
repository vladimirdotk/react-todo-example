const DATA_KEY = 'TODOS';

class TodoData {

  constructor() {
    this.todos = [];
    this.changeHandlers = [];
    this._loadTodos();
  }

  addChangeHandler(handler) {
    this.changeHandlers.push(handler);
  }

  _loadTodos = () => {
    const rawTodos = localStorage.getItem(DATA_KEY) || '[]';
    this.todos = JSON.parse(rawTodos);
  }

  _syncTodos = () => {
    localStorage.setItem(DATA_KEY, JSON.stringify(this.todos));
    this.changeHandlers.forEach(handler => {
      handler();
    });
  }

  getTodos = () => {
    return this.todos;
  }

  addTodo = (todo) => {
    this.todos.push({name: todo, done: false});
    this._syncTodos();
  }

  deleteTodo = (index) => {
    this.todos.splice(index, 1);
    this._syncTodos();
  }

  clearTodos = () => {
    this.todos = [];
    this._syncTodos();
  }

  markAsDone = (index) => {
    this.todos[index].done = !this.todos[index].done;
    this._syncTodos();
  }
}

export default new TodoData();