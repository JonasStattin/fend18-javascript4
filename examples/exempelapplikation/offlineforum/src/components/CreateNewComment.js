import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class CreateNewComment extends Component {
  state = {
    comment: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const fetchedComments = api.fetchAllComments();
    const newComment = api.createCommentObject(
      this.state.comment,
      this.props.postId,
      this.props.author
    );
    api.storeCommentObject([...fetchedComments, newComment]);
    this.props.updateComments(this.props.postId);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className='container mx-auto flex flex-col p-6'
      >
        <label htmlFor='comment' className='mb-2'>
          Comment
        </label>
        <textarea
          id='comment'
          value={this.state.comment}
          onChange={this.onChange}
          name='comment'
          className='shadow rounded border mb-2 p-2'
        />
        <input
          type='submit'
          value='Comment'
          className='bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full'
        />
      </form>
    );
  }
}

CreateNewComment.propTypes = {
  postId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  updateComments: PropTypes.func.isRequired
}

export default CreateNewComment;
