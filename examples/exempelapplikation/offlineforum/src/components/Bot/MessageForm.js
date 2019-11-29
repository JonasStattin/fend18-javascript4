import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {

  state = {
    userMessage: ''
  }

  componentDidMount(){
    this.input.focus();
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.userMessage);
    this.setState({userMessage: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="mx-auto">
        <input
          type="text"
          name="userMessage"
          onChange={this.onChange}
          value={this.state.userMessage}
          ref={input => {this.input = input}}
          className="shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-grey-darker"
        />
        <input
          type="submit"
          className="bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full ml-auto"
        />
      </form>
    );
  }
}

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MessageForm;
