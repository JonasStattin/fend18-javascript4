import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name: '',
    elapsed: 0
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        elapsed: this.state.elapsed + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <>
        <input value={this.state.name} onChange={this.onNameChange} />
        { this.state.name.length >= 3 &&
          <h1>Welcome: {this.state.name}</h1>
        }
        <p>Elapsed: {this.state.elapsed}</p>
      </>
    );
  }
}
