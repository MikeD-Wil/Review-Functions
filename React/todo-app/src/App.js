import React, { Component } from 'react'
import Todos from './Todos'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'take a shower'},
      {id: 2, content: 'brush your teeth'}
    ]
  }
  
  render() {
    return (
      <div>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

const Todo = ({todos}) => {
  const todoList = todos.length ? () : (
    todos.map(todo => {
      return (
        <div className="collection-item">
          <span>{ todo.content }</span>
        </div>
    })
  ) : (  
    <p className="center">You have no todo's left, congratulations</p>
  )
  return (
    <div className="todos collection">
    
    </div>
  );
}


