import React from 'react'

import HuuidkuQuote from '../components/HuuidkuQuote'

export default class RandomHuuidku extends React.Component {
  static propTypes = {
    huuidku: React.PropTypes.object.isRequired,
    refresh: React.PropTypes.func.isRequired
  }

  render() {
    const { refresh, huuidku } = this.props

    return (
      <div>
        { huuidku ? <HuuidkuQuote huuidku={huuidku} /> : null }
        <button onClick={refresh}>Get another</button>
      </div>
    )
  }
}

