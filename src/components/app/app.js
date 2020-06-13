import React, { Component } from 'react'
import "normalize.css"
import "./app.scss"
import TodoHead from '../todo-head'
import TodoSearchBar from '../todo-search-bar'
import TodoTaskList from '../todo-task-list'
import TodoAddTaskBar from '../todo-add-task-bar'

export default class App extends Component {
  todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
    { label: 'Lunch', important: false, id: 4 }
  ]

  render() {
    return (
      <div className="container">
        <div className="todo">
          <TodoHead />
          <TodoSearchBar />
          <TodoTaskList />
          <TodoAddTaskBar />
        </div>
      </div>
    )
  }
}