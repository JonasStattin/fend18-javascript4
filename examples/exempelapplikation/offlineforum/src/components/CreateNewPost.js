import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class CreateNewPost extends Component {
  state = {
    title: '',
    content: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    const newPost = api.createPostObject(title, content, this.props.author);
    const fetchedPosts = api.fetchAllPosts();
    api.storePostObject([newPost, ...fetchedPosts]);
    this.props.updatePosts();
    this.setState({ title: '', content: ''});
  };

  render() {
    const {title, content } = this.state;
    return (
      <form onSubmit={this.onSubmit} className='container mx-auto flex flex-col p-6'>
        <label htmlFor='title' className='mb-2'>Title</label>
        <input type='text' value={title} onChange={this.onChange} name='title' id='title' className='shadow rounded border mb-2 p-2' />
        <label htmlFor='content' className='mb-2'>Content </label>
        <textarea id='content' value={content} onChange={this.onChange} name='content' className='shadow rounded border mb-2 p-2' />
        <input type='submit' value='Create' className='bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full' />
      </form>
    );
  }
}

CreateNewPost.propTypes = {
  author: PropTypes.string.isRequired,
  updatePosts: PropTypes.func.isRequired
}

export default CreateNewPost;
