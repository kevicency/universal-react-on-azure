import React from 'react'
import { Route } from 'react-router'
import { Application, Async, Home, Huuidku, NotFound } from './views'

export default (
  <Route component={Application}>
    <Route name="home" path="/" component={Home} />
    <Route name="uuid" path="/huuidku/:uuid" component={Huuidku} />
    <Route name="async" path="/async" component={Async} />

    <Route name="not-found" path="*" component={NotFound} />
  </Route>
)
