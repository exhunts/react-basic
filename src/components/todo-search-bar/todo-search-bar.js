import React, { Component } from 'react'
import "./todo-search-bar.scss"

export default class TodoSearchBar extends Component {
  render() {
    let allState = "todo__display-all-tasks"
    let activeState = "todo__display-all-tasks"
    let doneState = "todo__display-all-tasks"

    switch (this.props.sortMode) {
      case 'all':
        allState += ' active'
        break;
      case 'active':
        activeState += ' active'
        break;
      case 'done':
        doneState += ' active'
        break;

      default:
        break;
    }

    return (
      <div className="todo__search-bar">
        <input
          className="todo__search-input"
          type="text"
          placeholder="type to search"
        />
        <div className="todo__buttons-group">
          <button
            className={allState}
            type="button"
            onClick={() => this.props.sortTodoListBy('all')}
          >All</button>

          <button
            className={activeState}
            type="button"
            onClick={() => this.props.sortTodoListBy('active')}
          >Active</button>

          <button
            className={doneState}
            type="button"
            onClick={() => this.props.sortTodoListBy('done')}
          >Done</button>
        </div>
      </div>
    )
  }
}