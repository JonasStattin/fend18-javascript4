import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Posts from './Posts';
import {
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
  addPostToLocalStorage,
  removePostFromLocalStorage
} from '../utils/localStorage';

class App extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    posts: PropTypes.array
  };

  state = {
    user: this.props.user,
    posts: this.props.posts
  };

  loginSuccessful = email => {
    this.setState({ user: email }, () => {
      saveUserToLocalStorage(email);
    });
  };

  logout = () => {
    removeUserFromLocalStorage();
    this.setState({ user: '' });
  };

  onPost = post => {
    const posts = addPostToLocalStorage(post);
    this.setState({ posts });
  }

  onRemovePost = post => {
    const posts = removePostFromLocalStorage(post);
    this.setState({ posts })
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <>
            <button
              onClick={this.logout}
              className="fixed pin-t p-l bg-purple-dark text-white text-center p-4 rounded-br user"
            >
              {this.state.user}
            </button>
            <Posts posts={this.state.posts} onPost={this.onPost} onRemovePost={this.onRemovePost} />
          </>
        )}
        <Login user={this.state.user} loginSuccessful={this.loginSuccessful} />
      </div>
    );
  }
}

export default App;
