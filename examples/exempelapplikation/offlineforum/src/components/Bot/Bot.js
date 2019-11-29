import React, { Component } from 'react';
import TypingIndicator from './TypingIndicator';
import MessageForm from './MessageForm';
import Message from './Message';
import * as api from '../../api';

class Bot extends Component {
  state = {
    typing: false,
    messages: [],
  };

  onSubmit = message => {
    const newMessage = {
      message,
      bot: false
    };
    const newMessages = [...this.state.messages, newMessage];
    this.setState({ messages: newMessages, typing: false });
    this.sendReply();
  };

  sendReply = () => {
    this.setState({ typing: true });
    api.botReply()
      .then(reply => {
        this.setState({ messages: [...this.state.messages, reply], typing: false });
      })
  };

  renderMessages = messages => messages
    .map((message, index) => <Message key={index} {...message} />);

  render() {
    return (
      <div className="mx-auto w-1/2 h-auto mb-4 mt-8 pt-8">
        <div className="mx-auto h-64 mb-4 p-4 border flex flex-col justify-end rounded shadow border overflow-y-scroll">
          {this.renderMessages(this.state.messages)}
          <TypingIndicator typing={this.state.typing} />
        </div>
        <MessageForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Bot;
