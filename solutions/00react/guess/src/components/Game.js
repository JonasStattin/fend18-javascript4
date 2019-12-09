import React, { Component } from 'react';

export default class Game extends Component {
  state = {
    guess: 0,
    answer: 0,
    outcome: null
  }

  componentDidMount() {
    this.setState({
      answer: Math.round(Math.random() * 1000)
    });
  }

  getOutcome = (guess, answer) => {
    if (guess === answer) {
      return 'win'
    } else if (guess < answer) {
      return 'larger'
    } else if (guess > answer) {
      return 'smaller'
    }
  }

  getIndication = (guess, answer) => {
    const difference = Math.abs(guess - answer) / answer;
    if (difference <= 0.1) {
      return 'boiling'
    } else if (difference <= 0.2) {
      return 'hot'
    } else if (difference <= 0.4) {
      return 'medium'
    }
    return 'freezing'
  }

  resetGame = () => {
    this.setState({
      answer: Math.round(Math.random() * 1000),
      guess: 0,
      outcome: null
    });
  }

  handleNumberChange = (e) => {
    this.setState({ 
      guess: e.target.value
    });
  }

  guessNumber = () => {
    const guess = parseInt(this.state.guess);
    const answer = parseInt(this.state.answer);
    this.setState({
      outcome: this.getOutcome(guess, answer),
      indication: this.getIndication(guess, answer)
    });
  }

  render() {
    console.log(this.state.outcome)
    return (
      <>
        <input type="number" onChange={this.handleNumberChange} value={this.state.guess} />
        <button onClick={this.guessNumber}>Gissa!</button>
        { (this.state.outcome && this.state.outcome !== 'win') &&
          <p>{this.state.outcome} : {this.state.indication}</p>
        }
        { (this.state.outcome && this.state.outcome === 'win') &&
          <>
            <p>You win! Answer is: {this.state.answer}</p>
            <button onClick={this.resetGame}>Reset!</button>
          </>
        }
      </>
    );
  }
}
