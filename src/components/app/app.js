import React, { Component } from 'react'
import "normalize.css"
import "./app.scss"
import TodoHead from '../todo-head'
import TodoSearchBar from '../todo-search-bar'
import TodoTaskList from '../todo-task-list'
import TodoAddTaskBar from '../todo-add-task-bar'

export default class App extends Component {
  idCounter = 100

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
      { label: 'Lunch', important: false, id: 4 }
    ]
  }

  delItemByID = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex(item => item.id === id)
      const todoData = [
        ...state.todoData.slice(0, idx),
        ...state.todoData.slice(idx + 1)
      ]
      return { todoData }
    })
  }

  addItemByLabel = (label) => {
    this.setState((state) => {
      const newItem = this._createItemByLabel(label)
      return {
        todoData: [...state.todoData, newItem]
      }
    })
  }

  _createItemByLabel = (label) => {
    return {
      label: label,
      important: false,
      id: ++this.idCounter
    }
  }

  render() {
    return (
      <div className="container">
        <div className="todo">
          <TodoHead />
          <TodoSearchBar />
          <TodoTaskList
            todoData={this.state.todoData}
            delItemByID={this.delItemByID}
          />
          <TodoAddTaskBar
            addItemByLabel={this.addItemByLabel}
          />
        </div>
      </div>
    )
  }
}