import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object,
    onRemovePost: PropTypes.func
  };

  render() {
    return (
      <li className="flex mb-2 px-4">
        <p className="w-full">{this.props.post.post}</p>
        <div className="flex-1">
          <button 
            className="flex-1 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
            onClick={() => this.props.onRemovePost(this.props.post)}>
              X
          </button>
        </div>
      </li>
    );
  }
}

export default Post;
