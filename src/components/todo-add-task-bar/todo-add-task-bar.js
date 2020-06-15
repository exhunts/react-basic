import React, { Component } from 'react'
import './todo-add-task-bar.scss'

export default class TodoAddTaskBar extends Component {
  state = {
    inputString: ''
  }

  onInput = (e) => {
    this.setState({
      inputString: e.target.value
    })
  }

  onButtonClick = () => {
    const cb = this.props.addItemByLabel
    cb(this.state.inputString)
    this.setState({
      inputString: ''
    })
  }

  render() {
    return (
      <div className="todo__add-task-bar">
        <input
          className="todo__search-input"
          type="text"
          placeholder="What needs to be done?"
          onChange={this.onInput}
          value={this.state.inputString}
        />
        <button
          className="todo__add-new-task"
          type="button"
          onClick={this.onButtonClick}
        >Add</button>
      </div>
    )
  }
}