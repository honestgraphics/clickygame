import React from 'react'
import classNames from 'classnames'

import '../styles/Header.css'

const checkCorrectState = (correct) => {
  if (correct == false) {
    return 'incorrect'
  }
  if (correct == true) {
    return 'correct'
  }
  return ''
}

const Header = ({ correct, score, title, topScore }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bd-navbar fixed-top flex-items">
    <a className="navbar-brand flex-items" href="/">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        {/* <li className="brand">
          <a className="navbar-brand flex-items" href="/">Clicky Game</a>
        </li> */}
        <li className={classNames(checkCorrectState(correct))}>
          {title}
        </li>
        <li className="nav-item flex-item3">
          Score: {score} | Top Score: {topScore}
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;