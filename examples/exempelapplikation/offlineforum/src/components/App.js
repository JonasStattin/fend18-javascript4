import React, { Component } from 'react';
import Posts from './Posts';
import PersonaSwitcher from './PersonaSwitcher';
import Button from './Button';
import Bot from './Bot/Bot';
import * as api from '../api';

class App extends Component {
  state = {
    currentPersona: 'Zac',
    currentPage: 'home'
  };

  componentDidMount() {
    this.fetchCurrentPersona();
  }

  fetchCurrentPersona = () => {
    const currentPersona = api.fetchCurrentPersona();
    this.setState({ currentPersona });
  };

  changePersona = ({ target }) => {
    this.setState({ currentPersona: target.value });
    api.storeCurrentPersona(target.value);
  };

  changePage = () => {
    if (this.state.currentPage === 'home') {
      this.setState({ currentPage: 'bot' });
    } else {
      this.setState({ currentPage: 'home' });
    }
  };

  render() {
    return (
      <div className="mt-8 mx-auto sm:w-full md:w-3/4 lg:w-2/3 ">
        <Button
          onClick={this.changePage}
          className="absolute pin-l pin-t mt-6 ml-2"
        >
          {this.state.currentPage === 'home'
            ? 'Talk to a real human'
            : 'Return to forum'}
        </Button>
        <PersonaSwitcher
          changePersona={this.changePersona}
          currentPersona={this.state.currentPersona}
        />
        {this.state.currentPage === 'home' ? (
          <Posts currentPersona={this.state.currentPersona} />
        ) : (
          <Bot />
        )}
      </div>
    );
  }
}

export default App;
