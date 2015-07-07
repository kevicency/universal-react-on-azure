import React from 'react'
import { connect } from 'redux/react'

import HuuidkuQuote from '../components/HuuidkuQuote'
import { getRandom } from '../actions/huuidkuActions'

@connect((state) => ({
  huuidku: state.huuidkus.random
}))
export default class Home extends React.Component {
  static propTypes = {
    huuidku: React.PropTypes.object
  }
  static init({ dispatch }) {
    return dispatch(getRandom())
  }

  componentWillMount() {
    if (!this.props.huuidku) {
      this.constructor.init(this.props)
    }
  }

  render() {
    let { huuidku, dispatch } = this.props

    return (
      <div>
        <h1>Universal React on Azure</h1>
        <p>
          This is a [(mostly) useless] react example.
          <br /><br />
          But here is something for your troubles.
        </p>
        <h2>A huuidku written just for you!</h2>
        { huuidku ? <HuuidkuQuote huuidku={huuidku} /> : null }
        <button onClick={() => dispatch(getRandom())}>Get another</button>
      </div>
    )
  }
}
