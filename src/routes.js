import React from 'react'
import { Route } from 'react-router'
import { Home, About, NotFound, Application } from './views'

export default (
  <Route component={Application}>
    <Route name="home" path="/" component={Home} />
    <Route name="about" path="/about" component={About} />

    <Route name="not-found" path="*" component={NotFound} />
  </Route>
)
