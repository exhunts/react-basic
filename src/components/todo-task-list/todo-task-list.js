import React, { Component } from 'react'
import TodoListItem from '../todo-list-item'
import './todo-task-list.scss'

export default class TodoTaskList extends Component {
  render() {
    return (
      <ul className="todo__list">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    )
  }
}