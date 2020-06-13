import React, { Component } from 'react'
import './todo-list-item.scss'

export default class TodoListItem extends Component {
  render() {
    const { label, important, id } = this.props
    return (
      <li key={id} className="todo__item">
        {label}
        <div className="todo__item-control">
          <img className="todo__delete-task" src="images/trash.svg" alt="trash" />
          <img className="todo__task-done" src="images/danger.svg" alt="exclamation" />
        </div>
      </li>
    )
  }
}