import React, { Component } from 'react'

import './App.css'

import Header from './components/Header'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <main>
        </main>
      </div>
    )
  }
}

export default App
