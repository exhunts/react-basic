import React, { Component } from 'react';
import TodoHeader from '../todo-header'
import TodoSearchBar from '../todo-search-bar'
import TodoItems from '../todo-items/todo-items'
import TodoAddTaskBar from '../todo-add-task-bar';
import "normalize.css"
import "./app.scss"
import Test from '../test-test/test';

export default class App extends Component {
  state = {
    activeTaskNum: 0,
    doneTaskNum: 0
  }

  todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
    { label: 'Lunch', important: false, id: 4 }
  ]

  delTaskByID_1(id) {
    this.todoData = this.todoData.filter(item => item.id !== id)
  }

  delTaskByID_2(id) {
    const elemIdx = this.todoData.findIndex(item => item.id === 3)
    this.todoData = [
      ...this.todoData.slice(0, elemIdx),
      ...this.todoData.slice(elemIdx + 1)
    ]
  }

  render() {
    return (
      <div className="container">
        <div className="todo">
          <TodoHeader />
          <TodoSearchBar />
          <TodoItems
            todos={this.todoData}
            onDeleted={(id) => console.log('del', id)}
          />
          <TodoAddTaskBar />
          {/* <Test todoData={this.todoData} /> */}
        </div>
      </div>
    )
  }
}