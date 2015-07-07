import React from 'react'
import { connect } from 'redux/react'

import { HuuidkuQuote, Card, Spinner } from '../components'
import { getRandomAsync } from '../actions/huuidkuActions'

/*eslint-disable no-nested-ternary */

@connect((state) => ({
  huuidku: state.huuidkus.randomAsync
}))
export default class Async extends React.Component {
  static propTypes = {
    huuidku: React.PropTypes.object
  }
  static init({ dispatch }) {
    return dispatch(getRandomAsync())
  }

  componentWillMount() {
    if (!this.props.huuidku) {
      this.constructor.init(this.props)
    }
  }

  render() {
    const { huuidku, dispatch } = this.props
    const content = !huuidku || huuidku.isLoading ? (
      <div style={{
        margin: '60px auto'
      }}>
        <Spinner />
      </div>
    ) : huuidku.hasError ? (
      <div style={{padding: '0 24px', marginBottom: 'auto'}}>
        <h5>Error loading huuidku</h5>
        <p>
          Message: <span style={{color: 'red'}}>{huuidku.error}</span>
        </p>
      </div>
    ) : (
      <HuuidkuQuote huuidku={huuidku} />
    )

    return (
      <div style={{margin: '0 auto'}}>
        <div style={{textAlign: 'center'}}>
          <h4>
            Async loading example
          </h4>
          <p>
            Waits for the promise when rendering on server side.<br />
            Shows a loading indicator when rendering on client side.
          </p>
        </div>
        <Card style={{minWidth: 480}} actions={[
          { title: 'Refresh', handler: () => dispatch(getRandomAsync()) },
          { title: 'Reload', handler: () => window.location.reload() }
        ]}>
          {content}
        </Card>
      </div>
    )
  }
}
