import React from 'react'
import { Route } from 'react-router'
import { Application, Home, Huuidku, NotFound } from './views'

export default (
  <Route component={Application}>
    <Route name="home" path="/" component={Home} />
    <Route name="uuid" path="/huuidku/:uuid" component={Huuidku} />

    <Route name="not-found" path="*" component={NotFound} />
  </Route>
)
