import React, { Component } from 'react'
import "./todo-items.scss"
import TodoItem from '../todo-item/todo-item'

export default class TodoItems extends Component {


  render() {
    const { todos, onDeleted } = this.props
    return (
      <ul className="todo__items">
        <TodoItem
          label={todos[0].label}
          important={todos[0].important}
          onDeleted={() => onDeleted()}
        />
        <TodoItem label={todos[1].label} important={todos[1].important} />
        <TodoItem label={todos[2].label} important={todos[2].important} />
      </ul>
    )
  }
}