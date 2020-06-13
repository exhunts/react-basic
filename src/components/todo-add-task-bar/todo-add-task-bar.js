import React, { Component } from 'react'
import './todo-add-task-bar.scss'

export default class TodoAddTaskBar extends Component {
  render() {
    return (
      <div class="todo__add-task-bar">
        <input class="todo__search-input" type="text" placeholder="What needs to be done?" />
        <button class="todo__add-new-task" type="button ">Add</button>
      </div>
    )
  }
}