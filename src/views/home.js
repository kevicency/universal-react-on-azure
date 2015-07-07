import React from 'react'
import { connect } from 'redux/react'

// import HuuidkuQuote from '../components/HuuidkuQuote'
import RandomHuuidku from '../components/RandomHuuidku'
import { getRandom } from '../actions/huuidkuActions'

@connect((state) => ({
  huuidku: state.huuidku
}))
export default class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(getRandom())
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
        <RandomHuuidku huuidku={huuidku} refresh={() => dispatch(getRandom())} />
      </div>
    )
  }
}
