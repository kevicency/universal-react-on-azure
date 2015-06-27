import { Route } from 'react-router'
import { Home, About, NotFound } from './views'

/*eslint-disable react/react-in-jsx-scope */
export default (
  <Route>
    <Route name="home" path="/" component={Home} />
    <Route name="about" path="/about" component={About} />

    <Route name="not-found" path="*" component={NotFound} />
  </Route>
)
/*eslint-enable react/react-in-jsx-scope */
