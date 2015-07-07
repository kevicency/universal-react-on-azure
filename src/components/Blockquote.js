import React from 'react'

export default class Blockquote extends React.Component {
  static propTypes = {
    quote: React.PropTypes.string.isRequired,
    author: React.PropTypes.node
  }

  render() {
    const { quote, author } = this.props
    const footer = author ? (
      <div style={{textAlign: 'right', margin: '0 40px 16px 40px'}}>
        &mdash; {author}
      </div>
    ) : null

    return (
      <div>
        <blockquote style={{whiteSpace: 'pre', textAlign: 'left'}}>
          {quote}
        </blockquote>
        {footer}
      </div>
    )
  }
}
