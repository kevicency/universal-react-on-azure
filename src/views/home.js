import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home alone</h1>
        <Link to="/about">To About</Link>
      </div>
    )
  }
}
