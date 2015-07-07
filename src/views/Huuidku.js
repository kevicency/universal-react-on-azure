import React from 'react'
import { connect } from 'redux/react'

import HuuidkuQuote from '../components/HuuidkuQuote'
import Card from '../components/Card'
import { getByUuid } from '../actions/huuidkuActions'

@connect(({huuidkus}, {params}) => ({
  huuidku: huuidkus[params.uuid]
}))
export default class Huuidku extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }
  static init({ dispatch, params }) {
    return dispatch(getByUuid(params.uuid))
  }

  componentWillMount() {
    if (!this.props.huuidku) {
      this.constructor.init(this.props)
    }
  }

  render() {
    const { huuidku } = this.props

    return (
      <div style={{margin: '40px auto'}}>
        <Card>
          {huuidku ? <HuuidkuQuote huuidku={huuidku} /> : null}
        </Card>
      </div>
    )
  }
}
