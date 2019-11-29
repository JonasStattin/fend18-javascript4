import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateNewComment from './CreateNewComment';
import SingleComment from './SingleComment';
import * as api from '../api';

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.setCommentsFromLocalStorage();
  }

  setCommentsFromLocalStorage = (postId = this.props.postId) => {
    const fetchedComments = api.fetchAllComments();
    const comments = api.filterComments(fetchedComments, postId);
    this.setState({ comments });
  };

  removeComment = commentId => {
    api.removeComment(commentId);
    this.setCommentsFromLocalStorage();
  };

  renderCommentList = (comments, currentPersona) =>
    comments.map(comment => (
      <SingleComment
        {...comment}
        currentPersona={currentPersona}
        key={comment.id}
        onClick={this.removeComment}
      />
    ));

  render() {
    return (
      <div className="py-2">
        <h2 className="text-indigo-darker border-b mb-4">Comments</h2>
        {this.renderCommentList(this.state.comments, this.props.currentPersona)}
        <CreateNewComment
          postId={this.props.postId}
          author={this.props.currentPersona}
          updateComments={this.setCommentsFromLocalStorage}
        />
      </div>
    );
  }
}

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  currentPersona: PropTypes.string.isRequired
};

export default Comments;
