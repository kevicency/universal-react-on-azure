import React from 'react'
import Router from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import debug from 'debug'
import { Provider } from 'redux/react'

import routes from './routes'

debug.enable()

const redux = require('./createRedux')()
const history = new BrowserHistory()

React.render(
  <Provider redux={redux}>
    {() => <Router history={history} children={routes} />}
  </Provider>,
  document.getElementById('app')
)
