import React, { Component } from 'react'

import './App.css'
import images from './images.json'
import Card from './components/Card'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'


function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex

  while(currentIndex) {
    // Select a random element
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

class App extends Component {
  state = {
    clickedCards: [],
    correct: null,
    images,
    score: 0,
    title: 'Click an image to begin!',
    topScore: 0
  }

  handleClick = (event) => {
    const { target: { id } } = event.nativeEvent
    const { clickedCards, score, topScore } = this.state

    if (clickedCards.indexOf(id) == -1) {
      this.setState({
        clickedCards: [...this.state.clickedCards, id],
        correct: true,
        score: this.state.score + 1,
        title: 'You guessed correctly!',
      }, () => {
        setTimeout(() => this.setState({ correct: null, images: shuffle(images) }), 1000)
      })
    } else {
      this.setState({
        clickedCards: [],
        correct: false,
        topScore: score > topScore ? score : topScore,
        score: 0,
        title: 'You guessed incorrectly!',
      }, () => {
        setTimeout(() => this.setState({ correct: null, images: shuffle(images) }), 1000)
      })
    }
  }

  render() {
    const { correct, score, title, topScore } = this.state
    const props = { correct, score, title, topScore }
    return (
      <div className="App">
        <Header {...props} />
        <Jumbotron />
        <main className="container">
          <div className="row">
              <div className="card-deck">
                {
                  images.map((image) => (
                    <Card
                      key={image.id}
                      {...image}
                      id={image.id}
                      handleClick={this.handleClick}
                    />))
                }
              </div>
            </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App