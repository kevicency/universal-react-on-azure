import React from 'react'

export default class LikeCounter extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    addLike: React.PropTypes.func.isRequired
  }

  render() {
    const { count, addLike } = this.props

    return <div>
      Likes: { count }
      <button onClick={addLike}>+1</button>
    </div>
  }
}
