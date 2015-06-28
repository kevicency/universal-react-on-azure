import React from 'react'
import Router from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'

import debug from 'debug'
import routes from './routes'

debug.enable()

React.render(
  <Router history={new BrowserHistory()} children={routes} />,
  document.getElementById('app')
)
