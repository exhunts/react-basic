import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'
import './todo-task-list.scss'

export default class TodoTaskList extends Component {
  createItems() {
    return this.props.todoData.map(item => {
      const { label, important, id, done } = item
      return (
        <TodoListItem
          key={id}
          id={id}
          label={label}
          important={important}
          done={done}
          delItemByID={() => this.props.delItemByID(id)}
          toggleDoneByID={() => this.props.toggleDoneByID(id)}
          toggleImportantByID={() => this.props.toggleImportantByID(id)}
        />
      )
    })
  }

  render() {
    return (
      <ul className="todo__list">
        {this.createItems()}
      </ul>
    )
  }
}