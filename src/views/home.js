import React from 'react'
import { connect } from 'redux/react'

import HuuidkuQuote from '../components/HuuidkuQuote'
import Card from '../components/Card'
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
      <div style={{margin: '0 auto'}}>
        <div style={{textAlign: 'center'}}>
          <h4>Welcome!</h4>
          <p>
            This is a [(mostly) useless] React + Friends example.<br />
            But here is a unique huuidku* for your troubles.
          </p>
        </div>
        <Card actions={[{ title: 'Refresh', handler: () => dispatch(getRandom()) }]}>
          {huuidku ? <HuuidkuQuote huuidku={huuidku} /> : null}
        </Card>
        <p style={{marginTop: '12px'}}>
          * <i>huuidku</i> &mdash; A haiku generated from an uuid
        </p>
      </div>
    )
  }
}
