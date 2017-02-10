import React, { Component } from 'react'

export default class Loading extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Loading',
      speed: 300
    }
  }
  render () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
