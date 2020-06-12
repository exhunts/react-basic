import React, { Component } from "react"
import "./todo-header.scss"

export default class TodoHeader extends Component {
  activeTaskNum = 0
  doneTaskNum = 0

  render() {
    return (
      <div className="todo__header">
        <div className="todo__app-name">Todo List</div>
        <div className="todo__report">
          <span className="todo__todo-task-num">{this.activeTaskNum}</span> more to do, <span className="todo__todo-task-done">{this.doneTaskNum}</span> done
          </div>
      </div>
    )
  }
}