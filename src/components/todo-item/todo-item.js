import React, { Component } from "react"
import "./todo-item.scss"

export default class TodoItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props
    const { done, important } = this.state
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }

    return (
      <>
        <li className="todo__item">
          <span
            className={done ? "done" : ""}
            style={style}
            onClick={this.onLabelClick}
          >{label}</span>
          <div className="todo__item-control">
            <img
              className="todo__delete-task"
              src={process.env.PUBLIC_URL + "images/trash.svg"}
              alt="trash"
              onClick={onDeleted}
            />
            <img
              className="todo__task-done"
              src={process.env.PUBLIC_URL + "images/danger.svg"}
              alt="exclamation"
              onClick={this.onMarkImportant} />
          </div>
        </li>
      </>
    )
  }
}