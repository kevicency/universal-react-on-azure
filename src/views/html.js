import React from 'react'

export default class Html extends React.Component {
  render() {
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          <title>Universal React on Azure</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}
