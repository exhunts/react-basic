import React, { Component } from 'react'
import './todo-list-item.scss'

export default class TodoListItem extends Component {
  render() {
    const { label, delItemByID, important, done } = this.props
    let itemStyle = ''

    if (important) {
      itemStyle += ' important'
    }

    if (done) {
      itemStyle += ' done'
    }

    return (
      <li className="todo__item">
        <span
          className={itemStyle}
          onClick={this.props.toggleDoneByID}
        >
          {label}
        </span>
        <div className="todo__item-control">
          <img
            className="todo__delete-task"
            src="images/trash.svg"
            alt="trash"
            onClick={delItemByID}
          />
          <img
            className="todo__task-done"
            src="images/danger.svg"
            alt="exclamation"
            onClick={this.props.toggleImportantByID}
          />
        </div>
      </li>
    )
  }
}