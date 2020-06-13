import React, { Component } from 'react'
import './todo-list-item.scss'

export default class TodoListItem extends Component {
  render() {
    return (
      <li class="todo__item">
        Drink Coffee
        <div class="todo__item-control">
          <img class="todo__delete-task" src="images/trash.svg" alt="trash" />
          <img class="todo__task-done" src="images/danger.svg" alt="exclamation" />
        </div>
      </li>
    )
  }
}