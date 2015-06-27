import path from 'path'

import Express from 'express'

import React from 'react'
import Router from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'

const log = require('debug')('server')
const app = new Express()

app.use((req, res) => {
  const location = new Location(req.path, req.query)

  Router.run(routes, location, (err, initialState) => {
    if (err) {
      res.status(500).send(err)
    } else {
      var status = initialState.branch.find(x => (x.name === 'not-found'))
          ? 404 : 200
      res.status(status).send('<!doctype html>\n' + React.renderToStaticMarkup(
        <Router {...initialState} />
      ))
    }
  })
})

const port = process.env.port || 3000
app.listen(port, (err) => {
  if (err) {
    log(err)
  } else {
    log(`Listening on port ${port}`)
  }
})
