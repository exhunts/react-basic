import React, { Component } from 'react'
import "./todo-head.scss"

export default class TodoHead extends Component {
  state = {
    tasksAmount: 3,
    tasksDoneAmount: 0
  }

  render() {
    return (
      <div className="todo__header">
        <div className="todo__app-name">Todo List</div>
        <div className="todo__report">
          <span className="todo__todo-task-num">{this.state.tasksAmount}</span> more to do, <span className="todo__todo-task-done">{this.state.tasksDoneAmount}</span> done
        </div>
      </div>
    )
  }
}