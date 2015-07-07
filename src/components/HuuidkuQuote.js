import React from 'react'
import { Link } from 'react-router'
import Blockquote from './Blockquote'

export default class HuuidkuQuote extends React.Component {
  static propTypes = {
    huuidku: React.PropTypes.object.isRequired
  }

  render() {
    const { haiku, uuid } = this.props.huuidku

    return (
     <Blockquote quote={haiku} author={
       <Link to={`/huuidku/${uuid}`}>{`{${uuid}}`}</Link>
     } />
    )
  }
}
