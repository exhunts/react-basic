import React, { Component } from 'react'
import "normalize.css"
import "./app.scss"
import TodoHead from '../todo-head'
import TodoSearchBar from '../todo-search-bar'
import TodoTaskList from '../todo-task-list'
import TodoAddTaskBar from '../todo-add-task-bar'

export default class App extends Component {
  idCounter = 100

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, done: false, id: 1 },
      { label: 'Make Awesome App', important: false, done: false, id: 2 },
      { label: 'Have a lunch', important: false, done: false, id: 3 },
      { label: 'Lunch', important: false, done: false, id: 4 }
    ],
    tasksAmount: 4,
    tasksDoneAmount: 0,
    sortMode: 'all'
  }

  // sortedTodoList = this.state.todoData


  sortTodoListBy = (sortModeName) => {
    this.setState({
      sortMode: sortModeName
    })
  }

  filterItems = (todoData, sortMode) => {
    switch (sortMode) {
      case 'all':
        return todoData

      case 'active':
        return todoData.filter(item => !item.done)

      case 'done':
        return todoData.filter(item => item.done)

      default:
        return todoData
    }
  }


  updateDoneAmount = () => {
    this.setState((state) => {
      return {
        tasksDoneAmount: (state.todoData.filter(item => item.done === true)).length
      }
    })
  }

  delItemByID = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex(item => item.id === id)
      const newTodoData = [
        ...state.todoData.slice(0, idx),
        ...state.todoData.slice(idx + 1)
      ]
      return {
        todoData: newTodoData,
        tasksAmount: newTodoData.length
      }
    })
    this.updateDoneAmount()

  }

  addItemByLabel = (label) => {
    this.setState((state) => {
      const newItem = this._createItemByLabel(label)
      const newTodoData = [...state.todoData, newItem]
      return {
        todoData: newTodoData,
        tasksAmount: newTodoData.length
      }
    })
  }

  toggleDoneByID = (id) => {
    this.setState((state) => {
      return {
        todoData: this._toggleProperty(state.todoData, id, 'done')
      }
    })
    this.updateDoneAmount()
  }

  toggleImportantByID = (id) => {
    this.setState((state) => {
      return {
        todoData: this._toggleProperty(state.todoData, id, 'important')
      }
    })
  }

  _toggleProperty(todoDataList, id, property) {
    const idx = todoDataList.findIndex(item => item.id === id)
    const itemToToggle = todoDataList[idx]
    const toggeledVal = !itemToToggle[property]
    const toggeledItem = { ...itemToToggle, [property]: toggeledVal }
    return [
      ...todoDataList.slice(0, idx),
      toggeledItem,
      ...todoDataList.slice(idx + 1),
    ]
  }

  _createItemByLabel = (label) => {
    return {
      label: label,
      important: false,
      id: ++this.idCounter
    }
  }

  render() {
    const visibleItems = this.filterItems(this.state.todoData, this.state.sortMode)

    return (
      <div className="container" >
        <div className="todo">
          <TodoHead
            tasksAmount={this.state.tasksAmount}
            tasksDoneAmount={this.state.tasksDoneAmount}
          />
          <TodoSearchBar
            sortMode={this.state.sortMode}
            sortTodoListBy={this.sortTodoListBy}
          />
          <TodoTaskList
            // todoData={this.state.todoData}
            todoData={visibleItems}

            delItemByID={this.delItemByID}
            toggleDoneByID={this.toggleDoneByID}
            toggleImportantByID={this.toggleImportantByID}
          />
          <TodoAddTaskBar
            addItemByLabel={this.addItemByLabel}
          />
        </div>
      </div>
    )
  }
}