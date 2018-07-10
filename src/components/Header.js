import React from 'react'

import '../styles/Header.css'

const Header = ({ score, topScore }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bd-navbar">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">Click an image to begin!</li>
      <li className="nav-item active">Score: {score} | Top Score: {topScore}</li>
    </ul>
  </div>
</nav>
)

export default Header