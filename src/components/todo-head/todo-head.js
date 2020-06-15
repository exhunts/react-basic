import React, { Component } from 'react'
import "./todo-head.scss"

export default class TodoHead extends Component {

  render() {
    return (
      <div className="todo__header">
        <div className="todo__app-name">Todo List</div>
        <div className="todo__report">
          <span className="todo__todo-task-num">{this.props.tasksAmount}</span> more to do, <span className="todo__todo-task-done">{this.props.tasksDoneAmount}</span> done
        </div>
      </div>
    )
  }
}