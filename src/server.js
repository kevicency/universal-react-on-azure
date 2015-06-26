import Express from 'express'
import React from 'react'

const log = require('debug')('server')
const app = new Express()

app.use((req, res) => {
  res.send(React.renderToString(
    <html lang="en-us">
      <head>
        <meta charSet="utf-8"/>
        <title>Universal React on Azure</title>
      </head>
      <body>
        Hello World from React
      </body>
    </html>
  ))
})

const port = process.env.port || 3000
app.listen(port, (err) => {
  if (err) {
    log(err)
  } else {
    log(`Listening on port ${port}`)
  }
})
