import React, { Component } from 'react';

export default class Test extends Component {

  state = {
    mark: false
  }



  changeFontSize = () => {
    this.setState((state) => {
      return {
        mark: !this.state.mark
      }
    })
    console.log('1')

  }

  generateHTMLElements = (todoData) => {
    return todoData.map(item => {
      const { id, ...itemRest } = item
      return (
        <li key={id} style={this.style} onClick={this.changeFontSize}>
          {itemRest.label}-{itemRest.important + ""}
        </li>
      )
    })
  }

  render() {
    const style = {
      fontSize: this.state.mark ? '40px' : '10px'
    }

    return (
      <ul>
        {this.generateHTMLElements(this.props.todoData)}
      </ul>
    )
  }
}