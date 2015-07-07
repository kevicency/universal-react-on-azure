import React from 'react'

export default class Spinner {
  render() {
    return (
      <div style={this.props.style} className="mdl-spinner mdl-js-spinner is-active is-upgraded"><div className="mdl-spinner__layer mdl-spinner__layer-1"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle"></div></div></div><div className="mdl-spinner__layer mdl-spinner__layer-2"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle"></div></div></div><div className="mdl-spinner__layer mdl-spinner__layer-3"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle"></div></div></div><div className="mdl-spinner__layer mdl-spinner__layer-4"><div className="mdl-spinner__circle-clipper mdl-spinner__left"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__gap-patch"><div className="mdl-spinner__circle"></div></div><div className="mdl-spinner__circle-clipper mdl-spinner__right"><div className="mdl-spinner__circle"></div></div></div></div>
    )
  }
}

