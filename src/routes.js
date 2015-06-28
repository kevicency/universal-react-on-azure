import React from 'react'
import { Route } from 'react-router'
import { Home, About, NotFound } from './views'

export default (
  <Route>
    <Route name="home" path="/" component={Home} />
    <Route name="about" path="/about" component={About} />

    <Route name="not-found" path="*" component={NotFound} />
  </Route>
)
