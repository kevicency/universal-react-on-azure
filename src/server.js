import path from 'path'
import Express from 'express'
import React from 'react'
import Router from 'react-router'
import Location from 'react-router/lib/Location'
import { Provider } from 'redux/react'

import routes from './routes'

const webpackStatsFile = '../webpack-stats.json'
const debug = require('debug')('🌐')
const app = new Express()
const redux = require('./createRedux')()

if (app.get('env') === 'production') {
  app.use(require('serve-static')(path.join(__dirname, '..', 'static')))
}

let webpackStats

app.use((req, res) => {
  const location = new Location(req.path, req.query)

  if (app.get('env') !== 'production' || !webpackStats) {
    delete require.cache[require.resolve(webpackStatsFile)]

    webpackStats = require(webpackStatsFile)
  }

  Router.run(routes, location, (err, initialState) => {
    if (err) {
      res.status(500).send(err)
    } else {
      // Promise.all(initialState.components
      //   .filter(component => component.foo)
      //   .map(component => component.foo(redux.dispatch))
      // ).then(() => {
      const status = initialState.branch
        .find(x => (x.name === 'not-found')) ? 404 : 200
      const state = redux.getState()

      const html = React.renderToStaticMarkup(
        <html lang="en-us">
          <head>
            <meta charSet="utf-8"/>
            <title>Universal React on Azure</title>
          </head>
          <body>
            <div id="app" dangerouslySetInnerHTML={{__html: React.renderToString(
              <Provider redux={redux}>
                {() => <Router {...initialState}/>}
              </Provider>
            )}} />
          <script dangerouslySetInnerHTML={{__html: `window.__state__=${JSON.stringify(state)};`}}/>
          <script src={`${webpackStats.script[0]}`} />
          </body>
        </html>
      )
      res.status(status).send('<!doctype html>\n' + html)
      // }).catch(err => { // eslint-disable-line no-shadow
      //   res.status(500).send(err.toString())
      // })
    }
  })
})

const port = process.env.port || process.env.PORT || 3000
app.listen(port, (err) => {
  if (err) {
    debug(err)
  } else {
    debug(`Listening on port ${port}`)
  }
})
