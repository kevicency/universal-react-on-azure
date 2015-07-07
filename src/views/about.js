import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>{this.props.params}</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}
