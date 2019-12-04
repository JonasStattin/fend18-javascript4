import React, { Component } from 'react';

export default class Calculator extends Component {
  state = {
    output: 0,
    storedValue: null,
    operator: null,
    previousKeyType: null,
  }

  keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  handleNumKey = (key) => {
    let newState = {};
    if (this.state.previousKeyType === 'num') {
      newState.output = parseInt(this.state.output + '' + key)
    } else {
      newState.storedValue = this.state.output
      newState.output = key
    }

    newState.previousKeyType = 'num'

    this.setState(newState);
  }

  handleOperatorKey = (operator) => {
    if (this.state.previousKeyType !== 'operator') {
      this.setState({
        ...this.calc(),
        operator,
        previousKeyType: 'operator'
      })
    }
  }

  handleCalcKey = () => {
    this.setState({
      ...this.calc(),
      operator: null,
      previousKeyType: 'equals'
    })
  }

  calc = () => {
    if (this.state.storedValue && this.state.operator) {
      let result;
      switch(this.state.operator) {
        case 'add':
          result = this.state.storedValue + this.state.output
          break;
        case 'sub':
          result = this.state.storedValue - this.state.output
          break;
        case 'mul':
          result = this.state.storedValue * this.state.output
          break;
        case 'div':
          result = this.state.storedValue / this.state.output
          break;
        default: 
          break;
      }
      return {
        output: result,
        storedValue: this.state.output
      }
    }
    return {}
  }

  render() {
    return (
      <>
      <div>{this.state.output}</div>
      {this.keypad.map(key => {
        return (
          <button key={key} onClick={() => this.handleNumKey(key)}>{key}</button>
        )
      })}
      <button onClick={() => this.handleOperatorKey('add')}>+</button>
      <button onClick={() => this.handleOperatorKey('sub')}>-</button>
      <button onClick={() => this.handleOperatorKey('mul')}>*</button>
      <button onClick={() => this.handleOperatorKey('div')}>/</button>
      <button onClick={this.handleCalcKey}>=</button>
    </>
    )
  }
}
