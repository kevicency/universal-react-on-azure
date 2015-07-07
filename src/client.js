import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import debug from 'debug'
import { Provider } from 'redux/react'

import routes from './routes'

debug.enable('*')

const redux = require('./createRedux')(window.__state__)
const history = new BrowserHistory()

ReactDOM.render(
  <Provider redux={redux}>
    {() => <Router history={history} children={routes} />}
  </Provider>,
  document.getElementById('app')
)
