import React from 'react';
import "normalize.css"
import "./app.scss"
import TodoHeader from '../todo-header'
import TodoSearchBar from '../todo-search-bar'
import TodoItems from '../todo-items/todo-items'
import TodoAddTaskBar from '../todo-add-task-bar';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]

  return (
    <div className="container">
      <div className="todo">
        <TodoHeader />
        <TodoSearchBar />
        <TodoItems />
        <TodoAddTaskBar />
      </div>
    </div>
  )
}

export default App