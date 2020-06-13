import React, { Component } from 'react'
import "normalize.css"
import "./app.scss"

export default class App extends Component {
  todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
    { label: 'Lunch', important: false, id: 4 }
  ]
}