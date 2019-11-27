import React from 'react';

class InputBox extends React.Component {
  state = {
    inputValue: ''
  }

  onInputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <React.Fragment>
        <h1>Hello</h1>
        <input type="text" value={inputValue} onChange={this.onInputChange} />
      </React.Fragment>
    );
  }
}

export default InputBox;