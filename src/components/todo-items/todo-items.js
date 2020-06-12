import React, { Component } from 'react'
import "./todo-items.scss"
import TodoItem from '../todo-item/todo-item'

export default class TodoItems extends Component {
  render() {
    return (
      <ul className="todo__items">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    )
  }
}