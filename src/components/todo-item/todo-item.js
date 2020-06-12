import React, { Component } from "react"
import "./todo-item.scss"

export default class TodoItem extends Component {

  render() {
    return (
      <>
        <li className="todo__item">
          Drink Coffee
            <div className="todo__item-control">
            <img className="todo__delete-task" src={process.env.PUBLIC_URL + "images/trash.svg"} alt="trash" />
            <img className="todo__task-done" src={process.env.PUBLIC_URL + "images/danger.svg"} alt="exclamation" />
          </div>
        </li>
      </>
    )
  }
}