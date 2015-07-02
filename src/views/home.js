import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'redux/react'
import { Link } from 'react-router'

import LikeCounter from '../components/LikeCounter'
import * as likeActions from '../actions/likeActions'

@connect(state => ({
  likeCount: state.likes.count
}))
export default class Home extends React.Component {
  render() {
    const { likeCount, dispatch } = this.props

    return (
      <div>
        <h1>Home</h1>
        <div>
          <LikeCounter count={likeCount} {...bindActionCreators(likeActions, dispatch)} />
        </div>
        <Link to="/about">To About</Link>
      </div>
    )
  }
}
