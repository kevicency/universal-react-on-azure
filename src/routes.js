import React from 'react'
import { Route, Link } from 'react-router'

import Html from './views/html'
import NotFound from './views/404'

class Home {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/about">To About</Link>
      </div>
    )
  }
}

class About {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

/*eslint-disable react/react-in-jsx-scope */
export default (
  <Route component={Html}>
    <Route name="home" path="/" component={Home} />
    <Route name="about" path="/about" component={About} />
    <Route name="not-found" path="*" component={NotFound} />
  </Route>
);
/*eslint-enable react/react-in-jsx-scope */
