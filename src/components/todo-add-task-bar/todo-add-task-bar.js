import React, { Component } from 'react'
import "./todo-add-task-bar.scss"

export default class TodoAddTaskBar extends Component {

  render() {
    return (
      <div className="todo__add-task-bar">
        <input className="todo__search-input" type="text" placeholder="What needs to be done?" />
        <button className="todo__add-new-task" type="button ">Add</button>
      </div>
    )
  }
}