import React, { Component, PropTypes } from 'react'

export default class Detail extends Component {
  render () {
    return (
      <h1>hey there</h1>
    )
  }
}

Detail.propTypes = {
  tempDay: PropTypes.number.isRequired,
  tempEve: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired
}

// /* <ul>
//   <li>{props.tempDay}</li>
//   <li>{props.tempEve}</li>
//   <li>{props.description}</li>
//   <li>{props.humidity}</li>
// </ul> */
