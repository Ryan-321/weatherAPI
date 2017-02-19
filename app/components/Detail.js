import React, { PropTypes } from 'react'

const Detail = (props) => {
  const data = props.location.state.data
  return (
    <h1>{data.humidity}</h1>
  )
}

Detail.propTypes = {
  location: PropTypes.object.isRequired
}

// /* <ul>
//   <li>{props.tempDay}</li>
//   <li>{props.tempEve}</li>
//   <li>{props.description}</li>
//   <li>{props.humidity}</li>
// </ul> */

export default Detail
