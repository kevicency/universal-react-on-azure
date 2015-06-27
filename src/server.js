import path from 'path'

import Express from 'express'

import React from 'react'
import Router from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'

const webpackStatsFile = '../webpack-stats.json'
const log = require('debug')('🌐')
const app = new Express()

if (app.get('env') === 'production') {
  app.use(require('serve-static')(path.join(__dirname, '..', 'static')))
}

let webpackStats = require(webpackStatsFile)

app.use((req, res) => {
  const location = new Location(req.path, req.query)

  if (app.get('env') !== 'production') {
    delete require.cache[require.resolve(webpackStatsFile)]

    webpackStats = require(webpackStatsFile)
  }

  Router.run(routes, location, (err, initialState) => {
    if (err) {
      res.status(500).send(err)
    } else {
      const status = initialState.branch
        .find(x => (x.name === 'not-found')) ? 404 : 200

      const html = React.renderToStaticMarkup(
        <html lang="en-us">
          <head>
            <meta charSet="utf-8"/>
            <title>Universal React on Azure</title>
          </head>
          <body>
            <div id="app" dangerouslySetInnerHTML={{__html: React.renderToString(
              <Router {...initialState}/>
            )}} />
          <script src={`${webpackStats.script[0]}`} />
          </body>
        </html>
      )
      res.status(status).send('<!doctype html>\n' + html)
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
