import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SinglePost from './SinglePost';
import CreateNewPost from './CreateNewPost';
import * as api from '../api';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setPostFromLocalStorage();
  }

  setPostFromLocalStorage = () => {
    const posts = api.fetchAllPosts();
    this.setState({ posts });
  };

  removePost = (postId) => {
    api.removePost(postId);
    this.setPostFromLocalStorage();
  }

  renderPostList = posts =>
    posts.map(post => (
      <SinglePost
        {...post}
        key={post.id}
        currentPersona={this.props.currentPersona}
        onClick={this.removePost}
      />
    ));

  render() {
    return (
      <div className="flex flex-wrap mx-auto pt-8">
        <CreateNewPost
          updatePosts={this.setPostFromLocalStorage}
          author={this.props.currentPersona}
        />
        {this.renderPostList(this.state.posts)}
      </div>
    );
  }
}

Posts.propTypes = {
  currentPersona: PropTypes.string.isRequired
};

export default Posts;
