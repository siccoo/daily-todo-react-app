import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {id: 0, text: "Read the word of God daily"},
        {id: 1, text: "Quality time of prayer with God"},
        {id: 2, text: "Take your bath and freshen up"},
        {id: 3, text: "Go to work"}
      ],
        nextId: 4
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  };

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Input todoText="" addTodo={this.addTodo} />
          <ul> 
          {
            this.state.todos.map((todo) => {
              return <Item todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
