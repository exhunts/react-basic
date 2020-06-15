import React, { Component } from 'react'
import './todo-list-item.scss'

export default class TodoListItem extends Component {
  state = {
    isTaskDone: false,
    isTaskImportant: false
  }

  toggleDone = () => {
    this.setState((state) => ({
      isTaskDone: state.isTaskDone === true ? false : true
    }))
  }

  toggleImportant = () => {
    this.setState((state) => ({
      isTaskImportant: state.isTaskImportant === true ? false : true
    }))
  }

  render() {
    const { label, delItemByID } = this.props
    let itemStyle = ''

    if (this.state.isTaskImportant) {
      itemStyle += ' important'
    }

    if (this.state.isTaskDone) {
      itemStyle += ' done'
    }

    return (
      <li className="todo__item">
        <span
          className={itemStyle}
          onClick={this.toggleDone}
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
            onClick={this.toggleImportant}
          />
        </div>
      </li>
    )
  }
}