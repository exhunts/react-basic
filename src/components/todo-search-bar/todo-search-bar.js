import React, { Component } from 'react'
import "./todo-search-bar.scss"

export default class TodoSearchBar extends Component {
  render() {
    return (
      <div className="todo__search-bar">
        <input
          className="todo__search-input"
          type="text"
          placeholder="type to search"
        />
        <div className="todo__buttons-group">
          <button
            className="todo__display-all-tasks active"
            type="button"
          >All</button>

          <button
            className="todo__display-active-tasks"
            type="button"
          >Active</button>

          <button
            className="todo__display-done-tasks"
            type="button"
          >Done</button>
        </div>
      </div>
    )
  }
}