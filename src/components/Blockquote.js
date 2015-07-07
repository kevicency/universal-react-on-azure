import React from 'react'

export default class Blockquote extends React.Component {
  static propTypes = {
    quote: React.PropTypes.string.isRequired,
    author: React.PropTypes.node
  }

  render() {
    const { quote, author } = this.props
    const footer = author ? (
      <footer>
        &mdash;
        {author}
      </footer>
    ) : null

    return (
      <blockquote>
        {quote}
        {footer}
      </blockquote>
    )
  }
}
