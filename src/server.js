import path from 'path'
import Express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Router from 'react-router'
import Location from 'react-router/lib/Location'
import { Provider } from 'redux/react'

import routes from './routes'

const webpackStatsFile = '../webpack-stats.json'
const debug = require('debug')('🌐')
const app = new Express()

if (app.get('env') === 'production') {
  app.use(require('serve-static')(path.join(__dirname, '..', 'static')))
}

let webpackStats

app.use((req, res) => {
  const redux = require('./createRedux')()
  const location = new Location(req.path, req.query)

  if (app.get('env') !== 'production' || !webpackStats) {
    delete require.cache[require.resolve(webpackStatsFile)]

    webpackStats = require(webpackStatsFile)
  }

  Router.run(routes, location, (err, initialState) => {
    if (err) {
      res.status(500).send(err)
    } else {
      Promise.all(
        initialState.components
        .map(component => component.DecoratedComponent || component)
        .filter(component => component.init)
        .map(component => component.init({
          dispatch: redux.dispatch,
          ...initialState
        }))
      ).then(() => {
        const status = initialState.branch
          .find(x => (x.name === 'not-found')) ? 404 : 200
        const innerHtml = ReactDOM.renderToString(
          <Provider redux={redux}>
            {() => <Router {...initialState}/>}
          </Provider>
        )
        const state = redux.getState()

        const html = ReactDOM.renderToStaticMarkup(
          <html lang="en-us">
            <head>
              <meta charSet="utf-8"/>
              <title>Universal React on Azure</title>
              <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.blue-green.min.css" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
            <body style={{
              background: '#fafafa',
              color: '#757575'
            }}>
              <div id="app" dangerouslySetInnerHTML={{__html: innerHtml}} />
              <script dangerouslySetInnerHTML={{__html: `window.__state__=${JSON.stringify(state)};`}}/>
              <script src={`${webpackStats.script[0]}`} />
            </body>
          </html>
        )
        res.status(status).send('<!doctype html>\n' + html)
      }).catch(err => { // eslint-disable-line no-shadow
        res.status(500).send(err.toString())
      })
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
