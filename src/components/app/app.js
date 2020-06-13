import React, { Component } from 'react';
import TodoHeader from '../todo-header'
import TodoSearchBar from '../todo-search-bar'
import TodoItems from '../todo-items/todo-items'
import TodoAddTaskBar from '../todo-add-task-bar';
import "normalize.css"
import "./app.scss"

export default class App extends Component {
  state = {
    activeTaskNum: 0,
    doneTaskNum: 0
  }

  todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]

  delTaskByID() {
    console.log('delTaskByID()')
  }

  render() {
    return (
      <div className="container">
        <div className="todo">
          <TodoHeader />
          <TodoSearchBar />
          <TodoItems
            todos={this.todoData}
            onDeleted={(id) => console.log('del', id)}
          />
          <TodoAddTaskBar />
        </div>
      </div>
    )
  }
}