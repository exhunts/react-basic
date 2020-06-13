import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'
import './todo-task-list.scss'

export default class TodoTaskList extends Component {
  createItems() {
    return this.props.todoData.map(item => {
      const { label, important, id } = item
      return (
        <TodoListItem
          key={id}
          label={label}
          important={important}
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