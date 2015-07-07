import React from 'react'

export default class Card {
  static propTypes = {
    style: React.PropTypes.object
  }

  render() {
    const style = {
      width: 'auto',
      ...this.props.style
    }
    const { actions } = this.props
    const actionsEl = actions ? <div className="mdl-card__actions mdl-card--border">
      {
        actions.map((action, i) => (
          <a onClick={action.handler}
             className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" key={i}>
            {action.title}
          </a>
        ))
      }
    </div> : null

    return (
      <div className="mdl-card mdl-shadow--2dp" style={style}>
        {this.props.children}
        {actionsEl}
      </div>
    )
  }
}

