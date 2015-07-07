import React from 'react'
import { Link } from 'react-router'

class Header {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    const { title, children } = this.props

    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            {title}
          </span>
          <div className="mdl-layout-spacer" />
          <nav className="mdl-navigation">
            {children}
          </nav>
        </div>
      </header>
    )
  }
}

export default class Footer {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <div className="mdl-logo">
            Foo Bar Baz
          </div>
        </div>
      </footer>
    )
  }
}

export default class Application extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title="Universal React on Azure">
          <Link to="/" className="mdl-navigation__link">
            Home
          </Link>
          <Link to="/async" className="mdl-navigation__link">
            Async
          </Link>
        </Header>
        <main className="mdl-layout__content" style={{
          paddingBottom: 40
        }}>
          <div className="mdl-grid mdl-grid--no-spacing">
            { this.props.children }
          </div>
        </main>
      </div>
    )
  }
}

